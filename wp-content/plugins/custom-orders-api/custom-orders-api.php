
<?php
/**
 * Plugin Name: Custom Orders API
 * Description: Adds a custom REST API endpoint for handling orders
 * Version: 1.0
 * Author: Your Name
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

class Custom_Orders_API {
    
    public function __construct() {
        add_action('rest_api_init', array($this, 'register_routes'));
        add_action('admin_menu', array($this, 'add_orders_menu'));
        register_activation_hook(__FILE__, array($this, 'create_orders_table'));
    }
    
    /**
     * Create the orders database table
     */
    public function create_orders_table() {
        global $wpdb;
        
        $table_name = $wpdb->prefix . 'custom_orders';
        $charset_collate = $wpdb->get_charset_collate();
        
        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            order_reference varchar(50) NOT NULL,
            order_data longtext NOT NULL,
            order_date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
            status varchar(20) DEFAULT 'New' NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";
        
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
    
    /**
     * Register REST API routes
     */
    public function register_routes() {
        register_rest_route('custom/v1', '/orders', array(
            array(
                'methods' => 'POST',
                'callback' => array($this, 'create_order'),
                'permission_callback' => '__return_true' // Public endpoint for creating orders
            ),
            array(
                'methods' => 'GET',
                'callback' => array($this, 'get_orders'),
                'permission_callback' => array($this, 'check_admin_permission')
            )
        ));
    }
    
    /**
     * Check if user has admin permission
     */
    public function check_admin_permission() {
        return current_user_can('administrator');
    }
    
    /**
     * Add orders menu in WordPress admin
     */
    public function add_orders_menu() {
        add_menu_page(
            'Orders Dashboard',
            'Orders',
            'administrator',
            'orders-dashboard',
            array($this, 'render_orders_page'),
            'dashicons-cart',
            30
        );
    }
    
    /**
     * Render the orders admin page
     */
    public function render_orders_page() {
        // Check if orders page template exists, otherwise use default
        $template = locate_template('orders-page-template.php');
        if ($template) {
            include($template);
        } else {
            ?>
            <div class="wrap">
                <h1>Orders Dashboard</h1>
                <p>To customize this page, create an "orders-page-template.php" file in your theme.</p>
                
                <table class="wp-list-table widefat fixed striped">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        global $wpdb;
                        $table_name = $wpdb->prefix . 'custom_orders';
                        $orders = $wpdb->get_results("SELECT * FROM $table_name ORDER BY order_date DESC");
                        
                        if ($orders) {
                            foreach ($orders as $order) {
                                $order_data = json_decode($order->order_data);
                                ?>
                                <tr>
                                    <td><?php echo esc_html($order->order_reference); ?></td>
                                    <td><?php echo esc_html($order_data->customer->fullName); ?></td>
                                    <td><?php echo esc_html($order_data->product->name . ' - ' . $order_data->product->color); ?></td>
                                    <td><?php echo esc_html(date('Y-m-d H:i', strtotime($order->order_date))); ?></td>
                                    <td><?php echo esc_html($order->status); ?></td>
                                </tr>
                                <?php
                            }
                        } else {
                            echo '<tr><td colspan="5">No orders found.</td></tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
            <?php
        }
    }
    
    /**
     * Create a new order
     */
    public function create_order($request) {
        $params = $request->get_json_params();
        
        // Validate required fields
        if (empty($params['customer']) || empty($params['product'])) {
            return new WP_Error('missing_fields', 'Missing required fields', array('status' => 400));
        }
        
        // Generate order reference
        $order_reference = 'ORD-' . strtoupper(substr(md5(uniqid(rand(), true)), 0, 8));
        
        // Store order in database
        global $wpdb;
        $table_name = $wpdb->prefix . 'custom_orders';
        
        $inserted = $wpdb->insert(
            $table_name,
            array(
                'order_reference' => $order_reference,
                'order_data' => json_encode($params),
                'status' => 'New'
            )
        );
        
        if (!$inserted) {
            return new WP_Error('db_insert_error', 'Could not insert order', array('status' => 500));
        }
        
        // Send email notification to admin
        $admin_email = get_option('admin_email');
        $subject = 'New Order: ' . $order_reference;
        $message = "A new order has been placed.\n\n";
        $message .= "Order Reference: " . $order_reference . "\n";
        $message .= "Customer: " . $params['customer']['fullName'] . "\n";
        $message .= "Product: " . $params['product']['name'] . " - " . $params['product']['color'] . "\n";
        $message .= "Amount: " . $params['product']['price'] . " " . $params['product']['currency'] . "\n\n";
        $message .= "View all orders in your WordPress admin dashboard.";
        
        wp_mail($admin_email, $subject, $message);
        
        // Return success response
        return array(
            'success' => true,
            'orderReference' => $order_reference,
            'message' => 'Order created successfully'
        );
    }
    
    /**
     * Get all orders
     */
    public function get_orders() {
        global $wpdb;
        $table_name = $wpdb->prefix . 'custom_orders';
        
        $orders = $wpdb->get_results("SELECT * FROM $table_name ORDER BY order_date DESC");
        
        if (!$orders) {
            return array();
        }
        
        $formatted_orders = array();
        foreach ($orders as $order) {
            $order_data = json_decode($order->order_data);
            $order_data->id = $order->order_reference;
            $order_data->status = $order->status;
            $formatted_orders[] = $order_data;
        }
        
        return $formatted_orders;
    }
}

// Initialize the plugin
new Custom_Orders_API();

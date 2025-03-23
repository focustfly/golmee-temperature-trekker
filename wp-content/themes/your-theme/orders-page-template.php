
<?php
/*
Template Name: Orders Dashboard
*/

// Check if user is logged in and is an admin
if (!is_user_logged_in() || !current_user_can('administrator')) {
    wp_redirect(home_url());
    exit;
}

get_header();
?>

<div class="wrap">
    <h1>Orders Dashboard</h1>
    
    <div id="orders-table" class="orders-container">
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Address</th>
                    <th>Order Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody id="order-list">
                <!-- Orders will be loaded here via JavaScript -->
                <tr>
                    <td colspan="8">Loading orders...</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script>
    jQuery(document).ready(function($) {
        // Fetch orders from the REST API
        $.ajax({
            url: '<?php echo esc_url(rest_url('custom/v1/orders')); ?>',
            method: 'GET',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('X-WP-Nonce', '<?php echo wp_create_nonce('wp_rest'); ?>');
            },
            success: function(data) {
                if (data.length > 0) {
                    // Clear loading message
                    $('#order-list').empty();
                    
                    // Populate the table with orders
                    data.forEach(function(order) {
                        const orderDate = new Date(order.orderDate).toLocaleDateString();
                        const row = $('<tr></tr>');
                        
                        row.append(`<td>${order.id}</td>`);
                        row.append(`<td>${order.customer.fullName}</td>`);
                        row.append(`<td>${order.customer.email}</td>`);
                        row.append(`<td>${order.product.name}</td>`);
                        row.append(`<td>${order.product.color}</td>`);
                        row.append(`<td>${order.customer.shippingAddress.address}, ${order.customer.shippingAddress.city}, ${order.customer.shippingAddress.country}</td>`);
                        row.append(`<td>${orderDate}</td>`);
                        row.append(`<td>${order.status || 'New'}</td>`);
                        
                        $('#order-list').append(row);
                    });
                } else {
                    $('#order-list').html('<tr><td colspan="8">No orders found.</td></tr>');
                }
            },
            error: function() {
                $('#order-list').html('<tr><td colspan="8">Error loading orders. Please try again.</td></tr>');
            }
        });
    });
</script>

<?php get_footer(); ?>


import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            See GolMee in Action
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how the GolMee Temperature Trekker keeps your beverages at the perfect temperature all day long.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto relative rounded-xl overflow-hidden shadow-2xl">
          {!playing ? (
            <div className="relative">
              <img 
                src="/lovable-uploads/b3f5830c-0a5d-4919-80ce-11a49f7ed34c.png"
                alt="GolMee Thermos Video Thumbnail" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button 
                  onClick={handlePlayClick}
                  className="w-20 h-20 rounded-full bg-white/80 hover:bg-white text-golmee-blue hover:text-golmee-blue/80 flex items-center justify-center"
                >
                  <Play size={36} className="ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            <video
              width="100%"
              height="auto"
              controls
              autoPlay
              className="w-full h-auto"
            >
              <source 
                src="https://caiyuanbao.alicdn.com/2da476065ce29979/be78084b6acff8a9/20220902_27893c4e52ce03bd_375643574520_mp4_264_hd_taobao.mp4?auth_key=1742196438-0-0-462ab940c31bdb3bda366b0a9f6ff28c&biz=community-569f3a8d2f649236&t=213e02cd17421937386713312e18bc&t=213e02cd17421937386713312e18bc&b=community&p=cloudvideo_http_cbu_jihuohui" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const images = [
  "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1533467915241-eac02e856653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Preload images
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
    };
    
    preloadImages();
    setIsLoaded(true);
    
    // Image rotation logic
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with crossfade effect */}
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7)), url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-4xl text-center">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Capturing Moments <br /> Creating Memories
          </h1>
          
          <div className={`w-24 h-1 bg-white/70 mx-auto mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`} />
          
          <p 
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Professional photography services that preserve your most important moments with artistic vision and technical excellence
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-white text-black hover:bg-white/90 hover:text-black transition-colors border border-white/20"
            >
              <a href="/contact">Book a Session</a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="text-white border-white/70 bg-transparent hover:bg-white/10 hover:text-white"
            >
              <a href="/portfolio">View Portfolio</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Photography film strip decoration */}
      <div className="absolute bottom-0 left-0 w-full h-16 flex">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-full w-[5%] border-r border-white/30 relative">
            {i % 2 === 0 && <div className="absolute top-0 w-full h-2 bg-white/30" />}
            {i % 2 === 1 && <div className="absolute bottom-0 w-full h-2 bg-white/30" />}
          </div>
        ))}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20" onClick={handleScroll}>
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30">
          <ArrowDown className="text-white" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;


import React from "react";
import { Camera, Award, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">About Nova Photography</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Passionate about capturing the perfect moments that tell your unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/img/photographer.jpg"
              alt="Nova Photographer"
              className="w-full h-auto animate-image-rotate"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif mb-4">The Artist Behind the Lens</h3>
            <p className="text-muted-foreground mb-6">
              With over 10 years of experience capturing life's most precious moments, 
              I've developed a distinctive style that blends photojournalistic authenticity 
              with artistic composition. My approach focuses on creating natural, 
              emotion-filled images that tell the unique story of each client.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether I'm documenting a wedding day, creating portraits, or capturing special events,
              I pride myself on making my clients feel comfortable and ensuring an enjoyable experience
              from start to finish.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Camera className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Premium Equipment</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Award className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Award Winning</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Clock className="text-primary mb-2" size={24} />
                <h4 className="font-medium">Fast Delivery</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Heart className="text-primary mb-2" size={24} />
                <h4 className="font-medium">100% Satisfaction</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

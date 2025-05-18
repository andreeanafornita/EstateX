
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Camera, Award, Clock, Heart, ChevronRight } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Nova Photography";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCursor />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Learn about our photography studio and our passion for capturing life's precious moments.
            </p>
          </div>
        </div>
      </section>

      {/* Photographer Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="mb-4 text-muted-foreground">
                Nova Photography was founded in 2012 with a simple mission: to capture life's most precious moments with artistry and emotion. What began as a passion project has grown into a premier photography studio serving clients across the region.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our founder's journey in photography started at a young age, experimenting with film cameras and developing a unique eye for composition and light. After formal training and years working with renowned photographers, Nova Photography was born.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to be a trusted name in wedding, event, and portrait photography, with a portfolio spanning hundreds of happy clients and countless unforgettable moments frozen in time.
              </p>
            </div>
            <div className="relative">
              <img
                src="/img/about-main.jpg"
                alt="Photographer at work"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-serif text-lg">10+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Photography Philosophy</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We believe that photography is more than just taking pictures—it's about telling stories and preserving emotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="mb-6 text-primary">
                <Camera size={36} />
              </div>
              <h3 className="text-xl font-serif mb-4">Authentic Moments</h3>
              <p className="text-muted-foreground">
                We focus on capturing genuine emotions and interactions, creating images that feel real and timeless rather than staged.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="mb-6 text-primary">
                <Award size={36} />
              </div>
              <h3 className="text-xl font-serif mb-4">Artistic Vision</h3>
              <p className="text-muted-foreground">
                Each photograph is crafted with attention to composition, lighting, and storytelling, turning ordinary moments into extraordinary memories.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-md">
              <div className="mb-6 text-primary">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-serif mb-4">Client Connection</h3>
              <p className="text-muted-foreground">
                We believe in building relationships with our clients, understanding their vision and creating a comfortable environment for natural photographs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Our talented photographers and staff are dedicated to providing exceptional service and stunning imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img
                  src="/img/team1.jpg"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Alex Morgan</h3>
              <p className="text-primary font-medium mb-4">Lead Photographer</p>
              <p className="text-muted-foreground">
                Specializing in weddings and events, Alex has a talent for capturing emotional moments in a photojournalistic style.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img
                  src="/img/team2.jpg"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Sophia Chen</h3>
              <p className="text-primary font-medium mb-4">Portrait Specialist</p>
              <p className="text-muted-foreground">
                With a background in fine art, Sophia creates stunning portrait imagery that highlights each subject's unique personality.
              </p>
            </div>
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-6">
                <img
                  src="/img/team3.jpg"
                  alt="Team Member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Marcus Williams</h3>
              <p className="text-primary font-medium mb-4">Studio Manager</p>
              <p className="text-muted-foreground">
                Marcus ensures every client experience is seamless, from the first consultation through final image delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Equipment</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We use professional-grade equipment to ensure the highest quality imagery for all our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium">Professional Camera Bodies</h3>
                    <p className="text-muted-foreground">
                      Canon EOS R5, Sony A7 IV, and Nikon Z9 for exceptional image quality in any lighting situation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium">Premium Lenses</h3>
                    <p className="text-muted-foreground">
                      Selection of prime and zoom lenses for versatility and exceptional image quality.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium">Lighting Equipment</h3>
                    <p className="text-muted-foreground">
                      Professional studio and location lighting systems to achieve perfect illumination in any environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="mt-1 mr-2 text-primary" size={20} />
                  <div>
                    <h3 className="font-medium">Post-Production Tools</h3>
                    <p className="text-muted-foreground">
                      State-of-the-art software and hardware for professional editing and retouching.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/img/equipment1.jpg"
                alt="Photography Equipment"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img
                src="/img/equipment2.jpg"
                alt="Photography Equipment"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img
                src="/img/equipment3.jpg"
                alt="Photography Equipment"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img
                src="/img/equipment4.jpg"
                alt="Photography Equipment"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Let's create beautiful imagery together. Contact us to discuss your photography needs and schedule a session.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

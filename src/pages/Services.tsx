
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Users, User, CalendarDays, Camera, Sparkles, Image } from "lucide-react";

const services = [
  {
    icon: <Users size={36} />,
    title: "Wedding Photography",
    description: "Capturing the magic of your special day with a perfect blend of candid moments and artistic portraits.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Full-day coverage options",
      "Engagement photo session",
      "Online gallery for sharing",
      "Premium photo album",
      "Multiple photographer options"
    ]
  },
  {
    icon: <CalendarDays size={36} />,
    title: "Event Coverage",
    description: "Professional documentation of corporate events, parties, and celebrations with attention to detail.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Corporate conferences",
      "Award ceremonies",
      "Product launches",
      "Social gatherings",
      "Same-day editing options"
    ]
  },
  {
    icon: <User size={36} />,
    title: "Portrait Sessions",
    description: "Personalized portrait sessions that capture your unique personality in stunning natural settings.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Family portraits",
      "Professional headshots",
      "Senior portraits",
      "Maternity sessions",
      "Studio or location options"
    ]
  },
  {
    icon: <Camera size={36} />,
    title: "Commercial Photography",
    description: "High-quality product and brand photography to elevate your business's visual identity.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Product photography",
      "Food & beverage",
      "Real estate",
      "Architecture",
      "Corporate branding"
    ]
  },
  {
    icon: <Sparkles size={36} />,
    title: "Retouching Services",
    description: "Professional photo editing and retouching to enhance your images to perfection.",
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Portrait retouching",
      "Color correction",
      "Background removal",
      "Composite creation",
      "HDR processing"
    ]
  },
  {
    icon: <Image size={36} />,
    title: "Fine Art Prints",
    description: "Museum-quality prints of our signature landscape and artistic photography.",
    image: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    features: [
      "Gallery-grade printing",
      "Custom framing options",
      "Canvas prints",
      "Metal prints",
      "Limited edition series"
    ]
  },
];

const Services = () => {
  useEffect(() => {
    document.title = "Services - Nova Photography";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCursor />
      
      <section className="py-20 pt-32 lg:pt-40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Professional photography services tailored to your needs, delivering exceptional quality and memorable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-secondary rounded-lg overflow-hidden hover-zoom"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white bg-black bg-opacity-50 p-3 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="mr-2 text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact" className="btn-primary rounded-md inline-block">
              Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Pricing Plans</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Transparent pricing options to suit your photography needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 border-b">
                <h3 className="text-xl font-serif text-center">Basic Package</h3>
              </div>
              <div className="p-6 text-center">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-muted-foreground">/session</span>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>2-hour photo session</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>1 location</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>25 edited digital images</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Online gallery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-muted-foreground">✕</span>
                    <span className="text-muted-foreground">Print package</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-outline w-full block text-center mt-6">Book Now</a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md transform scale-105 border-2 border-primary">
              <div className="bg-primary text-white p-6 border-b">
                <h3 className="text-xl font-serif text-center">Premium Package</h3>
              </div>
              <div className="p-6 text-center">
                <span className="text-4xl font-bold">$599</span>
                <span className="text-muted-foreground">/session</span>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>4-hour photo session</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>2 locations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>50 edited digital images</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Online gallery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Basic print package</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-primary w-full block text-center mt-6">Book Now</a>
              </div>
            </div>

            {/* Elite Package */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="p-6 border-b">
                <h3 className="text-xl font-serif text-center">Elite Package</h3>
              </div>
              <div className="p-6 text-center">
                <span className="text-4xl font-bold">$999</span>
                <span className="text-muted-foreground">/session</span>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Full-day photo session</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Multiple locations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>100 edited digital images</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Online gallery</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    <span>Premium print package</span>
                  </li>
                </ul>
                <a href="/contact" className="btn-outline w-full block text-center mt-6">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;


import React from "react";
import { Users, User, CalendarDays, Camera } from "lucide-react";

const services = [
  {
    icon: <Users size={36} />,
    title: "Wedding Photography",
    description: "Capturing the magic of your special day with a perfect blend of candid moments and artistic portraits.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: <CalendarDays size={36} />,
    title: "Event Coverage",
    description: "Professional documentation of corporate events, parties, and celebrations with attention to detail.",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: <User size={36} />,
    title: "Portrait Sessions",
    description: "Personalized portrait sessions that capture your unique personality in stunning natural settings.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    icon: <Camera size={36} />,
    title: "Commercial Photography",
    description: "High-quality product and brand photography to elevate your business's visual identity.",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Services</h2>
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
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/services" className="btn-primary rounded-md inline-block">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

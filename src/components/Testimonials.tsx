
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "Working with Nova Photography was an absolute pleasure! They captured our wedding beautifully, and the photos exceeded our expectations.",
    name: "Maria & David",
    role: "Wedding Clients",
    image: "/img/testimonial1.jpg",
  },
  {
    id: 2,
    text: "The corporate event photography was professional and discreet. The team delivered outstanding photos that perfectly captured the essence of our company gathering.",
    name: "John Thompson",
    role: "Marketing Director",
    image: "/img/testimonial2.jpg",
  },
  {
    id: 3,
    text: "My family portrait session was such a fun experience! The photographer knew exactly how to make everyone feel comfortable, and the results were simply stunning.",
    name: "Sarah Williams",
    role: "Family Portrait Client",
    image: "/img/testimonial3.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Read what our clients have to say about their experience working with us.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-lg italic mb-6">{testimonial.text}</p>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-2 transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

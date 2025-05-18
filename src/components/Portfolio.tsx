
import React, { useState } from "react";

const categories = ["All", "Events", "Weddings", "Portraits", "Commercial"];

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Summer Wedding",
    category: "Weddings",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Corporate Event",
    category: "Events",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Fashion Portrait",
    category: "Portraits",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Product Photography",
    category: "Commercial",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1537907510278-ed6252d00218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Engagement Session",
    category: "Weddings",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Conference Coverage",
    category: "Events",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore our collection of photography work across various categories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-zoom"
              onClick={() => setSelectedImage(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-center px-4 py-2 bg-black/70 rounded-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-white font-serif">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full screen image modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={portfolioItems.find(item => item.id === selectedImage)?.image} 
                alt="Selected portfolio work"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="mt-12 text-center">
          <a href="/portfolio" className="btn-outline rounded-md inline-block">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

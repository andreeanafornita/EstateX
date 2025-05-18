
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Summer Wedding",
    category: "Weddings",
    description: "Capturing the joy and love of a beautiful summer wedding in the countryside.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Corporate Event",
    category: "Events",
    description: "Professional coverage of a high-profile corporate conference in downtown.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Fashion Portrait",
    category: "Portraits",
    description: "Editorial-style fashion portrait showcasing modern styling and lighting techniques.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Product Photography",
    category: "Commercial",
    description: "Clean, crisp product photography for an online retail catalog.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1537907510278-ed6252d00218?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Engagement Session",
    category: "Weddings",
    description: "A romantic engagement photoshoot at sunset by the beach.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Conference Coverage",
    category: "Events",
    description: "Comprehensive coverage of a tech industry conference.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Family Portrait",
    category: "Portraits",
    description: "Heartwarming family portrait session at a local park in autumn.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Restaurant Menu",
    category: "Commercial",
    description: "Appetizing food photography for a high-end restaurant menu.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1513595207829-9f414c0665f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    title: "Destination Wedding",
    category: "Weddings",
    description: "A breathtaking wedding in the mountains with stunning backdrops.",
  },
];

const categories = ["All", "Events", "Weddings", "Portraits", "Commercial"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    document.title = "Portfolio - Nova Photography";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCursor />
      
      <section className="py-20 pt-32 lg:pt-40 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Portfolio</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Explore our diverse photography portfolio showcasing our best work across different categories.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-zoom"
                onClick={() => setSelectedImage(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
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
        </div>
      </section>

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
            <div className="mt-4 text-white">
              <h3 className="text-xl font-serif">
                {portfolioItems.find(item => item.id === selectedImage)?.title}
              </h3>
              <p className="text-white/80">
                {portfolioItems.find(item => item.id === selectedImage)?.description}
              </p>
            </div>
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

      <Footer />
    </div>
  );
};

export default Portfolio;

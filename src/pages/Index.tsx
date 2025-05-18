
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  // Modify document title
  useEffect(() => {
    document.title = "Nova Photography - Professional Photography Services";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCursor />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

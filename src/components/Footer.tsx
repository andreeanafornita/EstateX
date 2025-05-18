
import React from "react";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and description */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Nova Photography</h3>
            <p className="text-primary-foreground/70">
              Capturing life's precious moments with artistry and emotion since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@novaphotography.com" className="hover:text-primary-foreground/80 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Wedding Photography
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Event Coverage
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="/services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Commercial Photography
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic space-y-2 text-primary-foreground/70">
              <p>123 Photography Lane</p>
              <p>New York, NY 10001</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: contact@novaphotography.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {currentYear} Nova Photography. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-primary-foreground/70">
              <li>
                <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

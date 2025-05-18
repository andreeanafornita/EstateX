
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Phone, Mail, MapPin, Send, Clock, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",
      });
    }, 1500);
  };

  useEffect(() => {
    document.title = "Contact - Nova Photography";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CustomCursor />
      
      <section className="py-20 pt-32 lg:pt-40">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Get In Touch</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Ready to capture your special moments? Contact us to discuss your photography needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select a service</option>
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Event Coverage">Event Coverage</option>
                      <option value="Portrait Session">Portrait Session</option>
                      <option value="Commercial Photography">Commercial Photography</option>
                      <option value="Retouching Services">Retouching Services</option>
                      <option value="Fine Art Prints">Fine Art Prints</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary rounded-md flex items-center justify-center"
                >
                  {loading ? (
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  ) : (
                    <Send className="mr-2" size={18} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@novaphotography.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Studio Location</h4>
                    <p className="text-muted-foreground">123 Photography Lane, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Calendar size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Booking Information</h4>
                    <p className="text-muted-foreground">Please book 2-3 weeks in advance for portrait sessions</p>
                    <p className="text-muted-foreground">For weddings, we recommend booking 6-12 months in advance</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-10">
                <h3 className="text-2xl font-serif mb-6">Find Our Studio</h3>
                <div className="rounded-lg overflow-hidden h-[300px] bg-secondary">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374860529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043099197!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Studio Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">How far in advance should I book?</h3>
              <p className="text-muted-foreground">We recommend booking wedding photography 6-12 months in advance, and portrait sessions 2-3 weeks in advance.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">What is your cancellation policy?</h3>
              <p className="text-muted-foreground">Bookings can be rescheduled up to 14 days before the session. Cancellations made less than 14 days before may incur a fee.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">How long until I receive my photos?</h3>
              <p className="text-muted-foreground">Portrait sessions are delivered within 1-2 weeks. Wedding photos typically take 4-6 weeks for full delivery.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Do you travel for photoshoots?</h3>
              <p className="text-muted-foreground">Yes! We offer travel services for photoshoots outside our local area. Travel fees may apply depending on location.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

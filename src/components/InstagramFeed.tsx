
import React from "react";
import { Instagram } from "lucide-react";

// Mock Instagram posts
const instagramPosts = [
  { id: 1, image: "/img/instagram1.jpg" },
  { id: 2, image: "/img/instagram2.jpg" },
  { id: 3, image: "/img/instagram3.jpg" },
  { id: 4, image: "/img/instagram4.jpg" },
  { id: 5, image: "/img/instagram5.jpg" },
  { id: 6, image: "/img/instagram6.jpg" },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center">
            <Instagram size={28} className="mr-2" />
            <h2 className="text-2xl md:text-3xl font-serif">Follow Us On Instagram</h2>
          </div>
          <p className="text-muted-foreground mt-2">@novaphotography</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Instagram
                  size={24}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;

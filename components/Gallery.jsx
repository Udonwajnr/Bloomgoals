"use client";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=800&auto=format&fit=crop",
  "../img/lawerClass.png",
];

const Gallery = () => {
  return (
    <section className="bg-brand-light pb-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="group aspect-[4/3] overflow-hidden relative cursor-pointer"
          >
            <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 z-10 transition-colors duration-500" />
            <img
              src={src}
              alt={`Office view ${idx + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

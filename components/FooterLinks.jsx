"use client";
import React from "react";

const FooterLinks = () => {
  return (
    <section className="bg-brand-light py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="font-serif text-4xl text-brand-dark">Bloomgoals</h2>

        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {["Home", "About", "Team", "Services", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className="font-sans text-brand-dark hover:text-brand-blue text-lg transition-colors"
              >
                {item}
              </a>
            );
          })}
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-b border-black"></div>
    </section>
  );
};

export default FooterLinks;

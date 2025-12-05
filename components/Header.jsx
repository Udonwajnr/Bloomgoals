"use client";
import React, { useState } from "react";
import { Menu, Linkedin, Phone, Mail, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Updated nav items based on new content structure
  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Team", id: "team" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        {/* Social / Contact Icons Left */}
        <div className="flex gap-4 opacity-80">
          <a href="https://www.linkedin.com/company/bloomgoalsadvisory?originalSubdomain=ng" className="hover:text-brand-blue transition-colors" target="_blank">
            <Linkedin size={20} />
          </a>
          <a
            href="tel:+2347015692063"
            className="hover:text-brand-blue transition-colors"
          >
            <Phone size={20} />
          </a>
          <a
            href="mailto:info@bloomgoals.com"
            className="hover:text-brand-blue transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Burger Menu Right */}
        <button
          className="hover:text-brand-blue transition-colors p-1"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={32} />
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-[60] flex flex-col justify-center items-center`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-brand-blue transition-colors p-2"
          aria-label="Close menu"
        >
          <X size={40} />
        </button>
        <nav className="flex flex-col gap-8 text-center">
          {navItems.map((item) => {
            return (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-3xl md:text-5xl font-serif text-brand-light hover:text-brand-blue transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;

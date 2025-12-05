"use client";
import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Brand */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 mx-auto mb-6 relative flex items-center justify-center border-2 border-white/20 rotate-45">
            <div className="w-10 h-10 bg-brand-blue/20"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">
            Bloomgoals Advisory
          </h2>
          <p className="font-sans text-gray-500 mt-4 text-sm tracking-widest uppercase">
           | STRATEGY | OPERATIONS | COMPLIANCE | FINANCE

          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {["Home", "About", "Team", "Services", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className="font-sans text-sm font-bold text-gray-400 hover:text-brand-blue uppercase tracking-widest transition-colors duration-300"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Socials */}
        <div className="flex gap-6 mb-12">
          <a
            href="https://www.linkedin.com/company/bloomgoalsadvisory?originalSubdomain=ng"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
            target="_blank
            "
          >
            <Linkedin size={18} />
          </a>
          {/* <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
          >
            <Twitter size={18} />
          </a> */}
          <a
            href="https://www.instagram.com/bloomgoals_advisory"
            target="_blank"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
          >
            <Instagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-sans">
          <p>© {currentYear} Bloomgoals Advisory. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

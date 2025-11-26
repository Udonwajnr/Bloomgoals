"use client";

import React, { useState } from "react";
import { SERVICES } from "../constants";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import Hexagon from "./Hexagon";

const PracticeAreas = () => {
  const [selectedService, setSelectedService] = useState();

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Helper to split services into columns for honeycomb layout
  // Desktop: 3 Columns (Left, Middle Staggered, Right)
  // Mobile/Tablet: 2 Columns (Left, Right Staggered)
  const renderHexagonGrid = () => {
    return (
      <div className="relative w-full flex justify-center pb-20">
        {/* Mobile/Tablet Layout (2 Columns) - Visible < lg */}
        <div className="flex lg:hidden gap-4 sm:gap-6 md:gap-8 -space-x-4">
          {/* Column 1 (Evens) */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {SERVICES.filter((_, i) => i % 2 === 0).map((service, i) => (
              <Hexagon
                key={service.id}
                text={service.title}
                image={service.image}
                delay={i * 0.1}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
          {/* Column 2 (Odds) - Staggered Down */}
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 pt-[86px] sm:pt-[104px] md:pt-[138px]">
            {SERVICES.filter((_, i) => i % 2 !== 0).map((service, i) => (
              <Hexagon
                key={service.id}
                text={service.title}
                image={service.image}
                delay={i * 0.1 + 0.1}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout (3 Columns) */}
        <div className="hidden lg:flex gap-8 -space-x-8">
          {[0, 1, 2].map((col) => (
            <div
              key={col}
              className={`flex flex-col gap-8 ${col === 1 ? "pt-[138px]" : ""}`}
            >
              {SERVICES.filter((_, i) => i % 3 === col).map((service, i) => (
                <Hexagon
                  key={service.id}
                  text={service.title}
                  image={service.image}
                  delay={i * 0.2 + col * 0.1}
                  onClick={() => setSelectedService(service)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="bg-brand-dark py-24 px-6 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="block text-sm sm:text-base font-sans tracking-[0.3em] text-brand-blue mb-4 uppercase font-bold">
              What We Do
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-none">
              Our Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              onClick={scrollToContact}
              className="group flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
            >
              <span className="font-serif italic text-xl">Start a project</span>
              <ArrowRight
                className="transform group-hover:translate-x-1 transition-transform duration-300"
                size={20}
              />
            </a>
          </motion.div>
        </div>

        {/* Hexagon Honeycomb Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {renderHexagonGrid()}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-4 text-center md:hidden">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 text-white border-b border-white/30 pb-2 hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
          >
            <span className="font-serif italic text-xl">Start a project</span>
            <ArrowRight
              className="transform group-hover:translate-x-1 transition-transform duration-300"
              size={20}
            />
          </a>
        </div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
              onClick={() => setSelectedService(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-4xl bg-brand-light rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white rounded-full hover:bg-gray-200 transition-colors text-brand-dark shadow-md"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row h-full overflow-hidden">
                {/* Modal Image (Left) */}
                <div className="w-full md:w-1/3 h-48 md:h-auto relative flex-shrink-0">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
                  {/* Mobile Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 md:hidden text-white drop-shadow-md">
                    <h3 className="font-serif text-2xl leading-tight">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Text (Right) */}
                <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
                  <h3 className="hidden md:block font-serif text-3xl md:text-4xl text-brand-dark mb-6 leading-tight">
                    {selectedService.title}
                  </h3>

                  <div className="space-y-6 font-sans text-gray-700 leading-relaxed text-base">
                    <p>{selectedService.description}</p>

                    {selectedService.listItems &&
                      selectedService.listItems.length > 0 && (
                        <div className="bg-gray-50 p-6 rounded-sm border-l-4 border-brand-blue">
                          <ul className="space-y-3">
                            {selectedService.listItems.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="mt-1 flex-shrink-0 text-brand-blue">
                                  <Check size={16} strokeWidth={3} />
                                </span>
                                <span className="text-gray-700 font-medium">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {selectedService.conclusion && (
                      <p className="text-brand-blue italic font-medium pt-4 border-t border-gray-200">
                        {selectedService.conclusion}
                      </p>
                    )}
                  </div>

                  <div className="mt-10 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => {
                        setSelectedService(null);
                        const contact = document.getElementById("contact");
                        if (contact)
                          contact.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-2 text-brand-dark font-bold uppercase tracking-widest text-sm hover:text-brand-blue transition-colors"
                    >
                      <span>Discuss this service</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PracticeAreas;

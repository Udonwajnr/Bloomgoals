"use client";

import React from "react";
import { SERVICES } from "../constants";
import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const PracticeAreas = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
              Comprehensive Advisory Services
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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white/5 border border-white/10 p-8 sm:p-10 rounded-sm hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-500 backdrop-blur-sm flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="w-12 h-1 bg-brand-blue mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="font-sans text-gray-300 leading-relaxed text-sm sm:text-base space-y-4 flex-grow">
                <p>{service.description}</p>

                {service.listItems && service.listItems.length > 0 && (
                  <ul className="space-y-3 mt-4 mb-4">
                    {service.listItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 text-brand-blue">
                          <Check size={16} strokeWidth={3} />
                        </span>
                        <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {service.conclusion && (
                  <p className="pt-6 border-t border-white/10 mt-6 text-gray-400 italic text-sm">
                    "{service.conclusion}"
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
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
    </section>
  );
};

export default PracticeAreas;

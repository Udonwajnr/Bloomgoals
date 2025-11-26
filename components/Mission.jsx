"use client";
import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="bg-brand-light">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative p-12 lg:p-24 flex flex-col justify-center bg-[#F9F9F9] overflow-hidden">
          {/* Professional SVG Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="mission-grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 40L40 0H20L0 20M40 40V20L20 40"
                  stroke="#000000"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#mission-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-lg mx-auto lg:mx-0 font-sans text-gray-700 space-y-6 text-sm sm:text-base leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-serif text-3xl sm:text-4xl text-brand-dark mb-6"
            >
              Our Mission
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p>
                To provide commercially sophisticated advisory that aligns with
                Nigeria’s regulatory and macroeconomic realities. We recognise
                that value creation for high growth ventures is essential to the
                country’s sustainable development. Our goal is to ensure that
                our clients have the legal and operational foundations required
                for long term growth and improved access to capital.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="h-[400px] lg:h-auto relative">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Office"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Overlay to ensure text readability if we were to put text here, or just for style */}
          <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
        </div>
      </div>

      {/* Banner Text */}
      <div className="py-12 bg-brand-light text-center px-4 border-t border-gray-100 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-serif text-xl sm:text-2xl text-brand-blue tracking-wide">
            <span className="text-gray-400 mx-2">|</span> STRATEGY{" "}
            <span className="text-gray-400 mx-2">|</span> OPERATIONS{" "}
            <span className="text-gray-400 mx-2">|</span> COMPLIANCE{" "}
            <span className="text-gray-400 mx-2">|</span> FINANCE
          </h3>
          <div className="w-64 h-px bg-gray-400 mx-auto mt-4"></div>
          <p className="font-sans text-xs text-gray-500 mt-2 tracking-widest uppercase">
            Practical legal and business solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;

"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-brand-light py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl text-brand-blue leading-tight"
          >
            Where Ambitious Ventures Come to Clarity and Direction
          </motion.h2>

          <div className="font-sans text-gray-700 space-y-6 text-base sm:text-lg leading-relaxed text-justify">
            <p>
              At Bloomgoals Advisory, we provide strategic operational and legal
              advisory services to startups, entrepreneurs, project sponsors,
              SMEs and high growth ventures across Nigeria. Founded in 2025, the
              firm helps clients structure their products, operations and
              projects, navigate complex regulatory landscapes and access
              capital for sustainable growth.
            </p>
            <p>
              With multidisciplinary perspectives in strategy, finance and law,
              we deliver end to end tailored solutions from business formation
              through fundraising and expansion.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 relative h-[500px] w-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="../img/lawerClass.png"
            alt="Advisory Meeting"
            className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

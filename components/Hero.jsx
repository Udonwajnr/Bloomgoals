"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const scrollToServices = (e) => {
    e.preventDefault();
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full h-screen overflow-hidden bg-brand-dark flex flex-col items-center justify-center text-center px-4"
    >
      {/* Background with Parallax & Zoom */}
      <motion.div className="absolute inset-0 z-0" style={{ y: yBg }}>
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        {/* Gradients for depth and readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/30 via-transparent to-brand-dark" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
        style={{ y: yText, opacity: opacityHero }}
      >
        {/* Refined Animated Logo - Geometric Diamond/Star */}
        <div className="mb-10 relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-2xl overflow-visible"
          >
            {/* Outer Shape - Diamond */}
            <motion.path
              d="M50 0 L100 50 L50 100 L0 50 Z"
              className="fill-none stroke-white/90 stroke-[1]"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Inner Geometric Detail - Star/Flower */}
            <motion.path
              d="M50 20 L80 50 L50 80 L20 50 Z"
              className="fill-none stroke-brand-blue stroke-[1.5]"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            />
            {/* Cross Lines */}
            <motion.path
              d="M50 0 V20 M100 50 H80 M50 100 V80 M0 50 H20 M50 20 L80 50 M80 50 L50 80 M50 80 L20 50 M20 50 L50 20"
              className="fill-none stroke-white/30 stroke-[0.5]"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.5 }}
            />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <span className="block font-sans text-brand-blue tracking-[0.3em] text-xs sm:text-sm uppercase font-bold mb-4">
            Est. 2025
          </span>
          <h1 className="font-serif text-6xl sm:text-7xl md:text-9xl text-white leading-none tracking-wide mb-2 drop-shadow-xl">
            Bloomgoals
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-white/50"></div>
            <span className="font-sans text-lg sm:text-2xl text-gray-300 font-light tracking-[0.4em] uppercase">
              Advisory
            </span>
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
        </motion.div>

        <motion.p
          className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Bespoke transactional, operational, and legal strategies for Nigeria's
          most ambitious high-growth ventures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <a
            href="#services"
            onClick={scrollToServices}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 hover:border-brand-blue/50 text-white font-sans text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-500 overflow-hidden hover:bg-brand-blue/10 rounded-sm backdrop-blur-sm"
          >
            <span className="relative z-10">Discover our expertise</span>
            <ArrowRight
              size={16}
              className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
            />

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-dark to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;

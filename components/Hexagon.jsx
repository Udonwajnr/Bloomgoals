import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Hexagon = ({ text, image, delay = 0, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 80 }}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      // Dimensions:
      // Mobile: w-[150px] h-[173px]
      // Desktop: w-[240px] h-[277px]
      className="relative w-[150px] h-[173px] sm:w-[180px] sm:h-[208px] md:w-[240px] md:h-[277px] group flex-shrink-0 select-none cursor-pointer z-10 hover:z-20 transition-transform duration-300"
      style={{
        filter: "drop-shadow(0 10px 10px rgba(0,0,0,0.5))",
      }}
    >
      {/* Main Content Area masked as Hexagon */}
      <div
        className="absolute inset-0 overflow-hidden bg-brand-dark transition-all duration-300"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        {/* Background Image Layer */}
        {image && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={image}
              alt={text}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
            />
            {/* Base Overlay */}
            <div className="absolute inset-0 bg-brand-dark/60 transition-colors duration-500 group-hover:bg-brand-blue/80 mix-blend-multiply" />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
          </div>
        )}

        {/* Mouse Spotlight Effect - Only visible on hover/interaction inside the shape */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
          style={{
            opacity: opacity,
            background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.4), transparent 60%)`,
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 z-20 text-center">
          <div className="relative">
            {/* Animated decorative line */}
            <div className="w-0.5 h-6 bg-white/50 mx-auto mb-3 transition-all duration-300 group-hover:h-0 group-hover:opacity-0"></div>

            <h3 className="font-sans font-bold text-white text-xs sm:text-sm md:text-base uppercase tracking-widest leading-relaxed drop-shadow-md transition-transform duration-300 group-hover:-translate-y-2">
              {text}
            </h3>

            {/* Hover Reveal Action */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <ArrowUpRight size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Border Overlay - Crisp, high-quality vector stroke */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Passive Border */}
        <polygon
          points="50,0 100,25 100,75 50,100 0,75 0,25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="text-white/20 transition-colors duration-300 group-hover:text-white/50"
        />

        {/* Active Hover Border - Draws in */}
        <motion.path
          d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="opacity-0 group-hover:opacity-100"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </svg>
    </motion.div>
  );
};

export default Hexagon;

"use client";

import React, { useState } from "react";
import { TEAM } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X, GraduationCap, Award } from "lucide-react";

const Lawyers = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="team" className="bg-brand-light py-20 px-6 sm:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif text-4xl mb-16 text-brand-dark tracking-wide"
        >
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 justify-center max-w-5xl mx-auto">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-full max-w-[320px] aspect-[3/4] overflow-hidden mb-6 bg-gray-200 relative shadow-md group-hover:shadow-xl transition-shadow duration-300">
                {/* Image with Grayscale and Tint */}
                <div className="relative w-full h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Brand Tint Overlay (Visible when grayscale, fades out on hover) */}
                  <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
                </div>

                {/* LinkedIn Overlay */}
                {member.linkedin && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(member.linkedin, "_blank");
                    }}
                    className="absolute bottom-0 right-0 p-4 bg-brand-blue text-white z-10 transition-all duration-500 ease-out transform translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 cursor-pointer"
                  >
                    <Linkedin size={24} />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
              </div>

              <h3 className="font-serif text-2xl text-brand-dark group-hover:text-brand-blue transition-colors duration-300 mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-sm text-gray-500 font-bold uppercase tracking-wider mb-3">
                {member.role}
              </p>

              <div className="h-px w-10 bg-brand-blue/30 group-hover:w-20 transition-all duration-300 mb-4"></div>

              {member.bio && (
                <span className="text-xs text-gray-400 font-sans group-hover:text-brand-blue transition-colors">
                  Click to view full bio
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="bg-brand-light w-full max-w-5xl max-h-[90vh] rounded-sm relative shadow-2xl flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-white/80 hover:bg-white rounded-full transition-colors text-brand-dark shadow-sm"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-2/5 relative h-64 md:h-auto flex-shrink-0">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale"
                />
                <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />

                {/* Mobile Title Overlay (Hidden on Desktop) */}
                <div className="absolute bottom-4 left-4 right-4 md:hidden text-white">
                  <h3 className="font-serif text-2xl mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="font-sans text-xs font-bold uppercase tracking-widest opacity-90">
                    {selectedMember.role}
                  </p>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 bg-brand-light overflow-y-auto">
                <div className="hidden md:block mb-8 border-b border-gray-200 pb-6">
                  <h3 className="font-serif text-4xl text-brand-dark mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="font-sans text-brand-blue text-lg font-bold tracking-wide uppercase">
                    {selectedMember.role}
                  </p>

                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-blue transition-colors text-xs font-bold uppercase tracking-widest mt-4"
                    >
                      <Linkedin size={16} />
                      LinkedIn Profile
                    </a>
                  )}
                </div>

                <div className="space-y-6 font-sans text-gray-700 leading-relaxed text-base">
                  {selectedMember.bio ? (
                    selectedMember.bio.split("\n").map((paragraph, i) => (
                      <p key={i} className={paragraph.length > 0 ? "mb-4" : ""}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="italic text-gray-400">Bio coming soon.</p>
                  )}

                  <div className="grid grid-cols-1 gap-8 pt-8 mt-8 border-t border-gray-200">
                    {selectedMember.education &&
                      selectedMember.education.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-brand-blue">
                            <GraduationCap size={20} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">
                              Education
                            </h4>
                          </div>
                          <ul className="text-sm space-y-2 text-gray-600 ml-1">
                            {selectedMember.education.map((edu, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-blue/40 flex-shrink-0"></span>
                                <span>{edu}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    {selectedMember.certifications &&
                      selectedMember.certifications.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3 text-brand-blue">
                            <Award size={20} />
                            <h4 className="font-bold uppercase tracking-widest text-sm">
                              Certifications
                            </h4>
                          </div>
                          <ul className="text-sm space-y-2 text-gray-600 ml-1">
                            {selectedMember.certifications.map((cert, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-brand-blue/40 flex-shrink-0"></span>
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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

export default Lawyers;

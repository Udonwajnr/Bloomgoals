"use client";

import React from "react";
import { NEWS_ITEMS } from "../constants";

const News = () => {
  return (
    <section
      id="news"
      className="bg-brand-light py-20 px-6 sm:px-12 border-b border-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl mb-12 text-brand-dark tracking-wide">
          NEWS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS_ITEMS.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="border-b border-gray-400 pb-2 mb-4 group-hover:border-brand-blue transition-colors">
                <span className="text-brand-blue font-bold text-sm font-sans">
                  {item.date}
                </span>
              </div>
              <h3 className="font-sans font-bold text-lg mb-2 leading-tight group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

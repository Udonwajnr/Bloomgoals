import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-white px-6 text-center relative overflow-hidden">
        {/* Decorative elements similar to other pages */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-700/10 rotate-45 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10">
            <h1 className="font-serif text-9xl text-brand-blue opacity-50 font-bold mb-4">404</h1>
            <h2 className="font-serif text-4xl mb-6">Page Not Found</h2>
            <p className="font-sans text-gray-400 text-lg mb-10 max-w-md mx-auto">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue hover:bg-white text-white hover:text-brand-blue font-sans font-bold uppercase tracking-widest transition-all duration-300 rounded-sm group"
            >
                <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
            </Link>
        </div>
    </div>
  );
};

export default NotFound;
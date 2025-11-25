"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    title: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setEmailError("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Handle form submission logic here
    alert("Thank you for your message. We will contact you shortly.");
    setFormData({ name: "", surname: "", email: "", title: "", message: "" });
  };

  // Enhanced input styles with subtle shadow on focus
  const inputClasses =
    "w-full bg-transparent border-b border-gray-500 py-3 px-3 text-white transition-all duration-300 focus:outline-none focus:border-white focus:border-b-2 focus:bg-white/5 focus:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.3)] rounded-t-sm placeholder-transparent font-sans text-base";
  const labelClasses =
    "text-xs font-bold uppercase text-gray-400 ml-3 mb-1 block tracking-widest transition-colors group-focus-within:text-brand-blue";

  return (
    <section
      id="contact"
      className="bg-brand-dark text-white relative overflow-hidden pt-24 pb-24"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-700/10 rotate-45 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
        {/* Left Column: Info */}
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-5xl sm:text-6xl mb-8 leading-none">
            Let's start the <br />
            <span className="text-brand-blue italic">conversation.</span>
          </h2>

          <p className="font-sans text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
            Whether you have a specific legal question or need comprehensive
            advisory for your next venture, we are here to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1 text-gray-300">
                  Visit Us
                </h4>
                <p className="font-serif text-xl">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1 text-gray-300">
                  Call Us
                </h4>
                <p className="font-serif text-xl">+234 701 569 2063</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-1 text-gray-300">
                  Email Us
                </h4>
                <p className="font-serif text-xl">info@bloomgoals.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/5 p-8 sm:p-10 rounded-sm backdrop-blur-sm border border-white/10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className={labelClasses}>
                First Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="First Name"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="surname" className={labelClasses}>
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className={inputClasses}
                placeholder="Surname"
                required
              />
            </div>
          </div>

          <div className="group">
            <label htmlFor="email" className={labelClasses}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${inputClasses} ${
                emailError ? "border-red-500" : ""
              }`}
              placeholder="Email Address"
              required
            />
            {emailError && (
              <span className="text-red-400 text-xs mt-1 ml-3 block">
                {emailError}
              </span>
            )}
          </div>

          <div className="group">
            <label htmlFor="title" className={labelClasses}>
              Subject
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={inputClasses}
              placeholder="Project or Inquiry Title"
              required
            />
          </div>

          <div className="group">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className={`${inputClasses} resize-none`}
              placeholder="How can we help?"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-brand-blue hover:bg-white text-white hover:text-brand-blue font-sans font-bold uppercase tracking-[0.2em] py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
          >
            <span>Send Message</span>
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

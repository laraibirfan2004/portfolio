import { motion } from "motion/react";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally handle form submission here
    alert("Message sent! (Mock implementation)");
  };

  return (
    <div className="py-20 min-h-[70vh] flex flex-col md:flex-row gap-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          INITIATE
          <br />
          <span className="text-primary glow-text">CONNECTION.</span>
        </h1>
        <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
          Available for freelance opportunities, full-time roles, and technical
          consultations. Let's build something intelligent.
        </p>

        <div className="space-y-8 font-mono text-sm max-w-md">
          <div className="flex items-center gap-4 border border-border p-4 bg-surface/30 hover:border-primary/30 transition-colors">
            <Mail className="w-5 h-5 text-primary" />
            <div>
              <p className="text-gray-500 mb-1">EMAIL</p>
              <a
                href="mailto:ilaraibirfan2004@gmail.com"
                className="text-lg hover:text-primary transition-colors"
              >
                ilaraibirfan2004@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-border p-4 bg-surface/30 hover:border-primary/30 transition-colors">
            <Phone className="w-5 h-5 text-primary" />
            <div>
              <p className="text-gray-500 mb-1">PHONE</p>
              <a
                href="tel:+923295715396"
                className="text-lg hover:text-primary transition-colors"
              >
                +92-329-5715396
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 border border-border p-4 bg-surface/30 hover:border-primary/30 transition-colors">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <p className="text-gray-500 mb-1">LOCATION</p>
              <p className="text-lg">Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 bg-surface/50 border border-border p-8 md:p-12 relative"
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl rounded-full" />

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-mono text-gray-400 mb-2"
            >
              01. NAME
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:outline-none focus:border-primary transition-colors text-lg"
              placeholder="Laraib Irfan"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-mono text-gray-400 mb-2"
            >
              02. EMAIL
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:outline-none focus:border-primary transition-colors text-lg"
              placeholder="laraib@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-gray-400 mb-2"
            >
              03. MESSAGE
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-800 text-white pb-2 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full group bg-primary text-black font-semibold py-4 flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors"
          >
            SEND MESSAGE
            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </motion.div>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

const LogoBar = () => {
  const logos = [
    { name: 'TechCorp', color: 'text-blue-500' },
    { name: 'Innovate', color: 'text-green-500' },
    { name: 'FutureLabs', color: 'text-purple-500' },
    { name: 'NextGen', color: 'text-pink-500' },
    { name: 'GlobalSys', color: 'text-orange-500' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`text-2xl md:text-3xl font-bold text-slate-600 hover:${logo.color} transition-colors duration-300 cursor-default grayscale hover:grayscale-0`}
            >
              {logo.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;

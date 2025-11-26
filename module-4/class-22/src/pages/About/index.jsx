import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Target, Heart, Globe, Award, Zap, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 text-slate-200 overflow-hidden font-sans selection:bg-purple-500 selection:text-white relative">
      
      {/* Background Elements with Parallax */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4">
            Who We Are
          </motion.h2>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">Future</span> of Digital Experiences.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 leading-relaxed mb-10">
            We are a team of visionaries, creators, and engineers dedicated to pushing the boundaries of what's possible on the web.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Banner (Trust Signals) */}
      <section className="relative z-10 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years Experience", value: "10+" },
              { label: "Clients Served", value: "500+" },
              { label: "Projects Delivered", value: "1k+" },
              { label: "Team Members", value: "50+" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-purple-300 text-sm uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Core: Vision & Mission (Bento Grid) */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Vision Card - Large */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md group">
            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-purple-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              To redefine the digital landscape by creating immersive, accessible, and high-performance web solutions that empower businesses to thrive in the modern era. We envision a world where technology seamlessly enhances human connection.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={fadeInUp} className="bg-linear-to-br from-purple-900/50 to-slate-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-purple-500/50 transition-colors group">
            <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="text-pink-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              To deliver excellence through innovation, integrity, and a relentless pursuit of perfection in every line of code we write.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors group">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-blue-400 w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
            <p className="text-slate-300 leading-relaxed">
              Building strong relationships with our clients and the developer community.
            </p>
          </motion.div>

          {/* Global Reach Card */}
          <motion.div variants={fadeInUp} className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:bg-white/10 transition-colors group flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-slate-300 leading-relaxed">
                From local startups to Fortune 500 companies, our footprint spans across continents, delivering value and driving growth wherever we go.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-32 bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
               <span className="text-white/50 font-mono text-sm">Map Visualization</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CSR Section */}
      <section className="relative z-10 py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4">Social Responsibility</h2>
              <h3 className="text-4xl font-bold text-white mb-6">Coding for a Better Tomorrow</h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                We believe technology should be a force for good. That's why we dedicate 10% of our working hours to pro-bono projects for non-profits and educational initiatives.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Sustainable Green Hosting",
                  "Open Source Contributions",
                  "Tech Education for Underprivileged Youth"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <Heart className="w-5 h-5 text-pink-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="group flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors">
                Read our Impact Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-8 aspect-video flex items-center justify-center overflow-hidden">
                 {/* Abstract representation of CSR */}
                 <div className="grid grid-cols-3 gap-4 opacity-50">
                    <div className="w-16 h-32 bg-white/10 rounded-full animate-pulse" />
                    <div className="w-16 h-48 bg-purple-500/20 rounded-full animate-pulse delay-100" />
                    <div className="w-16 h-24 bg-pink-500/20 rounded-full animate-pulse delay-200" />
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-24 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your journey?</h2>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Let's Talk
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "DeepCosmos transformed our digital presence. Their attention to detail and futuristic design language set us apart from the competition.",
      name: "Sarah Jenkins",
      role: "CTO, FutureFin",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      quote: "Working with this team was a game-changer. The performance optimizations and smooth animations they implemented increased our conversion rate by 40%.",
      name: "Michael Chen",
      role: "Founder, Nexus AI",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      quote: "A true partnership. They understood our vision immediately and delivered a product that exceeded our wildest expectations.",
      name: "Elena Rodriguez",
      role: "Director of Product, Orbit",
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-pink-400 font-bold tracking-wider uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative group hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="w-10 h-10 text-purple-500/30 absolute top-6 right-6 group-hover:text-purple-500/50 transition-colors" />
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/50">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectGrid = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A revolutionary fintech dashboard streamlining global payments.',
      tech: ['React', 'Node.js', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Neon Verse',
      description: 'Immersive 3D web experience for a digital art gallery.',
      tech: ['Three.js', 'WebGL', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'EcoTrack',
      description: 'Sustainable supply chain monitoring platform powered by AI.',
      tech: ['Python', 'TensorFlow', 'React'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'CyberGuard',
      description: 'Next-gen cybersecurity interface for enterprise networks.',
      tech: ['Vue', 'D3.js', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'HealthSync',
      description: 'Telemedicine app connecting patients with specialists instantly.',
      tech: ['React Native', 'GraphQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Orbit CRM',
      description: 'Customer relationship management tool with predictive analytics.',
      tech: ['Angular', 'Sass', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-purple-400 font-bold tracking-wider uppercase text-sm mb-4">Our Work</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">Selected Projects</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-96 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 cursor-pointer"
          >
            {/* Image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h4>
              <p className="text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-purple-300 border border-purple-500/30">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 translate-y-4 group-hover:translate-y-0">
                <button className="p-2 rounded-full bg-white text-slate-900 hover:bg-purple-500 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 transition-colors">
                  <Github className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Hover Glow Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-3xl transition-colors duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;

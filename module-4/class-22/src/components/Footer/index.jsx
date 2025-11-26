import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter">
              <span className="text-white">Deep</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">Cosmos</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Crafting digital experiences that ignite brands and empower users. We build the future of the web, one pixel at a time.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Work', path: '/#work' },
                { name: 'Contact', path: '/contact' },
                { name: 'Privacy Policy', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                <span>123 Innovation Blvd, Tech City<br />Sector 7, Digital District</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-pink-500 shrink-0" />
                <a href="mailto:hello@deepcosmos.tech" className="hover:text-white transition-colors">hello@deepcosmos.tech</a>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} DeepCosmos Inc. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

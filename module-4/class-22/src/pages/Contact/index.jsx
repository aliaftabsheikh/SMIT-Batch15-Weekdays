import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, CheckCircle, Loader2, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    reason: 'Sales',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', reason: 'Sales', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    { question: "What are your typical response times?", answer: "We aim to respond to all inquiries within 24 hours during business days." },
    { question: "Do you offer custom enterprise solutions?", answer: "Yes, we specialize in tailoring our services to meet the unique needs of large-scale enterprises." },
    { question: "Where are you located?", answer: "Our headquarters are in the heart of the tech district, but we operate as a remote-first company globally." }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-purple-500 selection:text-white relative overflow-hidden pt-20">
      
      {/* Background Mesh Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-pink-900/20 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">Connect</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? We'd love to hear from you.
            <br />
            <span className="text-purple-400 font-medium text-sm block mt-2">We typically reply within 24 hours.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Contact Info & Context */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Email Us</h3>
                  <p className="text-slate-400">hello@deepcosmos.tech</p>
                  <p className="text-slate-400">support@deepcosmos.tech</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-pink-500/10 rounded-xl group-hover:bg-pink-500/20 transition-colors">
                  <Phone className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                  <p className="text-slate-500 text-sm">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Visit Us</h3>
                  <p className="text-slate-400">123 Innovation Blvd, Tech City</p>
                  <p className="text-slate-400">Sector 7, Digital District</p>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-400" /> Frequently Asked Questions
              </h3>
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-medium text-slate-200">{faq.question}</span>
                    {activeAccordion === index ? <ChevronUp className="w-4 h-4 text-purple-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-4 text-slate-400 text-sm leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 text-slate-400 border border-white/10 hover:border-purple-500 hover:scale-110">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Stylized Map Placeholder */}
            <div className="h-48 w-full rounded-2xl overflow-hidden border border-white/10 relative group">
               <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-500 mx-auto mb-2 animate-bounce" />
                    <span className="text-slate-500 text-sm font-mono">Interactive Map Module</span>
                  </div>
               </div>
               <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent pointer-events-none" />
            </div>

          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 transform rotate-1" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Reason for Contact</label>
                  <div className="relative">
                    <select 
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 cursor-pointer"
                    >
                      <option>Sales Inquiry</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                      <option>General Question</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                  <textarea 
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 border border-green-500/50 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50"
          >
            <div className="bg-green-500/20 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Message Sent!</h4>
              <p className="text-slate-400 text-xs">We'll get back to you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Contact;
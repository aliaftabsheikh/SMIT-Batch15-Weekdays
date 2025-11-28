import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBlogMutation } from '../../services/blogsApi';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, Type, User, FileText, CheckCircle } from 'lucide-react';

const CreateBlog = () => {
  const navigate = useNavigate();
  const [addBlog, { isLoading, isSuccess }] = useAddBlogMutation();
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });

  const [autosaveStatus, setAutosaveStatus] = useState('');

  useEffect(() => {
    if (formData.title || formData.content) {
      setAutosaveStatus('Saving draft...');
      const timer = setTimeout(() => {
        setAutosaveStatus('Draft Saved just now');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBlog(formData).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to save the blog', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-deep-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-gray-400 transition-colors hover:text-electric-purple"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Create New Article</h1>
          {autosaveStatus && (
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <CheckCircle size={14} className="text-green-500" />
              {autosaveStatus}
            </span>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Article Title
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Type className="text-gray-500" size={20} />
              </div>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="block w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-electric-purple focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-electric-purple"
                placeholder="Enter a catchy title..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Author Name
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="text-gray-500" size={20} />
              </div>
              <input
                type="text"
                name="author"
                required
                value={formData.author}
                onChange={handleChange}
                className="block w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-electric-purple focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-electric-purple"
                placeholder="Who is writing this?"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Content
            </label>
            <div className="relative group">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FileText className="text-gray-500 group-focus-within:text-electric-purple transition-colors" size={20} />
              </div>
              <textarea
                name="content"
                required
                rows={12}
                value={formData.content}
                onChange={handleChange}
                className="block w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-electric-purple focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-electric-purple font-mono text-sm leading-relaxed"
                placeholder="# Write your masterpiece here... (Markdown supported)"
              />
              {/* Rich Text Toolbar Placeholder */}
              <div className="absolute top-2 right-2 flex gap-1 rounded-md bg-black/30 p-1 backdrop-blur-md">
                <button type="button" className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10">B</button>
                <button type="button" className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10">I</button>
                <button type="button" className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10">U</button>
                <div className="w-px bg-white/10 mx-1"></div>
                <button type="button" className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10">H1</button>
                <button type="button" className="p-1 text-gray-400 hover:text-white rounded hover:bg-white/10">H2</button>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-right">
              {formData.content.split(/\s+/).filter(w => w.length > 0).length} words
            </p>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-electric-purple to-neon-pink px-8 py-4 font-bold text-white shadow-lg transition-all hover:shadow-[0_0_25px_rgba(191,0,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              ) : (
                <>
                  <Save size={20} />
                  Publish Article
                </>
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;

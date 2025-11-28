import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useGetBlogByIdQuery, useDeleteBlogMutation } from '../../services/blogsApi';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Trash2 } from 'lucide-react';
import DeleteModal from '../Admin/DeleteModal';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading } = useGetBlogByIdQuery(id);
  const [deleteBlog] = useDeleteBlogMutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleDelete = async () => {
    try {
      await deleteBlog(id).unwrap();
      navigate('/');
    } catch (error) {
      console.error('Failed to delete blog', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-deep-bg flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-electric-purple border-t-transparent"></div>
      </div>
    );
  }

  if (!blog) return null;

  const date = new Date(blog.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const words = blog.content.split(/\s+/).length;
  const readTime = Math.ceil(words / 200);

  return (
    <div className="min-h-screen bg-deep-bg text-white">
      <DeleteModal 
        isOpen={isDeleteModalOpen} 
        onClose={() => setIsDeleteModalOpen(false)} 
        onConfirm={handleDelete}
        title={blog.title}
      />

      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-electric-purple origin-left"
        style={{ scaleX }}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-electric-purple"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/20"
          >
            <Trash2 size={16} />
            Delete Article
          </button>
        </div>

        <article>
          <header className="mb-12 text-center">
            <div className="mb-6 flex justify-center gap-2">
               <span className="rounded-full bg-electric-purple/20 px-3 py-1 text-sm font-semibold text-electric-purple">
                  Technology
               </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium text-white">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{readTime} min read</span>
              </div>
            </div>
          </header>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-electric-purple prose-a:no-underline hover:prose-a:text-neon-pink prose-strong:text-white prose-code:text-neon-pink">
              {blog.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4 leading-relaxed text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 w-64 space-y-8">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="mb-4 text-lg font-bold text-white">About Author</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-electric-purple to-neon-pink flex items-center justify-center font-bold text-white">
                      {blog.author[0]}
                    </div>
                    <div>
                      <p className="font-medium text-white">{blog.author}</p>
                      <p className="text-xs text-gray-400">Senior Editor</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    Passionate about technology and design. Writing about the future of web development.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="mb-4 text-lg font-bold text-white">Share</h3>
                  <div className="flex gap-4">
                    <button className="rounded-full bg-white/10 p-2 text-gray-400 transition-colors hover:bg-electric-purple hover:text-white">
                      <Twitter size={20} />
                    </button>
                    <button className="rounded-full bg-white/10 p-2 text-gray-400 transition-colors hover:bg-electric-purple hover:text-white">
                      <Linkedin size={20} />
                    </button>
                    <button className="rounded-full bg-white/10 p-2 text-gray-400 transition-colors hover:bg-electric-purple hover:text-white">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
};
export default BlogDetails
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';

const BlogCard = ({ blog, index }) => {
  const { _id, title, author, content, createdAt } = blog;
  
  // Derive excerpt from content
  const excerpt = content.length > 100 ? content.substring(0, 100) + '...' : content;
  
  // Format date
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Calculate reading time (approx 200 words per minute)
  const words = content.split(/\s+/).length;
  const readTime = Math.ceil(words / 200);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 20px 25px -5px rgba(191, 0, 255, 0.15), 0 10px 10px -5px rgba(191, 0, 255, 0.1)" 
      }}
      className="group relative h-full"
    >
      <Link to={`/blogs/${_id}`} className="block h-full">
        <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-electric-purple/50 hover:bg-white/10 flex flex-col">
          
          {/* Category Tag (Mockup) */}
          <div className="mb-4">
            <span className="inline-block rounded-full bg-electric-purple/20 px-3 py-1 text-xs font-semibold text-electric-purple">
              Technology
            </span>
          </div>

          <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">
            {title}
          </h3>

          <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
          </div>

          <p className="mb-6 text-gray-300 flex-grow">
            {excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime} min read</span>
            </div>
            <span className="font-medium text-neon-pink group-hover:underline">
              Read Article &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;

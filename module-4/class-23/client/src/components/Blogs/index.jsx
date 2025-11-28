import React from 'react'
import { useGetBlogsQuery } from '../../services/blogsApi'
import { Link } from 'react-router-dom';
import BlogCard from '../BlogCard';
import SkeletonCard from '../BlogCard/SkeletonCard';
import { Plus } from 'lucide-react';

const Blogs = () => {
    const { data, isLoading, isError } = useGetBlogsQuery()
    
  return (
    <div className="min-h-screen bg-deep-bg px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Deep Cosmos <span className="text-electric-purple">Insights</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Exploring the universe of code, design, and technology.
            </p>
          </div>
          <Link 
            to="/create" 
            className="flex items-center gap-2 rounded-lg bg-electric-purple px-6 py-3 font-semibold text-white transition-all hover:bg-neon-pink hover:shadow-[0_0_20px_rgba(255,0,153,0.5)]"
          >
            <Plus size={20} />
            Write Article
          </Link>
        </div>

        {isLoading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-500">
            Error loading blogs. Please try again later.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data && data.map((blog, index) => (
              <BlogCard key={blog._id} blog={blog} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blogs        
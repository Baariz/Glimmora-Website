import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from '../../utils/blogs';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  // 1. Sort & Filter Data
  const { featuredPost, gridPosts } = useMemo(() => {
    // Sort by date descending
    const sorted = [...blogs].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    
    // Filter by category
    const filtered = selectedCategory === "All" 
      ? sorted 
      : sorted.filter(b => b.category === selectedCategory);

    // Split: First one is Featured, Rest are Grid
    return {
      featuredPost: filtered[0] || null,
      gridPosts: filtered.slice(1)
    };
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans pt-32 pb-24">
      
      {/* HEADER: Clean Corporate Minimalist */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="border-l-4 border-[#70564b] pl-8 py-2">
          <span className="text-xs text-[#70564b] font-bold uppercase tracking-[0.4em] mb-4 block">
            Intelligence & Strategy
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2E2A28] tracking-tight">
            Glimmora <span className="text-[#70564b]">Insights.</span>
          </h1>
          <p className="text-gray-600 text-sm mt-6 max-w-3xl font-light">
            Insights for CROs, CISOs, compliance and audit leaders navigating the intersection of AI, governance, risk management, and regulatory change.
          </p>
        </div>

        {/* Professional Filter Bar */}
        <div className="mt-12 border-b border-gray-100 pb-6">
          <p className="text-xs text-gray-500 mb-4 font-medium">
            Filter by topic to explore content relevant to your role and industry
          </p>
          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold uppercase tracking-widest transition-all relative pb-6 -mb-[25px] ${
                  selectedCategory === cat ? "text-[#70564b]" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div layoutId="activeCat" className="absolute bottom-0 left-0 right-0 h-1 bg-[#70564b]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: FEATURED POST (Big Centered/Split Card) --- */}
        <AnimatePresence mode="wait">
          {featuredPost && (
            <motion.div 
              key={featuredPost.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-24"
            >
              <Link to={`/blogs/${featuredPost.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Large Featured Image (Spans 7 columns) */}
                <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden bg-gray-100 rounded-sm shadow-sm">
                  <div className="absolute top-6 left-6 z-10 bg-[#70564b] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                    Latest Analysis
                  </div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                {/* Featured Content (Spans 5 columns) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-[#70564b] font-bold uppercase tracking-widest border-b border-[#70564b] pb-1">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                      {new Date(featuredPost.publishedDate).toLocaleDateString()}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] mb-6 text-[#2E2A28] group-hover:text-[#70564b] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-gray-100 pl-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#70564b] group-hover:gap-5 transition-all">
                    Read Full Briefing <span>&rarr;</span>
                  </div>
                </div>

              </Link>
            </motion.div>
          )}
        </AnimatePresence>


        {/* --- SECTION 2: THE GRID (Remaining Posts) --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 border-t border-gray-100 pt-20">
          <AnimatePresence>
            {gridPosts.map((post) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group flex flex-col h-full"
              >
                <Link to={`/blogs/${post.slug}`} className="flex flex-col h-full">
                  {/* Fixed Ratio Image Container */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-8 rounded-sm">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>

                  {/* Clean Content Wrapper */}
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs text-[#70564b] font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        {new Date(post.publishedDate).toLocaleDateString()}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug mb-4 text-[#2E2A28] group-hover:text-[#70564b] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#70564b] group-hover:text-[#70564b] transition-colors">
                        View Analysis &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {!featuredPost && (
           <div className="py-20 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
             No insights found in this category.
           </div>
        )}

      </div>
    </div>
  );
};

export default Blogs;
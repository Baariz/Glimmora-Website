import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogs } from '../../utils/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <div className="py-40 text-center font-bold text-gray-400">Document Not Found.</div>;

  return (
    <article className="min-h-screen bg-white pt-32 pb-24 text-[#2E2A28] selection:bg-[#70564b] selection:text-white font-sans">
      {/* Subtle Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-[#70564b]" 
        style={{ scaleX }} 
      />

      <div className="max-w-[800px] mx-auto px-6">
        {/* Clean Navigation */}
        <Link 
          to="/blogs" 
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#70564b] mb-12 transition-colors group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Archive
        </Link>

        {/* Minimalist Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6 text-[10px] font-bold uppercase tracking-widest text-[#70564b]">
            <span>{post.category}</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">{new Date(post.publishedDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          
          {/* Title - Reduced Size for "Neat & Clean" look */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 tracking-tight text-[#2E2A28]">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
            <div className="w-10 h-10 bg-[#70564b] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              BZ
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#2E2A28]">{post.author}</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">{post.role}</p>
            </div>
          </div>
        </header>

        {/* Image - Clean Aspect Ratio */}
        <div className="aspect-[21/9] w-full bg-gray-50 overflow-hidden mb-16 rounded-sm">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Content - "Neat" Typography Settings */}
        <div 
          className="prose prose-lg max-w-none 
            /* Headings */
            prose-headings:text-[#2E2A28] prose-headings:font-bold prose-headings:tracking-tight prose-headings:mt-12 prose-headings:mb-4 prose-headings:text-2xl
            
            /* Paragraphs */
            prose-p:text-gray-600 prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-[17px]
            
            /* Lists */
            prose-li:text-gray-600 prose-li:mb-2
            
            /* Quotes/Callouts */
            prose-blockquote:border-l-4 prose-blockquote:border-[#70564b] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-700
            
            /* The 'Subtitle' / Lead Text - Made smaller and cleaner */
            [&_.lead-text]:text-lg [&_.lead-text]:text-gray-800 [&_.lead-text]:font-medium [&_.lead-text]:leading-relaxed [&_.lead-text]:mb-10
            
            /* Insight Boxes - Simplified */
            [&_.insight-box]:bg-gray-50 [&_.insight-box]:p-6 [&_.insight-box]:rounded-lg [&_.insight-box]:my-10 [&_.insight-box]:border [&_.insight-box]:border-gray-100
            [&_.insight-box_h3]:text-[#70564b] [&_.insight-box_h3]:text-sm [&_.insight-box_h3]:uppercase [&_.insight-box_h3]:tracking-widest [&_.insight-box_h3]:mt-0
            
            /* Editorial Callout - Simplified */
            [&_.editorial-callout]:my-10 [&_.editorial-callout]:pl-6 [&_.editorial-callout]:border-l-2 [&_.editorial-callout]:border-[#70564b]
            [&_.editorial-callout_h3]:text-[#70564b] [&_.editorial-callout_h3]:text-xs [&_.editorial-callout_h3]:uppercase [&_.editorial-callout_h3]:tracking-widest [&_.editorial-callout_h3]:mt-0
            [&_.editorial-callout_p]:text-gray-600 [&_.editorial-callout_p]:italic"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Simple Footer CTA */}
        <footer className="mt-20 pt-10 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gray-50 p-8 rounded-lg">
            <div>
              <h4 className="text-xl font-bold mb-1 text-[#2E2A28]">Need strategic advice?</h4>
              <p className="text-gray-500 text-sm">Our GRC experts are ready to assist.</p>
            </div>
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-[#70564b] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#5f4940] transition-colors rounded-sm"
            >
              Contact Us
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BlogPost;
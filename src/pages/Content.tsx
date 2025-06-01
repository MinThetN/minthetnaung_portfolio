import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Applications with Next.js',
    excerpt: 'Learn how to create fast, SEO-friendly web applications using Next.js and React.',
    date: 'Mar 15, 2024',
    category: 'Web Development',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg'
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Tips and Best Practices',
    excerpt: 'Essential TypeScript features and patterns for writing better code.',
    date: 'Mar 10, 2024',
    category: 'TypeScript',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg'
  },
  {
    id: 3,
    title: 'Creating Smooth Animations with Framer Motion',
    excerpt: 'A guide to implementing beautiful animations in React applications.',
    date: 'Mar 5, 2024',
    category: 'Animation',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg'
  }
];

const Content = () => {
  return (
    <PageTransition>
      <div className="section-container">
        <SectionHeading 
          title="Latest Content" 
          subtitle="Articles and tutorials about web development"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-dark-blue-800 to-primary-600 text-white p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to My Newsletter</h3>
              <p className="text-white/80">
                Get the latest articles and tutorials directly in your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-white/40"
              />
              <button className="btn bg-white text-primary-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    image: string;
  };
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  return (
    <motion.article 
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-dark-blue-800 mb-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <span className="text-sm px-3 py-1 bg-primary-50 text-primary-600 rounded-full">
            {post.category}
          </span>
          <a 
            href="#" 
            className="text-primary-500 font-medium text-sm hover:text-primary-600 transition-colors inline-flex items-center gap-1"
          >
            Read More <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Content;
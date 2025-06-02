import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <div className="section-container flex flex-col items-center justify-center min-h-[calc(100vh-2rem)]">
        <SectionHeading 
          title="Contact Me" 
          subtitle="I'd love to hear from you! Fill out the form below to get in touch."
        />
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Mail size={40} className="text-primary-500" />
          </div>
          <form className="w-full space-y-5">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition"
                placeholder="you@email.com"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 transition"
                rows={5}
                placeholder="Type your message..."
              />
            </motion.div>
            <motion.div 
              className="pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button 
                type="submit" 
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message <Mail size={18} />
              </button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
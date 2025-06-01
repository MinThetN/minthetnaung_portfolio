import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="section-container flex flex-col md:flex-row gap-10 items-center min-h-[calc(100vh-2rem)]">
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p 
            className="text-primary-500 font-medium mb-2"
            variants={itemVariants}
          >
            Hi there, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue-800 mb-4"
            variants={itemVariants}
          >
            John Doe
          </motion.h1>
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
              Full Stack Developer
            </h2>
          </motion.div>
          <motion.p 
            className="text-gray-600 mb-8 max-w-lg"
            variants={itemVariants}
          >
            I build exceptional digital experiences with modern technologies. 
            Focused on creating clean, efficient, and user-friendly applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link to="/projects">
              <button className="btn btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </button>
            </Link>
            <button className="btn btn-outline flex items-center gap-2">
              Download CV <Download size={16} />
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-8 flex gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a 
              href="#" 
              className="text-gray-600 hover:text-primary-500 transition-colors"
              aria-label="Github"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-primary-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -inset-4 rounded-full bg-primary-500/20 blur-xl"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
              }}
            />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
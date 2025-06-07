import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


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
            className="text-primary-700 font-semibold font-mono text-xl mb-2"
            variants={itemVariants}
          >
            Hi there, I'm
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue-800 mb-4"
            variants={itemVariants}
          >
            Min Thet Naung
          </motion.h1>
          <motion.div 
            className="mb-6"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
            <Typewriter // Typing animation effect
                words={['Frontend', 'Backend', 'Ui/UX']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </h2>
          </motion.div>
          <motion.p 
            className="text-gray-600 mb-8 max-w-lg"
            variants={itemVariants}
          >
            I build exceptional digital experiences with modern technologies. 
            Focused on creating clean, efficient, and user-friendly applications.
          </motion.p>
          
          {/* View Project button */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link to="/projects">
              {/* <button className="btn btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={16} />
              </button> */}
              <button
                type="submit"
                className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 
                backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full 
                before:transition-all before:duration-700 before:hover:w-full before:-left-full 
                before:hover:left-0 before:rounded-full before:bg-primary-700 hover:text-gray-50 before:-z-10 
                before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 
                overflow-hidden border-2 rounded-full group"
              >
                View Projects
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 
                  ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 
                    7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 
                    8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 
                    14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 
                    18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>

            </Link>
            {/* <button className="btn btn-outline flex items-center gap-2">
              Download CV <Download size={16} />
            </button> */}
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div 
            className="mt-8 flex gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <div className="group relative flex items-center">
              <a
                href="https://github.com/MinThetN"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="flex"
              >
                <Github
                  size={32}
                  className="w-8 h-8 transition-transform duration-200 group-hover:scale-125 group-hover:stroke-primary-700"
                />
              </a>
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border 
              border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out 
              group-hover:scale-100">
                GitHub
              </span>
            </div>
            <div className="group relative flex items-center">
              <a 
                href="https://www.linkedin.com/in/min-thet-naung-31646a269/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex"
              >
                <Linkedin
                  size={32}
                  className="w-8 h-8 transition-transform duration-200 group-hover:scale-125 group-hover:stroke-primary-700"
                />
              </a>
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 origin-left scale-0 px-3 rounded-lg border
               border-gray-300 bg-white py-2 text-sm font-bold shadow-md transition-all duration-300 ease-in-out 
               group-hover:scale-100">
                LinkedIn
              </span>
            </div>
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
                src="/images/profile.jpeg" 
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
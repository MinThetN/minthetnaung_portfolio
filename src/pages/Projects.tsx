import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A complete e-commerce solution with product management, cart functionality, and payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Mini Social',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A modern social networking application built with Next.js , TypeScript, and Prisma. This project features user profiles, posts, notifications, and a responsive UI.',
    technologies: ['Nextjs', 'Typescript', 'Tailwind CSS', 'ShadCn', 'Prisma', 'Nextjs API Route', 'Clerk'],
    link: 'https://m-social.vercel.app/'
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Interactive dashboard for tracking investments, expenses, and financial goals.',
    technologies: ['Vue.js', 'D3.js', 'Firebase'],
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media API',
    category: 'Backend',
    image: 'https://images.pexels.com/photos/7887800/pexels-photo-7887800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'RESTful API for a social media platform with authentication, posts, comments, and user profiles.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: '#'
  },
  {
    id: 5,
    title: 'Weather App',
    category: 'Frontend',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Weather forecasting application with location-based services and interactive maps.',
    technologies: ['React', 'OpenWeatherMap API', 'Leaflet'],
    link: '#'
  },
  {
    id: 6,
    title: 'Content Management System',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Custom CMS for blogs and content websites with markdown support and media management.',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    link: '#'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <PageTransition>
      <div className="section-container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <motion.div 
          className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category 
                ? 'bg-primary-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)' 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-900/70 to-transparent opacity-70" />
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 bg-primary-500 text-white text-xs rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-dark-blue-800">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-500 transition-colors"
              aria-label="View Github Repository"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link}
          className="inline-flex items-center text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors"
        >
          View Project <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
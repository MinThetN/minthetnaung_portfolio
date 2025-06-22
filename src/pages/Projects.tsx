import { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    image: '/images/ecommerce.jpeg',
    description: 'An eCommerce app where users can view products, add them to cart, complete purchases, and enjoy a responsive UI.',
    technologies: ['Nextjs', 'Typescript', 'TailwindCss', 'Sanity', 'Stripe'],
    link: 'https://fullstack-ecommerce-amber.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/ecommerce'
  },
  {
    id: 2,
    title: 'Mini Social',
    image: '/images/m_social.jpeg',
    description: 'A social app for posting, reacting, commenting, and profile customization with a responsive UI.',
    technologies: ['Nextjs', 'Typescript', 'Tailwind CSS', 'Prisma', 'Clerk'],
    link: 'https://m-social.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/mySocial'
  },
  {
    id: 3,
    title: 'To Do List',
    image: '/images/to_do_list.png',
    description: 'A task management app with day/night themes, letting users create, update, and organize tasks with a clean, responsive UI.',
    technologies: ['React', 'Javascript', 'Tailwind CSS'],
    link: 'https://todo-list-taupe-xi.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/todo-list'
  },
  {
    id: 4,
    title: 'Food Recipes',
    image: '/images/food_recipes.png',
    description: 'Discover, search with filtering system, and explore a diverse range of recipes with detailed instructions and images.',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    link: 'https://food-recipes-gray.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/food_recipes'
  },
  {
    id: 5,
    title: 'Memory Game',
    image: '/images/memory_game.png',
    description: 'A card game where players press the start button to begin and try to match pairs of cards within 50 seconds.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    link: 'https://memory-game-mocha.vercel.app/',
    gitRepo: 'https://github.com/MinThetN/memory-game'
  }
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="section-container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={{
                ...project,
                gitRepo: project.gitRepo ?? ''
              }}
            />
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    link: string;
    gitRepo: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="rounded-3xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-80">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-blue-900/70 to-transparent opacity-70" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md text-white text-lg font-bold 
          opacity-0 transition-all duration-300 cursor-pointer select-none border border-white/30 rounded-lg"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex justify-between items-start mb-2 font-mono">
              <h3 className="text-lg font-bold text-white">
                {project.title}
              </h3>
              <div className="flex gap-2">
                <a 
                  href={project.gitRepo} 
                  className="text-white hover:text-primary-500 transition-colors p-2 hover:bg-black rounded-xl"
                  aria-label="View Github Repository"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
            <p className="text-white text-sm mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-primary-700 text-gray-200 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10"
        >
            <button
              className="inline-flex items-center text-white text-sm font-semibold bg-dark-blue-500 
              hover:bg-white hover:text-black transition-colors px-3 py-1 rounded-full shadow-lg focus:outline-none 
              focus:ring-2 focus:ring-primary-300 gap-2"
            >
             Live Demo <ExternalLink size={16} />
            </button>
          </a>
      </div>
    </motion.div>
  );
};

export default Projects;
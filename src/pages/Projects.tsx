import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

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

// Skills data
const skills = {
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Motion', icon: 'https://user-images.githubusercontent.com/7850794/164965509-2a8dc49e-2ed7-4243-a2c9-481b03bbc31a.png' },
    { name: 'Shadcn Ui', icon: 'https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png' },
  ],
  backend: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Next.js API Routes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1607554385/repositories/vercel/logo.png' },
    { name: 'Clerk', icon: 'https://ph-files.imgix.net/297bc3d4-bd2e-4eaa-8fb6-a289cf61ea91.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&frame=1&dpr=1'},
    { name: 'Figma', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  ]
};

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

        {/* Tech Stack Section */}
        <div className="mt-20">
          <SectionHeading 
            title="Tech Stack" 
            subtitle=""
          />
          
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-bold text-dark-blue-800 mb-6">Frontend Development</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {skills.frontend.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-dark-blue-800 mb-6">Backend Development</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {skills.backend.map((skill, index) => (
                  <BackendSkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-dark-blue-800 mb-6">Tools & Platforms</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {skills.tools.map((skill, index) => (
                  <SkillCard key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 bg-primary-700 p-5 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Development Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-primary-700 mb-2">Clean Code</h4>
                <p className="text-gray-600 text-sm">Writing maintainable, efficient, and well-documented code following best practices.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-primary-700 mb-2">Modern Stack</h4>
                <p className="text-gray-600 text-sm">Using the latest technologies and frameworks to build performant applications.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-primary-700 mb-2">Responsive Design</h4>
                <p className="text-gray-600 text-sm">Creating interfaces that work seamlessly across all devices and screen sizes.</p>
              </div>
            </div>
          </motion.div>
        </div>
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

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div 
      className="bg-white border-b-4 border-gray-300 p-2 rounded-xl shadow-none hover:shadow-2xl 
      transition-shadow duration-300 flex flex-col items-center backdrop-blur-md min-w-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-6 h-6 mb-1"
      />
      <span className="text-xs font-medium text-dark-blue-800 text-center break-words">{skill.name}</span>
    </motion.div>
  );
};

interface BackendSkillCardProps {
  skill: {
    name: string;
    icon: string;
  };
  index: number;
}

const BackendSkillCard: React.FC<BackendSkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div 
      className="bg-white border-b-4 border-gray-300 p-3 rounded-xl shadow-none hover:shadow-2xl transition-shadow 
      duration-300 flex flex-col items-center backdrop-blur-md min-w-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="w-7 h-7 mb-1"
      />
      <span className="text-xs font-medium text-dark-blue-800 text-center break-words">{skill.name}</span>
    </motion.div>
  );
};

export default Projects;
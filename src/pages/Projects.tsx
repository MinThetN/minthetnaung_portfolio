import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { getAllProjects, type Project } from '../data/projects/projectsData';
import { getAllSkills, type Skill } from '../data/skills/skillsData';

const Projects = () => {
  // Fetch data using the new data functions
  const projects = getAllProjects();
  const skills = getAllSkills();

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
              project={project}
            />
          ))}
        </motion.div>

        {/* Skills Section */}
        <div className="mt-16">
          <SectionHeading 
            title="My Skills" 
            subtitle="Technologies I work with"
          />
          
          {/* Frontend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Frontend</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Backend Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Backend</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Tools & Others</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {skills.tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

interface ProjectCardProps {
  project: Project;
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
  skill: Skill;
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

// Remove the BackendSkillCard component entirely and replace its usage
// Update the backend and tools sections to use the same SkillCard component

export default Projects;
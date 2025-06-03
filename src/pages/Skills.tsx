import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';

const skills = {
  frontend: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
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

const Skills = () => {
  return (
    <PageTransition>
      <div className="section-container">
        <SectionHeading 
          title="Tech Stack" 
          subtitle="Technologies I work with"
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
          className="mt-16 bg-dark-blue-500 p-5 rounded-xl shadow-md"
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
    </PageTransition>
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
      className="bg-white border-b-4 border-gray-300 p-2 rounded-xl shadow-none hover:shadow-xl 
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
      className="bg-white border-b-4 border-gray-300 p-3 rounded-xl shadow-none hover:shadow-lg transition-shadow duration-300 flex flex-col items-center backdrop-blur-md min-w-0"
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

export default Skills;
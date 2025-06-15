import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Folder, 
  Code2, 
  FileText,
  Github,
  Linkedin,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const sidebarItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> },
    { path: '/about', label: 'About Me', icon: <User size={20} /> },
    { path: '/projects', label: 'Projects', icon: <Folder size={20} /> },
    { path: '/skills', label: 'Expertise', icon: <Code2 size={20} /> },
    { path: '/contact', label: 'Contact', icon: <FileText size={20} /> },
  ];

  const sidebarVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.3
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="w-64 h-full bg-dark-blue-800 text-white p-5 flex flex-col">
      {/* Profile Section */}
      <div className="mb-8 text-center">
        <div className="inline-block rounded-full bg-primary-700 p-1">
          <img
            src="/images/profile.jpeg"
            alt="Min Thet Naung profile"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md cursor-pointer"
          />
        </div>
        <h2 className="mt-3 font-bold text-xl">Min Thet Naung</h2>
        <p className="text-gray-400 text-sm">Full Stack Developer</p>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="flex-1 space-y-2"
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
      >
        {sidebarItems.map((item) => (
          <motion.div key={item.path} variants={itemVariants}>
            <Link to={item.path}>
              <div 
                className={`sidebar-item ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <motion.div
                    className="absolute right-0 h-full w-1 bg-primary-700"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Social Links */}
      <div className="mt-auto pt-5 border-t border-dark-blue-700">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/MinThetN" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/min-thet-naung-31646a269/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
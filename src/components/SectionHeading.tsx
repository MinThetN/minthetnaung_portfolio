import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <motion.h1 
        className="text-dark-blue-800 mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        className="h-1 w-20 bg-primary-500 mt-2"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default SectionHeading;
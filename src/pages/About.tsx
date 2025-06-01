import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="section-container">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="John Doe working" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center border-t-4 border-primary-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="text-3xl font-bold text-dark-blue-800">5+</p>
                <p className="text-gray-500 text-sm">Years</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold text-dark-blue-800 mb-3">Who am I?</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate Full Stack Developer with over 5 years of experience creating 
                web applications using modern technologies. I specialize in building responsive, 
                user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-gray-600">
                My journey in development started with a fascination for problem-solving and 
                creating digital solutions. Since then, I've worked on numerous projects, 
                ranging from small business websites to complex enterprise applications.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary-500" />
                <span className="text-gray-700">Born: Jan 15, 1990</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-500" />
                <span className="text-gray-700">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary-500" />
                <span className="text-gray-700">Freelancer</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary-500" />
                <span className="text-gray-700">BSc Computer Science</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold text-dark-blue-800 mb-3">My Journey</h3>
              <div className="space-y-4">
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary-500 before:content-[''] after:absolute after:left-[7px] after:top-6 after:h-full after:w-0.5 after:bg-primary-200 after:content-['']">
                  <h4 className="text-lg font-semibold text-dark-blue-800">Senior Developer at TechCorp</h4>
                  <p className="text-gray-500 text-sm">2020 - Present</p>
                  <p className="text-gray-600 mt-1">Led development of multiple web applications using React and Node.js.</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary-500 before:content-[''] after:absolute after:left-[7px] after:top-6 after:h-full after:w-0.5 after:bg-primary-200 after:content-['']">
                  <h4 className="text-lg font-semibold text-dark-blue-800">Web Developer at StartupX</h4>
                  <p className="text-gray-500 text-sm">2018 - 2020</p>
                  <p className="text-gray-600 mt-1">Developed and maintained client websites and internal tools.</p>
                </div>
                <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary-500 before:content-['']">
                  <h4 className="text-lg font-semibold text-dark-blue-800">Freelance Developer</h4>
                  <p className="text-gray-500 text-sm">2017 - 2018</p>
                  <p className="text-gray-600 mt-1">Worked on various projects for small businesses and startups.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
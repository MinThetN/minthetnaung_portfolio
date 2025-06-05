import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, University } from 'lucide-react';

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
              {/* <motion.div 
                className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-4 w-32 h-32 flex flex-col items-center justify-center border-t-4 border-primary-500"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="text-gray-500 text-sm">Experience</p>
                <p className="text-3xl font-bold text-dark-blue-800">5+</p>
                <p className="text-gray-500 text-sm">Years</p>
              </motion.div> */}
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
              <h3 className="text-xl font-bold text-dark-blue-800 mb-3">Who I Am</h3>
              <p className="text-gray-600 mb-4">
              I am a Computer Science student and a passionate full-stack developer who loves building modern web applications. 
              I enjoy creating clean, user-friendly interfaces and building strong, reliable backends.
              </p>
              <p className="text-gray-600 mb-4">
              I am especially excited about making websites that look great on all devices and work smoothly for everyone. 
              I love turning ideas into real-life projects that help people and solve problems.
              </p>
              <p className="text-gray-600">
              I'm always looking to improve my skills, learn new things, and stay up-to-date with the latest trends in web 
              development. I can't wait to grow as a developer and work on projects that make a difference.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-rows-5 mb-8"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary-500" />
                <span className="text-gray-700">Born: June 29, 2000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-primary-500" />
                <span className="text-gray-700">Bangkok, Thailand</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-primary-500" />
                <span className="text-gray-700">Student</span>
              </div>
              <div className="flex items-center gap-2">
                <University size={18} className="text-primary-500" />
                <span className="text-gray-700">Assumption University of Thailand</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-primary-500" />
                <span className="text-gray-700">BSc Computer Science</span>
                <span className='text-primary-500 font-bold'>(Current)</span>
              </div>
              <div>
              
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
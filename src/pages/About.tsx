import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, University, Award } from 'lucide-react';

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <PageTransition>
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Gallery Section */}
        <motion.div 
          className="flex justify-center items-center w-full"
          initial="hidden"
          animate="visible"
          variants={imageContainerVariants}
        >
          <div className="gallery">
            <motion.figure className="card" variants={imageVariants}>
              <img
                src="/images/img_7.jpg"
                alt="Lakeview Elegance preview"
                className="w-full h-32 md:h-80 object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </motion.figure>
            <motion.figure className="card" variants={imageVariants}>
              <img
                src="/images/img_5.jpg"
                alt="Skyline Oasis preview"
                className="w-full h-32 md:h-80 object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </motion.figure>
            <motion.figure className="card" variants={imageVariants}>
              <img
                src="/images/img_3.jpg"
                alt="Vista Paradiso preview"
                className="w-full h-32 md:h-80 object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </motion.figure>
            <motion.figure className="card" variants={imageVariants}>
              <img
                src="/images/img_4.jpg"
                alt="Villa Verde preview"
                className="w-full h-32 md:h-80 object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </motion.figure>
          </div>
        </motion.div>
        {/* About Text Section */}
        <div>
          <SectionHeading 
            title="About Me" 
            subtitle="Get to know me better"
          />
          <div className="mb-8">
            <h3 className="text-xl font-bold text-dark-blue-800 mb-3">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I am a Computer Science student and a passionate <span className='font-bold'>full-stack developer</span>  who loves building modern web applications. I enjoy creating clean, user-friendly interfaces and building strong, reliable backends.
            </p>
            <p className="text-gray-600 mb-4">
              I am especially excited about making websites that look great on all devices and work smoothly for everyone. I love turning ideas into real-life projects that help people and solve problems.
            </p>
            <p className="text-gray-600">
              I'm always looking to improve my skills, learn new things, and stay up-to-date with the latest trends in web development. I can't wait to grow as a developer and work on projects that make a difference.
            </p>
          </div>
          <motion.div 
            className="space-y-3"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Calendar size={35} className="text-primary-700 bg-primary-100 rounded-lg p-2" />
              <span className="text-gray-700 font-semibold">Born: June 29, 2000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={35} className="text-primary-700 bg-primary-100 rounded-lg p-2" />
              <span className="text-gray-700 font-semibold">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <University size={35} className="text-primary-700 bg-primary-100 rounded-lg p-2" />
              <span className="text-gray-700 font-semibold">Assumption University of Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={36} className="text-primary-700 bg-primary-100 rounded-lg p-2" />
              <span className="text-gray-700 font-semibold">Bachelor of Computer Science <span className="text-primary-700 font-medium">(2022 - Current)</span></span>
            </div>
          </motion.div>
          
          {/* Certificates Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-dark-blue-800 mb-3">Certificates</h3>
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex items-start gap-2">
                <Award size={35} className="text-primary-700 mt-1 bg-primary-100 rounded-lg p-2" />
                <div>
                  <span className="text-gray-700 font-semibold">Web Development Foundation <span className="text-primary-700 font-medium">(2023)</span></span>
                  <p className="text-gray-600 text-sm font-medium"><span className='text-5px font-bold text-primary-800'> - </span>Creative Coder Myanmar</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
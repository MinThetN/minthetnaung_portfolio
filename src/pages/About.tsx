import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, University } from 'lucide-react';

const About = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Gallery Section */}
        <div className="flex justify-center items-center w-full">
          <div className="gallery">
            <figure className="card">
              <img
                src="https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
                alt="Lakeview Elegance preview"
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </figure>
            <figure className="card">
              <img
                src="https://images.unsplash.com/photo-1704739300067-0cfbf8eb8bd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Skyline Oasis preview"
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </figure>
            <figure className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1700752855424-525ea0615683?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vista Paradiso preview"
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </figure>
            <figure className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1700590338986-0479436a2596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Villa Verde preview"
                className="w-full h-full object-cover rounded-[2.5rem] transition-all duration-300"
              />
            </figure>
          </div>
        </div>
        {/* About Text Section */}
        <div>
          <SectionHeading 
            title="About Me" 
            subtitle="Get to know me better"
          />
          <div className="mb-8">
            <h3 className="text-xl font-bold text-dark-blue-800 mb-3">Who I Am</h3>
            <p className="text-gray-600 mb-4">
              I am a Computer Science student and a passionate full-stack developer who loves building modern web applications. I enjoy creating clean, user-friendly interfaces and building strong, reliable backends.
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
              <Calendar size={18} className="text-primary-500" />
              <span className="text-gray-700">Born: June 29, 2000</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary-500" />
              <span className="text-gray-700">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <University size={18} className="text-primary-500" />
              <span className="text-gray-700">Assumption University of Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-primary-500" />
              <span className="text-gray-700">Bachelor of Computer Science <span className="text-primary-500 font-bold">(2022 - Current)</span></span>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, University, X } from 'lucide-react';
import { useState } from 'react';
const About = () => {
  // Modal state for certificate images
  const [selectedCertificate, setSelectedCertificate] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  // Function to open modal
  const openCertificateModal = (src: string, alt: string, title: string) => {
    setSelectedCertificate({ src, alt, title });
  };

  // Function to close modal
  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

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
      <div className="section-container grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">
        {/* Image Gallery Section */}
        <motion.div 
          className="flex justify-center items-start w-full xl:sticky xl:top-8 order-1 xl:order-1 mb-8 xl:mb-0"
          initial="hidden"
          animate="visible"
          variants={imageContainerVariants}
        >
          <div className="gallery relative w-full max-w-md xl:max-w-none" style={{ height: 'clamp(300px, 50vw, 400px)' }}>
            <motion.figure 
              className="card absolute" 
              style={{ 
                left: '0%', 
                top: '0%', 
                width: 'clamp(60%, 15vw, 70%)'
              }} 
              variants={imageVariants}
            >
              <img
                src="/images/img_7.jpg"
                alt="Lakeview Elegance preview"
                className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-300 shadow-lg"
              />
            </motion.figure>
            <motion.figure 
              className="card absolute" 
              style={{ 
                right: '0%', 
                top: '25%', 
                width: 'clamp(60%, 15vw, 70%)'
              }} 
              variants={imageVariants}
            >
              <img
                src="/images/img_2.jpeg"
                alt="Skyline Oasis preview"
                className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-300 shadow-lg"
              />
            </motion.figure>
            <motion.figure 
              className="card absolute" 
              style={{ 
                left: '0%', 
                top: '50%', 
                width: 'clamp(60%, 15vw, 70%)'
              }} 
              variants={imageVariants}
            >
              <img
                src="/images/img_6.png"
                alt="Vista Paradiso preview"
                className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-300 shadow-lg"
              />
            </motion.figure>
            <motion.figure 
              className="card absolute" 
              style={{ 
                right: '0%', 
                top: '75%', 
                width: 'clamp(60%, 15vw, 70%)'
              }} 
              variants={imageVariants}
            >
              <img
                src="/images/img_1.jpg"
                alt="Villa Verde preview"
                className="w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 object-cover rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] transition-all duration-300 shadow-lg"
              />
            </motion.figure>
          </div>
        </motion.div>
        
        {/* About Text Section */}
        <div className="order-2 xl:order-2">
          <SectionHeading 
            title="About Me" 
            subtitle="Get to know me better"
          />
          <div className="mb-6 lg:mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-dark-blue-800 mb-3">Who I Am</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              I am a Computer Science student and a passionate <span className='font-bold'>full-stack developer</span>  who loves building modern web applications. I enjoy creating clean, user-friendly interfaces and building strong, reliable backends.
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              I am especially excited about making websites that look great on all devices and work smoothly for everyone. I love turning ideas into real-life projects that help people and solve problems.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              I'm always looking to improve my skills, learn new things, and stay up-to-date with the latest trends in web development. I can't wait to grow as a developer and work on projects that make a difference.
            </p>
          </div>
          <motion.div 
            className="space-y-3"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <MapPin size={35} className="text-primary-700 bg-primary-100 rounded-lg p-2 flex-shrink-0" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Bangkok, Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <University size={35} className="text-primary-700 bg-primary-100 rounded-lg p-2 flex-shrink-0" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Assumption University of Thailand</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={36} className="text-primary-700 bg-primary-100 rounded-lg p-2 flex-shrink-0" />
              <span className="text-gray-700 font-semibold text-sm sm:text-base">Bachelor of Computer Science <span className="text-primary-700 font-medium">(2022 - Current)</span></span>
            </div>
          </motion.div>
          
          {/* Certificates Section */}
          <div className="mt-6 lg:mt-8">
            <h3 className="text-lg sm:text-xl font-bold text-dark-blue-800 mb-4">Certificates</h3>
            <motion.div 
              className="grid grid-cols-1 gap-4"
              variants={itemVariants}
            >
              {/* Certificate 1 */}
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl shadow-sm border border-primary-200 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <img src="/images/coder.png" alt="Certificate" className="w-6 h-6 rounded object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-dark-blue-800 font-semibold text-sm sm:text-base">Web Development Foundation</h4>
                    <p className="text-primary-700 text-xs sm:text-sm font-medium mb-1">Creative Coder Myanmar</p>
                    <p className="text-gray-600 text-xs">2023</p>
                  </div>
                </div>
                <div className="w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
                  <img 
                    src="/images/webDev.jpg" 
                    alt="Web Development Foundation Certificate" 
                    className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
                    onClick={() => openCertificateModal("/images/webDev.jpg", "Web Development Foundation Certificate", "Web Development Foundation")}
                  />
                </div>
              </div>

              {/* Certificate 2 */}
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl shadow-sm border border-primary-200 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 rounded-lg bg-primary-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <img src="/images/aws.png" alt="Certificate" className="w-6 h-6 rounded object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-dark-blue-800 font-semibold text-sm sm:text-base">AWS Cloud Developing</h4>
                    <p className="text-primary-700 text-xs sm:text-sm font-medium mb-1">Amazon Web Services</p>
                    <p className="text-gray-600 text-xs">2025</p>
                  </div>
                </div>
                <div className="w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
                  <img 
                    src="/images/cloudDev.png" 
                    alt="AWS Cloud Developing Certificate" 
                    className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
                    onClick={() => openCertificateModal("/images/cloudDev.png", "AWS Cloud Developing Certificate", "AWS Cloud Developing")}
                  />
                </div>
              </div>

              {/* Certificate 3 */}
              <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl shadow-sm border border-primary-200 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <img src="/images/aws.png" alt="Certificate" className="w-6 h-6 rounded object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-dark-blue-800 font-semibold text-sm sm:text-base">AWS Cloud Foundation</h4>
                    <p className="text-primary-700 text-xs sm:text-sm font-medium mb-1">Amazon Web Services</p>
                    <p className="text-gray-600 text-xs">2025</p>
                  </div>
                </div>
                <div className="w-full sm:w-32 h-20 sm:h-24 flex-shrink-0">
                  <img 
                    src="/images/cloudFoundation.png" 
                    alt="Cloud Foundation Certificate" 
                    className="w-full h-full object-cover rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:scale-105"
                    onClick={() => openCertificateModal("/images/cloudFoundation.png", "Cloud Foundation Certificate", "AWS Cloud Foundation")}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Experiences Section */}
          <div className='mt-6 lg:mt-8'>
            <h3 className='text-lg sm:text-xl font-bold text-dark-blue-800 mb-3'>Experiences</h3>
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-primary-50 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <img
                    src="/images/dCode.png"
                    alt=""
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary-100"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-dark-blue-800 text-sm sm:text-base font-medium">Web & iOS Developer (Part Time)</h4>
                  <p className="text-primary-700 font-semibold mb-1 text-sm sm:text-base">D*Code Research Laboratory</p>
                  <p className="text-gray-900 text-xs sm:text-sm mb-2">June 2025 - Present</p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  Collaborated on developing responsive websites for Assumption University, delivering seamless 
                  performance on all devices. Now focused on building the AU Library iOS app, working with the team 
                  to craft engaging and user-friendly solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Certificate Modal*/}
      {selectedCertificate && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={closeCertificateModal}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeCertificateModal}
            className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Certificate title */}
          <div className="absolute top-4 left-4 z-10 bg-white bg-opacity-90 rounded-lg px-3 py-2 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">{selectedCertificate.title}</h3>
          </div>

          {/* Certificate image */}
          <img
            src={selectedCertificate.src}
            alt={selectedCertificate.alt}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>
      )}
    </PageTransition>
  );
};

export default About;
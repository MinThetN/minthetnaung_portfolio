import PageTransition from '../components/PageTransition';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSent(false);
    setIsLoading(true);

    if (!form.current) return;

    emailjs.sendForm(
      'service_lhthb3h',
      'template_92b8sp3',
      form.current,
      'EqsAG6CV9L0UYa2Gu'
    )
    .then(
      () => {
        setSent(true);
        setIsLoading(false);
        if (form.current) form.current.reset();
      },
      () => {
        setError('Failed to send message. Please try again later.');
        setIsLoading(false);
      }
    );
  };

  return (
    <PageTransition>
      <div className="section-container max-w-4xl mx-auto">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="I'd love to hear about your project"
        />
        
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2"></label> */}
                    <input 
                      name="user_name"
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    {/* <label className="block text-sm font-medium text-gray-700 mb-2">Email</label> */}
                    <input 
                      name="user_email"
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label> */}
                  <input 
                    name="subject"
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your subject"
                  />
                </div>
                
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">Message</label> */}
                  <textarea 
                    name="message"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    rows={5}
                    placeholder="Your message"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
                
                {/* Success/Error Messages */}
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
                  >
                    <p className="text-green-600 font-medium">✨ Message sent successfully!</p>
                    <p className="text-green-600 text-sm mt-1">I'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 text-center"
                  >
                    <p className="text-red-600 font-medium">❌ {error}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Simple CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600">
            I will respond within <span className="font-medium text-primary-600">24 hours</span>
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
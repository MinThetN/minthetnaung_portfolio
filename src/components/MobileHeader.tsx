import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileHeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 text-black h-16 px-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        {!isMobileMenuOpen && (
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-primary-700 p-1">
              <img
                src="/images/profile.jpeg"
                alt="Min Thet Naung profile"
                className="w-10 h-10 rounded-full object-cover border-4 border-white shadow-md cursor-pointer"
              />
            </div>
          </motion.div>
        )}
      </div>
      
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`p-2 rounded-lg transition-colors text-primary-700 font-bold ${isMobileMenuOpen ? 'bg-primary-700 text-white' : 'hover:bg-white'}`}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
};

export default MobileHeader;
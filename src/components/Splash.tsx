import { motion } from 'framer-motion';
import { Moon, Stars, Cloud } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 flex flex-col items-center justify-center text-white p-4"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      >
        <Moon size={64} className="text-yellow-200" />
      </motion.div>
      
      <motion.div className="absolute top-20 right-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Stars size={24} className="text-white" />
      </motion.div>
      
      <motion.div className="absolute top-40 left-20"
        animate={{ x: [0, 100, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      >
        <Cloud size={32} className="text-blue-200 opacity-50" />
      </motion.div>

      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold mt-8 mb-4"
      >
        Slumberly 😴
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-center max-w-md mb-8 text-blue-100"
      >
        Your personal sleep companion for better rest and peaceful nights
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/app')}
        className="bg-white text-indigo-900 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
      >
        Get Started →
      </motion.button>
    </motion.div>
  );
};

export default Splash;
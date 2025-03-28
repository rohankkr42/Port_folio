import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative w-48 h-48 mx-auto"
          >
            <img
              src="./image.jpg"
              alt="Rohan Ravi Kumtakar"
              className="rounded-full w-full h-full object-cover shadow-xl ring-4 ring-blue-400"
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.div>
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Rohan Ravi Kumtakar
          </motion.h1>
          <motion.h2 
            className="text-3xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            DevOps Engineer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Highly skilled DevOps Engineer with 3+ years of experience in designing and automating CI/CD pipelines, 
            managing cloud environments, and implementing Infrastructure as Code (IaC).
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://linkedin.com/in/rohankumtakar51" className="text-blue-400 hover:text-blue-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:rkumtakar424@gmail.com" className="text-red-400 hover:text-red-300">
              <Mail size={24} />
            </a>
            <a href="tel:+916361301036" className="text-green-400 hover:text-green-300">
              <Phone size={24} />
            </a>
            <a href="https://github.com/yourusername" className="text-gray-400 hover:text-gray-300">
              <Github size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

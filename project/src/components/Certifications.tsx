import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  "Microsoft Certified: Designing and Implementing Microsoft DevOps",
  "Microsoft Certified: Azure Administrator Associate",
  "AWS Certified Cloud Practitioner",
  "AWS Certified DevOps Engineer Professional"
];

export default function Certifications() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 flex items-start space-x-4 hover:bg-gray-700 transition-colors duration-300"
            >
              <Award className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-100">{cert}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
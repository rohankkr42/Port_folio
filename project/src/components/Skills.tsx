import { motion } from 'framer-motion';

const skills = [
  { category: "DevOps & Automation", items: ["Jenkins", "GitHub Actions", "Terraform", "Ansible", "Helm"] },
  { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud Platform (GCP)"] },
  { category: "Containerization & Orchestration", items: ["Docker", "Kubernetes (EKS, AKS, GKE)"] },
  { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "AWS CloudWatch"] },
  { category: "Security & Compliance", items: ["IAM", "HashiCorp Vault", "SonarQube"] }
];

export default function Skills() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
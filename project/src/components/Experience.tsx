import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <div className="bg-gray-900 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Professional Journey
        </h2>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
            date="March 2023 - Present"
            iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="text-xl font-bold">DevOps Engineer</h3>
            <h4 className="text-blue-400">Tata Consultancy Services</h4>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              <li>Built and maintained Jenkins pipelines, reducing deployment time by 40%</li>
              <li>Deployed containerized applications using Docker and Kubernetes</li>
              <li>Implemented Grafana & Prometheus for real-time monitoring</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
            date="February 2022 - March 2023"
            iconStyle={{ background: 'rgb(59, 130, 246)', color: '#fff' }}
            icon={<Briefcase />}
          >
            <h3 className="text-xl font-bold">Cloud Engineer</h3>
            <h4 className="text-blue-400">Tata Consultancy Services</h4>
            <ul className="mt-4 list-disc list-inside text-gray-300">
              <li>Automated software installations for 200+ servers using Ansible</li>
              <li>Developed modular Terraform templates for cloud infrastructure</li>
              <li>Optimized AWS, Azure, and GCP resources</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid rgb(17, 24, 39)' }}
            date="2022"
            iconStyle={{ background: 'rgb(139, 92, 246)', color: '#fff' }}
            icon={<GraduationCap />}
          >
            <h3 className="text-xl font-bold">Bachelor of Science</h3>
            <h4 className="text-purple-400">Govt Arts and Science College, Karwar</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </motion.div>
    </div>
  );
}
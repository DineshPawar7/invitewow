import React from 'react';
import { motion } from 'framer-motion';
import { FaMousePointer, FaPencilAlt, FaDownload } from 'react-icons/fa';

const steps = [
  {
    icon: <FaMousePointer className="w-12 h-12 text-primary" />,
    title: 'Choose a Template',
    description: 'Browse our collection and pick the perfect design for your event.',
  },
  {
    icon: <FaPencilAlt className="w-12 h-12 text-primary" />,
    title: 'Customize Your Card',
    description: 'Personalize text, colors, and images with our easy-to-use editor.',
  },
  {
    icon: <FaDownload className="w-12 h-12 text-primary" />,
    title: 'Download & Share',
    description: 'Get a high-quality PDF or image file, ready to print or send digitally.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">In three simple steps.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 bg-[#ffe6d6] rounded-full mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
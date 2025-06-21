import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import categoryData from '../data/CategoryData.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const InvitationCards = () => {
  return (
    <section id="templates" className="py-20 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Choose Your Template Category
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with our professionally designed templates.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categoryData.map((category) => (
            <Card key={category.id} card={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationCards;
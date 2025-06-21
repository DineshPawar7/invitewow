import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/ui/Card';
import allTemplates from '../data/TemplatesData.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const TemplateListPage = () => {
  const { categorySlug } = useParams();
  const templates = allTemplates[categorySlug] || [];
  const categoryTitle = capitalizeFirstLetter(categorySlug);

  if (templates.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-red-600">Category Not Found</h2>
          <p className="mt-3 text-gray-600 text-lg">
            We couldn’t find any templates under "<strong>{categorySlug}</strong>"
          </p>
          <Link
            to="/"
            className="mt-6 inline-block bg-rose-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-rose-600 transition"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Link to="/" className="text-primary hover:underline text-sm mb-3 inline-block">
            ← Back to Categories
          </Link>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
            {categoryTitle} Templates
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Browse and edit your perfect template to get started.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Card card={template} />
              <div className="absolute inset-x-0 bottom-1 flex justify-center">
                <Link
                  to={`/edit/${categorySlug}/${template.id}`}
                  className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-hover transition"
                >
                  Edit Template
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TemplateListPage;

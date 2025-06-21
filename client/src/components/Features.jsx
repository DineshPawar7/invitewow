import React from 'react';
import { motion } from 'framer-motion';
import { FaMagic, FaPalette, FaRocket } from 'react-icons/fa';

const features = [
    { icon: <FaPalette className="w-10 h-10 text-white" />, title: 'Full Customization', description: 'Change colors, fonts, and layouts to match your style perfectly.' },
    { icon: <FaMagic className="w-10 h-10 text-white" />, title: 'Easy to Use Editor', description: 'Our intuitive editor makes designing simple for everyone.' },
    { icon: <FaRocket className="w-10 h-10 text-white" />, title: 'High-Quality Downloads', description: 'Download your designs in high resolution, ready for printing.' },
]

const Features = () => {
  return (
    <section className="py-20 bg-gray-50 rounded-2xl">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-extrabold text-gray-800">Why Choose Us?</h2>
                 <p className="mt-4 text-lg text-gray-600">Everything you need to create stunning invitations.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary mx-auto mb-6">
                           {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features
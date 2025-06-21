import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-12 pt-16 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10"
      >
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">InviteWOW</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            InviteWOW crafts personalized invitation solutions for every moment —
            from weddings and birthdays to school send-offs and professional meetings.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="https://www.youtube.com/@DineshPawar_.07" aria-label="Facebook" className="hover:text-white transition-colors duration-200">
              <FaYoutube />
            </a>
            <a href="github.com/DineshPawar7" aria-label="Twitter" className="hover:text-white transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dineshpawar07/" aria-label="LinkedIn" className="hover:text-white transition-colors duration-200">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/mernengineers" aria-label="Instagram" className="hover:text-white transition-colors duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/press" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/documentation" className="hover:text-white">Documentation</a></li>
            <li><a href="/tutorials" className="hover:text-white">Tutorials</a></li>
            <li><a href="/templates" className="hover:text-white">Templates</a></li>
            <li><a href="/inspiration" className="hover:text-white">Inspiration</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/help-center" className="hover:text-white">Help Center</a></li>
            <li><a href="/contactUs" className="hover:text-white">Contact Us</a></li>
            <li><a href="/live-chat" className="hover:text-white">Live Chat</a></li>
            <li><a href="/community" className="hover:text-white">Community</a></li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mt-14"
      >
        <h3 className="text-xl text-white font-semibold mb-3 text-center">Subscribe to Our Newsletter</h3>
        <form className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-primary hover:bg-hover transition-colors duration-200 text-white font-medium rounded"
          >
            Subscribe
          </button>
        </form>
      </motion.div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Dinesh Pawar. All rights reserved. &nbsp;|&nbsp;
          <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
          &nbsp;|&nbsp;
          <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

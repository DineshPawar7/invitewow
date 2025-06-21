import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero.jpg";
import SearchInput from "../components/ui/SearchInput";

const Hero = () => {
  return (
    <section className="bg-background rounded-2xl">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 lg:w-3/5 mb-10 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-textPrimary leading-tight">
            Create your designs with us
          </h1>
          <p className="mt-6 text-lg text-[#d2d2d2] dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Easily customize beautiful invitations for any occasion. From
            weddings to birthdays, we have a template for you.
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <SearchInput placeholder="Search 'wedding', 'etc'..." />
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 lg:w-2/5 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={HeroImage}
            alt="Invitation design examples"
            className="rounded-lg shadow-2xl w-full max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

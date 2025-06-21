import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Card = ({ card, basePath = "/templates", index = 0 }) => {
  const linkTo = card.slug ? `${basePath}/${card.slug}` : "#";

  return (
    <Link to={linkTo} className="block group">
      <motion.div
        className="w-full max-w-sm bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden 
                   transition-all duration-300 ease-in-out
                   hover:shadow-2xl hover:-translate-y-2"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <div className="relative w-full bg-black">
          <img
            src={card.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-lg opacity-80"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <img
            src={card.image}
            alt={card.title}
            className="relative w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          {card.tags && (
            <div className="flex flex-wrap gap-2 mb-3">
              {card.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
            {card.title}
          </h3>
          {card.description && (
            <p className="text-sm text-slate-600 mb-4 line-clamp-3">
              {card.description}
            </p>
          )}
          {card.buttonText && (
            <div className="mt-4 flex items-center font-semibold text-primary">
              <span>{card.buttonText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;

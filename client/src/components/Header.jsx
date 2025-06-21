import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenuOutline } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";

const DROPDOWN_ITEMS = {
  cardTypes: ["Wedding", "Birthday", "Shardh", "School Send-off", "Meetings"],
  languages: ["English", "Hindi", "Marathi"],
};

const Header = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleNavigate = (category) => {
    navigate(`/templates/${category.toLowerCase().replace(/\s+/g, "-")}`);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md shadow-gray-300 px-4 py-3 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-primary cursor-pointer">
          InviteWOW
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-2xl focus:outline-none"
          >
            <TiThMenuOutline />
          </button>
        </div>

        <nav
          className={`md:flex md:items-center md:static absolute left-0 right-0 top-[60px] bg-white md:bg-transparent px-4 md:px-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="/" className="hover:text-hover font-medium">
                Home
              </a>
            </li>

            <DropdownMenu
              label="Card Types"
              items={DROPDOWN_ITEMS.cardTypes}
              isOpen={activeDropdown === "cardTypes"}
              onToggle={() => toggleDropdown("cardTypes")}
              onItemClick={handleNavigate}
            />

            <DropdownMenu
              label="Languages"
              items={DROPDOWN_ITEMS.languages}
              isOpen={activeDropdown === "languages"}
              onToggle={() => toggleDropdown("languages")}
              onItemClick={(lang) => {
                alert(`Language switched to: ${lang}`);
                setActiveDropdown(null);
              }}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

const DropdownMenu = ({ label, items, isOpen, onToggle, onItemClick }) => (
  <li
    className="relative"
    onMouseEnter={onToggle}
    onMouseLeave={() => onToggle(null)}
  >
    <button className="hover:text-hover font-medium flex items-center gap-1">
      <span>{label}</span>
      <RiArrowDropDownLine className="text-xl" />
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg w-44 z-10"
        >
          {items.map((item) => (
            <button
              key={item}
              onClick={() => onItemClick(item)}
              className="block w-full text-left px-4 py-2 hover:bg-secondary"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </li>
);

export default Header;

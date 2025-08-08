import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Biography', path: '/' },
  { label: 'Area of Interest', path: '/area-of-interest' },
  { label: 'Distinctions', path: '/distinctions' },
  { label: 'Publications', path: '/publications' },
  { label: 'Selected Publications', path: '/selected-publications' },
  { label: 'Group Members', path: '/group-members' },
  { label: 'Projects', path: '/projects' },
  { label: 'Available Facilities', path: '/facilities' },
  { label: 'Position Available', path: '/positions' },
  { label: 'Collaborations', path: '/collaboration' },
  { label: 'Group Activities', path: '/group-activities' },
  { label: 'Visits', path: '/visits' }, // optional route if you have it
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#85182a] text-white py-5 px-5 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-14 w-14 object-contain" />
        <div className="leading-tight">
          <h1 className="font-bold text-lg sm:text-xl">
            School of Materials Science and Technology
          </h1>
          <p className="text-yellow-200 text-sm sm:text-base">
            Indian Institute of Technology (BHU) Varanasi
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-4 text-sm font-medium items-center relative">
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-md shadow transition-all hover:scale-105 ${
              isActive(item.path)
                ? 'bg-white text-[#85182a] font-semibold shadow-lg'
                : 'bg-[#bd1f36] text-white hover:shadow-[#e01e37]'
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Dropdown Button */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-4 py-2 bg-[#da1e37] text-white rounded-md shadow hover:shadow-[#e01e37] hover:scale-105 transition-all"
          >
            More
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.2}}
                className="absolute right-0 mt-2 w-64 bg-white text-black shadow-xl rounded-lg z-50 overflow-hidden"
              >
                {navItems.slice(5).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`block w-full text-left px-4 py-2 transition-all ${
                      isActive(item.path)
                        ? 'bg-[#85182a] text-white font-semibold'
                        : 'hover:bg-[#e01e37] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

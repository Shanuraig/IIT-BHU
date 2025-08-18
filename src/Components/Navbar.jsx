import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

const navItems = [
  { label: "Biography", path: "/" },
  { label: "Area of Interest", path: "/area-of-interest" },
  { label: "Distinctions", path: "/distinctions" },
  { label: "Publications", path: "/publications" },
  { label: "Selected Publications", path: "/selected-publications" },
  { label: "Group Members", path: "/group-members" },
  { label: "Projects", path: "/projects" },
  { label: "Available Facilities", path: "/facilities" },
  { label: "Position Available", path: "/positions" },
  { label: "Collaborations", path: "/collaboration" },
  { label: "Group Activities", path: "/group-activities" },
  { label: "Visits", path: "/visits" },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -10, scale: 0.95 },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "100%" },
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Detect scroll direction & shadow toggle
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }

      setScrolled(window.scrollY > 10); // shadow toggle
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔒 Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#85182a] text-white py-4 px-5 flex items-center justify-between sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
        <div className="leading-tight">
          <h1 className="font-bold text-lg sm:text-xl">
            School of Materials Science and Technology
          </h1>
          <p className="text-yellow-200 text-sm sm:text-base">
            Indian Institute of Technology (BHU) Varanasi
          </p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-4 text-sm font-medium items-center relative">
        {navItems.slice(0, 5).map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setDropdownOpen(false)}
            className={`px-4 py-2 rounded-md shadow transition-all hover:scale-105 ${
              isActive(item.path)
                ? "bg-white text-[#85182a] font-semibold shadow-lg"
                : "bg-[#bd1f36] text-white hover:shadow-[#e01e37]"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Dropdown Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={`px-4 py-2 rounded-md shadow transition-all hover:scale-105 flex items-center gap-1 ${
              dropdownOpen
                ? "bg-white text-[#85182a] font-semibold shadow-lg"
                : "bg-[#bd1f36] text-white hover:shadow-[#e01e37]"
            }`}
          >
            More
            <motion.span
              animate={{ rotate: dropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-64 bg-white text-black shadow-xl rounded-lg z-50 overflow-hidden"
              >
                {navItems.slice(5).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setDropdownOpen(false)}
                    className={`block w-full text-left px-4 py-2 transition-all ${
                      isActive(item.path)
                        ? "bg-[#85182a] text-white font-semibold"
                        : "hover:bg-[#e01e37] hover:text-white"
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

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-[#85182a] text-white shadow-2xl z-50 flex flex-col p-6 space-y-4 md:hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <button className="text-2xl" onClick={() => setMobileOpen(false)}>
                ✖
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-md transition-all ${
                  isActive(item.path)
                    ? "bg-white text-[#85182a] font-semibold shadow-lg"
                    : "hover:bg-[#e01e37]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

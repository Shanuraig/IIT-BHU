import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaOrcid,
} from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import profImage from '../assets/Sanjay.png';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white py-10 px-6 md:px-16">
      
      {/* Image with glow hover */}
      <motion.div
        className="w-full md:w-1/3 mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{
          scale: 1.03,
          boxShadow: '0 0 25px rgba(224, 30, 55, 0.6)',
        }}
      >
        <img
          src={profImage}
          alt="Professor"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </motion.div>

      {/* Info with glow text effect */}
      <motion.div
        className="md:ml-10 text-center md:text-left space-y-2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Dr. Sanjay Singh</h1>
        <p className="text-lg font-semibold text-gray-700 mt-2">Associate Professor</p>
        <p className="text-gray-600">School of Materials Science and Technology, IIT (BHU) Varanasi</p>
        <p className="text-gray-600 mt-1">+91 542-7165505</p>
        <p className="text-gray-600">ssingh.mst@iitbhu.ac.in</p>
        <motion.a
          href="https://iitbhu.ac.in/dept/mst/people/ssinghmst"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.07,
            boxShadow: '0 0 15px #e01e37',
          }}
          whileTap={{ scale: 0.9 }}
          className="inline-block mt-3 px-6 py-2 text-white bg-[#bd1f36] rounded-full transition font-medium shadow-md"
        >
          Visit My Website
        </motion.a>

        {/* Social Icons */}
         <div className="flex justify-center md:justify-start gap-6 mt-5">
          <a href="https://www.facebook.com/sanjay.singh.633990" aria-label="Facebook" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300 hover:scale-110" />
          </a>
          <a href="#" aria-label="Twitter" target="_blank" rel="noreferrer">
            <FaTwitter className="text-[#1DA1F2] hover:text-[#0d8ddf] text-3xl transition duration-300 hover:scale-110" />
          </a>
          <a href="#" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="text-[#0077B5] hover:text-[#005a8e] text-3xl transition duration-300 hover:scale-110" />
          </a>
          <a href="https://orcid.org/0000-0001-7339-9057?lang=en" aria-label="ORCID" target="_blank" rel="noreferrer">
            <FaOrcid className="text-[#A6CE39] hover:text-[#8bbf33] text-3xl transition duration-300 hover:scale-110" />
          </a>
          <a href="https://www.researchgate.net/profile/Sanjay-Singh-17" aria-label="ResearchGate" target="_blank" rel="noreferrer">
            <SiResearchgate className="text-[#00CCBB] hover:text-[#099] text-3xl transition duration-300 hover:scale-110" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

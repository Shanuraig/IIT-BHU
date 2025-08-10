import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import {
  GiMagnet,
  GiCrystalGrowth,
  GiCooler,
  GiAtomicSlashes,
} from "react-icons/gi";
import { FaMicroscope, FaLayerGroup, FaProjectDiagram } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { RiShape2Fill } from "react-icons/ri";

// ✅ Moved data outside to avoid re-creation on each render
const INTERESTS_DATA = [
  {
    title: "Heusler Compounds",
    icon: <FaLayerGroup size={28} className="text-blue-700" />,
  },
  {
    title: "Spintronics",
    icon: <GiAtomicSlashes size={28} className="text-purple-600" />,
  },
  {
    title: "Topological and Quantum Materials",
    icon: <MdScience size={28} className="text-green-600" />,
  },
  {
    title: "X-ray and Neutron Diffraction",
    icon: <FaMicroscope size={28} className="text-indigo-600" />,
  },
  {
    title: "Magnetism",
    icon: <GiMagnet size={28} className="text-red-600" />,
  },
  {
    title: "Multiferroic Device",
    icon: <FaProjectDiagram size={28} className="text-yellow-600" />,
  },
  {
    title: "Shape Memory Alloys",
    icon: <RiShape2Fill size={28} className="text-pink-600" />,
  },
  {
    title: "Solid State Cooling",
    icon: <GiCooler size={28} className="text-cyan-600" />,
  },
  {
    title: "Phase Transition",
    icon: <GiCrystalGrowth size={28} className="text-fuchsia-600" />,
  },
];

const AreaOfInterest = () => {
  // ✅ useMemo so the array reference is stable (important for SSR hydration)
  const interests = useMemo(() => INTERESTS_DATA, []);

  return (
    <section
      id="areaOfInterest"
      className="scroll-mt-35 bg-white p-6 rounded-lg shadow"
    >
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Area of Interest
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] text-black-500 flex items-start gap-4 min-h-[90px]" // ✅ min-h ensures no white flash
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)",
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mt-1">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default memo(AreaOfInterest);

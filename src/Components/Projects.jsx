import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    year: '2024–2025',
    title: 'Investigation of the topological Hall effect (THE)',
    organization:
      'Indo-Korea Science and Technology (IKST), grant ~14.95 Lakhs (PI)',
  },
  {
    year: '2024–2028',
    title: 'Development of Indigenous AM Metal Powders',
    organization:
      'DRDO, Ministry of Defence, grant ~1990.71 Lakhs (Co-PI)',
  },
  {
    year: '2023–2025',
    title: 'Single Crystal Growth Facility for Intermetallics',
    organization:
      'SERB-DST, grant ~20 Lakhs (Co-PI)',
  },
  {
    year: '2022–2024',
    title: 'Cu-Al Alloy for Aerospace Applications',
    organization:
      'DST-CST, grant ~11 Lakhs (Co-PI)',
  },
  {
    year: '2022–2025',
    title: 'Anomalous Nernst Effect in Heusler Alloys',
    organization:
      'SERB-DST (CRG), grant ~68.42 Lakhs (Principal Investigator)',
  },
  {
    year: '2018–2021',
    title: 'Reversible Magnetocaloric Effect in Heusler Alloys',
    organization:
      'SERB-DST, grant ~50 Lakhs (Principal Investigator)',
  },
  {
    year: '2017–2022',
    title: 'Ramanujan Fellowship',
    organization:
      'SERB, grant ~35 Lakhs (Principal Investigator)',
  },
  {
    year: '—',
    title: 'Designing Heusler Alloys for Magnetic Refrigeration',
    organization:
      'IIT (BHU) Seed Money Grant, ~10 Lakhs (Principal Investigator)',
  },
  {
    year: '2018–2022',
    title: 'Elastocaloric Effect Setup for Caloric Studies',
    organization:
      'UGC-DAE CSR, Indore, grant ~11 Lakhs (Principal Investigator)',
  },
  {
    year: '2021–2022',
    title: 'Heusler Alloys for Spintronics',
    organization:
      'IKST, Bengaluru, grant ~14.75 Lakhs (Principal Investigator)',
  },
  {
    year: '2020–2021',
    title: 'Topological Co-Based Heusler Alloys',
    organization:
      'IKST, Bengaluru, grant ~14.90 Lakhs (Principal Investigator)',
  },
];

const Projects = () => {
  return (
  <section id="projects" className="py-10 px-6 md:px-16 bg-white">
    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
      Projects
    </h2>
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] text-black-500 flex flex-col sm:flex-row sm:items-center gap-4"
          whileHover={{
            scale: 1.04,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Number Badge */}
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e01e37] text-white font-bold">
            {index + 1}
          </span>

          {/* Project Info */}
          <div>
            <p className="text-sm text-gray-500 font-medium">{project.year}</p>
            <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-700 text-sm">{project.organization}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);
};

export default Projects;

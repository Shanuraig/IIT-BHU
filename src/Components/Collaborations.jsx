import React from 'react';
import { motion } from 'framer-motion';

const collaborations = [
  { title: 'Max Planck Institute for Chemical Physics of Solids', location: 'Dresden, Germany' },
  { title: 'Institute of Laue Langevin', location: 'Grenoble, France' },
  { title: 'Technical University of Munich', location: 'Germany' },
  { title: 'Max Planck Institute for Iron Research', location: 'Düsseldorf, Germany' },
  { title: 'Technical University Dresden', location: 'Germany' },
  { title: 'IMEM-CNR', location: 'Parma, Italy' },
  { title: 'Institute of Physics', location: 'Praha, Czech Republic' },
  { title: 'European Synchrotron Radiation Facility', location: 'Grenoble, France' },
  { title: 'Rutherford Appleton Laboratory', location: 'Didcot, UK' },
  { title: 'National Institute of Materials Science (NIMS)', location: 'Japan' },
  { title: 'Hiroshima University', location: 'Japan' },
  { title: 'UGC-DAE-CSR', location: 'Indore, India' },
  { title: 'Bharathidasan University', location: 'India' },
  { title: 'TIFR', location: 'Mumbai, India' },
  { title: 'IISER', location: 'Pune, India' },
  { title: 'IISER', location: 'Bhopal, India' },
  { title: 'IIT', location: 'Mandi, India' },
  { title: 'IIT', location: 'Delhi, India' },
];

const Collaborations = () => {
  return (
    <section id="collaborations" className="py-10 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Collaborations
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collaborations.map((collab, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] text-black-500"
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-800">{collab.title}</h3>
            {collab.location && (
              <p className="text-gray-700 mt-1 text-sm">{collab.location}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collaborations;

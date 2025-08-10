import React from 'react';
import { motion } from 'framer-motion';

const awards = [
  {
    year: '2022',
    title: 'Emerging Leader in the field',
    organization: 'Journal of Physics D: Applied Physics.',
  },
  {
    year: '2021',
    title: 'Member',
    organization: 'Indian National Young Academy of Sciences (INYAS)',
  },
  {
    year: '2018',
    title: 'Young Scientist Medal',
    organization: 'Indian National Science Academy (INSA)',
  },
  {
    year: '2017',
    title: 'Ramanujan Fellowship',
    organization:
      'Science and Engineering Research Board - DST, Government of India.',
  },
  {
    year: '2016',
    title: 'Max-Planck Post Doctoral Fellowship',
    organization: 'MPI-CPfS, Dresden, Germany.',
  },
  {
    year: '2016',
    title: 'Dr. A.P.J. Abdul Kalam Award for Research',
    organization:
      'By Honourable Chief Minister of Madhya Pradesh. Award includes 1 Lakh INR.',
  },
  {
    year: '2013',
    title: 'Alexander von Humboldt Fellowship Award',
    organization: 'Humboldt Foundation Germany.',
  },
  {
    year: '2013',
    title: 'Inspire Faculty Award',
    organization: 'Department of Science and Technology, Government of India.',
  },
  {
    year: '2009',
    title: 'Best Oral Presentation Award',
    organization:
      'International Conference on Active/Smart Materials, Jan 7-9, Madurai, India.',
  },
];

const Distinctions = () => {
  return (
    <section id="distinctions" className="py-10 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Distinctions & Awards
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] text-black-500 flex items-start gap-4"
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay:index*0.1}}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 font-medium">{award.year}</p>
            <h3 className="text-lg font-semibold text-gray-800 mt-1">{award.title}</h3>
            <p className="text-gray-700 mt-1 text-sm">{award.organization}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Distinctions;

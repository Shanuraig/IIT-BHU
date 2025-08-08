import React, { useState } from 'react';
import publicationsData from '../Data/publications.json';
import { motion, AnimatePresence } from 'framer-motion';

const Publication = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openYear, setOpenYear] = useState(null);

  const handleToggle = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  const filterAndGroup = (type) => {
    const filtered = publicationsData
      .filter(pub => pub.type === type && pub.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => b.year - a.year);

    const grouped = {};
    filtered.forEach(pub => {
      grouped[pub.year] = grouped[pub.year] || [];
      grouped[pub.year].push(pub);
    });

    return grouped;
  };

  const renderAccordion = (groupedData) => (
    Object.entries(groupedData).map(([year, pubs]) => (
      <div key={year} className="border-b">
        <button
          onClick={() => handleToggle(year)}
          className="w-full text-left py-2 font-semibold text-[#bd1f36] hover:text-[#e01e37]"
        >
          {year} ({pubs.length})
        </button>
        <AnimatePresence>
          {openYear === year && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="ml-4"
            >
              <ul className="list-disc pl-5 text-sm text-gray-700">
                {pubs.map((pub, index) => (
                  <li key={index} className="my-2">{pub.title}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))
  );

  const journals = filterAndGroup('journal');
  const conferences = filterAndGroup('conference');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <input
        type="text"
        placeholder="Search publications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-2 border rounded shadow"
      />
      <h2 className="text-2xl font-bold mb-4 text-[#bd1f36]">Journal Publications</h2>
      {renderAccordion(journals)}

      <h2 className="text-2xl font-bold mt-8 mb-4 text-[#bd1f36]">Papers presented in conferences:</h2>
      {renderAccordion(conferences)}
    </div>
  );
};

export default Publication;

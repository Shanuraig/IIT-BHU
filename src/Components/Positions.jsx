import React from 'react';
import { motion } from 'framer-motion';

const Positions = () => {
  return (
    <section id="positions" className="py-12 px-4 md:px-16 bg-[#fdfdfd]">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg border border-red-200 rounded-xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-900 mb-6 text-center">
          Positions Available
        </h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          PhD positions are available for students who have already qualified <strong>CSIR (JRF)</strong> or have a <strong>DST Inspire fellowship</strong>. 
          Application with a detailed CV can be sent to the Principal Investigator via email:{" "}
          <a
            href="mailto:ssingh.mst@iitbhu.ac.in"
            className="text-blue-700 underline"
          >
            ssingh.mst@iitbhu.ac.in
          </a>.
        </p>
        <p className="mt-4 text-gray-800 text-lg">
          Position for <strong>GATE qualified</strong> students will be open soon.
        </p>
      </motion.div>
    </section>
  );
};

export default Positions;

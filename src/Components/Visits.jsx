import React from "react";
import { motion } from "framer-motion";
const visitsData = [
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "29/04/2023 to 01/05/2023"
  },
  {
    facility: "High pressure Xpress beamline at Elettra Synchrotron Trieste, Italy",
    date: "03/11/22 to 07/11/22"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "12/09/22 to 15/09/22"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "30/07/22 to 03/07/22"
  },
  {
    facility: "High pressure Xpress beamline at Elettra Synchrotron Trieste, Italy",
    date: "31/05/22 to 05/06/22"
  },
  {
    facility: "WISH neutron diffraction spectrometer, ISIS Pulsed Neutron and Muon Source, Rutherford Appleton Laboratory, Harwell Oxford, Didcot, UK",
    date: "16/02/20 to 22/02/20"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "02/12/2019 to 06/12/2019"
  },
  {
    facility: "XAFS beamline at Elettra Synchrotron Trieste, Italy",
    date: "25/11/19 to 01/12/19"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "22/11/2018 to 26/11/2018"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "29/05/18 to 05/06/18"
  },
  {
    facility: "High-energy X-ray diffraction (XRD) beamline P07, DESY, Hamburg, Germany",
    date: "02/07/17 to 06/07/17"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "07/05/17 to 16/05/17"
  },
  {
    facility: "High Intensity two axis diffractometer D20, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "16/02/2017 to 20/02/2017"
  },
  {
    facility: "High resolution neutron diffraction diffractometer D2B, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "19/09/2016 to 21/09/2016"
  },
  {
    facility: "High-energy X-ray diffraction (XRD) beamline P07, DESY, Hamburg, Germany",
    date: "22/09/2016 to 25/09/2016"
  },
  {
    facility: "High resolution neutron diffraction diffractometer D2B, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "07/07/2016 to 10/07/2016"
  },
  {
    facility: "High resolution neutron powder diffractometer, ISIS Pulsed Neutron and Muon Source, Rutherford Appleton Laboratory, Harwell Oxford, Didcot, UK",
    date: "24/10/16 to 28/10/16"
  },
  {
    facility: "MuSR spectrometer, EMU, ISIS Pulsed Neutron and Muon Source, Rutherford Appleton Laboratory, Harwell Oxford, Didcot, UK",
    date: "25/04/16 to 28/04/16"
  },
  {
    facility: "Hot neutron four circle diffractometer D9, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "13/10/2015 to 24/10/2015"
  },
  {
    facility: "High resolution neutron diffraction diffractometer D2B, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "02/07/2015 to 09/07/2015"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "22/06/2015 to 24/06/2015"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "27/01/2014 to 29/01/2014"
  },
  {
    facility: "RRCAT, INDUS-II, Indore, India",
    date: "2014"
  },
  {
    facility: "Powder Diffraction and Total Scattering Beamline P02.1, DESY, Hamburg, Germany",
    date: "08/11/2013 to 11/11/2013"
  },
  {
    facility: "Indian Beamline (BL-16), Photon Factory, KEK, High Energy Accelerator Research Organization, Tsukuba-shi, Ibaraki-ken, JAPAN",
    date: "January 2013 to December 2013"
  },
  {
    facility: "High resolution neutron diffraction diffractometer D2B, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "01/08/2011 to 06/08/2011"
  },
  {
    facility: "High resolution x-ray diffraction beamline ID31, ESRF, Grenoble, France",
    date: "22/06/2011 to 24/06/2011"
  },
  {
    facility: "Hard X-ray photoemission beamline ID32, ESRF, Grenoble, France",
    date: "15/06/2011 to 21/06/2011"
  },
  {
    facility: "Institute Laue-Langevin (ILL), Grenoble, France",
    date: "23/01/2011 to 31/01/2011"
  },
  {
    facility: "RRCAT, INDUS-I, Indore, India",
    date: "2010 to 2012"
  },
  {
    facility: "High resolution neutron diffraction diffractometer D2B, Institute Laue-Langevin (ILL), Grenoble, France",
    date: "22/11/2010 to 30/11/2010"
  }
];

const Visits = () => {
  return (
  <section id="visits" className="py-10 px-6 md:px-16 bg-white">
    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
      Visit to Synchrotron/Neutron Radiation Facilities
    </h2>
    <div className="flex flex-col gap-6">
      {visitsData.map((visit, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] flex flex-col sm:flex-row sm:items-center sm:justify-between"
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.03 }}
          viewport={{ once: true }}
        >
          {/* Number Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e01e37] text-white font-bold">
              {index + 1}
            </span>
            {/* Facility Name */}
            <h3 className="text-lg font-semibold text-gray-800">
              {visit.facility}
            </h3>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-600 font-medium mt-2 sm:mt-0">
            {visit.date}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);


};

export default Visits;

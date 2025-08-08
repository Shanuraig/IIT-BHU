import React from 'react';
import { motion } from 'framer-motion';

const activities = [
  {
    name: 'Dr. Sanjay Singh',
    event: 'Invited talk entitled as, "Atomic ordering and Berry phase driven anomalous Hall effect in Co-based Heusler compounds"',
    place: 'PSCES-2024 (IISER-Bhopal), April 2024',
  },
  {
    name: 'Dr. Sanjay Singh',
    event: 'Invited talk at India@DESY User\'s Workshop on "Applications of synchrotron technique in incommensurate phase transitions in shape memory alloys"',
    place: 'JNCASR, Bengaluru (March 2024)',
  },
  {
    name: 'Mr. Krishna Kant Dubey',
    event: 'Magnetic cooling prototype selected for highlight in Quarterly bulletin of National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS)',
    place: 'October 2023',
  },
  {
    name: 'Dr. Sanjay Singh',
    event: 'Invited talk entitled as, "Atomic ordering and Berry phase driven anomalous Hall effect in Co-based Heusler compounds"',
    place: 'AMBT, BHU (Oct 2023)',
  },{
    name: "Mr. Krishna Kant Dubey, Ms. Nisha Shahi and Ms. Shivani Rastogi",
    event: "Awarded Participation Certificates for showcasing their works in G-20 Summit",
    place: "CIF, IIT BHU (Aug. 2023)"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Invited talk on “Understanding the atomic ordering and magnetic structure: Fundamental and analysis tool”",
    place: "IIIT Allahabad (June 2023)"
  },
  {
    name: "Ms. Nisha Shahi",
    event: "Awarded with Best Poster Presentation Award",
    place: "CUSB Gaya (March 2023)"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Invited talk on “Atomic ordering and Berry phase driven anomalous Hall in cobalt based Heusler alloys”",
    place: "CUSB Gaya (March 2023)"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Invited talk on “Atomic ordering and Berry-phase driven anomalous Hall in Heusler compounds”",
    place: "IACS Kolkata (Feb 2023)"
  },
  {
    name: "Ms. Shivani Rastogi and Ms. Nisha Shahi",
    event: "Awarded Participation certificate for poster presentation in International Conference on Advanced Materials: Properties and Applications",
    place: "Goa University (20-24 Feb 2023)"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Invited talk on “Understanding the atomic ordering and magnetic structure: Fundamental and analysis tool”",
    place: "CUSB, Gaya (Jan 2023)"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Talk delivered at IIT Delhi-UB (University of Buffalo) Conclave",
    place: "IIT Delhi (November 2022)"
  },
  {
    name: "Mr. Krishna Kant Dubey and Ms. Shivani Rastogi",
    event: "Pressure & Magnetic field dependent X-ray Diffraction",
    place: "Elettra, Triesty, Italy. November-2022"
  },
  {
    name: "Dr. Sanjay Singh",
    event: "Invited talk entitled as “Atomic ordering and Berry phase driven anomalous Hall in cobalt-based Heusler alloys”",
    place: "QMAT, IIT Kanpur (Sep 2022)"
  },
  {
    name: "Dr. S. Singh and Mr. Krishna Kant Dubey",
    event: "XRD and PDF Measurements at P02.1 beamline",
    place: "Petra-III, DESY, Hamburg, Germany. September-2022"
  },
  {
    name: "Dr. S. Singh, Mr. Gaurav Shukla and Mr. Vishal Kumar",
    event: "XRD and PDF Measurements at P02.1 beamline",
    place: "Petra-III, DESY, Hamburg, Germany. June-2022"
  },
  {
    name: "Dr. S. Singh, Ms. Nisha Shahi and Mr. Krishna Kant Dubey",
    event: "Pressure & Magnetic field dependent X-ray Diffraction",
    place: "Elettra, Triesty, Italy. May-2022"
  },
  {
    name: "Dr. S. Singh, Mr. Gaurav Shukla and Mr. Vishal Kumar",
    event: "XAFS Measurements",
    place: "Remote Beamtime at P65, Petra-III, DESY, Hamburg, Germany. December-2021"
  },
{
    name: "Dr. S. Singh, Mr. Anupam Kumar Singh and Mr. Krishna Kant Dubey",
    event: "PDF measurements during Remote Beamtime (HC-4102)",
    place: "Remote Beamtime at ID22 beamline of ESRF, Grenoble, France. October-2020"
  },
  {
    name: "Ms. Payal Chaudhary",
    event: "Got Ph.D. position at University of Nebraska-Lincoln, USA",
    place: "Department of Chemical and Biomolecular Engineering, University of Nebraska-Lincoln, USA. August-2020"
  },
  {
    name: "Dr. S. Singh and Mr. Krishna Kant Dubey",
    event: "SMST-2020",
    place: "Goa, India. February-2020"
  },
  {
    name: "Dr. S. Singh and Mr. Keshav Kumar",
    event: "Neutron Single Crystal Diffraction Measurements",
    place: "ISIS, RAL, Didcot, UK. February-2020"
  },
  {
    name: "Dr. S. Singh and Mr. Anupam Kumar Singh",
    event: "64th DAE Solid State Physics Symposium",
    place: "IIT Jodhpur, Rajasthan, India. December-2020"
  },
  {
    name: "Dr. S. Singh and Mr. Krishna Kant Dubey",
    event: "XRD and PDF Measurements at P02.1 beamline",
    place: "Petra-III, DESY, Hamburg, Germany. December-2019"
  },
  {
    name: "Dr. S. Singh, Mr. Anupam Kumar Singh and Mr. Krishna Kant Dubey",
    event: "XAFS Measurements",
    place: "Elettra, Triesty, Italy. November-2019"
  },
  {
    name: "Mr. Anupam Kumar Singh",
    event: "The 4th Neutron and Muon School",
    place: "J-PARC, Ibaraki, Japan. Oct-Nov, 2019"
  },
  {
    name: "Mr. Anupam Kumar Singh",
    event: "The 16th Oxford on Neutron Scattering",
    place: "University of Oxford, UK. September-2019"
  },
  {
    name: "Mr. Krishna Kant Dubey",
    event: "LTHM workshop",
    place: "UGC-DAE, CSR, Indore, May-2019"
  },
  {
    name: "Mr. Anupam Kumar Singh, Mr. Krishna Kant Dubey, Ms. Nisha Shahi and Mr. Gaurav Kumar Shukla",
    event: "ISUM-2019",
    place: "UGC-DAE, CSR, Indore, March-2019"
  },
  {
    name: "Mr. Krishna Kant Dubey",
    event: "Gold medal for achieving 1st position in M.Tech. degree",
    place: "IIT (BHU), Varanasi, India, December-2018"
  },
  {
    name: "Dr. S. Singh, Mr. Anupam Kumar Singh and Mr. Arun Kumar",
    event: "XRD and PDF Measurements at P02.1 beamline",
    place: "Petra-III, DESY, Hamburg, Germany, November-2018"
  },
  {
    name: "Dr. S. Singh, Prof. D. Pandey and Mr. Arun Kumar",
    event: "XRD and PDF Measurements at P02.1 beamline",
    place: "Petra-III, DESY, Hamburg, Germany, May-2018"
  },
  {
    name: "Mr. Anupam Kumar Singh",
    event: "GIAN Course",
    place: "Guru Nanak Dev University, Amritsar, Punjab, Sep-2017"
  },
  {
    name: "Dr. S. Singh, Mr. Anupam Kumar Singh and Mr. Krishna Kant Dubey",
    event: "45th National Conference on Crystallography",
    place: "IIT (BHU), Varanasi, India, July-2017"
  },
];

const GroupActivities = () => {
  return (
    <section id="group-activities" className="py-10 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Group Activities
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-[#f2f2f2] text-gray-800">
              <th className="px-4 py-3 border border-gray-300">Name</th>
              <th className="px-4 py-3 border border-gray-300">Name of Events</th>
              <th className="px-4 py-3 border border-gray-300">Concerned Place and Year</th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            {activities.map((activity, index) => (
              <motion.tr
                key={index}
                className="even:bg-[#f9f9f9] hover:bg-[#ececec] transition"
              >
                <td className="px-4 py-3 border border-gray-300 text-gray-800">{activity.name}</td>
                <td className="px-4 py-3 border border-gray-300 text-gray-700">{activity.event}</td>
                <td className="px-4 py-3 border border-gray-300 text-gray-600">{activity.place}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </section>
  );
};

export default GroupActivities;

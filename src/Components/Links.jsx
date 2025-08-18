import { motion } from "framer-motion";

const linksData = [
  {
    title: "Crystallographic Open Database (to obtain .cif files of reported systems)",
    url: "https://www.crystallography.net/cod/index.php",
  },
  {
    title: "EPFL Crystallography Applets",
    url: "https://www.epfl.ch/schools/sb/research/iphys/teaching/crystallography",
  },
  {
    title: "Wyckoff Coordinates for different Space Groups (Bilbao Crystallographic Server)",
    url: "https://www.cryst.ehu.es/cgi-bin/cryst/programs/nph-wp-list",
  },
  {
    title: "High Resolution Space Group Diagrams and Tables",
    url: "http://img.chem.ucl.ac.uk/sgp/large/sgp.htm",
  },
  {
    title: "Periodic Table, Dynamic Periodic Table",
    url: "https://www.webelements.com",
  },
  {
    title: "Electronic Configuration and Ionization Energies of elements",
    url: "https://physics.nist.gov/cgi-bin/ASD/ie.pl?spectra=H-DS+i&units=1&at_num_out=on&el_name_out=on&shells_out=on&level_out=on&e_out=0&unc_out=on&biblio=on",
  },
  {
    title: "Neutron Scattering Lengths/Cross-sections",
    url: "https://www.ncnr.nist.gov/resources/n-lengths",
  },
  {
    title: "FullProf",
    url: "https://www.ill.eu/sites/fullprof",
  },
  {
    title: "arXiv (Condensed Matter)",
    url: "https://arxiv.org/archive/cond-mat",
  },
  {
    title: "Physical Review Journals",
    url: "https://journals.aps.org",
  },{
    title: "Physical Review Online Archive (PROLA)",
    url: "https://journals.aps.org/archive",
  },{
    title: "IOP Journals",
    url: "https://iopscience.iop.org/journalList",
  },{
    title: "AIP Journals",
    url: "https://pubs.aip.org/pages/journals",
  }
];

const Links = () => {
  return (
    <section id="links" className="py-10 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Important Links
      </h2>
      <div className="flex flex-col gap-6">
        {linksData.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#fcb9b2] to-[#f7f7f2] p-5 rounded-xl border-l-4 border-[#e01e37] flex items-center justify-between"
            whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.01 }}
            viewport={{ once: true }}
          >
            {/* Number Badge + Link Title */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e01e37] text-white font-bold">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">
                {link.title}
              </h3>
            </div>

            {/* External Icon */}
            <span className="text-sm text-gray-600 font-medium">🔗</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Links;

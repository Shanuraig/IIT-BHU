import React, { useState } from 'react';
import publicationsData from '../data/publications.json';
import { motion, AnimatePresence } from 'framer-motion';

const SelectedPublications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openYear, setOpenYear] = useState(null);

  // Define a list of selected publication titles or IDs (you can adjust this)
  const selectedTitles = [
    "Shivani Rastogi, Nisha Shahi, Vishal Kumar, Gaurav K. Shukla, Satadeep Bhattacharjee, and Sanjay Singh*, Revealing the origin of the topological Hall effect in the centrosymmetric shape memory Heusler alloy Mn2NiGa: A combined experimental and theoretical investigation, Phys. Rev. B 108, 224108 (2023).",
  "Sanjay Singh, B. Dutta, S. W. D’Souza, M. G. Zavareh, P. Devi, A. S. Gibbs, T. Hickel, S. Chadov, C. Felser and D. Pandey, Nature Commun. 8, 1006 (2017).",
  "Jayita Nayak, Shu-Chun Wu, Nitesh Kumar, Chandra Shekhar, Sanjay Singh, Jorg Fink, Emile E.D. Rienks, Gerhard H. Fecher, Stuart S.P. Parkin, Binghai Yan & Claudia Felser, Nature Commun. 8, 13942 (2017).",
  "Sanjay Singh, S. W. D’Souza, J. Nayak, E. Suard, L. Chapon, A. Senyshyn, V. Petricek, Y. Skourski, M. Nicklas, C. Felser & S. Chadov, Nature Commun. 7, 12671 (2016).",
  "Sanjay Singh, Luana Caron, Sunil Wilfred D'Souza, Tina Fichtner, Giacomo Porcari, Simone Fabbrici, Chandra Shekhar, Stanislav Chadov, Massimo Solzi, and Claudia Felser, Advanced Materials 28, 3321 (2016).",
  "Sanjay Singh, R. Rawat, S. E. Muthu, S. W. D’Souza, E. Suard, A. Senyshyn, S. Banik, P. Rajput, S. Bharadwaj, A. M. Awasthi, R. Ranjan, S. Arumugam, D. Schlagel, T. Lograsso, Aparna Chakrabarti, and S. R. Barman, Phys. Rev. Lett. 109, 246601 (2012).",
  "Ujjawal Modanwal, Gaurav K. Shukla, Ajit K. Jena, Satadeep Bhattacharjee, Sunil Wilfred D’Souza, Jan Minár, and Sanjay Singh*, Tuning of nodal line states via chemical alloying in Co2CrX (X = Ga, Ge) Heusler compounds for a large anomalous Hall effect, Phys. Rev. Mater. 8, 034203 (2024).",
  "A. Tripathy, K. Dey, S. R. Sahu, Najnin Bano, Vishal Kumar, P. Garg, Sanjay Singh, Vishnu Kumar, Local structural disorder and charge inhomogeneity induced relaxor ferroelectricity in CuCrO2, Phys. Rev. B 109, 134206 (2024).",
  "Shamim Sk, P Devi, Sanjay Singh, Sudhir K Pandey, Thermoelectric properties of Fe2VAl in the temperature range 300–800 K: A combined experimental and theoretical study, Phys. B: Condens. Matter 673, 415496 (2024).",
  "Shivani Rastogi, Nisha Shahi, Vishal Kumar, Gaurav K. Shukla, Satadeep Bhattacharjee, and Sanjay Singh*, Revealing the origin of the topological Hall effect in the centrosymmetric shape memory Heusler alloy Mn2NiGa: A combined experimental and theoretical investigation, Phys. Rev. B 108, 224108 (2023).",
  "Srishti Dixit, Swayangsiddha Ghosh, Neha Patel, Mohd Alam, Krishanu Bandyopadhyay, Nisha Shahi, Yogendra Kumar, M Sawada, Kenya Shimada, Satyen Saha, Sanjay Singh, Sandip Chatterjee, Raman effect and unusual transport properties of Co-doped Mn2FeAl Heusler alloy, Europhys. Lett. 144, 56003 (2023).",
  "E Ketkar, Gaurav K Shukla, Seung-Cheol Lee, Satadeep Bhattacharjee, Sanjay Singh*, Enhanced spin Hall conductivity and charge to spin conversion efficiency in strained orthorhombic SnSe through orbital selective hybridization, Appl. Phys. Lett. 123, 182403 (2023).",
  "Nisha Shahi, Shivani Rastogi, Sanjay Singh*, Possible Topological Hall Effect in a Spin GaplessSemiconducting Mn2CoAl Heusler Compound, Phys. Status Solidi RRL, 2300352 (2023).",
  "Vishal Kumar, Gaurav K. Shukla, Nisha Shahi, Sanjay Singh*, Topological Hall Effect in (Mn1−xFex)3.25Ge (x = 0.4) Hexagonal Magnet, Phys. Status Solidi RRL 17, 2300174 (2023).",
  "Anupam K Singh, Parul Devi, Nisha Shahi, KK Dubey, Sanjay Singh*, Dhananjai Pandey, Nature of magnetic transitions and evidence for magnetoelastic coupling in the biskyrmion-host hexagonal compound MnNiGa, J. Alloys and Comp 954, 170082 (2023).",
  "Gaurav K. Shukla, Ujjawal Modanwal, Sanjay Singh*, Nodal-line symmetry breaking induced colossal anomalous Hall and Nernst effect in Cu2CoSn Heusler compound, Appl. Phys. Lett. 123, 052402 (2023).",
  "Shrishti Dixit, Labanya Ghosh, Mohd Alam, Satya Vijaya Kumar, Neha Patel, Swayangsiddha Ghosh, Nisha Shahi, Sanjay Singh, Sandip Chatterjee*, Existence of exotic magnetic phases along with exchange bias and memory effect in frustrated beta-Mn Heusler alloy, J. Appl. Phys. 133, 013904 (2023).",
  "Anupam K. Singh, Gaurav K. Shukla, and Sanjay Singh*, Intrinsic anomalous Hall conductivity and real space Berry curvature induced topological Hall Effect in Ni2MnGa Magnetic Shape Memory Alloy, J. Phys. D: Appl. Phys. (2022).",
  "Nisha Shahi, Ajit K. Jena, Gaurav K. Shukla, Vishal Kumar, Shivani Rastogi, K. K. Dubey, Indu Rajput, Sonali Baral, Archana Lakhani, Seung-Cheol Lee, Satadeep Bhattacharjee, and Sanjay Singh*, Anti-site disorder and Berry curvature driven anomalous Hall effect in spin gapless semiconducting Mn2CoAl Heusler compound, Phys. Rev. B 106, 245137 (2022).",
  "Gaurav K. Shukla, Jyotirmoy Sau, Vishal Kumar, Manoranjan Kumar, and Sanjay Singh*, Band splitting induced Berry flux and intrinsic anomalous Hall conductivity in the NiCoMnGa quaternary Heusler compound, Phys. Rev. B 106, 045131 (2022).",
  "Gaurav K. Shukla, Ajit K. Jena, Nisha Shahi, K. K. Dubey, Indu Rajput, Sonali Baral, Kavita Yadav, K. Mukherjee, Archana Lakhani, Karel Carva, Seung-Cheol Lee, Satadeep Bhattacharjee, Sanjay Singh*, Atomic disorder and Berry phase driven anomalous Hall effect in Co2FeAl Heusler compound, Phys. Rev. B 105, 035124 (2022).",
  "Anupam K. Singh, Sanjay Singh*, B. Dutta, K. K. Dubey, Boby Joseph, R. Rawat, Dhananjai Pandey, Robust evidence for the stabilization of the premartensite phase in Ni-Mn-In magnetic shape memory alloys by chemical pressure, Phys. Rev. Materials 5, 113607 (2021).",
  "P. Chaudhary, K. K. Dubey, G. K. Shukla, S. Sadhu khan, S. Kanungo, A. K. Jena, S.-C. Lee, S. Bhattacharjee, J. Minar, and S. W. D’Souza and Sanjay Singh*, Role of chemical disorder in tuning the Weyl points in Vanadium doped Co2TiSn, Phys. Rev. Materials 5, 124201 (2021).",
  "Gaurav K. Shukla, Jyotirmoy Sau, Nisha Shahi, Anupam K. Singh, Manoranjan Kumar, and Sanjay Singh*, Anomalous Hall effect from gapped nodal line in the Co2FeGe Heusler compound, Phys. Rev. B 104, 195108 (2021).",
  "Anupam K. Singh, Sanjay Singh* and D. Pandey, Pair distribution function study of Ni2MnGa magnetic shape memory alloy: Evidence for the precursor state of the premartensite phase, Phys. Rev. B, 104, 064110 (2021).",
  "P Sivaprakash, S Esakki Muthu, Anupam K Singh, KK Dubey, M Kannan, S Muthukumaran, Shampa Guha, Manoranjan Kar, Sanjay Singh, S Arumugam, Effect of chemical and external hydrostatic pressure on magnetic and magnetocaloric properties of Pt doped Ni2MnGa shape memory Heusler alloys, J. Mag. Mag. Mater. 514 167136 (2020).",
   "R. D. dos Reis, M. Ghorbani Zavareh, M. O. Ajeesh, L. O. Kutelak, A. S. Sukhanov, Sanjay Singh, J. Noky, Y. Sun, J. E. Fischer, K. Manna, C. Felser, and M. Nicklas, Pressure tuning of the anomalous Hall effect in the chiral antiferromagnet Mn3Ge, Phys. Rev. Materials 4, 051401(R) (2020).",
  "K.K. Dubey, P. Devi, Anupam K. Singh, Sanjay Singh*, Improved crystallographic compatibility and magnetocaloric reversibility in Pt substituted Ni2Mn1.4In0.6 magnetic shape memory Heusler alloy, J. Mag. Mag. Mater. 507, 166818 (2020).",
  "P. Devi, C. Salazar Mejía, L. Caron, Sanjay Singh, M. Nicklas, and C. Felser, Effect of chemical and hydrostatic pressure on the coupled magnetostructural transition of Ni-Mn-In Heusler alloys, Phys. Rev. Materials 3, 122401(R) (2019).",
  "Kavita Yadav, Mohit K. Sharma, Sanjay Singh, and K. Mukherjee, Exotic magnetic behaviour and evidence of cluster glass and Griffiths like phase in Heusler alloys Fe2-xMnxCrAl (0≤x≤1), Scientific Reports 9, 15888 (2019).",
  "P. Devi, C. Salazar Mejía, M. Ghorbani Zavareh, K. K. Dubey, Pallavi Kushwaha, Y. Skourski, C. Felser, M. Nicklas, and Sanjay Singh*, Improved magnetostructural and magnetocaloric reversibility in magnetic Ni-Mn-In shape-memory Heusler alloy by optimizing the geometric compatibility condition, Phys. Rev. Materials 3, 062401(R) (2019).",
  "Shamim S. K., P. Devi, Sanjay Singh and S. K. Pandey, Exploring the best scenario for understanding the high temperature thermoelectric behaviour of Fe2VAl, Mater. Res. Express 6, 026302 (2019).",
  "P. Devi, M. Ghorbani Zavareh, C. Salazar Mejía, K. Hofmann, B. Albert, C. Felser, M. Nicklas, and Sanjay Singh*, Reversible adiabatic temperature change in the shape memory Heusler alloy Ni2.2Mn0.8Ga: An effect of structural compatibility, Phys. Rev. Materials 2, 122401(R) (2018).",
  "P. Devi, Sanjay Singh*, B. Dutta, K. Manna, S.W. D'Souza, Y. Ikeda, E. Suard, V. Petricek, P. Simon, P. Werner, S. Chadhov, Stuart S.P. Parkin, C. Felser, D. Pandey, Adaptive modulation in the Ni2Mn1.4In0.6 magnetic shape-memory Heusler alloy, Phys. Rev. B 97, 224102 (2018).",
  "C. Shekhar, N. Kumara, V. Grinenko, Sanjay Singh, R. Sarkar, H. Luetkens, Shu-Chun Wu, Yang Zhang, Alexander C. Komarek, Erik Kampert, Yurii Skourski, Jochen Wosnitza, Walter Schnelle, Alix McCollam, Uli Zeitler, Jürgen Kübler, Binghai Yan, H.-H. Klauss, S. S. P. Parkin, and C. Felser, Anomalous Hall effect in Weyl semimetal half-Heusler compounds RPtBi (R = Gd and Nd), Proceedings of the National Academy of Sciences 115 (37) 9140–9144 (2018). https://doi.org/10.1073/pnas.1810842115",
  "A. S. Sukhanov, Sanjay Singh, L. Caron, Th. Hansen, A. Hoser, V. Kumar, H. Borrmann, A. Fitch, P. Devi, K. Manna, C. Felser, D.S. Inosov, Gradual pressure-induced change in the magnetic structure of the noncollinear antiferromagnet Mn3Ge, Phys. Rev. B 97, 214402 (2018).",
  "Sanjay Singh*, B. Dutta, S. W. D’Souza, M. G. Zavareh, P. Devi, A. S. Gibbs, T. Hickel, S. Chadov, C. Felser and D. Pandey, Nature Commun. 8, 1006 (2017).",
  "Jayita Nayak, Shu-Chun Wu, Nitesh Kumar, Chandra Shekhar, Sanjay Singh, Jorg Fink, Emile E.D. Rienks, Gerhard H. Fecher, Stuart S.P. Parkin, Binghai Yan & Claudia Felser, Nature Commun. 8, 13942 (2017).",
  "C. Nethravathi, C. Rajamathi, Sanjay Singh, M. Rajamathi, C. Felser, RSC Advances 7, 1413–1417 (2017).",
  "L. Caron, B. Dutta, P. Devi, M. Ghorbani Zavareh, T. Hickel, R. Cabassi, F. Bolzoni, S. Fabbrici, F. Albertini, C. Felser, and Sanjay Singh*, Phys. Rev. B 96, 054105 (2017).",
  "S. Arumugam, U. Devarajan, S. Esakki Muthu, Sanjay Singh, R. Thiyagarajan, M. Manivel Raja, N.V. Rama Rao, Alok Banerjee, Journal of Magnetism and Magnetic Materials 442, 460 (2017)."
  ];

  const handleToggle = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  const filterAndGroupSelected = () => {
    const filtered = publicationsData
      .filter(pub =>
        selectedTitles.some(title => pub.title.toLowerCase().includes(title.toLowerCase())) &&
        pub.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => b.year - a.year);

    const grouped = {};
    filtered.forEach(pub => {
      grouped[pub.year] = grouped[pub.year] || [];
      grouped[pub.year].push(pub);
    });

    return grouped;
  };

  const renderAccordion = (groupedData) =>
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
                  <li key={index} className="my-2 text-black font-medium">
                    {pub.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ));

  const selectedPublications = filterAndGroupSelected();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <input
        type="text"
        placeholder="Search selected publications..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-2 border rounded shadow"
      />
      <h2 className="text-2xl font-bold mb-4 text-[#bd1f36]">Selected Publications</h2>
      {Object.keys(selectedPublications).length > 0 ? (
        renderAccordion(selectedPublications)
      ) : (
        <p className="text-gray-600">No matching publications found.</p>
      )}
    </div>
  );
};

export default SelectedPublications;

import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';
// import AreaOfInterest from '../components/AreaOfInterest';
// import Distinctions from '../components/Distinctions';
// import Publications from '../components/Publications';
// import SelectedPublications from '../components/SelectedPublications';
// import GroupMembers from '../components/GroupMembers';
// import Projects from '../components/Projects';
// import Facilities from '../components/Facilities';
// import Positions from '../components/Positions';
// import Collaborations from '../components/Collaborations';
// import GroupActivities from '../components/GroupActivities';
// import NeutronRadiationFacilities from '../components/NeutronRadiationFacilities';
// import Card from '../Components/Card'
const Home = () => {
  return (
    <div className="px-4 md:px-16 py-8 space-y-8 bg-gray-50 text-gray-800 min-h-screen">
      <div className="space-y-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="biography" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Biography />
        </section>
        {/* <section id="AreaOfInterest"className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <AreaOfInterest />
        </section>
        <section id="distinctions" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Distinctions />
        </section>
        <section id="publications" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Publications />
        </section>
        <section id="selectedPublications" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <SelectedPublications />
        </section>
        <section id="group" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <GroupMembers />
        </section>
        <section id="projects" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Projects />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <Card title="Investigation of the topological Hall effect (THE)" subtitle="Investigation of the topological Hall effect (THE) in magnetic materials, Indo-korea Science and Technology (IKST) (grant ~14.95 Lakhs), 2024-2025 (PI)" />
            <Card
              title="Development of Indigenous AM Metal Powders"
              subtitle="Development and assessment of printability of indigenous Additive Manufacturing (AM) grade metal and alloy powders, DRDO, Ministry of Defence (grant ~1990.71 Lakhs), 2024–2028 (Co-PI)"
            />
            <Card
              title="Single Crystal Growth Facility for Intermetallics"
              subtitle="Czochralski based Single Crystal Growth facility for Intermetallic systems (upgradation to existing polycrystalline sample preparation by arc melting), SERB-DST (grant ~20 Lakhs), 2023–2025 (CO-PI)"
            />
            <Card
              title="Cu-Al Alloy for Aerospace Applications"
              subtitle="Study of composition and thermo-mechanical processing of 4–8% Cu Al alloy for fabricating the fuselage skins and frames for aerospace application, DST-CST (grant ~11 Lakhs), 2022–2024 (CO-PI)"
            />
            <Card
              title="Anomalous Nernst Effect in Heusler Alloys"
              subtitle="Investigation of Anomalous Nernst effect in shape memory Heusler alloys, SERB-DST (CRG grant ~68.42 Lakhs), India, 2022–2025 (Principal Investigator)"
            />
            <Card
              title="Reversible Magnetocaloric Effect in Heusler Alloys"
              subtitle="Minimizing hysteresis in magnetic shape memory Heusler alloys for reversible magnetocaloric effect, SERB-DST (grant ~50 Lakhs), India, 2018–2021 (Principal Investigator)"
            />
            <Card
              title="Ramanujan Fellowship"
              subtitle="Ramanujan Fellowship research Grant ~Rs 35 Lakhs, from SERB, India, 2017–2022 (Principal Investigator)"
            />
            <Card
              title="Designing Heusler Alloys for Magnetic Refrigeration"
              subtitle="Designing Heusler alloys for magnetic refrigeration, Funding Agency – Indian Institute of Technology (BHU), India (Seed Money Grant ~Rs 10 Lakhs). (Principal Investigator)"
            />
            <Card
              title="Elastocaloric Effect Setup for Caloric Studies"
              subtitle="Elastocaloric effect measurement setup to study caloric effect in shape memory alloys, Funding Agency – UGC-DAE CSR, Indore, India (grant ~11 Lakhs), 2018–2022 (Principal Investigator)"
            />
            <Card
              title="Heusler Alloys for Spintronics"
              subtitle="Preparation and characterization of Heusler alloys for spintronics, Indo-Korea Science and Technology Center (IKST), Bengaluru, India (grant ~14.75 Lakhs), 2021–2022 (Principal Investigator)"
            />
            <Card
              title="Topological Co-Based Heusler Alloys"
              subtitle="Designing functional properties of topological non-trivial Co-based Heusler alloys, Indo-Korea Science and Technology Center (IKST), Bengaluru, India (grant ~14.90 Lakhs), 2020–2021 (Principal Investigator)"
            />
          </div>
        </section>
        <section id="facilities" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Facilities />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <Card image="/images/facility1.jpg" title="High-temperature XRD" subtitle="Advanced setup for XRD analysis" />
            <Card image="/images/facility2.jpg" title="Neutron Beam Access" subtitle="BARC collaboration" />
          </div>
        </section>
        <section id="positions" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Positions />
        </section>
        <section id="collaborations" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <Collaborations />
        </section>
        <section id="activities" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <GroupActivities />
        </section>
        <section id="visits" className="scroll-mt-35 pt-8 bg-white p-8 rounded-lg shadow">
          <NeutronRadiationFacilities />
        </section> */}
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
// Importing images from the Facilities folder
import cfms from '../assets/Facilities/cfms.jpg';
import dma from '../assets/Facilities/dma.jpg';
import fesem from '../assets/Facilities/fesem.jpg';
import gloveBox from '../assets/Facilities/glove_box.jpg';
import magnetron from '../assets/Facilities/magnetron.jpg';
import ppms from '../assets/Facilities/ppms.jpg';
import sample from '../assets/Facilities/sample.png';
import seebeck from '../assets/Facilities/seebeck.jpg';
import threeZone from '../assets/Facilities/three_zone.jpg';
import transport from '../assets/Facilities/transport.jpg';
import xrd from '../assets/Facilities/xrd.jpg';
const facilities = [
  {
    title: sample,
    image: "src/assets/Facilities/sample.png",
    description: (
      <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
        <li>
          <strong>Arc Melting Furnace:</strong> Metals & alloys samples can be prepared. 3 samples can be prepared simultaneously.
        </li>
        <li>
          <strong>Turbo Molecular Pump (PFEIFFER):</strong> Vacuum limit ~5.0×10⁻⁷ mbar
        </li>
        <li>
          <strong>Diffusion Pump (Hind High Vacuum):</strong> Vacuum limit ~5.0×10⁻⁶ mbar
        </li>
        <li>
          <strong>Vacuum Sealing Unit:</strong> 5 samples of different sizes can be vacuum sealed simultaneously up to ~5.0×10⁻⁷ mbar
        </li>
      </ul>
    ),
  },{
    title: "X-ray Diffractometer (XRD)",
    image: xrd,
    description: (
      <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
        <li><strong>Model:</strong> Rigaku, CuKα, 18kW, Rotating Anode</li>
        <li><strong>High Temperature Attachment:</strong> 300K–1700K</li>
        <li><strong>Low Temperature Attachment:</strong> 11K–300K</li>
      </ul>
    ),
  },{
    title: "Physical Properties Measurement System (PPMS)",
    image: "src/assets/Facilities/ppms.jpg",
    description: (
      <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
        <li><strong>Model:</strong> Quantum Design's DynaCool</li>
        <li><strong>VSM:</strong> 1.6K–1000K (sensitivity 10⁻⁶ emu), 9 Tesla</li>
        <li><strong>AC Magnetic Susceptibility:</strong> 10Hz–10kHz, 1.8K–400K</li>
        <li><strong>Specific Heat:</strong> 1.8K–400K</li>
        <li><strong>Additional:</strong> Multifunction Probe</li>
      </ul>
    ),
  }, {
    title: "Cryogen-Free Measurement System (CFMS)",
    image: cfms,
    description: (
      <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
        <li><strong>Temperature Range:</strong> 1.8K – 325K</li>
        <li><strong>Magnetic Field:</strong> Up to 7 Tesla</li>
        <li><strong>Measurement Attachments:</strong>
          <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
            <li>Dielectric measurements using Novacontrol and HIOKI HiTESTER LCR meter</li>
            <li>Magnetoresistance measurements using Electrometer, Current Source, and Nanovoltmeter</li>
            <li>Hall Measurement Setup: <em>Under process</em></li>
          </ul>
        </li>
      </ul>
    ),
  },{
    title: "Dynamic Mechanical Analyzer (TA Instruments)",
    image: dma, 
    description: (
      <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
        <li><strong>Temperature Range:</strong> 120K – 870K</li>
        <li><strong>Frequency Range:</strong> 0.001 – 200 Hz</li>
        <li><strong>Force Range:</strong> 0.0001 – 18 N</li>
        <li><strong>Modulus Range:</strong> 10³ – 3×10¹² Pa</li>
      </ul>
    ),
  },{
  title: "Field Emission Scanning Electron Microscope (FESEM) (ZEISS)",
  image: fesem,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Resolution:</strong> ~10 nm</li>
      <li><strong>Maximum EHT Voltage:</strong> 20 kV</li>
      <li><strong>Detector:</strong> In-Lens and Secondary Electron</li>
      <li><strong>Sample Capacity:</strong> 9 samples can be mounted simultaneously</li>
      <li><strong>EDS Detector:</strong> Oxford Instruments</li>
    </ul>
  ),
},
{
  title: "Three Zone Furnace (Nabertherm)",
  image: threeZone,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Temperature Range:</strong> 300 K – 1573 K</li>
      <li><strong>Maximum Temperature Gradient:</strong> 473 K</li>
      <li><strong>Gases Supported:</strong> Argon (Ar) and Nitrogen (N₂) gas flow</li>
    </ul>
  ),
},
{
  title: "Glove Box",
  image: gloveBox,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Atmosphere:</strong> N₂-filled inert environment</li>
      <li><strong>O₂ Level:</strong> 1.5 ppm</li>
      <li><strong>H₂O Level:</strong> 1.6 ppm</li>
      <li><strong>Gas Purification System:</strong> Included</li>
      <li><strong>Arc Melting Furnace:</strong> 400 A power supply; three samples can be prepared simultaneously</li>
      <li><strong>Casting Setup:</strong> Available inside the glove box</li>
    </ul>
  ),
},
{
  title: "Seebeck Coefficient and Resistivity (Two-Probe) Measurement System",
  image: seebeck,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Temperature Range:</strong> 300 K – 1073 K</li>
    </ul>
  ),
},
{
  title: "Transport Measurement Setup",
  image: transport,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Magnetic Field:</strong> 0 to 1 Tesla</li>
      <li><strong>Temperature Range:</strong></li>
      <ul className="list-disc list-inside ml-5 space-y-1">
        <li><strong>Low Temperature Attachment:</strong> 300 K – 77 K</li>
        <li><strong>High Temperature Attachment:</strong> 300 K – 673 K</li>
      </ul>
    </ul>
  ),
},
{
  title: "Magnetron Sputtering System",
  image: magnetron,
  description: (
    <ul className="list-disc list-inside space-y-2 text-base text-gray-800 leading-relaxed">
      <li><strong>Application:</strong> Thin-film synthesis</li>
      <li><strong>Power Sources:</strong> Four DC power supplies and one RF source</li>
      <li><strong>Vacuum Level:</strong> Ultrahigh vacuum (~10⁻⁹ Torr)</li>
      <li><strong>Substrate Holder:</strong> Equipped with heater (400 – 800 ºC) and rotator</li>
    </ul>
  ),
},

];

const Facilities = () => {
  return (
    <section id="facilities" className="py-12 px-4 md:px-16 bg-[#fdfdfd]">
      <h2 className="text-3xl font-bold text-center mb-12 text-red-900">
        Facilities
      </h2>

      <div className="space-y-16 max-w-7xl mx-auto">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            className="bg-white border border-red-200 rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center gap-8"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.01 }}
            viewport={{ once: true }}
          >
            {/* Text - Left Side */}
            <div className="w-full">
              <h3 className="text-2xl font-semibold text-red-900 mb-4">
                {facility.title}
              </h3>
              {facility.description}
            </div>

            {/* Image - Right Side */}
            <div className="w-full">
              <img
                src={facility.image}
                alt={facility.title}
                className="rounded-lg object-cover w-full h-auto border border-white max-h-[400px]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;

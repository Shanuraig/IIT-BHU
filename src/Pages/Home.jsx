import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';

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
      </div>
    </div>
  );
};

export default Home;
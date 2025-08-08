import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Page or section components
import Home from './pages/Home';
import AreaOfInterest from './components/AreaOfInterest';
import Distinctions from './components/Distinctions';
import Facilities from './components/Facilities';
import GroupActivities from './components/GroupActivities';
import GroupMembers from './components/GroupMembers';
import Hero from './components/Hero';
import Visits from './components/Visits';
import Publications from './components/Publications';
import SelectedPublications from './components/SelectedPublications';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Collaborations from './components/Collaborations';
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/area-of-interest" element={<AreaOfInterest />} />
        <Route path="/distinctions" element={<Distinctions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/group-activities" element={<GroupActivities />} />
        <Route path="/group-members" element={<GroupMembers />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/Visits" element={<Visits />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/selected-publications" element={<SelectedPublications />} />
        <Route path="/collaboration" element={<Collaborations />} />
      </Routes>
    </>
  );
};

export default App;

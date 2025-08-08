import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

// Page or section components
import Home from './Pages/Home';
import AreaOfInterest from './Components/AreaOfInterest';
import Distinctions from './Components/Distinctions';
import Facilities from './Components/Facilities';
import GroupActivities from './Components/GroupActivities';
import GroupMembers from './Components/GroupMembers';
import Visits from './Components/Visits';
import Publications from './Components/Publications';
import SelectedPublications from './Components/SelectedPublications';
import Projects from './Components/Projects';
import Positions from './Components/Positions';
import Collaborations from './Components/Collaborations';

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
        <Route path="/visits" element={<Visits />} />
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

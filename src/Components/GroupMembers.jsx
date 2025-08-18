import React from 'react';
import SanjayImg from "../assets/Sanjay.png";
// Ongoing Research Members
import KrishnaImg from "../assets/Members/krishna.jpg";
import VishalImg from "../assets/Members/vishal.jpg";
import ShivaniImg from "../assets/Members/shivani.png";
import NidhiImg from "../assets/Members/nidhi.jpg";
import PankajImg from "../assets/Members/pankaj.jpg";
import GopalImg from "../assets/Members/gopal.jpg";
// PhD Alumni
import AnupamImg from "../assets/Members/anupam.jpg";
import NishaImg from "../assets/Members/nisha.jpg";
import GauravImg from "../assets/Members/gaurav.jpg";
import Shubham from "../assets/Members/shubham.jpg";

const GroupMembers = () => {
  const leader = {
    name: "Prof. Sanjay Singh",
    designation: "Associate Professor, School of Materials Science & Technology, IIT (BHU)",
    image:SanjayImg,
  };

  const ongoingResearchMembers = [
    {
  nameRoll: "Mr. Vishal Kumar (19111009)",
  image:VishalImg,
  projectTitle: "Topological Materials",
  qualification: "M.Sc. (Physics), Gurukula Kangri Vishwavidyalaya, Haridwar",
  contact: "vishalkumar.rs.mst19@iitbhu.ac.in\n+91-9758993355"
},
{
  nameRoll: "Ms. Shivani Rastogi (20111521)",
  image:ShivaniImg,
  projectTitle: "Investigation of Anomalous Hall Effect in Co₂-based Heusler Alloys",
  qualification: "M.Tech. (Nanotechnology), University of Rajasthan",
  contact: "shivanirastogi.rs.mst20@iitbhu.ac.in\n+91-9772632091"
},
{
  nameRoll: "Ms. Nidhi (20111508)",
  image: NidhiImg,
  projectTitle: "Magnetic 2D Materials",
  qualification: "M.Sc. (Physics), Maharshi Dayanand University, Haryana",
  contact: "nidhi.rs.mst20@iitbhu.ac.in\n+91-7495052429"
},
{
    nameRoll: "Mr. Pankaj Kumar (2011510)",
    image:PankajImg,
    projectTitle: "Structural, magnetic and novel transport properties of skyrmion host Mn2YZ Heusler alloys",
    qualification: "M.Sc. (Physics), College of Commerce, Arts and Science, Patna",
    contact: "pankajkumar.rs.mst20@itbhu.ac.in",
    phone: "+91-8709306129"
  },
  {
    nameRoll: "Mr. Benugopal Bairagya (21111501)",
    image: GopalImg,
    projectTitle: "Anomalous Nernst Study of Martensite Phase Transforming Heusler Alloys and Related Systems",
    qualification: "M.Sc. (Physics), Bankura University, West Bengal",
    contact: "benugopalbairagya.rs.mst21@itbhu.ac.in",
    phone: "+91-7001578988"
  },
  {
    nameRoll: "Mr. Shubham Jaiswal (24111013)",
    image: Shubham,
    projectTitle: "Local structure and non-collinear magnetism in 2D magnets",
    qualification: "M.Tech. (Physics), Aligarh Muslim University (AMU)",
    contact: "shubhamjaiswal.rs.mst24@itbhu.ac.in"
  },{
    nameRoll: "Ms. Anchal Jaiswal (24111004)",
    image: "src/assets/Members/anchal.jpg",
    projectTitle: "Investigation magneto-transport of Heusler based thin film heterostructure",
    qualification: "M.Sc. (Physics), Indian Institute of Technology, Mumbai",
    contact: "anchaljaiswal.rs.mst24@itbhu.ac.in",
    phone: "Not Provided"
  },
  {
    nameRoll: "Mr. Kallol Das (24111502)",
    image: "src/assets/Members/kallol.jpg",
    projectTitle: "Structure, magnetic and electronic structure of alter-magnets",
    qualification: "M.Sc. (Physics), Vidyasagar University, Midnapore, West Bengal",
    contact: "kalloldas.rs.mst24@itbhu.ac.in",
    phone: "Not Provided"
  }
  ];
  const phdalumni=[
{
    nameRoll: "Mr. Anupam Singh",
    image: AnupamImg,
    projectTitle: "Phase Transitions, Local Structure and Anomalous Hall Effect in Ni-Mn-based Magnetic Shape Memory Alloys and Related Systems",
    qualification: "Postdoc Fellow at Max Planck Institute of Microstructure Physics, Halle, Germany",
    contact: "anupamksingh1991@gmail.com",
    phone: "Not Provided"
  },
  {
    nameRoll: "Ms. Nisha Shahi",
    image: NishaImg,
    projectTitle: "Investigation of anomalous Hall transport and related phenomena in some Mn-based intermetallic compounds",
    qualification: "Postdoc Fellow at University of Wurzburg, Germany",
    contact: "shahinisha31@gmail.com",
    phone: "Not Provided"
  },
  {
    nameRoll: "Mr. Gaurav Kumar Shukla",
    image: GauravImg,
    projectTitle: "Anomalous Transport and topological properties of Co-based Heusler alloys",
    qualification: "Postdoc Fellow at National Institute of Materials Science (NIMS), Japan",
    contact: "Gauravshukla571996@gmail.com",
    phone: "Not Provided"
  },{
      nameRoll: "Mr. Krishna Kant Dubey (18111003)",
      image:KrishnaImg,
      projectTitle: "Structural, Magnetic, and Magneto-Transport Properties of Ni-Mn-In-based Shape Memory Heusler Alloys and Related Systems",
      qualification: "M.Tech. (Materials Science), IIT (BHU)",
      contact: "kkdbhu@gmail.com"
    }
  ];
  const mtechalumni=[
    {
    name: "Mr. Krishna Kant Dubey",
    roll: "16112006",
    projectTitle: "Hysteresis and Magnetocaloric Effect in Ni-Pt-Mn-In Magnetic Shape Memory Heusler Alloys",
    contact: "krishnakantdubey.rs.mst18@iitbhu.ac.in|||Position: Ph.D. at SMST, IIT (BHU)"
  },
  {
    name: "Mr. Vikas Singh",
    roll: "17112011",
    projectTitle: "Structural Studies on Layered Pervoskite La₂-2xSr1+2xMn2O7 (x=0.2, 0.25, 0.3, & 0.35)",
    contact: "vikassingh1193@gmail.com|||Position: Ph.D. at IIT (Kanpur)"
  },
  {
    name: "Ms. Saumya Shukla",
    roll: "18112010",
    projectTitle: "Investigation of Structural Properties and strain glass behavior in Ni based Shape Memory Alloys",
    contact: "shukla.saumya2011@gmail.com|||Position: Lecturer at HBTU, Kanpur"
  },
  {
    name: "Mr. Abhishek Anand",
    roll: "19112002",
    projectTitle: "Structural Study of Cerium deoped Calcium Manganite Ca(1-x)CexMnO₃",
    contact: "abhishekanand.mst19@iitbhu.ac.in|||Position: Junior Associate in Central Bank of India"
  },{
    name: "Ms. Fensa Luke",
    roll: "20112005",
    projectTitle: "Transport Properties in 2D Magnetic Materials",
    contact: "fensaluke@gmail.com|||Position: Sr. Engineer at Global Foundries, Bengaluru"
  },
  {
    name: "Mr. Akash Kumar",
    roll: "21112001",
    projectTitle: "Anomalous Nernst Effect in Heusler Compounds",
    contact: "akashkumar.mst21@iitbhu.ac.in|||Position: Sr. Engineer at Tata ELXSI"
  },
  {
    name: "Mr. Vipul Tiwari",
    roll: "22112020",
    projectTitle: "Study of high-entropy alloy with shape memory effect",
    contact: "vipultiwari.mst22@iitbhu.ac.in|||Position: Ph.D. Scholar at IIT(BHU)"
  }
  ];
  const mtechOngoingMembers = [
   {
  name: "Ms. Shivani Gangwar",
  roll: "23112015",
  projectTitle: "Study of Magnetic and Transport Properties of Hexagonal Co₃Sn₂S₂",
  contact: "shivanigangwar.mst23@iitbhu.ac.in"
}
  ];
  const IDDon=[
{
  name: "Mr. Sayam Jain",
  roll: "20114020",
  projectTitle: "Thermoelectric Materials",
  contact: "sayam.milindkrjain.mst20@iitbhu.ac.in"
}
  ];
  const IDDAlumni=[
{
    name: "Ms. Payal Chaudhary",
    roll: "14114008",
    projectTitle: "Search for Potential Weyl Semimetal Candidates in Heusler Alloys using First Principle Methods",
    contact: "payal.chaudhary.mst14@iitbhu.ac.in|||Position: Ph.D. at University of Nebraska-Lincoln, USA"
  },
  {
    name: "Mr. Animesh Kumar",
    roll: "15114003",
    projectTitle: "A Comprehensive Review of Thermoelectric Materials",
    contact: "animesh.kumar.mst15@iitbhu.ac.in|||Position: Product Manager at Oracle, Bangalore"
  },
  {
    name: "Mr. Sudhanshu Raj",
    roll: "16114014",
    projectTitle: "Sample Preparation and Structural Characterization of Skyrmion host Mn-Co-Si",
    contact: "sudhanshu@univ.ai|||Position: Co-Founder of STARKK"
  },
  {
    name: "Mr. Vaibhav Gupta",
    roll: "16114015",
    projectTitle: "Preparation of Single Phase MnSb Alloy for the Investigation of Pressure Induced Superconductivity",
    contact: "vaibhav.gupta.mst16@iitbhu.ac.in|||Position: MBA Student at IIM Bangalore"
  },
  {
    name: "Mr. Abhinav Sharma",
    roll: "17114002",
    projectTitle: "Investigation of Theoretical Topological Hall Resistivity in Co₂FeAl using Micromagnetic Simulations",
    contact: "theabhinavas5@gmail.com|||Position: Software Developer at Standard Chartered Bank"
  },
  {
    name: "Ms. Shrishti Sharma",
    roll: "17114019",
    projectTitle: "Calculation of Anomalous Hall Conductivity of Full Heusler Co₂MnAl using Different Methods and their Composition",
    contact: "shrish.t.work@gmail.com|||Position: Software Developer at BNY Mellon"
  },
  {
    name: "Mr. Ujjawal Modanwal",
    roll: "18114017",
    projectTitle: "Theoretical Investigation of Magnetic, Electronic, Transport Properties in Cobalt based Heusler Alloys",
    contact: "ujjawalmodanwal.mst18@iitbhu.ac.in|||Position: Materials Science Developer at Schrodinger Inc."
  },
  {
    name: "Mr. Eeshan Ketkar",
    roll: "19114023",
    projectTitle: "Engineering Topological Phases via External Stimuli",
    contact: "eeshanketkar.cd.mst19@iitbhu.ac.in|||Position: Ph.D. at University of Chicago"
  },
  {
    name: "Ms. Puli Sheela",
    roll: "19114017",
    projectTitle: "Study of magnetic properties in FeₓGeTe₂ (x=3, 4, 5)",
    contact: "puli.sheela.mst19@iitbhu.ac.in"
  }
  ];
  // Desktop version 
  const renderStandardHeader = () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-gray-100 text-center font-semibold text-[maroon] p-3 text-sm md:text-base">
      <div>Name & Roll No.</div>
      <div>Profile Image</div>
      <div>Thesis/Project Title</div>
      <div>Qualification</div>
      <div>Contact Details</div>
    </div>
  );

  const renderStandardMember = (member, index) => (
    <div key={index} className="bg-white border border-red-200 rounded-xl shadow p-4 w-full text-sm md:text-base">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
        <div className="font-semibold">{member.nameRoll}</div>
        <div className="flex justify-center">
          <img src={member.image} alt={member.nameRoll} className="w-32 h-36 rounded-lg object-cover border" />
        </div>
        <div>{member.projectTitle}</div>
        <div>{member.qualification}</div>
        <div className="text-blue-600 break-words">{member.contact}</div>
      </div>
    </div>
  );

  const renderNoImageHeader = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 text-center font-semibold text-[maroon] p-3 text-sm md:text-base">
      <div>Name</div>
      <div>Roll No.</div>
      <div>Project Title</div>
      <div>Contact Details</div>
    </div>
  );
  const renderNoImageHeaderwithpos = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-100 text-center font-semibold text-[maroon] p-3 text-sm md:text-base">
      <div>Name</div>
      <div>Roll No.</div>
      <div>Project Title</div>
      <div>Contact Details and Position</div>
    </div>
  );
  
  const renderNoImageMember = (member, index) => (
    <div key={index} className="bg-white border border-red-200 rounded-xl shadow p-4 w-full text-sm md:text-base">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-center">
        <div className="font-semibold">{member.name}</div>
        <div className="text-gray-700">{member.roll}</div>
        <div>{member.projectTitle}</div>
        <div className="text-blue-600 break-words">
  <div>{member.contact.split('|||')[0]}</div>
  <div className="text-black">{member.contact.split('|||')[1]}</div>
</div>
      </div>
    </div>
  );

  // mobile version 
  // Standard Member (with image)
const renderStandardMemberMobile = (member, index) => (
  <div
    key={index}
    className="bg-white border border-red-200 rounded-xl shadow p-4 w-full text-sm space-y-2"
  >
    <div className="flex flex-col items-center">
      {/* Image */}
      {member.image && (
        <img
          src={member.image}
          alt={member.nameRoll}
          className="w-28 h-32 rounded-lg object-cover border mb-3"
        />
      )}

      {/* Details */}
      <div className="text-left w-full space-y-1">
        <p>
          <span className="font-semibold text-red-800">Name/Roll: </span>
          {member.nameRoll}
        </p>
        <p>
          <span className="font-semibold text-red-800">Project Title: </span>
          {member.projectTitle}
        </p>
        <p>
          <span className="font-semibold text-red-800">Qualification: </span>
          {member.qualification}
        </p>
        <p>
          <span className="font-semibold text-red-800">Contact: </span>
          <span className="text-blue-600 break-words">{member.contact}</span>
        </p>
      </div>
    </div>
  </div>
);

// No Image Member
const renderNoImageMemberMobile = (member, index) => (
  <div
    key={index}
    className="bg-white border border-red-200 rounded-xl shadow p-4 w-full text-sm space-y-2"
  >
    <div className="flex flex-col text-left space-y-1">
      <p>
        <span className="font-semibold text-red-800">Name: </span>
        {member.name}
      </p>
      {member.roll && (
        <p>
          <span className="font-semibold text-red-800">Roll: </span>
          {member.roll}
        </p>
      )}
      <p>
        <span className="font-semibold text-red-800">Project Title: </span>
        {member.projectTitle}
      </p>
      <p>
  <span className="font-semibold text-red-800">Contact: </span>
  <span className="text-blue-600 break-words">
    {member.contact?.split("|||")[0]}
  </span>
  <br />
  <span>
    <span className="font-semibold text-red-800">
      {member.contact?.split("|||")[1]?.split(" ")[0]}
    </span>{" "}
    {member.contact?.split("|||")[1]
      ?.split(" ")
      .slice(1)
      .join(" ")}
  </span>
</p>

    </div>
  </div>
);

return (
  <div className="bg-[#fdfdfd] py-10 px-4 md:px-20 text-gray-800">
    <h2 className="text-3xl font-bold text-center mb-10 text-red-900">
      Research Group Members
    </h2>

    {/* Group Leader */}
    <div className="max-w-[1000px] mx-auto mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4">Group Leader</h3>
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-br from-red-100 to-white shadow-md p-6 rounded-xl">
        <img
          src={leader.image}
          alt="Leader"
          className="w-32 h-32 rounded-lg object-cover border-2 border-red-300 mr-0 md:mr-6 mb-4 md:mb-0"
        />
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold text-red-900">{leader.name}</h4>
          <p className="text-gray-700 mt-1">{leader.designation}</p>
        </div>
      </div>
    </div>

    {/* Ongoing Research Members */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        Ongoing Research Members
      </h3>

      {/* Desktop */}
      <div className="hidden md:block">
        {renderStandardHeader()}
        {ongoingResearchMembers.map(renderStandardMember)}
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {ongoingResearchMembers.map(renderStandardMemberMobile)}
      </div>
    </div>

    {/* PhD Alumni */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        PhD Alumni (Completed)
      </h3>

      <div className="hidden md:block">
        {renderStandardHeader()}
        {phdalumni.map(renderStandardMember)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {phdalumni.map(renderStandardMemberMobile)}
      </div>
    </div>

    {/* M.Tech. (Ongoing) */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        M.Tech. (Ongoing)
      </h3>

      <div className="hidden md:block">
        {renderNoImageHeader()}
        {mtechOngoingMembers.map(renderNoImageMember)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {mtechOngoingMembers.map(renderNoImageMemberMobile)}
      </div>
    </div>

    {/* M.Tech. Alumni */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        M.Tech. Alumni
      </h3>

      <div className="hidden md:block">
        {renderNoImageHeaderwithpos()}
        {mtechalumni.map(renderNoImageMember)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {mtechalumni.map(renderNoImageMemberMobile)}
      </div>
    </div>

    {/* IDD (Ongoing) */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        IDD (Ongoing)
      </h3>

      <div className="hidden md:block">
        {renderNoImageHeader()}
        {IDDon.map(renderNoImageMember)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {IDDon.map(renderNoImageMemberMobile)}
      </div>
    </div>

    {/* IDD Alumni */}
    <div className="max-w-[1000px] mx-auto space-y-6 mb-12">
      <h3 className="text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-300 pb-2">
        IDD Alumni
      </h3>

      <div className="hidden md:block">
        {renderNoImageHeaderwithpos()}
        {IDDAlumni.map(renderNoImageMember)}
      </div>

      <div className="grid grid-cols-1 gap-6 md:hidden">
        {IDDAlumni.map(renderNoImageMemberMobile)}
      </div>
    </div>
  </div>
);
};
export default GroupMembers;

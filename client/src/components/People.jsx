import React, { useState } from "react";
import Person from "../assets/Person.jpeg"
import { useEffect } from "react"; // already likely imported
import { Linkedin } from "lucide-react";
import Krushi from "../assets/Krushi_Bandi.jpeg"
import Abhisekh from "../assets/Abhisekh_Shetty.jpeg"
import Anmol from "../assets/Anmol_Garg.jpeg"
import Ayush from "../assets/Ayush_Pansari.jpeg"
import Gaurav from "../assets/Gaurav_Anirkar.jpeg"
const teamMembers = [
  {
    name: "Kunal Kashyap",
    designation: "Founder & Managing Director",
    education: "Chartered Accountant",
    description:
      "Founder of Allegro Capital, Kunal has led the firm since 2002. With 30+ years in global finance, he is known for boardroom expertise and strategic counsel across sectors.",
    image: Person,
    socials: {
      linkedin: "#", // no link provided
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rohit Meher",
    designation: "Director",
    education: "IIM Ahmedabad, Ujjain Engineering College",
    description:
      "Rohit brings 17+ years of investment banking experience. Known for his rigorous execution, he has led deals exceeding $2.5B across healthcare, consumer, and industrial sectors.",
    image: Person,
    socials: {
      linkedin: "https://www.linkedin.com/in/rohit-mehar-629a8aa/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Abhishek Shetty",
    designation: "Director",
    education: "IIM Calcutta, RV College of Engineering",
    description:
      "Abhishek has 15+ years in healthcare M&A, including Biocon Biologics’ $3.3B Viatris acquisition. A strategic leader with deep sectoral expertise and global deal experience.",
    image: Abhisekh,
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishek-shetty-574b9313/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Ayush Pansari",
    designation: "Vice-President",
    education: "Chartered Accountant, CFA Charter Holder, University of Calcutta",
    description:
      "Ayush has led 25+ M&A and fundraising transactions worth over $3B. With prior experience at KPMG, he brings strong analytical expertise and client-focused execution.",
    image: Ayush,
    socials: {
      linkedin: "https://www.linkedin.com/in/ayush-pansari-12009a4b/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Gaurav Ahirkar",
    designation: "Associate Vice-President",
    education: "IIM Calcutta",
    description:
      "Gaurav executes strategic research and M&A deals across sectors. He has prior experience at Cloudtail, Tata Motors, and Caterpillar, bringing a diverse and strategic perspective.",
    image: Gaurav,
    socials: {
      linkedin: "https://www.linkedin.com/in/gaurav-ahirkar-239a01137/",
      twitter: "#",
      github: "#",
    },
  },
  
  
  
  
  {
    name: "Mansi Misra",
    designation: "Associate",
    education: "IIM Bangalore, CFA L3, St. Xavier's College Mumbai",
    description:
      "Mansi is an Associate at Allegro Capital with a strong foundation in finance and business from IIM Bangalore and St. Xavier's College.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Nancy Yadav",
    designation: "Associate",
    education: "IIM Bangalore, Shaheed Sukdev College of Business Studies",
    description:
      "Nancy supports transaction execution at Allegro through financial analysis, research, and coordination. She previously interned at BCG and brings a structured, detail-oriented approach.",
    image: Person,
    socials: {
      linkedin: "https://www.linkedin.com/in/yadav-nancy/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Anmol Garg",
    designation: "Associate",
    education: "IIM Bangalore, Shri Ram College of Commerce",
    description:
      "Anmol contributes to live mandates with financial modeling and deal support. With experience at Credit Suisse, he brings strong analytical skills and finance expertise.",
    image: Anmol,
    socials: {
      linkedin: "https://www.linkedin.com/in/anmol-garg16/",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Krushi Bandi",
    designation: "Associate",
    education: "IIM Bangalore, IIT Kharagpur",
    description:
      "Krushi supports M&A and fundraising transactions. With experience at EY, Chefkart, Quollab, and Faering Capital, he brings an entrepreneurial, analytical, and execution-driven approach.",
    image: Krushi,
    socials: {
      linkedin: "https://www.linkedin.com/in/krushi-bandi/",
      twitter: "#",
      github: "#",
    },
  },
];

const People = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  useEffect(() => {
  if (selectedMember) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // Clean up in case component unmounts while modal is open
  return () => {
    document.body.classList.remove("overflow-hidden");
  };
}, [selectedMember]);
const group1 = teamMembers.slice(0, 3);
const group2 = teamMembers.slice(3, 5);
const group3 = teamMembers.slice(5, 9);
const MemberCard = ({ member, onClick }) => (
  <div
    className="w-72 bg-slate-50 shadow-md rounded-xl p-4 text-center transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
    onClick={onClick}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-xl font-medium text-slate-700">{member.name}</h3>
    <p className="text-sm text-gray-500">{member.designation}</p>
  </div>
);


  return (
    <div className=" min-h-screen bg-slate-100 py-16 px-4 md:px-16">
      <h1 className="text-2xl md:text-3xl font-medium  mb-12 text-slate-600">Our People</h1>

      {/* Grid Section */}
   <div className="space-y-10">
  {/* First 3 Members */}
  <div className="flex justify-center gap-8 flex-wrap">
    {group1.map((member, index) => (
      <MemberCard key={index} member={member} onClick={() => setSelectedMember(member)} />
    ))}
  </div>

  {/* Next 2 Members */}
  <div className="flex justify-center gap-8 flex-wrap">

    {group2.map((member, index) => (
      <MemberCard key={index} member={member} onClick={() => setSelectedMember(member)} />
    ))}
  </div>

  {/* Last 3 Members */}
<div className="flex flex-wrap justify-center lg:justify-between lg:gap-2 max-w-7xl mx-auto">
  {group3.map((member, index) => (
   
      <MemberCard member={member} onClick={() => setSelectedMember(member)} />
    
  ))}
</div>


</div>


      {/* Modal */}
      {selectedMember && (
<div className="fixed inset-0 bg-slate-100 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-8 w-full max-w-lg relative text-center">
      <button
        onClick={() => setSelectedMember(null)}
        className="absolute top-2 right-4 text-2xl text-red-500 font-bold"
      >
        ×
      </button>
      <img
        src={selectedMember.image}
        alt={selectedMember.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <div className="flex justify-center space-x-4 mb-4">
        <Linkedin size={20} className="text-blue-600"/>
        <a href={selectedMember.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600">
          LinkedIn
        </a>
        
      </div>
      <h2 className="text-2xl font-medium">{selectedMember.name}</h2>
      <p className="text-red-500">{selectedMember.designation}</p>
      <p className="italic text-sm text-gray-500">{selectedMember.education}</p>
      <p className="mt-4 text-gray-700">{selectedMember.description}</p>
    </div>
  </div>
)}

    </div>
  );
};

export default People;

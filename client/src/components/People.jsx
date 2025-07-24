import React, { useState } from "react";
import Person from "../assets/Person.jpeg"
import { useEffect } from "react"; // already likely imported
import { Linkedin } from "lucide-react";
import Krushi from "../assets/Krushi_Bandi.jpeg"
import Abhisekh from "../assets/Abhisekh_Shetty.jpeg"
import Anmol from "../assets/Anmol_Garg.jpeg"
import Ayush from "../assets/Ayush_Pansari.jpeg"
import Gaurav from "../assets/Gaurav_Anirkar.jpeg"
import { useNavigate } from "react-router-dom";
const teamMembers = [
  
 {
  name: "Kunal Kashyap",
  designation: "Founder, Chairman & CEO",
  education: "Chartered Accountant",
  description: null,
  experienceLeadership: "Founder, Chairman & CEO of Allegro Capital. With over 30 years of experience, Kunal has led Allegro’s evolution into a multi-vertical financial services powerhouse since founding it in 2002. He previously held leadership positions at Arthur Andersen and co-founded Celstream Technologies and Andante Foods.",
  wealthInsurance: "Spearheaded Allegro’s wealth management arm, managing ₹1,000+ crore in assets across HNIs, family offices, and professionals. He also scaled Allegro’s insurance advisory platform for life and general insurance solutions.",
  entrepreneurship: "Co-founded Celstream Technologies (product engineering) and Andante Foods (premium foods business), reflecting his focus on innovation and long-term value creation.",
  boardContribution: "Held independent board roles in companies like GSK Consumer Healthcare, MetLife India, Cambridge Solutions, and Mereo BioPharma. Currently on the board of Mazumdar Shaw Medical Foundation, contributing to healthcare innovation.",
  educationPhilosophy: "Chartered Accountant by qualification. Combines technical depth with strategic foresight and client trust.",
  image: Person,
  socials: {
    linkedin: "#",
    twitter: "#",
    github: "#"
  }
},

  {
  name: "Rohit Meher",
  designation: "Director",
  education: "IIM Ahmedabad, Ujjain Engineering College",
  description: null,
  experienceLeadership: "Director at Allegro Capital with over 13 years of investment banking experience. He has led and executed 25+ high-value transactions worth more than $2.5 billion, spanning sectors such as healthcare, industrials, and infrastructure. Rohit brings a hands-on leadership style to complex deal structuring, negotiation, and closure. Prior to Allegro, he was part of ICICI Bank’s Investment Banking team, where he gained deep experience in M&A, structured finance, and capital markets.",
  boardContribution: "Rohit is a trusted advisor to entrepreneurs, boards, and institutional investors. He is known for his ability to synthesize financial insights with strategic foresight. His work regularly influences boardroom decision-making, especially in high-growth and transformational phases of companies. He has been involved in key governance-level discussions and brings integrity and precision to all board-level interactions.",
  educationPhilosophy: "Rohit holds an MBA from IIM Ahmedabad and a B.E. from Ujjain Engineering College. He combines engineering logic with financial acumen to provide sharp, actionable advice. He is widely regarded for his methodical approach, mentorship of junior professionals, and ability to see the big picture while diving deep into transaction details.",
  image: Person,
  socials: {
    linkedin: "https://www.linkedin.com/in/rohit-mehar-629a8aa/",
    twitter: "#",
    github: "#"
  }
},
{
  name: "Abhishek Shetty",
  designation: "Director",
  education: "IIM Calcutta, RV College of Engineering",
  description: null,
  experienceLeadership: "Abhishek has been with Allegro Capital since 2009, making him one of the firm's longest-serving professionals. As a Director, he has played a pivotal role in establishing Allegro’s reputation in healthcare, life sciences, and consumer sectors. His deep sectoral knowledge and client-first approach have helped close several marquee transactions. Prior to Allegro, he worked as an ASIC Design Engineer at Cisco, giving him a unique blend of technical and financial expertise.",
  boardContribution: "Over the years, Abhishek has advised board members, CXOs, and founders on strategic capital raises, mergers, and acquisitions, collectively valued at over $4 billion. He is known for his credibility in the boardroom, where his calm demeanor, analytical rigor, and long-term orientation stand out. He has contributed to defining capital structures and strategic roadmaps in high-impact engagements.",
  educationPhilosophy: "Abhishek is an alumnus of IIM Calcutta and RV College of Engineering. His engineering background enhances his ability to bring structured thinking and innovation to financial strategy. He is a firm believer in integrity, trust-building, and lifelong learning. He also mentors younger professionals and believes in creating a supportive team culture anchored in excellence.",
  image: Abhisekh,
  socials: {
    linkedin: "https://www.linkedin.com/in/abhishek-shetty-574b9313/",
    twitter: "#",
    github: "#"
  }
}
,
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
  const navigate = useNavigate();
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
    className="w-72 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer"
    onClick={onClick}
  >
    {/* Image Section with animated overlay */}
    <div className="relative group">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-56 object-cover"
      />


    </div>

    {/* Text Section */}
    <div className="p-4 text-center bg-white">
      <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.designation}</p>
    </div>
  </div>
);



  return (
    <div className=" min-h-screen  py-16 px-4 md:px-16">
      <h1 className="text-2xl md:text-3xl font-medium  mb-12 text-slate-600">Our People</h1>

      {/* Grid Section */}
   <div className="space-y-10">
  {/* First 3 Members */}
  <div className="flex justify-center gap-8 flex-wrap">
    {group1.map((member, index) => (
  <MemberCard
    key={index}
    member={member}
    onClick={() =>
      navigate(`/member/${member.name.replace(/\s+/g, "-").toLowerCase()}`, {
        state: { member },
      })
    }
  />
))}
  </div>

  {/* Next 2 Members */}
  <div className="flex justify-center gap-8 flex-wrap">

    {group2.map((member, index) => (
      <MemberCard key={index} member={member} onClick={() => setSelectedMember(member)} />
    ))}
  </div>

  {/* Last 3 Members */}
<div className="flex flex-wrap justify-center lg:justify-between gap-8 lg:gap-2 max-w-7xl mx-auto">
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

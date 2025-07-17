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
    designation: "Founder & Managing Director",
    education: "Chartered Accountant",
    description:
      "Kunal Kashyap is the Founder, Chairman, and CEO of Allegro Capital, one of India’s most respected independent investment banks. Since founding the firm in 2002, he has led Allegro’s transformation into a multi-vertical financial services platform, spanning M&A advisory, private equity, capital markets, wealth management, and insurance broking.With over three decades of experience across global finance, Kunal is widely recognized for his strategic foresight, boardroom presence, and trusted counsel to promoters, boards, and institutional investors. Under his leadership, Allegro has executed landmark transactions across sectors such as healthcare, consumer, technology, and financial services—advising global corporations, top-tier private equity funds, and fast-scaling Indian businesses.Kunal has directly led several of Allegro’s marquee mandates, including multi-billion-dollar cross-border acquisitions, large private equity transactions, and strategic partnerships for some of India’s most iconic companies. He also conceptualized and launched Allegro’s wealth management arm, which today manages over ₹1,000 crore in client assets, serving HNIs, family offices, and professionals with tailored portfolio strategies and long-term planning solutions. In parallel, Allegro’s insurance distribution business has emerged as a credible advisory-led platform for life and general insurance solutions.Prior to founding Allegro, Kunal was a Global Partner at Arthur Andersen, where he played leadership roles in the firm’s consulting and financial advisory practice. He also co-founded two entrepreneurial ventures—Celstream Technologies, a pioneering product engineering company, and Andante Foods, a premium foods business—both reflecting his deep interest in innovation, leadership, and long-term value creation.Over the years, Kunal has held independent board roles at global and Indian companies, including GlaxoSmithKline Consumer Healthcare, MetLife India, Cambridge Solutions, Mereo BioPharma (UK), and others. He currently serves as a Board Member of the Mazumdar Shaw Medical Foundation, further reinforcing his commitment to India's healthcare and life sciences ecosystem.A Chartered Accountant by qualification, Kunal blends technical depth with commercial intuition, and brings a rare combination of global professionalism and Indian entrepreneurialism. He is known not only for his dealmaking acumen but also for building enduring client relationships, mentoring future leaders, and shaping Allegro into a firm built on trust, discretion, and deep domain knowledge.",
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
      "Rohit is a Director at Allegro Capital and brings over 13 years of experience in investment banking with deep expertise across healthcare, consumer, and industrial sectors. He has led over 25 transactions aggregating more than USD 2.5 billion in value, covering both M&A and private equity capital raising.Since joining Allegro, Rohit has advised on several marquee transactions, including a USD 1+ billion PE-backed acquisition of 12 hospitals, a USD 150 million growth capital raise for a leading molecular diagnostics player, and a USD 225 million fundraise for a global precision blades manufacturer. He also advised on the USD 150 million majority stake sale of India’s largest oncology platform to a global investor, establishing Allegro’s credentials in complex, multi-party cross-border transactions.Before Allegro, Rohit worked with ICICI Bank’s Investment Banking division, where he gained a strong foundation in transaction structuring, credit evaluation, and deal execution. At Allegro, he plays a leadership role in driving sector strategy, originating mandates, and mentoring the next generation of bankers.Rohit is known for his strategic thinking, rigorous execution, and long-term client relationships — making him a trusted advisor to founders, boards, and institutional investors alike.",
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
      "Abhishek is a Director at Allegro Capital and one of the firm’s most senior professionals, having been with the platform since 2009. Over the past 14+ years, he has played a pivotal role in establishing Allegro as a leading advisor in the healthcare and life sciences space, consistently delivering on complex, high-value transactions across M&A, private equity, and capital markets.Abhishek has led the execution of several marquee deals, including advising on Biocon Biologics’ USD 3.3 billion acquisition of Viatris’ biosimilars business — one of the largest M&A transactions in Indian healthcare. He has been a long-standing advisor to the Biocon Group, having also worked on multiple rounds of fundraises for Biocon Biologics from global investors such as KKR, ADQ, and True North, and previously on the IPO of Syngene International. His experience spans the full lifecycle of transactions — from early-stage growth capital to large cross-border acquisitions and public market exits.Abhishek's sharp analytical thinking, technical depth, and measured execution approach have made him a trusted advisor to boards, founders, and global institutions alike. His sector focus includes pharmaceuticals, biologics, diagnostics, hospitals, and emerging health-tech, with cumulative deal experience across over USD 4 billion in transaction value.Prior to Allegro, Abhishek worked as an ASIC Design Engineer at Cisco. His multidisciplinary background enables him to blend strategic insight with operational understanding — a quality that clients deeply value.Abhishek is widely respected for his integrity, long-term orientation, and calm leadership, and continues to play a key role in driving Allegro’s healthcare vertical and mentoring the next generation of investment bankers.",
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

      {/* Overlay: grows from center horizontally */}
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
  {/* Expanding overlay from center */}
  <div className="w-0 h-full bg-blue-300 bg-opacity-50 transition-all duration-500 group-hover:w-full flex items-center justify-center opacity-0 group-hover:opacity-70">
    {/* Inner content: icon + line - hidden initially, fade in on hover */}
   <h1 className="text-white text-xl">The minds behind the mission</h1>
  </div>
</div>

    </div>

    {/* Text Section */}
    <div className="p-4 text-center bg-white">
      <h3 className="text-xl font-semibold text-slate-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.designation}</p>
    </div>
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

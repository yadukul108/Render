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
    experienceLeadership: "Founder, Chairman & CEO of Allegro Capital. With over 30 years of experience, Kunal has led Allegro's evolution into a multi-vertical financial services powerhouse since founding it in 2002. He previously held leadership positions at Arthur Andersen and co-founded Celstream Technologies and Andante Foods.",
    wealthInsurance: "Spearheaded Allegro's wealth management arm, managing ₹1,000+ crore in assets across HNIs, family offices, and professionals. He also scaled Allegro's insurance advisory platform for life and general insurance solutions.",
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
    experienceLeadership: "Director at Allegro Capital with over 13 years of investment banking experience. He has led and executed 25+ high-value transactions worth more than $2.5 billion, spanning sectors such as healthcare, industrials, and infrastructure. Rohit brings a hands-on leadership style to complex deal structuring, negotiation, and closure. Prior to Allegro, he was part of ICICI Bank's Investment Banking team, where he gained deep experience in M&A, structured finance, and capital markets.",
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
    experienceLeadership: "Abhishek has been with Allegro Capital since 2009, making him one of the firm's longest-serving professionals. As a Director, he has played a pivotal role in establishing Allegro's reputation in healthcare, life sciences, and consumer sectors. His deep sectoral knowledge and client-first approach have helped close several marquee transactions. Prior to Allegro, he worked as an ASIC Design Engineer at Cisco, giving him a unique blend of technical and financial expertise.",
    boardContribution: "Over the years, Abhishek has advised board members, CXOs, and founders on strategic capital raises, mergers, and acquisitions, collectively valued at over $4 billion. He is known for his credibility in the boardroom, where his calm demeanor, analytical rigor, and long-term orientation stand out. He has contributed to defining capital structures and strategic roadmaps in high-impact engagements.",
    educationPhilosophy: "Abhishek is an alumnus of IIM Calcutta and RV College of Engineering. His engineering background enhances his ability to bring structured thinking and innovation to financial strategy. He is a firm believer in integrity, trust-building, and lifelong learning. He also mentors younger professionals and believes in creating a supportive team culture anchored in excellence.",
    image: Abhisekh,
    socials: {
      linkedin: "https://www.linkedin.com/in/abhishek-shetty-574b9313/",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Ayush Pansari",
    designation: "Vice-President",
    education: "Chartered Accountant, CFA Charter Holder, University of Calcutta",
    description: "Ayush has led 25+ M&A and fundraising transactions worth over $3B. With prior experience at KPMG, he brings strong analytical expertise and client-focused execution.",
    image: Ayush,
    socials: {
      linkedin: "https://www.linkedin.com/in/ayush-pansari-12009a4b/",
      twitter: "#",
      github: "#",
    },
  },
  
  {
    name: "Mansi Misra",
    designation: "Associate",
    education: "IIM Bangalore, CFA L3, St. Xavier's College Mumbai",
    description: "Mansi is an Associate at Allegro Capital with a strong foundation in finance and business from IIM Bangalore and St. Xavier's College.",
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
    description: "Nancy supports transaction execution at Allegro through financial analysis, research, and coordination. She previously interned at BCG and brings a structured, detail-oriented approach.",
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
    description: "Anmol contributes to live mandates with financial modeling and deal support. With experience at Credit Suisse, he brings strong analytical skills and finance expertise.",
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
    description: "Krushi supports M&A and fundraising transactions. With experience at EY, Chefkart, Quollab, and Faering Capital, he brings an entrepreneurial, analytical, and execution-driven approach.",
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

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedMember]);

  const group1 = teamMembers.slice(0, 3);
  const group2 = teamMembers.slice(3, 4);
  const group3 = teamMembers.slice(4, 8);

  const MemberCard = ({ member, onClick, index }) => (
    <div
      className="group w-60 mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 animate-fade-in-up"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full mx-auto h-55 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover overlay with LinkedIn */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center space-x-2 text-white">
            <Linkedin size={20} className="text-white" />
            <span className="text-sm font-medium">View Profile</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-gradient-to-br from-white to-slate-50">
        <div className="text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
            {member.name}
          </h3>
          <div className="h-1 w-12 bg-red-500 mx-auto mb-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <p className="text-red-600 font-semibold text-sm mb-2">
            {member.designation}
          </p>
          <p className="text-slate-600 text-sm italic">
            {member.education}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4 md:px-16 relative overflow-hidden">
    
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-[500] text-slate-800 mb-4">
            Our People
          </h1>
         
         <div className="max-w-3xl mx-auto space-y-4">
        <p className="text-xl md:text-2xl font-light text-slate-700 leading-relaxed">
          Meet the exceptional professionals driving innovation and excellence at 
          <span className="font-semibold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"> Allegro Capital</span>
        </p>
        
        {/* Additional descriptive text */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Our diverse team of industry experts, strategic thinkers, and dedicated professionals brings decades of combined experience to deliver unparalleled financial solutions.
        </p>
      </div>

      
        </div>

        {/* Team Grid */}
        <div className="space-y-16">
          {/* Leadership Team - First 3 Members */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-700 mb-8">Leadership Team</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {group1.map((member, index) => (
                <MemberCard
                  key={index}
                  member={member}
                  index={index}
                  onClick={() =>
                    navigate(`/member/${member.name.replace(/\s+/g, "-").toLowerCase()}`, {
                      state: { member },
                    })
                  }
                />
              ))}
            </div>
          </div>

          {/* Senior Team - Next 2 Members */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-700 mb-8">Senior Team</h2>
            <div className="flex justify-center gap-8 flex-wrap">
              {group2.map((member, index) => (
                <MemberCard 
                  key={index} 
                  member={member} 
                  index={index + 3}
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>

          {/* Associates - Last 4 Members */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-700 mb-8">Associates</h2>
            <div className="flex flex-wrap gap-8 mx-auto">
              {group3.map((member, index) => (
                <MemberCard 
                  key={index} 
                  member={member} 
                  index={index + 5}
                  onClick={() => setSelectedMember(member)} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative overflow-hidden animate-modal-slide-up">
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="relative bg-gradient-to-r from-slate-800 to-slate-700 p-8 text-center">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-red-300 font-semibold text-lg mb-2">
                  {selectedMember.designation}
                </p>
                <p className="text-slate-300 italic">
                  {selectedMember.education}
                </p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* LinkedIn Section */}
              <div className="flex justify-center mb-6">
                <a 
                  href={selectedMember.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-full transition-colors duration-300 group"
                >
                  <Linkedin size={20} className="text-slate-600 group-hover:text-slate-800" />
                  <span className="text-slate-700 font-medium group-hover:text-slate-900">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>

              {/* Description */}
              {selectedMember.description && (
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6">
                  <p className="text-slate-700 leading-relaxed text-center">
                    {selectedMember.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes modal-slide-up {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-modal-slide-up {
          animation: modal-slide-up 0.4s ease-out;
        }
        
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default People;
import React from 'react';
import Model from '../assets/Model.png';
import { useLocation, useParams, useNavigate } from "react-router-dom";

const MemberProfile = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const member = state?.member;
  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md mx-4 transform animate-fade-in">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">Member Not Found</h2>
          <p className="text-slate-600 mb-6">The requested member data could not be loaded.</p>
          <button
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={() => navigate("/")}
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-[3.5rem]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-50 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative  flex items-center justify-center py-8 px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl mx-auto transform animate-slide-up">
          
          {/* Header Section */}
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-4 md:p-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative  md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-slate-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <img
                    src={Model}
                    alt={member.name}
                    className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 mx-auto"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-medium text-white mb-3 transform animate-fade-in-up">
                  {member.name}
                </h1>
                <div className="text-xl md:text-2xl text-blue-200 font-medium mb-2 transform animate-fade-in-up delay-200">
                  {member.designation}
                </div>
                <div className="text-lg text-slate-300 font-medium mb-4 transform animate-fade-in-up delay-300">
                  Allegro Capital
                </div>
                {member.education && (
                  <p className="text-blue-100 italic md:text-lg transform animate-fade-in-up delay-400">
                    {member.education}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 md:p-12">
            <div className="grid gap-8 max-w-5xl mx-auto">
              
              {member.experienceLeadership && (
                <section className="group transform animate-fade-in-up delay-500">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200">
                    <h3 className="text-2xl md:text-3xl font-[500] text-slate-800 mb-4 flex items-center">
                     
                      Experience & Leadership
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">{member.experienceLeadership}</p>
                  </div>
                </section>
              )}

              {member.wealthInsurance && (
                <section className="group transform animate-fade-in-up delay-600">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200">
                    <p className="text-slate-700 text-lg leading-relaxed">{member.wealthInsurance}</p>
                  </div>
                </section>
              )}

              {member.entrepreneurship && (
                <section className="group transform animate-fade-in-up delay-700">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200">
                    <p className="text-slate-700 text-lg leading-relaxed">{member.entrepreneurship}</p>
                  </div>
                </section>
              )}

              {member.boardContribution && (
                <section className="group transform animate-fade-in-up delay-800">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200">
                    <p className="text-slate-700 text-lg leading-relaxed">{member.boardContribution}</p>
                  </div>
                </section>
              )}

              {member.educationPhilosophy && (
                <section className="group transform animate-fade-in-up delay-900">
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200">
                    <h3 className="text-2xl md:text-3xl font-[500] text-slate-800 mb-4 flex items-center">
                      
                      Education & Philosophy
                    </h3>
                    <p className="text-slate-700 text-lg leading-relaxed">{member.educationPhilosophy}</p>
                  </div>
                </section>
              )}
              {/* LinkedIn Section */}
             {member.socials?.linkedin && (
  <section className="transform animate-fade-in-up delay-1000 mx-auto">
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-3 text-center">
      <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-white"
        >
          <div className="flex items-center justify-center mb-1 space-x-2">
        {/* LinkedIn Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 
          .633-.325 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 
          12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 
          1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248C2.962 
          2.686 2.426 3.225 2.426 3.934c0 .694.52 1.248 1.302 
          1.248h.015zm4.908 8.212V9.359c0-.216.016-.432.08-.586.176-.431.576-.878 
          1.248-.878.88 0 1.232.662 1.232 1.634v3.865h2.4V9.25c0-2.22-1.184-3.252-2.765-3.252-1.274 
          0-1.845.7-2.165 1.19h.016V6.169h-2.4c.032.7 0 7.225 0 7.225h2.4z"/>
        </svg>
        <span className="text-white font-medium">LinkedIn Profile</span>
      </div>
     
        
          
        </a>
      
    </div>
  </section>
)}



            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1.0s; }
      `}</style>
    </div>
  );
};

export default MemberProfile;
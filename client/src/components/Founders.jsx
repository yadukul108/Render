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
          <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-8 md:p-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative  md:flex items-center gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-slate-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <img
                    src={Model}
                    alt={member.name}
                    className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
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
                  <p className="text-blue-100 italic text-lg transform animate-fade-in-up delay-400">
                    {member.education}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
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
              <section className="transform animate-fade-in-up delay-1000 w-2/5 mx-auto">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-2 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-white font-medium">LinkedIn Profile</span>
                  </div>
                  <p className="text-blue-100 text-lg">
                    {member.linkdin || "Profile not available"}
                  </p>
                </div>
              </section>
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
import React from 'react';

import { Link } from 'react-router-dom'; 
import PrivateIB from '../assets/Office2.jpg';
import CorporateFinance from "../assets/office3.jpg";
import FamilyIB from "../assets/AllegroOffice1.jpg";
const cards = [
  {
    image: CorporateFinance,
    heading: "Investment Banking",
    description:
      "We provide strategic advisory services, including mergers and acquisitions, capital raising, and financial restructuring.",
    link: "/investment",
    
  },
  {
    image: PrivateIB,
    heading: "Strategic Advisory",
    description:
      "Our private banking services offer personalized wealth management, investment advice, and financial planning for high-net-worth individuals.",
    link: "/strategic-advisory",
    
  },
  {
    image: FamilyIB,
    heading: "Private Banking",
    description:
      "Allegro Capital offers personalized private banking and wealth management services, helping individuals and families protect, grow, and transfer their wealth with confidence",
    link: "/private-banking",
    
  },
  {
    image: FamilyIB,
    heading: "Asset Management",
    description:
      "Allegro Capital provides tailored asset management solutions designed to preserve, grow, and optimize wealth. We work closely with clients to align portfolios with their long-term financial goals and risk preferences.",
    link: "/asset-management",
    
  },
];

const ServicesCards = () => {
  return (
    <section className="py-20  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        {/* Enhanced heading section */}
        <div className="text-center mb-10 md:mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4 md:mb-4">
            Our Core Services
          </h2>
          {/* <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-3 md:mb-6"></div> */}
          <p className="text-slate-600 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive suite of financial services designed to elevate your business and wealth management strategy
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => window.location.href = card.link}
            >
              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.heading}
                  loading="lazy"
                  className="w-full h-full object-cover "
                />
                
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`}></div>
                
                {/* Floating icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 sm:p-4 relative">
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                
                <h3 className="text-xl sm:text-2xl font-medium text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                  {card.heading}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                  {card.description}
                </p>
                
                {/* Enhanced CTA */}
                <div className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm sm:text-base group/link transition-all duration-300">
                  <span className="relative">
                    Learn More
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover/link:w-full transition-all duration-300"></span>
                  </span>
                  <svg 
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-2xl bg-gradient-to-r from-slate-600/10 via-blue-100/10 to-blue-500/10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-8 md:mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="flex flex-col md:inline-flex items-center gap-4 py-2 md:px-8 md:py-4 ">
            <span className="text-slate-600 font-medium ">Ready to get started?</span>
            <button 
              onClick={() => window.location.href = '/contact-us'}
              className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-delay: 0ms !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .group:hover {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesCards;
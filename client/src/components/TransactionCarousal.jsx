import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // ✅ Import Pagination module
import "swiper/css";
import "swiper/css/pagination"; // ✅ Import Pagination styles

import { Link } from "react-router-dom";



const TransactionCarousal = () => {
   const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions/getAllTransactions');
        if (!res.ok) throw new Error('Failed to fetch transactions');
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="w-4/5 md:w-11/12 mx-auto px-4">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper pb-10"
      >
        {transactions.map((txn, index) => (
          <SwiperSlide key={txn._id}>
            <Link
              to={`/transaction/${txn._id}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 max-w-sm mx-auto border border-white/20 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Section with Enhanced Overlay */}
              <div className="relative h-auto overflow-hidden">
                <img
                  src={txn.mainPic}
                  alt="Transaction"
                  loading="lazy"
                  className="w-auto mx-auto h-auto object-cover "
                />
             
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 border border-white/20 shadow-lg">
                  {txn.year || "—"}
                </div>
                
                {/* Deal Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-xs font-bold text-white shadow-lg">
                  {txn.type_of_deal || "—"}
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white relative">
                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                
                {/* Sector with Icon */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
                  <span className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
                    {txn.sector || "—"}
                  </span>
                </div>
                
                {/* Deal Information */}
                <div className="space-y-2">
                  {/* Deal Type */}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-sm font-medium">Type of Deal:</span>
                    <span className="text-slate-800 font-bold text-sm px-2 py-1 bg-slate-100 rounded-lg">
                      {txn.type_of_deal || "—"}
                    </span>
                  </div>
                  
                  {/* Amount - Enhanced Display */}
                  <div className="pt-2 border-t border-slate-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                        ₹{txn.amount || "—"}
                      </span>
                      <span className="text-sm text-slate-500 font-medium">Cr INR</span>
                    </div>
                  </div>
                </div>

                {/* Learn More CTA */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm group/link transition-all duration-300">
                    <span className="relative">
                      View Details
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

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-500/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl shadow-2xl bg-gradient-to-r from-slate-500/10 via-blue-100/10 to-blue-500/10"></div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

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
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 768px) {
          .group:hover {
            transform: translateY(-8px) !important;
          }
          
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
    </div>
  );
};

export default TransactionCarousal;
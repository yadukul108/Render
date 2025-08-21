import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import logo from "../assets/logo.png";

const TransactionDetail = () => {
  const { id } = useParams();
  const [txn, setTxn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`/api/transactions/getTransactionById/${id}`);
        if (!res.ok) throw new Error('Transaction not found');
        const data = await res.json();
        setTxn(data);
      } catch (err) {
        console.error(err);
        setTxn(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!txn) return <div className="p-6 text-center">Transaction not found.</div>;

  if (!txn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.73 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Transaction Not Found</h2>
          <p className="text-slate-600">The requested transaction could not be located.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden pt-[3.5rem]">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative  p-4 md:p-8 max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent to-red-600 rounded-full"></div>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Transaction Details
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
            </div>
            <p className="text-slate-600 md:text-lg">Comprehensive deal overview and analysis</p>
          </div>

          {/* Enhanced Top Row Images */}
          <div className="mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row justify-around gap-8 w-4/5 mx-auto">
              {[
                { label: "Representing", value: txn.representing, imageShowing: txn.representingPic },
                { label: "Counter Party", value: txn.party2 , imageShowing: txn.party2Pic},
                { label: "Asset", value: txn.asset,imageShowing: txn.assetPic }
              ]
                .filter(({ label, value }) => label !== "Counter Party" || value)
                .map(({ label, value , imageShowing}, index) => (
                  <div
                    key={index}
                    className="group relative flex-1 max-w-md mx-auto"
                    style={{ 
                      opacity: 0,
                      animation: `fade-in-up 0.8s ease-out forwards`,
                      animationDelay: `${400 + index * 200}ms`
                    }}
                  >
                    {/* Card container */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl md:w-[15rem] mx-auto overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
                      {/* Image with overlay */}
                      <div className="relative md:h-[5rem] overflow-hidden">
                        <img
                          src={imageShowing}
                          alt={value}
                          className=" md:w-auto w-[12rem] object-cover  "
                        />
                       
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-6 relative">
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                        
                        <h3 className="md:text-xl font-medium text-slate-600 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                          {value}
                        </h3>
                        <p className="text-slate-600 font-medium flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          {label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Enhanced Details Section */}
          <div className="flex flex-col md:flex-row gap-8 w-full opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            {/* Enhanced Left Box */}
            <div className="w-full md:w-80 xl:sticky xl:top-8 h-fit">
              <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-4 md:p-8 border border-white/20 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Logo and Client Name */}
                <div className="relative mb-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden border border-slate-100">
                      <img src={logo} alt="Client Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-4">Client Name</p>
                      <p className="text-slate-800 font-medium text-sm leading-tight">{txn.representing}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:mb-6"></div>

                  {/* Enhanced Info Fields */}
                  <div className="md:space-y-6">
                    {[
                      { label: "Sector", value: txn.sector,},
                      { label: "Type of Deal", value: txn.type_of_deal, },
                      { label: "Amount", value: `₹${txn.amount} Cr`,  },
                      { label: "Year", value: txn.year,}
                    ].map(({ label, value, icon }, index) => (
                      <div key={index} className="group/item">
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50/80 transition-colors duration-300">
                         
                          <div className="flex-1">
                            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1">{label}</p>
                            <p className="text-slate-800 font-medium text-sm">{value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Contact Button */}
                  <button className="mt-8 w-full group relative overflow-hidden md:px-6 py-2 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Us
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Right Box */}
            <div className="flex-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg border border-white/20 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-200 to-red-500 opacity-20"></div>
                
                {/* Content */}
                <div className="relative">
                  {/* Enhanced Description Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                        Description
                      </h2>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-medium text-slate-700 md:mb-6 leading-relaxed">
                      {txn.heading}
                    </h3>
                  </div>

                  {/* Enhanced Description Content */}
                  <div className="prose prose-slate max-w-none">
                    <div className="text-slate-600 text-base md:text-lg leading-relaxed space-y-6 whitespace-pre-line">
                      <div className="relative">
                        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-30 rounded-full"></div>
                        <div className=" pl-3 md:pl-6">
                          {txn.description}
                        </div>
                      </div>
                      
                     
                    </div>
                  </div>

                  {/* Key Highlights Section */}
                  <div className="mt-10 p-3 md:p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200">
                    <h4 className="text-[1rem] md:text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Transaction Value", value: `₹${txn.amount} Cr` },
                        { label: "Deal Structure", value: txn.type_of_deal },
                        { label: "Industry Sector", value: txn.sector },
                        { label: "Completion Year", value: txn.year }
                      ].map(({ label, value }, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-slate-200 last:border-b-0">
                          <span className="text-slate-600 font-medium">{label}:</span>
                          <span className="text-slate-800 font-bold">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

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
        
        @media (max-width: 768px) {
          .animate-fade-in-up {
            animation-delay: 0ms !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TransactionDetail;
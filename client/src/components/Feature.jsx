import React, { useState, useEffect } from 'react';

const Feature = () => {
  const [deals, setDeals] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [slideDirection, setSlideDirection] = useState('next');

  // Fetch featured deals from backend
  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const res = await fetch('/api/transactions/getAllTransactions');
        const data = await res.json();
        
        // Filter only featured deals
        const featured = data.filter((txn) => txn.isFeatured === true);
        setDeals(featured);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setIsLoading(false);
      }
    };

    fetchDeals();
  }, []);

  // Auto-slide every 4 seconds (slightly longer for better UX)
  useEffect(() => {
    if (deals.length === 0) return;
    
    const interval = setInterval(() => {
      setSlideDirection('next');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [deals]);

  const goToIndex = (index) => {
    setSlideDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % deals.length);
  };

  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? deals.length - 1 : prevIndex - 1
    );
  };

  // Loading state with skeleton
  if (isLoading) {
    return (
      <div className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-8">
          <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse"></div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/5 h-80 lg:h-96 bg-gray-200 animate-pulse"></div>
            <div className="w-full lg:w-3/5 p-8 space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-32 mt-8 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // No deals state
  if (deals.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto py-16 px-4 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-6xl mb-4">🏢</div>
          <h3 className="text-xl font-medium text-gray-600 mb-2">No Featured Deals</h3>
          <p className="text-gray-500">Check back later for exciting investment opportunities!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl lg:text-3xl font-medium bg-gradient-to-r from-gray-700 to-gray-600 bg-clip-text text-transparent ">
          Featured Investment Deals
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full"></div>
      </div>

      <div className="relative group">
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <div className="flex flex-col lg:flex-row ">
            
            {/* Image Section */}
            <div className="w-full lg:w-2/5 relative overflow-hidden">
            
              <img
                src={deals[currentIndex]?.mainPic}
                alt={deals[currentIndex]?.heading}
                className="w-auto h-auto mx-auto lg:h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              >
                →
              </button>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className={`transform transition-all duration-500 ${slideDirection === 'next' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}>
                
                {/* Deal Title */}
                <h3 className="text-xl lg:text-2xl font-medium text-gray-700 mb-8 leading-tight">
                  {deals[currentIndex]?.heading}
                </h3>

                {/* Deal Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  
                  {/* Amount */}
                  <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                    <div className="text-[1rem] lg:text-xl font-semibold text-slate-700 mb-1">
                      {deals[currentIndex]?.amount} Cr INR
                    </div>
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                     Value
                    </div>
                  </div>

                  {/* Year */}
                   <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                    <div className="text-[1rem] lg:text-xl font-semibold text-slate-700 mb-1">
                      {deals[currentIndex]?.year}
                    </div>
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                      Deal Year
                    </div>
                  </div>

                  {/* Type */}
                  <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4 rounded-xl border border-slate-200">
                    <div className="text-[1rem] lg:text-xl font-semibold text-slate-700 mb-1 capitalize">
                      {deals[currentIndex]?.type_of_deal}
                    </div>
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                      Deal Type
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center space-x-4">
                  <a
                    href={`/transaction/${deals[currentIndex]?._id}`}
                    className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Learn More
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                  
                  <div className="text-sm text-slate-500">
                    {currentIndex + 1} of {deals.length} deals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-slate-500 to-slate-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / deals.length) * 100}%` }}
          ></div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {deals.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                currentIndex === index
                  ? 'bg-slate-600 scale-125 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Feature;
import React from 'react';
import { TrendingUp, Shield, Users, Star, CheckCircle, ArrowRight, Briefcase, PieChart } from 'lucide-react';
import HomeIb from "../assets/AllegroOffice1.jpg";
import { Link } from 'react-router-dom';

import Footer from "../components/Footer";
import AssetStats from "../components/AssetStats"
const Asset = () => {
  const features = [
    {
      title: "Leading Asset Manager",
      items: [
        "Leveraged deep domain expertise to outperform since inception",
        "Defensive and Opportunistic portfolio management services", 
        "Truly aligned investment recommendations – majority of Fund Manager’s personal Net Worth at stake in same securities"
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Health PMS",
      items: [
        "Private Banking, Mutual Funds, and PMS",
        "Stock broking and Depository services licensed with the National Stock Exchange and the Corporate Depository Services",
        "Licensed fund manager (PMS) by SEBI"
      ],
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: "High Growth PMS",
      items: [
        "Pioneered Fee-Based Private Banking in India",
        "Zero commission mutual fund offering since 2019",
        "No Brokerage charges PMS"
      ],
      icon: <Shield className="w-8 h-8" />,
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-screen">
        <img
          src={HomeIb} 
          alt="Allegro Capital Office"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/10 text-white text-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Allegro Capital</h1>
            <p className="text-2xl md:text-3xl font-medium mt-2">Asset Management</p>
           
          </div>
        </div>
      </div>
<h1 className='text-center text-slate-700 mt-16 font-medium text-2xl md:text-4xl'>Asset Management</h1>
      {/* Value Proposition Towers */}
       <h1 className=" md:text-2xl font-medium mt-6 text-slate-600 max-w-3xl mx-auto text-center">"We are business owners, not traders. We use the Market to acquire great businesses at fair prices and sell when prices exceed their worth"
</h1>
      <div className=" py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tower 1 - Tailored Solutions */}
            <div className="group relative">
              <div className=" text-slate-700 p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 ">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h1 className="text-2xl font-medium mb-2">Discipline and Fundamentals</h1>
                </div>
              </div>
              <div className="bg-white p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center font-medium">
                  The core of our strategy lies in unwavering discipline and strong investment fundamentals
                </p>
              </div>
            
            </div>

           

            {/* Tower 3 - Committed */}
            <div className="group relative">
              <div className=" text-slate-700 p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 ">
                    <Star className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Outperformance</h3>
                  
                </div>
              </div>
              <div className="bg-white p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center font-medium">
                We have outperformed the market in both our Health and High Growth PMS strategies

                </p>
              </div>
             
            </div>

          </div>
        </div>
        
        
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg  border border-slate-200"
            >
              {/* Icon */}
              <div className="inline-flex p-4 rounded-xl bg-slate-700 text-white mb-6 ">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-medium text-slate-700 mb-6 ">
                {feature.title}
              </h3>

              {/* Items */}
              <div className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 ">
                    <div className="w-2 h-2 rounded-full bg-slate-700 mt-2.5 flex-shrink-0 "></div>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

             
            </div>
          ))}
        </div>
<AssetStats/>
      </div>

      <Footer/>
    </div>
  );
};

export default Asset;
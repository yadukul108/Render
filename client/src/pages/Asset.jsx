import {React,useState} from 'react';
import { TrendingUp, Shield, Users, Star, CheckCircle, ArrowRight, Briefcase, PieChart,ChartNoAxesCombined  } from 'lucide-react';
import HomeIb from "../assets/AllegroOffice1.jpg";
import { Link } from 'react-router-dom';

import Footer from "../components/Footer";
import AssetStats from "../components/AssetStats"
import CalendlyEmbed from '../components/Calendy';
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
      title: "Dynamic allocation",
      items: [
        "We design portfolios aligned with your unique financial goals",
        "A strategic mix of assets ensures stability and growth potential",
        "Licensed fund manager (PMS) by SEBI"
      ],
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: "Insightful Reporting",
      items: [
        "Easy-to-read reports that simplify complex investment data",
        "Track portfolio growth, trends, and key performance metrics",
        "Data-driven recommendations to support smarter financial decisions"
      ],
      icon: <ChartNoAxesCombined  className="w-8 h-8" />,
    }
  ];
const [selectedFeature, setSelectedFeature] = useState(0);
  return (
    <div>
      {/* Hero Section with Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
  <img
    src={HomeIb}
    alt="About Us"
    className="object-cover w-full h-[42rem] md:h-[40rem] filter brightness-75"
  />
  <div className="absolute inset-0 z-3 flex items-center">
  <div className="container mx-auto px-3 md:px-8">
    <div className="max-w-4xl">
      {/* Label */}
      <div className="mb-4">
        <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
          <span className="text-white text-sm font-medium tracking-wide">WELCOME TO ALLEGRO CAPITAL</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
        Excellence In
        <span className="block text-red-400 font-medium">Asset Management</span>
      </h1>

      {/* Subtext */}
      <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
       Allegro Capital provides tailored asset management solutions designed to preserve, 
  grow, and optimize wealth. We work closely with clients to align portfolios with 
  their long-term financial goals and risk preferences.
      </p>

      <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
        Guiding clients with integrity and expertise since 2002.
      </p>
    </div>
  </div>
</div>
<h1 className='text-center text-slate-700 mt-8 md:mt-16 font-medium text-3xl md:text-4xl '>Asset Management</h1>
      {/* Value Proposition Towers */}
       <h1 className=" md:text-2xl font-medium md:mt-6 text-slate-600 max-w-3xl mx-auto text-center p-2">"We are business owners, not traders. We use the Market to acquire great businesses at fair prices and sell when prices exceed their worth"
</h1>
      <div className=" py-10 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tower 1 - Tailored Solutions */}
            <div className="group relative">
              <div className=" text-slate-700 p-6 md:p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto md:mb-4 ">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h1 className="text-2xl font-medium md:mb-2">Discipline and Fundamentals</h1>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center font-medium text-sm  md:text-[1rem] ">
                  The core of our strategy lies in unwavering discipline and strong investment fundamentals
                </p>
              </div>
            
            </div>

           

            {/* Tower 3 - Committed */}
            <div className="group relative">
              <div className=" text-slate-700 p-6 md:p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto md:mb-4 ">
                    <Star className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-medium md:mb-2">Outperformance</h3>
                  
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center font-medium text-sm  md:text-[1rem] ">
                We have outperformed the market in both our Health and High Growth PMS strategies

                </p>
              </div>
             
            </div>

          </div>
        </div>
        
        
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h1 className='text-center text-slate-700  mb-10 font-medium text-3xl md:text-4xl'>Our Features</h1>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
  {/* Desktop Layout */}
  <div className="hidden lg:block lg:col-span-2 space-y-6">
    {features.map((feature, index) => (
      <button
        key={index}
        onClick={() => setSelectedFeature(index)}
        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
          selectedFeature === index
            ? 'bg-slate-700 text-white shadow-lg transform '
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:transform hover:scale-102'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{feature.icon}</span>
          <p className=" md:text-lg font-medium">{feature.title}</p>
        </div>
      </button>
    ))}
  </div>

  {/* Mobile Layout - Features with expandable content */}
  <div className="lg:hidden space-y-4">
    {features.map((feature, index) => (
      <div key={index} className="space-y-4">
        <button
          onClick={() => setSelectedFeature(selectedFeature === index ? -1 : index)}
          className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
            selectedFeature === index
              ? 'bg-slate-700 text-white shadow-lg'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{feature.icon}</span>
              <p className="md:text-lg font-medium">{feature.title}</p>
            </div>
           
          </div>
        </button>
        
        {/* Mobile Feature Content */}
        {selectedFeature === index && (
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 transition-all duration-500 animate-fade-in">
            {/* Icon */}
            <div className="inline-flex p-4 rounded-xl bg-slate-700 text-white mb-6">
              <span className="text-3xl">{feature.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-medium text-slate-800 mb-4">
              {feature.title}
            </h3>

            {/* Items */}
            <div className="space-y-2">
              {feature.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="flex items-start gap-4 animate-fade-in"
                  style={{
                    animationDelay: `${itemIndex * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 mt-2 flex-shrink-0 shadow-sm"></div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>

  {/* Desktop Right Side - Selected Feature Card */}
  <div className="hidden lg:block lg:col-span-3">
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 h-full transition-all duration-500 transform hover:shadow-2xl">
      {/* Icon */}
      <div className="inline-flex p-4 rounded-xl bg-slate-700 text-white mb-6">
        <span className="text-3xl">{features[selectedFeature].icon}</span>
      </div>

      {/* Title */}
      <h3 className=" text-xl md:text-2xl font-medium text-slate-800 mb-4">
        {features[selectedFeature].title}
      </h3>

      {/* Items */}
      <div className="space-y-2">
        {features[selectedFeature].items.map((item, itemIndex) => (
          <div 
            key={itemIndex} 
            className="flex items-start gap-4 animate-fade-in"
            style={{
              animationDelay: `${itemIndex * 0.1}s`,
              animationFillMode: 'both'
            }}
          >
            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 mt-2 flex-shrink-0 shadow-sm"></div>
            <p className="text-slate-600 leading-relaxed font-medium md:text-lg">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

<AssetStats/>

      </div>
     
      <Footer/>
    </div>
  );
};

export default Asset;
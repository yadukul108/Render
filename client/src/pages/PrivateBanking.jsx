import {React,useState,useRef} from 'react';
import { TrendingUp, Shield, Users, Star, CheckCircle, ArrowRight, Briefcase, PieChart } from 'lucide-react';
import HomeIb from "../assets/AllegroOffice1.jpg";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import Footer from "../components/Footer";
import CalendlyEmbed from '../components/Calendy';

const PrivateBankingPage = () => {
  const calendlyRef = useRef(null);
  const scrollToCalendly = () => {
    calendlyRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const features = [
    {
      title: "Bespoke financial solutions for HNI clients",
      items: [
        "Fully customized investment solutions",
        "One on One direct contact with relationship manager", 
        "Tax, Estate and Succession Planning"
      ],
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Wide range of Investment Offerings",
      items: [
        "Private Banking, Mutual Funds, and PMS",
        "Stock broking and Depository services licensed with the NSE and the CDS",
        "Licensed fund manager (PMS) by SEBI"
      ],
      icon: <PieChart className="w-8 h-8" />,
    },
    {
      title: "Truly Independent Advice",
      items: [
        "Pioneered Fee-Based Private Banking in India",
        "Zero commission mutual fund offering since 2019",
        "No Brokerage charges PMS"
      ],
      icon: <Shield className="w-8 h-8" />,
    }
  ];
const [selectedFeature, setSelectedFeature] = useState(0);
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden">
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
        Your Partner For
        <span className="block text-red-400 font-medium">Private Banking</span>
      </h1>

      {/* Subtext */}
      <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
       Allegro Capital offers personalized private banking and wealth management services, 
  helping individuals and families protect, grow, and transfer their wealth with confidence.
      </p>

      <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
        Guiding clients with integrity and expertise since 2002.
      </p>
    </div>
  </div>
</div>

</div>


        <h1 className='text-center text-slate-700 mt-8 md:mt-16 font-medium text-3xl md:text-4xl'>Private Banking</h1>
        <h1 className='text-center text-slate-600 p-1 font-medium mt-2 md:mt-6 md:text-2xl max-w-5xl mx-auto'>"Providing unbiased wealth management solutions tailored for families across generations, ensuring continuity and growth of family wealth through strategic planning and personalized advisory."</h1>
      {/* Value Proposition Towers */}
      <div className=" py-8 md:py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tower 1 - Tailored Solutions */}
            <div className="group relative">
              <div className=" text-slate-700 p-6 md:p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto md:mb-4 ">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-medium md:mb-2">Tailored</h1>
                  <h1 className="text-xl md:text-2xl font-medium">Solutions</h1>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center text-sm  md:text-[1rem] font-medium">
                  Bespoke financial strategies designed specifically for your unique needs and goals
                </p>
              </div>
            
            </div>

            {/* Tower 2 - Independent */}
            <div className="group relative">
              <div className=" text-slate-700 p-6 md:p-8 rounded-t-3xl transform transition-all duration-500 shadow-xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto md:mb-4 ">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-medium md:mb-2">Independent</h3>
                  <h3 className="text-xl md:text-2xl font-medium">Informed, Innovative</h3>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center text-sm  md:text-[1rem] font-medium">
                  Unbiased advice with cutting-edge insights and innovative approaches to wealth management
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
                  <h3 className="text-2xl md:text-3xl font-medium md:mb-2">Committed</h3>
                  <h3 className="text-xl md:text-2xl font-medium">Long-Term Success</h3>
                </div>
              </div>
              <div className="bg-white p-3 md:p-6 rounded-b-3xl shadow-xl border-t-4 border-red-600">
                <p className="text-slate-700 text-center text-sm  md:text-[1rem] font-medium">
                  Dedicated partnership focused on achieving your long-term financial objectives
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

          <h1 className='text-center text-slate-700 mt-20 md:mt-20 mb-16 font-medium text-3xl md:text-4xl'>Our Impact</h1>
            <div className="grid md:grid-cols-2 gap-8 ">
              <div className="text-center mb-4 md:mb-10 ">
                <Users className="w-12 h-12 text-slate-700 mx-auto mb-2 md:mb-4" />
                <h1 className="text-3xl md:text-5xl font-medium text-slate-700 mb-2">100+</h1>
                <p className="text-slate-600 text-sm uppercase tracking-wide">HNI Clients</p>
              </div>

              <div className="text-center mb-10">
                <TrendingUp className="w-12 h-12 text-slate-700 mx-auto mb-2 md:mb-4" />
                <h1 className="text-3xl md:text-5xl font-medium text-slate-700 mb-2">$50M+</h1>
                <p className="text-slate-600 text-sm uppercase tracking-wide">Assets Under Advisement</p>
              </div>
            </div>

        {/* Call to Action Section */}
        <div className=" mt-10 md:mt-20 text-center">
         <div
  className="rounded-3xl md:p-12 relative overflow-hidden bg-cover bg-center "
  style={{ backgroundImage: `url(${HomeIb})`  }}

>
  <div className="relative bg-white/80 backdrop-blur-md p-4 md:p-8 rounded-2xl">
    <img src={logo} alt=""  className="w-20 h-16 mx-auto"/>
    <h2 className="text-[1.25rem] md:text-4xl font-[500] text-slate-600 mb-2 md:mb-6 text-center">
      Ready to Transform Your Financial Future?
    </h2>
    <p className="md:text-xl text-slate-500 mb-8 max-w-3xl mx-auto text-center">
      Experience personalized wealth management with India's pioneering fee-based private banking services.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
       <button
                onClick={scrollToCalendly} 
                className="bg-red-600 text-white md:px-6 py-2 rounded-full font-semibold md:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Schedule Consultation
              </button>
      <button className=" bg-white text-red-600 px-6 py-2 rounded-full font-semibold md:text-lg hover:bg-red-600 hover:border-white hover:text-white transition-all duration-300">
        Learn More
      </button>
    </div>
  </div>
</div>

        </div>
      </div>
<div ref={calendlyRef} className="">
        <CalendlyEmbed />
      </div>
      <Footer/>
    </div>
  );
};

export default PrivateBankingPage;
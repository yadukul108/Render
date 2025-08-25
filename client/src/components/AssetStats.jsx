import React, { useState } from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
const ReturnsChart = () => {
  const [selectedPMS, setSelectedPMS] = useState('healthcare');

  const pmsData = {
    healthcare: {
      title: "Healthcare PMS",
      inceptionSince: "March 2019",
      size: "₹125 Crores",
      strategy: "Focused healthcare sector investing with emphasis on pharmaceutical, biotechnology, and medical device companies",
      chartData: [
        { name: 'BSE Healthcare Benchmark', value: 15, color: 'slate' },
        { name: 'Nifty 50 TR', value: 15, color: 'slate' },
        { name: 'Allegro Capital', value: 17, color: 'red' }
      ]
    },
    highgrowth: {
      title: "High Growth PMS",
      inceptionSince: "January 2020",
      size: "₹89 Crores",
      strategy: "Growth-oriented portfolio targeting high-potential companies with strong fundamentals and scalable business models",
      chartData: [
        { name: 'BSE 500 Benchmark', value: 12, color: 'slate' },
        { name: 'Nifty 50 TR', value: 12, color: 'slate' },
        { name: 'Allegro Capital', value: 14, color: 'red' }
      ]
    }
  };

  const ChartSection = ({ data, maxValue = 20 }) => (
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="group">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-700 font-medium md:text-lg  p-1">{item.name}</span>
            <span className={`font-bold text-lg ${item.color === 'red' ? 'text-red-600' : 'text-slate-600'}`}>
              {item.value}%
            </span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  item.color === 'red' 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg' 
                    : 'bg-gradient-to-r from-slate-400 to-slate-500'
                } `}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
            
            {item.color === 'red' && (
              <div className="absolute -top-1 right-0 transform translate-x-2">
                <Award className="w-6 h-6 text-red-600 animate-pulse" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const currentPMS = pmsData[selectedPMS];

  return (
    <div className="py-16 mt-8">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-700 mb-4">
            Returns since Inception
          </h2>
          
          <h1 className='text-center text-slate-600 font-medium mt-3 md:text-2xl max-w-5xl mx-auto'>
            Demonstrating consistent outperformance across our specialized portfolio management services
          </h1>
        </div>

        {/* Interactive Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - PMS Options */}
          <div className="lg:col-span-2 space-y-3 lg:sticky lg:top-20 lg:self-start">
            <h3 className="text-2xl font-medium text-slate-700 mb-6">Portfolio Management Services</h3>
            
            <button
              onClick={() => setSelectedPMS('healthcare')}
              className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                selectedPMS === 'healthcare'
                  ? 'bg-slate-700 text-white shadow-lg '
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 '
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedPMS === 'healthcare' ? 'bg-white/20' : 'bg-slate-200'}`}>
                  <TrendingUp className={`w-5 h-5 ${selectedPMS === 'healthcare' ? 'text-white' : 'text-slate-600'}`} />
                </div>
                <div>
                  <h4 className="md:text-lg font-medium">Healthcare PMS</h4>
                  <p className={`text-sm ${selectedPMS === 'healthcare' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Specialized healthcare investing
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setSelectedPMS('highgrowth')}
              className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                selectedPMS === 'highgrowth'
                  ? 'bg-slate-700 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:transform '
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${selectedPMS === 'highgrowth' ? 'bg-white/20' : 'bg-slate-200'}`}>
                  <Target className={`w-5 h-5 ${selectedPMS === 'highgrowth' ? 'text-white' : 'text-slate-600'}`} />
                </div>
                <div>
                  <h4 className="md:text-lg font-medium">High Growth PMS</h4>
                  <p className={`text-sm ${selectedPMS === 'highgrowth' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Growth-focused portfolio
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Right Side - Selected PMS Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 h-full transition-all duration-500 transform hover:shadow-2xl">
              {/* PMS Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-medium text-slate-700 mb-3 md:mb-6">
                  {currentPMS.title}
                </h3>
                
                {/* PMS Details */}
                <div className="mb-6 bg-slate-50">
                  <div className="bg-slate-50 rounded-lg p-2 md:p-4">
                    <h1 className=" text-xl md:text-2xl text-slate-600 font-medium">Inception Since</h1>
                    <div className="md:text-lg font-medium text-slate-800">{currentPMS.inceptionSince}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-2 md:p-4">
                    <h1 className="text-xl md:text-2xl text-slate-600 font-medium">Size</h1>
                    <div className="md:text-lg font-medium text-slate-800">{currentPMS.size}</div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-2 md:p-4 ">
                    <h1 className="text-xl md:text-2xl text-slate-600 font-medium">Strategy</h1>
                    <div className="md:text-lg font-medium text-slate-800 leading-relaxed mt-1">
                      {currentPMS.strategy}
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Chart */}
              <div className="border-t border-slate-200 pt-6">
                <h2 className="text-xl md:text-2xl font-medium text-slate-700 mb-6">Performance Comparison</h2>
                <ChartSection data={currentPMS.chartData} />
              </div>

            </div>
          </div>
        </div>

        {/* Performance Highlights Section */}
        <div className="mt-16 bg-slate-100 rounded-3xl p-4 md:p-12 relative overflow-hidden">
          <div className="relative text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-slate-700 mb-6">
              Consistent Alpha Generation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-900/10 backdrop-blur-sm rounded-2xl p-3 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">17%</div>
                <div className="text-slate-700 font-medium">Healthcare PMS Returns</div>
                <div className="text-slate-600 text-sm mt-1">vs 15% benchmark average</div>
              </div>
              
              <div className="bg-slate-900/10 backdrop-blur-sm rounded-2xl p-3 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-red-600 mb-2">14%</div>
                <div className="text-slate-700 font-medium">High Growth PMS Returns</div>
                <div className="text-slate-600 text-sm mt-1">vs 12% benchmark average</div>
              </div>
            </div>
            <Link to="/reports">
          <button className="mt-8 px-3 md:px-6 py-2 md:py-3 rounded-xl bg-red-600 text-white font-medium shadow-md hover:bg-red-700 transition-all">
            View our reports
          </button>
        </Link>
            <p className="text-slate-600 mt-4 md:mt-8 text-sm md:text-lg max-w-2xl mx-auto">
              Our disciplined investment approach and deep market expertise consistently deliver 
              superior risk-adjusted returns for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsChart;
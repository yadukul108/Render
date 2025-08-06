import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';
import logo from "../assets/logo.png"
const ReturnsChart = () => {
  const healthcareData = [
    { name: 'BSE Healthcare Benchmark', value: 15, color: 'slate' },
    { name: 'Nifty 50 TR', value: 15, color: 'slate' },
    { name: 'Allegro Capital', value: 17, color: 'red' }
  ];

  const highGrowthData = [
    { name: 'BSE 500 Benchmark', value: 12, color: 'slate' },
    { name: 'Nifty 50 TR', value: 12, color: 'slate' },
    { name: 'Allegro Capital', value: 14, color: 'red' }
  ];

  const ChartSection = ({ title, data, maxValue = 20 }) => (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500">
      <h3 className="text-2xl font-medium text-slate-800 mb-8 text-center">{title}</h3>
      
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-700 font-medium text-sm">{item.name}</span>
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
                  } group-hover:scale-105 transform origin-left`}
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
    </div>
  );

  return (
    <div className=" py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
         
          <h2 className="text-2xl md:text-4xl font-medium text-slate-800 mb-4">
            Returns since Inception
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Demonstrating consistent outperformance across our specialized portfolio management services
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ChartSection 
            title="Healthcare PMS" 
            data={healthcareData}
          />
          
          <ChartSection 
            title="High Growth PMS" 
            data={highGrowthData}
          />
        </div>

        {/* Performance Highlights */}
        <div className="mt-16 bg-slate-100 rounded-3xl p-12 relative overflow-hidden">
         
          <div className="relative text-center">
            <img src={logo} alt=""  className="w-20 h-16 mx-auto"/>
            <h3 className="text-3xl font-medium text-slate-700 mb-6">
              Consistent Alpha Generation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-900/10 backdrop-blur-sm rounded-2xl p-6  ">
                <div className="text-4xl font-bold text-red-600 mb-2">17%</div>
                <div className="text-slate-700 font-medium">Healthcare PMS Returns</div>
                <div className="text-slate-600 text-sm mt-1">vs 15% benchmark average</div>
              </div>
              
              <div className="bg-slate-900/10 backdrop-blur-sm rounded-2xl p-6 ">
                <div className="text-4xl font-bold text-red-600 mb-2">14%</div>
                <div className="text-slate-700 font-medium">High Growth PMS Returns</div>
                <div className="text-slate-600 text-sm mt-1">vs 12% benchmark average</div>
              </div>
            </div>
            
            <p className="text-slate-600 mt-8 text-lg max-w-2xl mx-auto">
              Our disciplined investment approach and deep market expertise consistently deliver 
              superior risk-adjusted returns for our clients.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">+200 bps</div>
            <div className="text-slate-700 font-medium">Healthcare Outperformance</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="text-2xl font-bold text-red-600 mb-2">+200 bps</div>
            <div className="text-slate-700 font-medium">High Growth Outperformance</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 text-center">
            <div className="text-2xl font-bold text-slate-700 mb-2">Since Inception</div>
            <div className="text-slate-700 font-medium">Consistent Track Record</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsChart;
import React from 'react';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { number: 150, label: 'Projects Completed' },
  { number: 200, label: 'Clients Served' },
  { number: 20, label: 'Years of Experience' }
];

const Stats = () => {
  return (
    <div className=" pt-4 md:pt-12 md:mb-4">

    <div  className="max-w-7xl mx-auto px-6  ">
      <h2 className="text-3xl md:text-4xl text-center font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-10 md:mb-18">Key Statistics</h2>
      <div className="flex flex-wrap w-3/4 mx-auto justify-between gap-10">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center w-full sm:w-auto">
            <h2 className=" text-3xl md:text-4xl font-medium text-slate-700">
              {stat.number}
              <span className="text-red-600">+</span>
            </h2>
            <p className="mt-2  md:text-lg text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Stats;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { number: 150, label: 'Projects Completed' },
  { number: 200, label: 'Clients Served' },
  { number: 10, label: 'Years of Experience' }
];

const Stats = () => {
  return (
    <div className=" md:pt-12">

    <div  className="max-w-7xl mx-auto px-6  ">
      <h1 className=" text-2xl md:text-3xl text-slate-700 mb-10 text-center ">Key Statistics</h1>
      <div className="flex flex-wrap w-3/4 mx-auto justify-between gap-10">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center w-full sm:w-auto">
            <h2 className=" text-2xl md:text-3xl font-medium text-slate-700">
              {stat.number}
              <span className="text-red-600">+</span>
            </h2>
            <p className="mt-2  md:text-lg text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Stats;

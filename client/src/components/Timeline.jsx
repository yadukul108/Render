import React from 'react';

const timelineData = [
  {
    title: "Firm Founded",
    description: "Allegro Advisors was established with a mission to deliver expert financial advice and strategic solutions to clients across sectors.",
    date: "January 2008"
  },
  {
    title: "Investment Banking Milestone",
    description: "Successfully advised on landmark M&A transactions, strengthening our reputation as a trusted investment banking partner.",
    date: "September 2012"
  },
  {
    title: "Asset & Wealth Management Expansion",
    description: "Launched comprehensive private banking and asset management services tailored to high-net-worth individuals.",
    date: "June 2016"
  },
  {
    title: "Strategic Growth & Global Partnerships",
    description: "Formed global strategic partnerships to enhance advisory services and deepen market expertise.",
    date: "March 2021"
  }
];


const Timeline = () => {
  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col items-center">
      <h3 className="text-2xl md:text-3xl font-medium text-slate-700 mb-24 relative inline-block">
         Our Milestones
        <span className="absolute bottom-[-5px] left-1/2 w-1/2 h-[3px] bg-gradient-to-r from-red-500 to-red-700 transform -translate-x-1/2"></span>
      </h3>

      <div className="relative w-11/12 md:w-3/4">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-red-500 to-red-700 transform -translate-x-1/2 z-0"></div>

        <ul className="space-y-16">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li
                key={index}
                className={`relative bg-white shadow-md rounded-lg p-6 w-full md:w-[48%] ${
                  isLeft ? 'md:float-left md:clear-right text-right md:translate-x-[-30px]' : 'md:float-right md:clear-left text-left md:translate-x-[30px]'
                }`}
              >
                {/* Date */}
                <span
                  className={`absolute w-32 h-8 bg-gradient-to-r from-red-500 to-red-700 text-white text-xs rounded-full flex items-center justify-center shadow-md ${
                    isLeft
                      ? 'top-[-2.5rem] right-5'
                      : 'top-[-2.5rem] left-5'
                  }`}
                >
                  {item.date}
                </span>

                {/* Circle */}
                <span
                  className={`absolute w-5 h-5 bg-pink-200 rounded-full top-0 flex items-center justify-center ${
                    isLeft ? 'right-[-30px]' : 'left-[-30px]'
                  }`}
                >
                  <span className="w-3 h-3 bg-red-700 rounded-full"></span>
                </span>

                {/* Content */}
                <h3 className="text-[1rem] md:text-lg font-semibold text-slate-700">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 mb-2 leading-relaxed">{item.description}</p>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;

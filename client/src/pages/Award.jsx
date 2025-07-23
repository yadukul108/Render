import React from "react";
import HomeIb from "../assets/HomeIB.jpg";
import Footer from "../components/Footer";
const awardsData = [
  {
    year: "2024",
    title: "Best Investment Advisory",
    description: "Recognized for excellence in strategic investment planning.",
  },
  {
    year: "2023",
    title: "Top Wealth Management Firm",
    description: "Awarded for outstanding client asset growth.",
  },
  {
    year: "2022",
    title: "Innovation in Financial Services",
    description: "Honored for tech-driven solutions in finance.",
  },
  {
    year: "2021",
    title: "Client Trust Excellence",
    description: "Recognized for highest customer satisfaction scores.",
  },
];

const AwardsAchievements = () => {
  return (
   <div className="">
         <div className="relative w-full h-screen ">
                <img
                  src={HomeIb} 
                  alt="Newsletter Background"
                  className="absolute inset-0 w-full h-full object-cover grey-tone"
                />
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Allegro Advisors</h1>
                  <p className="text-3xl md:text-3xl font-medium mt-2">Awards & Achievements</p>
                </div>
              </div>
               <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-medium text-slate-800 mb-8">Awards & Achievements</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm md:text-base border border-slate-300 rounded-lg overflow-hidden">
          <thead className="bg-slate-200 text-slate-700 text-left">
            <tr>
              <th className="p-4 border-b w-1/3">Heading</th>
              <th className="p-4 border-b w-1/6">Year</th>
              <th className="p-4 border-b">Description</th>
            </tr>
          </thead>
          <tbody>
            {awardsData.map((award, index) => {
              const bgColor = index % 2 === 0 ? "bg-slate-100" : "bg-slate-200";
              return (
                <tr key={index}>
                  {/* Arrow Heading Cell */}
                  <td className={`p-0 border-b ${bgColor}`}>
                    <div className="relative h-full w-full">
                      <div
                        className={`relative pl-6 pr-10 py-4 text-slate-700 font-semibold flex items-center`}
                        style={{
                          clipPath:
                            "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                        }}
                      >
                        {award.title}
                      </div>
                    </div>
                  </td>

                  {/* Year */}
                  <td className={`p-4 border-b text-slate-700 ${bgColor}`}>
                    {award.year}
                  </td>

                  {/* Description */}
                  <td className={`p-4 border-b text-slate-600 ${bgColor}`}>
                    {award.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/></div>
  );
};

export default AwardsAchievements;

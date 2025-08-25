import React from "react";
import HomeIb from "../assets/Office2.jpg";
import Footer from "../components/Footer";
import awardImage from "../assets/Awards.jpg"; // Replace with actual image
import { useState,useEffect } from "react";
const awardsData = [
  {
    year: "2024",
    title: "Best Investment Advisory",
    description: "Recognized for excellence in strategic investment planning, Allegro Advisors demonstrated unparalleled expertise in crafting personalized investment solutions. The award acknowledges our role in navigating volatile markets while consistently delivering strong portfolio performance for clients across sectors."
  },
  {
    year: "2023",
    title: "Top Wealth Management Firm",
    description: "Awarded for outstanding client asset growth, this accolade reflects Allegro’s commitment to holistic financial planning and disciplined asset allocation. Our dedicated wealth advisors built long-term trust and achieved record-breaking AUM expansion among HNIs and family offices."
  },
  {
    year: "2022",
    title: "Innovation in Financial Services",
    description: "Honored for tech-driven solutions in finance, Allegro launched AI-enabled portfolio tracking and digital onboarding tools. This innovation enhanced client experience, improved operational efficiency, and cemented our position as a forward-thinking financial institution."
  },
  {
    year: "2021",
    title: "Client Trust Excellence",
    description: "Recognized for highest customer satisfaction scores, this award reflects our unwavering client-first approach. Through transparent communication, proactive engagement, and exceptional service quality, Allegro built enduring relationships based on integrity and trust."

  },
];

const AwardsAchievements = () => {

  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch awards from API
  useEffect(() => {
    const fetchAwards = async () => {
      try {
        const res = await fetch("/api/awards"); // your backend endpoint
        if (!res.ok) throw new Error("Failed to fetch awards");
        const data = await res.json();
        setAwards(data); // adjust if your API wraps data inside a field like { awards: [...] }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAwards();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-700">
        Loading Awards...
      </div>
    );
  }

  return (
    <div className="">
      {/* Header with background */}
     <div className="relative w-full h-[42rem] md:h-screen">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>

  {/* Background Image */}
  <img
    src={HomeIb}
    alt="Awards Background"
    className="absolute inset-0 w-full h-full object-cover brightness-75"
  />

  {/* Content */}
  <div className="absolute inset-0 z-3 flex flex-col items-center justify-center text-center px-4">
    {/* Label */}
    <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
      <span className="text-white text-sm font-medium tracking-wide">RECOGNITION</span>
    </div>

    {/* Heading */}
    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
      Allegro Capital
    </h1>

    {/* Subheading */}
    <p className="text-red-400 text-2xl sm:text-3xl md:text-4xl mt-3 font-medium tracking-wide">
      Awards & Achievements
    </p>

    {/* Optional Subtext */}
    <p className="mt-6 text-slate-200 text-base sm:text-lg md:text-xl max-w-2xl">
      Celebrated across the industry for our expertise, impact, and excellence in investment advisory.
    </p>
  </div>
</div>


      {/* Awards List */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-medium text-slate-800 mb-10">Awards & Achievements</h1>

        {awardsData.map((award, index) => (
          <div>
          <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            {/* Left side */}
            <div className=" w-4/5 mx-auto md:w-2/3">
              <h2 className="text-xl md:text-2xl font-medium text-slate-700">{award.title} <span className="md:text-xl text-slate-600 ml-2">| {award.year}</span></h2>
              <p className="text-slate-600 mt-2">{award.description}</p>
            </div>

            {/* Right side - Image */}
            <div className=" w-4/5 mx-auto md:w-1/3 flex justify-center">
              <img
                src={awardImage}
                alt="Award"
                className="w-auto h-40 object-cover rounded-lg shadow"
              />
            </div>
            
          </div>
           <div className="w-full border-t border-slate-400 mb-6"></div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AwardsAchievements;

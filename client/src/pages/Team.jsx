import React from "react";
import People from "../components/People";
import Footer from "../components/Footer"
import HomeIB from "../assets/office4.jpg"
const OurPeople = () => {
  return (
    <div>
    <div className="  ">
      {/* New Introduction Section */}
     <div className="relative overflow-hidden w-full h-[42rem] md:h-[40rem]">
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>

  {/* Background Image */}
  <img
    src={HomeIB}
    alt="Our Team"
    className="object-cover w-full h-full filter brightness-75"
  />

  {/* Content */}
  <div className="absolute inset-0 z-3 flex items-center">
    <div className="container mx-auto px-3 md:px-8">
      <div className="max-w-4xl">
        {/* Label */}
        <div className="mb-4">
          <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
            <span className="text-white text-sm font-medium tracking-wide">
              OUR TEAM
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-4 leading-tight">
          Meet Our Team
          <span className="block text-red-400 font-medium">
            Passionate. Proactive. Expert.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
          At Allegro Capital, our strength lies in the synergy of our people.
          Every member brings depth, energy, and a relentless pursuit of
          excellence to ensure our clients thrive.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Team Cards Section */}
      <div className="">
        <People />
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default OurPeople;

import React from "react";
import People from "../components/People";
import Footer from "../components/Footer"
import HomeIB from "../assets/office4.jpg"
const OurPeople = () => {
  return (
    <div>
    <div className=" pt-[3rem]  ">
      {/* New Introduction Section */}
      <img
              src={HomeIB}
              alt="Banner"
              className="w-full h-[35rem] object-cover rounded-md grey-tone"
            />
      <div className=" absolute top-[1rem] md:top-[5rem] text-left max-w-4xl pt-[6rem] px-6 md:px-16"  >
        <p className="text-white text-sm uppercase tracking-wider">Our Team</p>
        <h1 className="text-2xl md:text-5xl font-medium text-white mt-5">Meet Our Team</h1>
        <h1 className="text-2xl md:text-5xl font-medium text-white mt-2">
          Passionate. Proactive. Expert.
        </h1>
        <p className="text-white text-sm md:text-lg mt-4">
          At Allegro Capital, our strength lies in the synergy of our people.
          Every member brings depth, energy, and a relentless pursuit of
          excellence to ensure our clients thrive.
        </p>
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

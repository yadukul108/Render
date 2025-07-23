import React, { useState, useEffect } from 'react';
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png"
const deals = [
  {
    id: 1,
    image: BBL,
    title: 'Strategic Merger between ABC & XYZ',amount: '$200M',
    year: '2022',
    type: 'Private Equity',
    description:
      'Advised ABC Corp. on a strategic $500M merger with XYZ Ltd., enhancing market presence and cross-border synergies.',
  },
  {
    id: 2,
    image: MAGE,
    title: 'Private Equity Investment in TechCo',amount: '$500M',
    year: '2023',
    type: 'Merger',
    description:
      'Facilitated a $200M private equity investment into TechCo, accelerating their AI-driven SaaS platform expansion.',
  },
  {
    id: 3,
    image: Mage,
    title: 'Successful IPO of FinGrowth',amount: 'Undisclosed',
    year: '2021',
    type: 'IPO',
    description:
      'Managed the IPO of FinGrowth Ltd., achieving a 3x oversubscription and a successful listing on NSE.',
  },
   {
    id: 1,
    image: MAGE,
    title: 'Strategic Merger between ABC & XYZ',amount: '$500M',
    year: '2023',
    type: 'Merger',
    description:
      'Advised ABC Corp. on a strategic $500M merger with XYZ Ltd., enhancing market presence and cross-border synergies.',
  },
  {
    id: 2,
    image: BBL,
    title: 'Private Equity Investment in TechCo',amount: '$200M',
    year: '2022',
    type: 'Private Equity',
    description:
      'Facilitated a $200M private equity investment into TechCo, accelerating their AI-driven SaaS platform expansion.',
  },
  {
    id: 3,
    image: Mage,
    title: 'Successful IPO of FinGrowth',
    amount: 'Undisclosed',
    year: '2021',
    type: 'IPO',
    description:
      'Managed the IPO of FinGrowth Ltd., achieving a 3x oversubscription and a successful listing on NSE.',
  },
];

const FeaturedDealsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === deals.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full  max-w-5xl mx-auto py-8 px-4">
  <h2 className=" text-2xl md:text-3xl font-medium text-center text-slate-700 mb-10">
    Featured Deals
  </h2>

  {/* Card Container */}
  <div className="p-4 rounded-lg bg-slate-100 shadow-md overflow-hidden flex flex-col md:flex-row">
    
    {/* Image */}
    <div className="w-2/3 mx-auto md:w-1/4  md:h-auto">
      <img
        src={deals[currentIndex].image}
        alt={deals[currentIndex].title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Description */}
    <div className="w-full md:w-3/5 p-6 flex flex-col justify-center">
      <h2 className=" text-xl md:text-2xl font-medium text-gray-700 mb-2">
        {deals[currentIndex].title}
      </h2>

      {/* First Line: Amount | Year | Type */}
      <div className="text-md md:text-lg text-gray-600 mb-3 flex flex-wrap gap-4">
        <span className='flex'><h1 className='text-medium text-slate-700 text-xl  mr-1'>Amount: </h1> {deals[currentIndex].amount}</span>
        <span className='flex'><h1 className='text-medium text-slate-700 text-xl mr-1'>Year: </h1>  {deals[currentIndex].year}</span>
        <span className='flex'><h1 className='text-medium text-slate-700 text-xl mr-1'>Type: </h1>  {deals[currentIndex].type}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm">
        {deals[currentIndex].description}
      </p>
    </div>
  </div>

  {/* Pagination */}
  <div className="flex justify-center mt-6 space-x-2">
    {deals.map((_, index) => (
      <button
        key={index}
        onClick={() => goToIndex(index)}
        className={`w-4 h-4 rounded-full ${
          currentIndex === index
            ? 'bg-red-700'
            : 'bg-gray-300 hover:bg-gray-500'
        }`}
      />
    ))}
  </div>
</div>

  );
};

export default FeaturedDealsCarousel;

import React from 'react';
import { Link } from 'react-router-dom'; 
import PrivateIB from '../assets/PrivateBanking.jpeg';
import CorporateFinance from "../assets/CorporateIB.jpeg";
import FamilyIB from "../assets/FamilyIB.jpeg";

const cards = [
  {
    image: CorporateFinance,
    heading: "Investing Banking",
    description:
      "We provide strategic advisory services, including mergers and acquisitions, capital raising, and financial restructuring.",
    link: "/investment",
  },
  {
    image: PrivateIB,
    heading: "Strategic Advisory",
    description:
      "Our private banking services offer personalized wealth management, investment advice, and financial planning for high-net-worth individuals.",
    link: "/strategic-advisory",
  },
  {
    image: FamilyIB,
    heading: "Wealth Mangement",
    description:
      "We cater to the unique needs of affluent families, providing comprehensive wealth management, estate planning, and philanthropic advisory.",
    link: "/about",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-18 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl text-slate-700 mb-10">Our Core Services</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden duration-300"
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.heading}
        loading="lazy"
        className="w-full h-40 object-cover grey-tone"
      />

      {/* Text section with border bottom on hover */}
      <div className="p-6 border-b-4 border-transparent group-hover:border-red-600 transition-all duration-300">
        <p className="text-[1rem] md:text-lg font-medium mb-2 text-slate-600">
          {card.heading}
        </p>
        <p className="text-sm mb-4 text-slate-500">
          {card.description}
        </p>
        <Link
          to={card.link}
          className="text-red-600 hover:underline text-sm font-medium"
        >
          Learn More →
        </Link>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ServicesCards;

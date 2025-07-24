import React from 'react';
import { Link } from 'react-router-dom';
import HomeIb from '../assets/HomeIB.jpg'; // Replace with your hero image path
import { DollarSign, Users, Briefcase, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="pt-[3rem]">
   <div className="relative w-full h-screen">
  <img
    src={HomeIb}
    alt="Newsletter Background"
    className="absolute inset-0 w-full h-full object-cover grey-tone"
  />

  {/* Overlay */}
  <div className="absolute inset-0"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
      Start your career in
    </h1>
    <p className="text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
      Allegro Advisors
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <a href="/about">
        <button className="bg-whitetext-slate-600 hover:bg-red-700 hover:text-white px-6 py-3 rounded font-semibold transition duration-300 w-full sm:w-auto">
          About Us
        </button>
      </a>
      <a href="/apply">
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition duration-300 w-full sm:w-auto">
          Apply Now
        </button>
      </a>
    </div>
  </div>
</div>
{/* Benefits Section */}
<section className=" py-16 px-4 md:px-12">
  <h2 className="text-2xl md:text-3xl font-medium text-center text-slate-800 mb-12">
    Benefits of working with us
  </h2>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
    {/* Benefit 1 */}
    <div className="bg-slate-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition hover:border-b-4 hover:border-red-600 border-b-transparent">
      <div className="flex justify-center mb-4">
        <DollarSign className="text-red-600" size={32} />
      </div>
      <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-2">Competitive Salary</h3>
      <p className="text-slate-600  text-[0.9rem]">Get paid well for your skills! We offer competitive salary + benefits.</p>
    </div>

    {/* Benefit 2 */}
    <div className="bg-slate-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition hover:border-b-4 hover:border-red-600 border-b-transparent">
      <div className="flex justify-center mb-4">
        <Users className="text-red-600" size={32} />
      </div>
      <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-2">Collaborative Team</h3>
      <p className="text-slate-600  text-[0.9rem]">Work with talented professionals in a growth-focused environment.</p>
    </div>

    {/* Benefit 3 */}
    <div className="bg-slate-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition hover:border-b-4 hover:border-red-600 border-b-transparent">
      <div className="flex justify-center mb-4">
        <Briefcase className="text-red-600" size={32} />
      </div>
      <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-2">Career Growth</h3>
      <p className="text-slate-600  text-[0.9rem]">We support your development with learning, mentorship, and projects.</p>
    </div>

    {/* Benefit 4 */}
    <div className="bg-slate-100 shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition hover:border-b-4 hover:border-red-600 border-b-transparent">
  <div className="flex justify-center mb-4">
    <Clock className="text-red-600" size={32} />
  </div>
  <h3 className="text-lg md:text-xl font-medium text-slate-800 mb-2">Global Market Exposure</h3>
  <p className="text-slate-600 text-[0.9rem]">Work on high-impact financial projects and gain insights into international markets and investment strategies.</p>
</div>

  </div>
</section>
<section className="bg-white py-16 px-4 md:px-12">
  <h2 className="text-2xl md:text-3xl font-medium text-center text-slate-800 mb-12">
    Apply Now
  </h2>

  <form className="max-w-3xl mx-auto grid gap-6">
    {/* Full Name */}
    <div>
      <label className="block mb-2 text-slate-700 font-medium" htmlFor="name">
        Full Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Your full name"
        className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 text-slate-700 font-medium" htmlFor="email">
        Email Address
      </label>
      <input
        type="email"
        id="email"
        placeholder="you@example.com"
        className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block mb-2 text-slate-700 font-medium" htmlFor="phone">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="+91 9876543210"
        className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        required
      />
    </div>

    {/* Resume Upload */}
    <div>
      <label className="block mb-2 text-slate-700 font-medium" htmlFor="resume">
        Upload Resume
      </label>
      <input
        type="file"
        id="resume"
        className="w-full border border-slate-300 px-4 py-2 rounded-lg file:bg-red-600 file:text-white file:border-none file:px-4 file:py-2 file:rounded file:cursor-pointer"
        accept=".pdf,.doc,.docx"
        required
      />
    </div>

    {/* Message */}
    <div>
      <label className="block mb-2 text-slate-700 font-medium" htmlFor="message">
        Linkdin id
      </label>
      <textarea
        id="message"
        rows="1"
        placeholder="Linkdin"
        className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
      ></textarea>
    </div>
    <p className='text-xl text-slate-700 '>We will reach to you</p>
    {/* Submit Button */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg transition duration-300"
      >
        Submit Application
      </button>
    </div>
  </form>
</section>
<Footer/>

</div>
  );
};

export default Careers;

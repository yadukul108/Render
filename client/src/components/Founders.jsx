import React from 'react';
import Model from '../assets/Model.png';
import { useLocation, useParams, useNavigate } from "react-router-dom";

const MemberProfile = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const member = state?.member;

  if (!member) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl text-red-600">Member not found or data not passed.</h2>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Back to Team
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-[3.5rem]">
      <div className="rounded-2xl shadow-lg overflow-hidden flex flex-col w-full mt-[2rem] items-center p-6">
        <div className="md:w-3/4 md:flex p-4">
          <img
            src={Model}
            alt="Team Member"
            className="md:w-1/2 object-cover rounded-md mb-4"
          />
          <div className="mx-auto items-center flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-medium text-slate-700 mb-2">{member.name}</h2>
            <h1 className="text-lg md:text-2xl text-slate-500 max-w-full">
              {member.designation}, Allegro Capital
            </h1>
            <p className="text-md text-slate-600 mt-2 italic">{member.education}</p>
          </div>
        </div>

        <div className="md:w-4/5 p-6 flex flex-col text-justify">
         {member.experienceLeadership && (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-2">Experience & Leadership</h3>
    <p className="text-gray-600 text-base">{member.experienceLeadership}</p>
  </section>
)}

{member.wealthInsurance && (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-2">Wealth & Insurance Services</h3>
    <p className="text-gray-600 text-base">{member.wealthInsurance}</p>
  </section>
)}

{member.entrepreneurship && (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-2">Entrepreneurial Background</h3>
    <p className="text-gray-600 text-base">{member.entrepreneurship}</p>
  </section>
)}

{member.boardContribution && (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-2">Board Roles & Industry Contribution</h3>
    <p className="text-gray-600 text-base">{member.boardContribution}</p>
  </section>
)}

{member.educationPhilosophy && (
  <section className="mb-6">
    <h3 className="text-2xl font-semibold text-slate-700 mb-2">Education & Philosophy</h3>
    <p className="text-gray-600 text-base">{member.educationPhilosophy}</p>
  </section>
)}


          <p className="text-sm text-gray-500 mt-4">
            LinkedIn: {member.linkdin || "—"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;

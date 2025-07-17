import React from 'react';
import Model from '../assets/Model.png'; // Replace with your actual image path
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
    <div className="min-h-screen flex items-center justify-center bg-slate-100 pt-[3.5rem]">
      <div className=" rounded-2xl shadow-lg overflow-hidden flex flex-col w-full mt-[2rem] items-center p-6">
        
       
        <div className="md:w-3/4  flex  p-4">
  <img
    src={Model}
    alt="Team Member"
    className="w-1/2 object-cover rounded-md mb-4"
  />
  <div className='mx-auto items-center flex flex-col justify-center'>
    <h2 className="text-4xl font-medium text-slate-700 mb-2">{member.name}</h2>
  <p className="text-xl text-slate-500  ">{member.designation}, Allegro Advisors</p>
  
  </div>
</div>

      
        <div className=" md:w-4/5 p-6 flex flex-col ">
          
          <p className="text-gray-600 text-base mb-3">
            {member.description}
          </p>
          <p className="text-sm text-gray-500">Linkdin: {member.linkdin}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;

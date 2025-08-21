import {React, useState} from 'react'
import HomeIb from "../assets/office3.jpg"
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {useRef} from "react"


const Case = () => {
  const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  organization: '',
  purpose: '',
});
const [errors, setErrors] = useState({});
const handleInputChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const validateForm = () => {
  const newErrors = {};
  Object.entries(formData).forEach(([key, value]) => {
    if (!value.trim()) newErrors[key] = 'Required';
  });
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    // Example: log info or send to backend
    console.log('User Info:', formData);

    // trigger download
    const link = document.createElement('a');
    link.href = '/path/to/file.pdf'; // Change to actual file path
    link.download = 'file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowForm(false);
    setFormData({ name: '', email: '', phone: '', organization: '', purpose: '' });
    setErrors({});
  }
};

  const caseStudies = [
    {
      _id: '1',
      image: HomeIb,
      title: 'Acquisition of XYZ Corp',
      sector: 'Technology',
      year: '2023',
      description: 'A strategic acquisition aimed at expanding market reach and technological capabilities.Provided financial restructuring and advisory support leading to 40% YoY growth.',
    },
    {
      _id: '2',
      image: HomeIb,
      title: 'Growth Advisory for ABC Ltd',
      sector: 'Healthcare',
      year: '2024',
      description: 'Provided financial restructuring and advisory support leading to 40% YoY growth.A strategic acquisition aimed at expanding market reach and technological capabilities.',
    },
    {
      _id: '1',
      image: HomeIb,
      title: 'Acquisition of XYZ Corp',
      sector: 'Technology',
      year: '2023',
      description: 'A strategic acquisition aimed at expanding market reach and technological capabilities.Provided financial restructuring and advisory support leading to 40% YoY growth.',
    },
    {
      _id: '2',
      image: HomeIb,
      title: 'Growth Advisory for ABC Ltd',
      sector: 'Healthcare',
      year: '2024',
      description: 'Provided financial restructuring and advisory support leading to 40% YoY growth.A strategic acquisition aimed at expanding market reach and technological capabilities.',
    },
  ];
  return (
    <div className=''>
      {/* Hero Section */}
       <div className="relative w-full h-screen">
        <img
          src={HomeIb} 
          alt="Newsletter Background"
          className="absolute inset-0 w-full h-full object-cover grey-tone"
        />

        <div className="absolute inset-0 flex items-center justify-center">
    <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-xl border border-white/10 text-white text-center">
      <h1 className="text-4xl md:text-6xl font-medium tracking-wide">Allegro Capital</h1>
      <p className="text-2xl md:text-3xl font-medium mt-2">Case Studies</p>
    </div>
  </div>
      </div>

      {/* Case Studies Grid */}
        <section className="px-4 md:px-12 py-12 ">
      <h2 className=" text-xl md:text-4xl font-medium text-center mb-10 text-slate-800">
        Case Studies
      </h2>

      <div className="space-y-25 max-w-5xl mx-auto">
  {caseStudies.map((study) => (
    <div key={study._id} className="flex flex-col md:flex-row  bg-slate-100 shadow-lg rounded-xl overflow-hidden">
      {/* Left Text Content */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-2">{study.title}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Sector:</span> {study.sector}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-medium">Year:</span> {study.year}
          </p>
          <p className="text-gray-700">{study.description}</p>
        </div>
       <div className="mt-4 flex gap-4">
  <button
    onClick={() => setShowForm(true)}
    className="bg-red-500 text-white w-[8rem] rounded-xl py-1 cursor-pointer hover:bg-red-700 transition"
  >
    Download
  </button>
</div>

{showForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Please fill out this form</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {['name', 'email', 'phone', 'organization', 'purpose'].map((field) => (
          <div key={field}>
            <input
              type="text"
              name={field}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none"
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Download
          </button>
        </div>
      </form>
    </div>
  </div>
)}

      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover grey-tone"
        />
      </div>
    </div>
  ))}
</div>

    </section>
          <Footer />
    </div>
  );
};

export default Case;

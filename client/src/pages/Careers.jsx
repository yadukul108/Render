import React, { useState } from 'react';
import HomeIb from '../assets/AllegroOffice1.jpg';
import { DollarSign, Users, Briefcase, Clock } from 'lucide-react';
import Footer from '../components/Footer';

const Careers = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = new FormData();
  payload.append('name', formData.name);
  payload.append('email', formData.email);
  payload.append('phone', formData.phone);
  payload.append('linkedin', formData.linkedin);
  payload.append('resume', formData.resume);

  try {
    const response = await fetch('https://allegro-backend.onrender.com/api/apply', {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();
   if (response.ok) {
        setSuccessMessage('✅ Application submitted successfully!');
        setFormData({ name: '', email: '', phone: '', linkedin: '', resume: null });
      } else {
        setSuccessMessage('❌ ' + (data.message || 'Failed to submit. Please try again.'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('❌ An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[3rem]">
      {/* ---------- Hero Section ---------- */}
     <div className="relative w-full h-[42rem] md:h-screen">
  {/* Background Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>

  {/* Background Image */}
  <img
    src={HomeIb}
    alt="Careers Background"
    className="absolute inset-0 w-full h-full object-cover brightness-75"
  />

  {/* Content */}
  <div className="absolute inset-0 z-3 flex items-center justify-center">
    <div className="text-center px-4 max-w-3xl">
      {/* Label */}
      <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
        <span className="text-white text-sm font-medium tracking-wide">CAREERS AT ALLEGRO CAPITAL</span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
        Start Your Career With
        <span className="block text-red-400 font-medium">Allegro Capital</span>
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-slate-200 text-base sm:text-lg md:text-xl font-light leading-relaxed">
        Join a dynamic team that values innovation, collaboration, and excellence. 
        Shape the future of investment banking and advisory with us.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/about">
          <button className="bg-white text-slate-600 hover:bg-red-700 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
            About Us
          </button>
        </a>
        <a href="#apply-now">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300 w-full sm:w-auto">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

      {/* ---------- Benefits ---------- */}
      <section className="py-10 px-4 md:px-12 ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
              Benefits of working with us
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Join a team that invests in your success and provides the foundation for exceptional career growth
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: DollarSign, 
                title: 'Competitive Salary', 
                text: 'Get paid well for your skills! We offer competitive salary + benefits.',
                gradient: 'from-red-500 to-red-600'
              },
              { 
                icon: Users, 
                title: 'Collaborative Team', 
                text: 'Work with talented professionals in a growth‑focused environment.',
                gradient: 'from-slate-600 to-slate-700'
              },
              { 
                icon: Briefcase, 
                title: 'Career Growth', 
                text: 'We support your development with learning, mentorship, and projects.',
                gradient: 'from-red-600 to-red-700'
              },
              { 
                icon: Clock, 
                title: 'Global Market Exposure', 
                text: 'Work on high‑impact financial projects and gain global insights.',
                gradient: 'from-slate-700 to-slate-800'
              },
            ].map(({ icon: Icon, title, text, gradient }, i) => (
              <div 
                key={i} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
              >
                {/* Gradient accent bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`}></div>
                
                {/* Card content */}
                <div className="p-8">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    {/* Floating accent */}
                    
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-slate-600 mb-3 group-hover:text-slate-700 transition-colors">
                    {title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {text}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50/0 to-slate-50/0 group-hover:from-slate-50/20 group-hover:to-slate-50/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* ---------- Application Form ---------- */}
      <section id="apply-now" className="bg-white py-16 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-slate-800 mb-12">Apply Now</h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6" encType="multipart/form-data">
          <div>
            <label className="block mb-2 text-slate-700 font-medium">Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="w-full border border-slate-300 px-4 py-3 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-slate-700 font-medium">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full border border-slate-300 px-4 py-3 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-slate-700 font-medium">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 9876543210" className="w-full border border-slate-300 px-4 py-3 rounded-lg" />
          </div>
          <div>
            <label className="block mb-2 text-slate-700 font-medium">Upload Resume</label>
            <input type="file" name="resume" onChange={handleChange} required className="w-full border border-slate-300 px-4 py-2 rounded-lg file:bg-red-600 file:text-white file:border-none file:px-4 file:py-2 file:rounded file:cursor-pointer" />
          </div>
          <div>
            <label className="block mb-2 text-slate-700 font-medium">LinkedIn URL</label>
            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourname" className="w-full border border-slate-300 px-4 py-3 rounded-lg" />
          </div>

          
          <div className="text-center">
           <button
  type="submit"
  disabled={loading}
  className={`${
    loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
  } text-white font-medium px-4 py-2 rounded-lg transition duration-300 flex items-center justify-center`}
>
  {loading ? (
    <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  ) : null}
  {loading ? 'Submitting...' : 'Submit Application'}
</button>
{successMessage && (
              <p className={`text-xl font-medium ${
                successMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'
              }`}>
                {successMessage}
              </p>
            )}
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

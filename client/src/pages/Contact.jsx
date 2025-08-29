import React, { useState } from 'react';
import contactIMG from "../assets/office4.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true); // Start loading
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading regardless of success/failure
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900/90 via-slate-400/70 to-red-700/60 pt-[3rem]">
     
      {/* Main Contact Section */}
      <section className="py-16 md:py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Info Block */}
            <div className="space-y-8 lg:sticky lg:top-24 self-start">
             

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                   
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">Office Address</h3>
                      <p className="text-slate-600">Visit us at our location</p>
                    </div>
                  </div>
                 
                    <h4 className="font-medium text-slate-800 mb-2">Allegro Capital Pvt. Ltd.</h4>
                    <a
                      href="https://www.google.com/maps/dir//XH8X%2BPV4,+D'Souza+Rd,+Shanthala+Nagar,+Ashok+Nagar,+Bengaluru,+Karnataka+560025"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-300"
                    >
                      XH8X+PV4, D'Souza Rd, Ashok Nagar,<br />
                      Bengaluru, Karnataka 560025
                    </a>
                 
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                   
                    <div>
                      <p className="text-slate-800 font-medium">Phone</p>
                      <a href="tel:+919876543210" className="text-slate-600 hover:text-red-600 transition-colors duration-300">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    
                    <div>
                      <p className="text-slate-800 font-medium">Email</p>
                      <a href="mailto:contact@allegroadvisors.com" className="text-slate-600 hover:text-red-600 transition-colors duration-300">
                        contact@allegroadvisors.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-center gap-4">
                   
                    <div>
                      <p className="text-slate-800 font-medium">Business Hours</p>
                      <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Block */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-4">
                  Send us a <span className="text-red-600">Message</span>
                </h2>
                <p className="text-slate-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success Message */}
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-red-800 font-medium">{error}</p>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block mb-3 text-slate-700 font-medium text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border-2 border-slate-200 px-4 py-4 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 text-slate-800"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-3 text-slate-700 font-medium text-sm uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full border-2 border-slate-200 px-4 py-4 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 text-slate-800"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block mb-3 text-slate-700 font-medium text-sm uppercase tracking-wide">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your financial goals and how we can help..."
                    className="w-full border-2 border-slate-200 px-4 py-4 rounded-xl focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-500/10 transition-all duration-300 text-slate-800 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading} // disable while loading
                  className={`w-full font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform shadow-lg flex items-center justify-center gap-2 group
                    ${isLoading 
                      ? "bg-slate-400 cursor-not-allowed" 
                      : "bg-red-600 hover:bg-red-700 text-white hover:scale-105 hover:shadow-xl"
                    }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && (
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    
      <Footer />
    </div>
  );
};

export default Contact;
import React from 'react'
import contactIMG from "../assets/office4.jpg"
import logo from "../assets/logo.png"
import Footer from "../components/Footer"
const Contact = () => {
  return (
    <div>
    <section className="min-h-screen  flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl bg-white rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
       <div className="relative w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
  {/* Image */}
  <div
  className="h-[30rem] md:h-full bg-cover bg-center grey-tone"
  style={{ backgroundImage: `url(${contactIMG})` }}
>
  <h1 className="text-white font-medium text-3xl md:text-4xl text-center py-10">
    Contact Us
  </h1>
</div>


  {/* Overlay card at bottom over image */}
  <div className="absolute bottom-0 w-full bg-slate-100 bg-opacity-70 text-slate-700 p-6 text-center">
    <h2 className="text-xl font-medium mb-2">Allegro Capital Pvt. Ltd.</h2>
    <a
  href="https://www.google.com/maps/dir//XH8X%2BPV4,+D'Souza+Rd,+Shanthala+Nagar,+Ashok+Nagar,+Bengaluru,+Karnataka+560025/@12.9667455,77.5173059,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae15d62e4f12dd:0x18e99c9546506486!2m2!1d77.5997441!2d12.9668311?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  XH8X+PV4, D'Souza Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025
</a>

    <p> +91 98765 43210</p>
    <p> contact@allegroadvisors.com</p>
  </div>
</div>

        {/* Right Form Section */}
        <form className="p-8 md:p-12 bg-white space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-slate-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-slate-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-slate-700 font-medium">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
      <Footer/></div>
  );
  
}

export default Contact

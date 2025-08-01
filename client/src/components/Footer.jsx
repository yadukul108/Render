import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram,ChartNoAxesCombined } from 'lucide-react';
import logo from "../assets/logo.png"
import {Link }from "react-router-dom"
const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-500 pt-12 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6">
         <div className="md:col-span-1 flex flex-col items-start">
          <div className="mb-4">
            <img src={logo} alt="" className="object-cover w-[4rem]" />
          </div>
          <p className="text-sm text-slate-600">Empowering futures through strategic investment insights.</p>
        </div>
        {/* Column 1: Our Services */}
        <div>
          <h3 className="text-slate-700 ont-medium text-xl mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/investment" className="text-slate-600 hover:text-red-600 transition">Investment Banking</Link></li>
            <li><Link to="/assest-management" className="text-slate-600 hover:text-red-600 transition">Asset Management</Link></li>
            <li><Link to="/wealth-advisory" className="text-slate-600 hover:text-red-600 transition">Wealth Advisory</Link></li>
            <li><Link to="/strategic-advisory" className="text-slate-600 hover:text-red-600 transition">Strategic Advisory</Link></li>
          </ul>
        </div>

        {/* Column 2: Insights */}
        <div>
          <h3 className="text-slate-700 ont-medium text-xl mb-4">Insights</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/case_study" className="text-slate-600 hover:text-red-600 transition">Case Studies</Link></li>
            <li><Link to="/newsletter" className="text-slate-600 hover:text-red-600 transition">Newsletter</Link></li>
            <li><Link to="/news" className="text-slate-600 hover:text-red-600 transition">News & Updates</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Firm */}
        <div>
          <h3 className="text-slate-700 ont-medium text-xl mb-4">Our Firm</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-slate-600 hover:text-red-600 transition">About Us</Link></li>
            <li><Link to="/teams" className="text-slate-600 hover:text-red-600 transition">Our Team</Link></li>
            <li><Link to="/careers" className="text-slate-600 hover:text-red-600 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Column 4: Credentials */}
        <div>
          <h3 className="text-slate-700 font-medium text-xl mb-4">Credentials</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/transactions" className="text-slate-600 hover:text-red-600 transition">Deals</Link></li>
            <li><Link to="/awards" className="text-slate-600 hover:text-red-600 transition">Awards & Achievement</Link></li>
            <li><Link to="/signin" className="text-slate-600 hover:text-red-600 transition">Login</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="mt-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Allegro Capital. All rights reserved.
      </div>

      {/* Social Media Section */}
      <div className="py-3 mt-6">
        <div className="flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-red-600" aria-label="Facebook"><Facebook size={20} /></a>
          <a href="https://twitter.com" className="text-red-600" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="https://linkedin.com" className="text-red-600" aria-label="LinkedIn"><Linkedin size={20} /></a>
          {/* <a href="https://instagram.com" className="text-red-600" aria-label="Instagram"><Instagram size={20} /></a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

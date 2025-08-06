import React, { useState ,useEffect} from 'react'
import {ChevronDown, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
const sidebarMenus = [
  {
    label: "What we do",
    children: [
      {
        section: "Advisory",
        links: [
          { label: "Investment Banking", to: "/investment" },
          { label: "Strategic Advisory", to: "/strategic-advisory" },
        ]
      },
      {
        section: "Wealth Management",
        links: [
          { label: "Private Banking", to: "/private-banking" },
          { label: "Asset Management", to: "/asset-management" },
          { label: "Investor Login", to: "/ipo" }
        ]
      }
    ]
  },
  {
    label: "Our Insights",
    children: [
      {
        section: "Research & Insights",
        links: [
          { label: "Newsletter", to: "/newsletter" },
          { label: "News & Updates", to: "/news" },
          { label: "Case Studies", to: "/case_study" },
        ]
      }
    ]
  },
  {
    label: "Our Firm",
    children: [
      {
        section: "Our Firm",
        links: [
          { label: "About Us", to: "/about" },
          { label: "Our Team", to: "/teams" },
          { label: "Careers", to: "/careers" }
        ]
      },
      {
        section: "Credentials",
        links: [
          { label: "Deals", to: "/transactions" },
          { label: "Awards & Achievement", to: "/awards" }
        ]
      }
    ]
  },
];

const Sidebar = ({ open, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when component unmounts or open becomes false
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);
  return (
    <>
      {/* Backdrop */}
       <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="object-cover w-[3rem]" />
          </div>
          <button onClick={onClose} aria-label="Close">
            <X size={24} />
          </button>
        </div>
        <nav className="p-5 flex flex-col gap-3 h-[calc(100vh-56px)] overflow-y-auto">

          {/* Flat nav */}
          <Link to="/" className="block px-2 py-2 text-gray-800 font-medium hover:text-red-600" onClick={onClose}>Home</Link>
          {/* Divider */}
          <div className="my-1 border-t" />
          {/* Main nav accordions */}
          {sidebarMenus.map((menu, idx) => (
            <div key={menu.label}>
              <button
                className="w-full flex items-center justify-between text-gray-800 font-medium px-2 py-2 hover:text-red-600 transition"
                onClick={() => setActiveIdx(idx === activeIdx ? null : idx)}
                aria-expanded={activeIdx === idx}
              >
                {menu.label}
                <ChevronDown className={`ml-1 transition-transform ${activeIdx === idx ? "rotate-180" : ""}`} size={18} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${activeIdx === idx ? 'max-h-96 mt-2' : 'max-h-0'} bg-gray-50 rounded`}>
                {activeIdx === idx && menu.children.map((col, cIdx) => (
                  <div key={col.section} className="mb-2">
                    <div className=" font-medium text-gray-700 mt-2 mb-1 pl-4">{col.section}</div>
                    <ul>
                      {col.links.map(link =>
                        <li key={link.to}>
                          <Link
                            to={link.to}
                            className="block px-6 py-2 text-slate-700 hover:bg-red-100 hover:text-red-600 rounded transition"
                            onClick={onClose}
                          >
                            {link.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="my-1 border-t" />
          <Link to="/careers" className="block px-2 py-2 text-gray-800 font-medium hover:text-red-600" onClick={onClose}>Careers</Link>
          <Link to="/contact-us" className="block px-2 py-2 text-gray-800 font-medium hover:text-red-600" onClick={onClose}>Contact Us</Link>


        </nav>
      </aside>
    </>
  );
};

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);


  return (
    <header className='bg-slate-100 shadow-md w-full fixed z-10'>
      <div className="flex justify-between items-center p-2">
        {/* Left Logo */}
        <Link className="flex items-center space-x-2" to="/">
          <img src={logo} alt="" className="object-cover w-[4rem] h-[2rem]" />
        </Link>
        {/* Hamburger menu, visible on mobile */}
        <button className="md:hidden p-2" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
          <Menu size={28} />
        </button>
        {/* Main nav - hidden below md */}
        <div className="hidden md:flex justify-between items-center w-full ml-10">
          {/* Left-side Nav Links */}
          <div className="flex space-x-6">
           <div
  className="relative"
  onMouseEnter={() => setOpenDropdown("whatwedo")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  {/* Menu Trigger */}
  <Link
    onClick={() =>
      setOpenDropdown(openDropdown === "whatwedo" ? null : "whatwedo")
    }
    className="relative inline-flex items-center gap-1 px-4 py-2  hover:text-red-600 text-gray-600 transition"
  >
    <h1 className='text-xl font-medium '>What we do</h1>
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        openDropdown === "whatwedo" ? "rotate-180" : ""
      }`}
    />
    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>

  {/* Mega Dropdown */}
  {openDropdown === "whatwedo" && (
    <div className="fixed left-0 top-[52px] w-screen bg-white shadow-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-10">
        {/* Image Column */}
        <div className="col-span-1 flex flex-col justify-center">
          <div className="bg-white overflow-hidden">
            <div className="w-full h-40 md:h-50 overflow-hidden">
              <h1 className="text-slate-700 text-5xl">What We Do</h1>
              <h3 className="text-slate-400 text-2xl">Allegro Capital</h3>
            </div>
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">Advisory</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/investment"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Investment Banking
              </Link>
            </li>
            <li>
              <Link
                to="/strategic-advisory"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Strategic Advisory
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Wealth Management
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/private-banking"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Private Banking
              </Link>
            </li>
            <li>
              <Link
                to="/asset-management"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Asset Management
              </Link>
            </li>
            <li>
              <Link
                to="/ipo"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Investor Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>

            <div
  className="relative"
  onMouseEnter={() => setOpenDropdown("insights")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  {/* Menu Trigger */}
  <Link
    onClick={() =>
      setOpenDropdown(openDropdown === "insights" ? null : "insights")
    }
    className="relative inline-flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-red-600 transition"
  >
    <h1 className='text-xl font-medium '>Our Insights</h1>
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        openDropdown === "insights" ? "rotate-180" : ""
      }`}
    />
    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>

  {/* Mega Dropdown */}
  {openDropdown === "insights" && (
    <div className="fixed left-0 top-[52px] w-screen bg-white shadow-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
        <div className="w-full h-40 md:h-50 overflow-hidden rounded-2xl">
          <h1 className="text-slate-700 text-5xl">Our Insights</h1>
          <h3 className="text-slate-400 text-2xl">Allegro Capital</h3>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">
            Research & Insights
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/newsletter"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                News & Updates
              </Link>
            </li>
            <li>
              <Link
                to="/case_study"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>

            <div
  className="relative"
  onMouseEnter={() => setOpenDropdown("ourfirm")}
  onMouseLeave={() => setOpenDropdown(null)}
>
  {/* Menu Trigger */}
  <Link
    onClick={() =>
      setOpenDropdown(openDropdown === "ourfirm" ? null : "ourfirm")
    }
    className="relative inline-flex items-center gap-1 px-4 py-2 text-gray-600 hover:text-red-600 transition"
  >
    <h1 className='text-xl font-medium '>Our Firm</h1>
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        openDropdown === "ourfirm" ? "rotate-180" : ""
      }`}
    />
    <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  </Link>

  {/* Mega Dropdown */}
  {openDropdown === "ourfirm" && (
    <div className="fixed left-0 top-[52px] w-screen bg-white shadow-xl transition-all duration-300 z-50">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
        <div className="w-full h-40 md:h-50 overflow-hidden rounded-2xl">
          <h1 className="text-slate-700 text-5xl">Our Firm</h1>
          <h3 className="text-slate-400 text-2xl">Allegro Capital</h3>
        </div>

        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">Our Firm</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">Credentials</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/transactions"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Deals
              </Link>
            </li>
            <li>
              <Link
                to="/awards"
                onClick={() => setOpenDropdown(null)}
                className="text-slate-700 hover:text-red-600"
              >
                Awards & Achievement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )}
</div>

          </div>
          {/* Right-side Nav Links */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="nav-link "><h1 className='text-xl font-medium text-slate-600'>Home</h1></Link>
            <Link to="/careers" className="nav-link"><h1 className='text-xl font-medium text-slate-600 '>Careers</h1></Link>
            <Link to="/contact-us" className="nav-link"><h1 className='text-xl font-medium text-slate-600'>Contact Us</h1></Link>

          </div>
        </div>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  )
}

export default Navbar
// components/Sidebar.js
import React from 'react';

const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    "Transactions",
    "News",
    "Case Studies",
    "Newsletter",
    "Awards & Achievements",
  ];

  return (
        <div className="fixed top-[4rem] left-0 w-64 bg-gray-800 text-white h-screen p-4 z-5">

      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-3 rounded cursor-pointer hover:bg-gray-700 ${
              selected === item ? "bg-gray-700" : ""
            }`}
            onClick={() => setSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

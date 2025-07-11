// pages/AdminPanel.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ContentArea from '../components/ContentArea';

const AdminPanel = () => {
  const [selected, setSelected] = useState("Transactions");

  return (
    <div className="flex h-screen">
      <Sidebar selected={selected} setSelected={setSelected} />
      <ContentArea selected={selected} />
    </div>
  );
};

export default AdminPanel;

import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import BBL from "../assets/Manipal (1).png";
import MAGE from "../assets/Manipal (2).png";
import Mage from "../assets/Manipal (3).png";

export const transactions = [
  { id: 1, image: BBL, amount: '₹2,50,000', type: 'Private Equity', year: 2023 },
  { id: 2, image: MAGE, amount: '₹1,20,000', type: 'Private Equity', year: 2024 },
  { id: 3, image: Mage, amount: '₹3,00,000', type: 'Merger', year: 2025 },
  { id: 4, image: BBL, amount: '₹2,50,000', type: 'Merger', year: 2023 },
  { id: 5, image: MAGE, amount: '₹1,20,000', type: 'IPO', year: 2024 },
  { id: 6, image: Mage, amount: '₹3,00,000', type: 'Private Equity', year: 2025 },
  { id: 7, image: BBL, amount: '₹2,50,000', type: 'IPO', year: 2023 },
  { id: 8, image: MAGE, amount: '₹1,20,000', type: 'IPO', year: 2024 },
  { id: 9, image: Mage, amount: '₹3,00,000', type: 'Merger', year: 2025 },
];


const Deals = () => {
  const [transactions, setTransactions] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [sortOrder, setSortOrder] = useState('latest');
  const [selectedDealType, setSelectedDealType] = useState('All');


  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('/api/transactions/getAllTransactions');
        if (!res.ok) throw new Error('Failed to fetch transactions');
        const data = await res.json();
        setTransactions(data);
      } catch (err) {
        console.error(err);
        setTransactions([]);
      }
    };

    fetchTransactions();
  }, []);

  const types = ['All', ...new Set(transactions.map(t => t.sector))];
  const years = ['All', ...new Set(transactions.map(t => t.year))];
const dealTypes = ['All', ...new Set(transactions.map(t => t.type_of_deal))];

  
    let filtered = transactions.filter(txn =>
  (selectedType === 'All' || txn.sector === selectedType) &&
  (selectedYear === 'All' || txn.year === selectedYear) &&
  (selectedDealType === 'All' || txn.type_of_deal === selectedDealType)
);

const extractAmount = (amountStr) => {
  if (!amountStr) return 0;
  return parseInt(amountStr.replace(/[^0-9]/g, ''), 10); // removes ₹ and commas
};
  filtered.sort((a, b) => {
  if (sortOrder === 'latest') {
    return b.year.toString().localeCompare(a.year.toString());
  } else if (sortOrder === 'oldest') {
    return a.year.toString().localeCompare(b.year.toString());
  } else if (sortOrder === 'amountHigh') {
    return extractAmount(b.amount) - extractAmount(a.amount);
  } else if (sortOrder === 'amountLow') {
    return extractAmount(a.amount) - extractAmount(b.amount);
  } else {
    return 0;
  }
});



  return (
    <div className="p-8  rounded-xl">
      <h2 className=" text-2xl md:text-3xl text-slate-800 font-medium mb-6 text-center">All Transaction History</h2>

      {/* Filters */}
     <div className="flex flex-wrap gap-6 text-slate-600 mb-6 justify-center">
      {/* Filter by Type of Deal */}
<div>
  <label className="block text-sm font-medium mb-1">Filter by Type of Deal</label>
  <select
    value={selectedDealType}
    onChange={e => setSelectedDealType(e.target.value)}
    className="border border-gray-300 rounded px-4 py-2 z-1"
  >
    {dealTypes.map((type, idx) => (
      <option key={idx} value={type}>{type}</option>
    ))}
  </select>
</div>

  {/* Filter by Sector */}
  <div>
    <label className="block text-sm font-medium mb-1">Filter by Sector</label>
    <select
      value={selectedType}
      onChange={e => setSelectedType(e.target.value)}
      className="border border-gray-300 rounded px-4 py-2 z-1"
    >
      {types.map((type, idx) => (
        <option key={idx} value={type}>{type}</option>
      ))}
    </select>
  </div>

  {/* Filter by Year */}
  <div>
    <label className="block text-sm font-medium mb-1">Filter by Year</label>
    <select
      value={selectedYear}
      onChange={e => setSelectedYear(e.target.value)}
      className="border border-gray-300 rounded px-4 py-2 z-1"
    >
      {years.map((year, idx) => (
        <option key={idx} value={year}>{year}</option>
      ))}
    </select>
  </div>

  {/* Sort Order */}
  {/* Sort Order */}
<div>
  <label className="block text-sm font-medium mb-1">Sort by</label>
  <select
    value={sortOrder}
    onChange={e => setSortOrder(e.target.value)}
    className="border border-gray-300 rounded px-4 py-2 z-1"
  >
    <option value="latest">Year: Latest First</option>
    <option value="oldest">Year: Oldest First</option>
    <option value="amountHigh">Amount: High to Low</option>
    <option value="amountLow">Amount: Low to High</option>
  </select>
</div>

</div>


      {/* Cards */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-items-center mx-auto text-slate-600">
  {filtered.map((txn) => (
    <Link
      to={`/transaction/${txn._id}`}
      key={txn._id}
      className="bg-white rounded-lg  shadow w-full max-w-sm transform transition-transform duration-300  hover:border-b-red-600 overflow-hidden"
    >
      {/* Image Section */}
      <img
        src={txn.dealPic}
        alt="Transaction"
        className="w-full mx-auto h-[15rem] object-cover"
      />

      {/* Details Section */}
     <div className="p-4 pl-[2rem] bg-slate-100 text-left text-slate-700">
  <div className="text-slate-500 text-sm font-medium leading-[130%] mb-1">
    <span>{txn.sector || '—'}</span> | <span>{txn.year || '—'}</span>
  </div>
  <p className="text-sm font-medium leading-[130%] mb-1">Type of Deal: {txn.type_of_deal || '—'}</p>
  <p className="text-sm font-medium leading-[130%]">Amount: {txn.amount || '—'} Cr INR</p>
</div>

    </Link>
  ))}
</div>




      {filtered.length === 0 && <p className="text-center mt-6 text-gray-600">No transactions match the selected filters.</p>}
    </div>
  );
};

export default Deals;

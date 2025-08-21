import React, { useState, useEffect } from 'react';

import {Link} from "react-router-dom"


export const transactions = [
 
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative p-4 sm:p-8 max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-4">
            All Transaction History
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive portfolio of successful deals and transactions
          </p>
        </div>

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

        {/* Results count */}
        <div className="text-center mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-slate-600 font-medium">
            Showing <span className="text-red-600 font-bold">{filtered.length}</span> transaction{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Enhanced Cards Grid */}
       
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-auto">
            {filtered.map((txn, index) => (
              <Link
                to={`/transaction/${txn._id}`}
                key={txn._id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl w-full max-w-sm transform transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/20 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {/* Image Section with overlay */}
                <div className="relative h-auto overflow-hidden">
                  <img
                    src={txn.mainPic}
                    alt="Transaction"
                    loading="lazy"
                    className="w-auto h-auto object-cover mx-auto"
                  />
                  
                 
                  {/* Deal type badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 border border-white/20">
                    {txn.type_of_deal || '—'}
                  </div>
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                    {txn.year || '—'}
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Enhanced Details Section */}
                <div className="p-6 bg-gradient-to-br from-slate-50 to-white relative">
                  {/* Animated border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  {/* Sector info */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span>{txn.sector || '—'}</span>
                  </div>
                  
                  {/* Deal type */}
                  <p className="text-slate-700 font-semibold mb-2 group-hover:text-slate-900 transition-colors duration-300">
                    {txn.type_of_deal || '—'}
                  </p>
                  
                  {/* Amount with enhanced styling */}
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-slate-800 group-hover:text-red-600 transition-colors duration-300">
                      {txn.amount || '—'}
                    </span>
                    <span className="text-sm text-slate-500 font-medium">Cr INR</span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl shadow-2xl bg-gradient-to-r from-slate-700/10 via-blue-200/10 to-blue-500/10"></div>
                </div>
              </Link>
            ))}
          </div>
       

        {/* No results message */}
        {filtered.length === 0  && (
          <div className="text-center py-20 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No transactions found</h3>
            <p className="text-slate-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .group:hover {
            transform: translateY(-4px) !important;
          }
          
          .animate-fade-in-up {
            animation-delay: 0ms !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .group:hover {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Deals;
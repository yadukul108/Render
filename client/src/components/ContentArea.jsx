import React, { useEffect, useRef, useState } from 'react';

const ContentArea = ({ selected }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isTransaction = selected === 'Transactions';
  const isNewsletter = selected === 'Newsletter';
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
const [statusMessage, setStatusMessage] = useState('');
const formRef = useRef(null);
// Calculate visible data
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(data.length / itemsPerPage);

  const [form, setForm] = useState({
    heading: '',
    year: '',
    isFeatured:'',
    amount: '',
    mainPic: '',
     representingPic: '',
      party2Pic: '',
       assetPic: '',
    sector: '',
    description: '',
    type_of_deal:'',
    representing:'',
    asset:'',
    party2:'',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = '';
      if (isTransaction) url = '/api/transactions/getAllTransactions';
      else if (isNewsletter) url = '/api/newsletter/getAllNewsletters';

      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;
    try {
      const endpoint = isTransaction
        ? `/api/transactions/deleteTransaction/${id}`
        : `/api/newsletter/deleteNewsletter/${id}`;
      const res = await fetch(endpoint, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      fetchData();
     
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = (item) => {
    setIsEditing(true);
    setEditId(item._id);
    setForm({
      heading: item.heading,
      year: item.year,
      isFeatured:item.isFeatured,
      amount: item.amount || '',
     mainPic: item.mainPic || '',
      representingPic: item.representingPic || '',
      party2Pic: item.party2Pic || '',
      assetPic: item.assetPic || '',
      sector: item.sector || '',
      description: item.description || '',
      party2: item.party2 || '',
      type_of_deal: item.type_of_deal || '',
      representing: item.representing || '',
      asset: item.asset || '',
    });
    setTimeout(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, 100);
  };

  const handleChange = (e) => {
  const { name, type, files, value } = e.target;
  if (type === 'file') {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: files[0], // store the File object
    }));
  } else {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
};


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let url = '';
    let method = isEditing ? 'PUT' : 'POST';

    if (isTransaction) {
      url = isEditing
        ? `/api/transactions/updateTransaction/${editId}`
        : '/api/transactions/createTransaction';
    } else if (isNewsletter) {
      url = isEditing
        ? `/api/newsletter/updateNewsletter/${editId}`
        : '/api/newsletter/createNewsletter';
    }

    const formData = new FormData();
    for (const key in form) {
      if (form[key]) formData.append(key, form[key]);
    }

    const res = await fetch(url, {
      method,
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      alert("Submission failed: " + errorText);
      throw new Error('Failed to submit form');
    }

    // Show success message
    setStatusMessage(
      isEditing ? 'Transaction updated successfully!' : 'Transaction created successfully!'
    );

    // Clear message after 3 seconds
    setTimeout(() => setStatusMessage(''), 3000);

    // Reset form
    setForm({
      heading: '',
      year: '',
      isFeatured: '',
      amount: '',
      mainPic: null,
      representingPic: null,
      party2Pic: null,
      assetPic: null,
      sector: '',
      description: '',
      type_of_deal: '',
      representing: '',
      asset: '',
      party2: '',
    });
    setIsEditing(false);
    setEditId(null);
    fetchData();
  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    if (selected === 'Transactions' || selected === 'Newsletter') {
      fetchData();
    }
  }, [selected]);

  return (
    <div className="flex-1 p-6 ml-[16rem] bg-slate-50 min-h-screen pt-20 w-[80%]">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">{selected}</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
      </div>

      {/* Status Message */}
      {statusMessage && (
        <div className="mb-6 p-4 rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 shadow-lg animate-pulse">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {statusMessage}
          </div>
        </div>
      )}

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow-xl mb-8 border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {isEditing ? 'Edit' : 'Add New'} {isTransaction ? 'Transaction' : 'Newsletter'}
          </h2>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Basic Information
              </h3>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <label htmlFor="heading" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Heading <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="heading"
                value={form.heading}
                onChange={handleChange}
                placeholder="Enter heading..."
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
              />
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label htmlFor="year" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Year <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="year"
                value={form.year}
                onChange={handleChange}
                placeholder="Enter year..."
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
              />
            </div>

            {/* Transaction Specific Fields */}
            {isTransaction && (
              <>
                <div className="lg:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Transaction Details
                  </h3>
                </div>

                {/* Amount */}
                <div className="space-y-2">
                  <label htmlFor="amount" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Amount
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="Enter amount..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Is Featured */}
                <div className="space-y-2">
                  <label htmlFor="isFeatured" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Featured Transaction
                  </label>
                  <select
                    name="isFeatured"
                    value={form.isFeatured}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 bg-white"
                  >
                    <option value="">Select option...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                {/* Sector */}
                <div className="space-y-2">
                  <label htmlFor="sector" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Sector
                  </label>
                  <input
                    type="text"
                    name="sector"
                    value={form.sector}
                    onChange={handleChange}
                    placeholder="Enter sector..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Type of Deal */}
                <div className="space-y-2">
                  <label htmlFor="type_of_deal" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Deal Type
                  </label>
                  <input
                    type="text"
                    name="type_of_deal"
                    value={form.type_of_deal}
                    onChange={handleChange}
                    placeholder="Enter deal type..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Asset */}
                <div className="space-y-2">
                  <label htmlFor="asset" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Asset
                  </label>
                  <input
                    type="text"
                    name="asset"
                    value={form.asset}
                    onChange={handleChange}
                    placeholder="Enter asset..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Representing */}
                <div className="space-y-2">
                  <label htmlFor="representing" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Representing
                  </label>
                  <input
                    type="text"
                    name="representing"
                    value={form.representing}
                    onChange={handleChange}
                    placeholder="Enter representing party..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Counter Party */}
                <div className="space-y-2">
                  <label htmlFor="party2" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                    Counter Party
                  </label>
                  <input
                    type="text"
                    name="party2"
                    value={form.party2}
                    onChange={handleChange}
                    placeholder="Enter counter party..."
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400"
                  />
                </div>

                {/* Images Section */}
                <div className="lg:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    Upload Images
                  </h3>
                </div>

                {/* File Upload Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Main Picture */}
                  <div className="space-y-2">
                    <label htmlFor="mainPic" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Main Picture
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 hover:border-red-400 transition-colors duration-300">
                      <input
                        type="file"
                        name="mainPic"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  {/* Representing Picture */}
                  <div className="space-y-2">
                    <label htmlFor="representingPic" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Representing Picture
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 hover:border-red-400 transition-colors duration-300">
                      <input
                        type="file"
                        name="representingPic"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  {/* Party2 Picture */}
                  <div className="space-y-2">
                    <label htmlFor="party2Pic" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Counter Party Picture
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 hover:border-red-400 transition-colors duration-300">
                      <input
                        type="file"
                        name="party2Pic"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>

                  {/* Asset Picture */}
                  <div className="space-y-2">
                    <label htmlFor="assetPic" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                      Asset Picture
                    </label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 hover:border-red-400 transition-colors duration-300">
                      <input
                        type="file"
                        name="assetPic"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Description */}
            <div className="lg:col-span-2 space-y-2">
              <label htmlFor="description" className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter detailed description..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 text-slate-700 placeholder-slate-400 resize-none"
                rows={4}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-200">
            <button
              type="submit"
              className="flex-1 min-w-[200px] bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{isEditing ? 'Update' : 'Add'} {isTransaction ? 'Transaction' : 'Newsletter'}</span>
            </button>
            
            {isEditing && (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditId(null);
                  setForm({
                    heading: '',
                    year: '',
                    isFeatured:'',
                    amount: '',
                    mainPic: null,
                    representingPic: null,
                    party2Pic: null,
                    assetPic: null,
                    sector: '',
                    description: '',
                    type_of_deal:'',
                    representing:'',
                    asset:'',
                    party2:'',
                  });
                }}
                className="flex-1 min-w-[150px] bg-slate-500 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>Cancel</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Data Table Section */}
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {selected} Data
            </div>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {data.length} items
            </span>
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            <span className="ml-4 text-slate-600 font-medium">Loading...</span>
          </div>
        ) : currentItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-100">
                <tr>
                  {Object.keys(currentItems[0])
                    .filter((key) => key !== '_id' && key !== '__v')
                    .map((key) => (
                      <th
                        key={key}
                        className="px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider border-r border-slate-200 last:border-r-0"
                      >
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </th>
                    ))}
                  <th className="px-6 py-4 text-center text-xs font-bold text-slate-700 uppercase tracking-wider w-32">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {currentItems.map((item, index) => (
                  <tr key={item._id} className={`hover:bg-slate-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-25'}`}>
                    {Object.entries(item)
                      .filter(([key]) => key !== '_id' && key !== '__v')
                      .map(([key, val]) => (
                        <td
                          key={key}
                          title={String(val)}
                          className={`px-6 py-4 border-r border-slate-200 last:border-r-0 ${
                            key === 'description' ? 'max-w-[250px]' : 
                            key === 'heading' ? 'max-w-[200px]' : 
                            key.includes('Pic') ? 'max-w-[150px]' : ''
                          } ${key === 'description' || key === 'heading' || key.includes('Pic') ? 'truncate whitespace-nowrap overflow-hidden' : ''}`}
                        >
                          {typeof val === 'string' && val.startsWith('http') ? (
                            <div className="flex justify-center">
                              <img
                                src={val}
                                alt="Preview"
                                className="h-16 w-16 object-cover rounded-lg border-2 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                              />
                            </div>
                          ) : (
                            <span className="text-slate-700 font-medium">
                              {String(val)}
                            </span>
                          )}
                        </td>
                      ))}
                    <td className="px-6 py-4 text-center space-y-2">
                      <button
                        onClick={() => handleUpdate(item)}
                        className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center space-x-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm flex items-center justify-center space-x-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Enhanced Pagination */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Showing <span className="font-semibold text-slate-800">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="font-semibold text-slate-800">{Math.min(indexOfLastItem, data.length)}</span> of{' '}
                  <span className="font-semibold text-slate-800">{data.length}</span> results
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="flex items-center px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>

                  <div className="flex space-x-1">
                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          num === currentPage
                            ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg transform scale-105'
                            : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="flex items-center px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Next
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="mx-auto h-16 w-16 text-slate-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 009.586 13H7" />
            </svg>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">No data available</h3>
            <p className="text-slate-500">Start by adding your first {isTransaction ? 'transaction' : 'newsletter'} above.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentArea;
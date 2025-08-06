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
    <div className="flex-1 p-8 ml-[16rem] bg-gray-100 overflow-auto">
      <h1 className="text-2xl font-semibold mb-6">{selected}</h1>
 {/* Status Message */}
  {statusMessage && (
    <div className="mb-4 p-3 rounded text-white bg-green-600">
      {statusMessage}
    </div>
  )}
      {/* Add / Edit Form */}
      <form
      ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
         <label htmlFor="heading" className="font-medium text-gray-700">
  Heading 
</label>
        <input
          type="text"
          name="heading"
          value={form.heading}
          onChange={handleChange}
          placeholder="Heading"
          required
          className="border p-2 rounded"
        />
         <label htmlFor="year" className="font-medium text-gray-700">
  Year 
</label>
        <input
          type="text"
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Year"
          required
          className="border p-2 rounded"
        />

        {isTransaction && (
          <>
          <label htmlFor="amount" className="font-medium text-gray-700">
  Amount
</label>
            <input
              type="text"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="border p-2 rounded"
            />
            <label htmlFor="isFeatured" className="font-medium text-gray-700">
  Is Featured
</label>
<select
  name="isFeatured"
  value={form.isFeatured}
  onChange={handleChange}
  className="border p-2 rounded"
>
  <option value="">Select an option</option>
  <option value="true">Yes</option>
  <option value="false">No</option>
</select>

            <label htmlFor="mainPic" className="font-medium text-gray-700">
  Main card picture
</label>
            <input
  type="file"
  name="mainPic"
  accept="image/*"
  onChange={handleChange}
  className="border p-2 rounded"
/>

             <label htmlFor="representingPic" className="font-medium text-gray-700">
  Representing card picture
</label>
            <input
  type="file"
  name="representingPic"
  accept="image/*"
  onChange={handleChange}
  className="border p-2 rounded"
/>

             <label htmlFor="party2Pic" className="font-medium text-gray-700">
  Counter party card picture
</label>
            <input
  type="file"
  name="party2Pic"
  accept="image/*"
  onChange={handleChange}
  className="border p-2 rounded"
/>

            <label htmlFor="assetPic" className="font-medium text-gray-700">
  Asset card picture
</label>
           <input
  type="file"
  name="assetPic"
  accept="image/*"
  onChange={handleChange}
  className="border p-2 rounded"
/>

            <label htmlFor="sector" className="font-medium text-gray-700">
  Sector
</label>
            <input
              type="text"
              name="sector"
              value={form.sector}
              onChange={handleChange}
              placeholder="Sector"
              className="border p-2 rounded"
            />
            <label htmlFor="asset" className="font-medium text-gray-700">
  Asset
</label>
            <input
              type="text"
              name="asset"
              value={form.asset}
              onChange={handleChange}
              placeholder="asset"
              className="border p-2 rounded"
            />
            <label htmlFor="party2" className="font-medium text-gray-700">
  Counter Party
</label>
            <input
              type="text"
              name="party2"
              value={form.party2}
              onChange={handleChange}
              placeholder="party2"
              className="border p-2 rounded"
            />
            <label htmlFor="representing" className="font-medium text-gray-700">
  Representing 
</label>
            <input
              type="text"
              name="representing"
              value={form.representing}
              onChange={handleChange}
              placeholder="representing"
              className="border p-2 rounded"
            />
             <label htmlFor="type_of_deal" className="font-medium text-gray-700">
  Type of Deal 
</label>
            <input
              type="text"
              name="type_of_deal"
              value={form.type_of_deal}
              onChange={handleChange}
              placeholder="type_of_deal"
              className="border p-2 rounded"
            />
          </>
        )}
   <label htmlFor="description" className="font-medium text-gray-700">
  Description 
</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded md:col-span-2"
            rows={4}
          />
      

        <div className="col-span-full space-x-2">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {isEditing ? 'Update' : 'Add'} {isTransaction ? 'Transaction' : 'Newsletter'}
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
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Table */}
      {loading ? (
  <p>Loading...</p>
) : currentItems.length > 0 ? (
 <div className="">
  <table className="min-w-full bg-white shadow-md rounded-lg">
    <thead>
      <tr>
        {Object.keys(currentItems[0])
          .filter((key) => key !== '_id' && key !== '__v')
          .map((key) => (
            <th
              key={key}
              className={`
                text-left py-2 px-4 border-b bg-gray-200 capitalize
                
                truncate
              `}
            >
              {key}
            </th>
          ))}
        <th className="text-left py-2 px-4 w-[10rem] border-b bg-gray-200">Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentItems.map((item) => (
        <tr key={item._id} className="hover:bg-gray-50">
          {Object.entries(item)
            .filter(([key]) => key !== '_id' && key !== '__v')
            .map(([key, val]) => (
             <td
  key={key}
  title={String(val)}
  className={`
    py-2 px-4 border-b
    ${key === 'description' ? 'max-w-[200px] truncate whitespace-nowrap overflow-hidden' : ''}
    ${key === 'heading' ? 'max-w-[150px] truncate whitespace-nowrap overflow-hidden' : ''}
    ${key === 'mainPic' ? 'max-w-[150px] truncate whitespace-nowrap overflow-hidden' : ''}
     ${key === 'representingPic' ? 'max-w-[150px] truncate whitespace-nowrap overflow-hidden' : ''}
      ${key === 'party2Pic' ? 'max-w-[150px] truncate whitespace-nowrap overflow-hidden' : ''}
       ${key === 'assetPic' ? 'max-w-[150px] truncate whitespace-nowrap overflow-hidden' : ''}
  `}
>

                {typeof val === 'string' && val.startsWith('http') ? (
                  <img
                    src={val}
                    alt="img"
                    className="h-16 w-16 object-cover rounded"
                  />
                ) : (
                  String(val)
                )}
              </td>
            ))}
          <td className="py-2 px-4 border-b space-x-2 w-[10rem]">
            <button
              onClick={() => handleUpdate(item)}
              className="bg-yellow-400 text-white px-3 py-1 mb-3 cursor-pointer rounded hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-3 py-1 cursor-pointer rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Pagination Controls */}
  <div className="mt-4 flex justify-center space-x-2">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage((prev) => prev - 1)}
      className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Prev
    </button>

    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((num) => (
      <button
        key={num}
        onClick={() => setCurrentPage(num)}
        className={`px-3 py-1 rounded ${
          num === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        {num}
      </button>
    ))}

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage((prev) => prev + 1)}
      className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
</div>

) : (
  <p>No data available.</p>
)}

    </div>
  );
};

export default ContentArea;

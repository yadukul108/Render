import React, { useEffect, useState } from 'react';

const ContentArea = ({ selected }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isTransaction = selected === 'Transactions';
  const isNewsletter = selected === 'Newsletter';
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

// Calculate visible data
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(data.length / itemsPerPage);

  const [form, setForm] = useState({
    heading: '',
    year: '',
    amount: '',
    dealPic: '',
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
      amount: item.amount || '',
      dealPic: item.dealPic || '',
      sector: item.sector || '',
      description: item.description || '',
      party2: item.party2 || '',
      type_of_deal: item.type_of_deal || '',
      representing: item.representing || '',
      asset: item.asset || '',
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = '';
      let method = '';

      if (isTransaction) {
        url = isEditing
          ? `/api/transactions/updateTransaction/${editId}`
          : '/api/transactions/createTransaction';
      } else if (isNewsletter) {
        url = isEditing
          ? `/api/newsletter/updateNewsletter/${editId}`
          : '/api/newsletter/createNewsletter';
      }

      method = isEditing ? 'PUT' : 'POST';

      const relevantForm = isTransaction
        ? {
            heading: form.heading,
            year: form.year,
            amount: form.amount,
            dealPic: form.dealPic,
            sector: form.sector,
            description: form.description,
            asset:form.asset,
            representing:form.representing,
            type_of_deal:form.type_of_deal,
            party2:form.party2,
          }
        : {
            heading: form.heading,
            year: form.year,
            description: form.description,
          };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(relevantForm),
      });

      if (!res.ok) throw new Error('Failed to submit form');

      // Reset
      setForm({
        heading: '',
        year: '',
        amount: '',
        dealPic: '',
        sector: '',
        description: '',
        type_of_deal:'',
    representing:'',
    asset:'',
    party2:'',
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

      {/* Add / Edit Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="heading"
          value={form.heading}
          onChange={handleChange}
          placeholder="Heading"
          required
          className="border p-2 rounded"
        />
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
            <input
              type="text"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Amount"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="dealPic"
              value={form.dealPic}
              onChange={handleChange}
              placeholder="Image URL"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="sector"
              value={form.sector}
              onChange={handleChange}
              placeholder="Sector"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="asset"
              value={form.asset}
              onChange={handleChange}
              placeholder="asset"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="party2"
              value={form.party2}
              onChange={handleChange}
              placeholder="party2"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="representing"
              value={form.representing}
              onChange={handleChange}
              placeholder="representing"
              className="border p-2 rounded"
            />
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
                  amount: '',
                  dealPic: '',
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
 <div className="overflow-x-auto">
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
                ${key === 'heading' || key === 'description' ? 'w-[16rem]' : 'w-[10rem]'}
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
                  py-2 px-4 border-b truncate overflow-hidden whitespace-nowrap
                  ${key === 'heading' || key === 'description' ? 'w-[16rem]' : 'w-[10rem]'}
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

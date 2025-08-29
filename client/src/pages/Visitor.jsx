import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

export default function Visitor() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch visitors from backend
  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch("https://allegro-backend.onrender.com/api/visitor"); // adjust if needed
        const data = await res.json();
        setVisitors(data.visitors || []);
      } catch (err) {
        console.error("Error fetching visitors:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVisitors();
  }, []);

  // Export visitors to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(visitors);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Visitors");
    XLSX.writeFile(workbook, "visitors.xlsx");
  };

  return (
    <div className="min-h-screen p-6 pt-[4rem]">
      <div className="mx-auto max-w-6xl bg-white shadow rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Visitor Records</h1>
          <button
            onClick={exportToExcel}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Download Excel
          </button>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading visitors...</p>
        ) : visitors.length === 0 ? (
          <p className="text-gray-500">No visitors found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Name</th>
                  <th className="border border-gray-200 px-4 py-2">Email</th>
                  <th className="border border-gray-200 px-4 py-2">Phone</th>
                  <th className="border border-gray-200 px-4 py-2">Occupation</th>
                  <th className="border border-gray-200 px-4 py-2">Purpose</th>
                  <th className="border border-gray-200 px-4 py-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((v) => (
                  <tr key={v._id} className="text-gray-700">
                    <td className="border border-gray-200 px-4 py-2">{v.name}</td>
                    <td className="border border-gray-200 px-4 py-2">{v.email}</td>
                    <td className="border border-gray-200 px-4 py-2">{v.phoneNumber}</td>
                    <td className="border border-gray-200 px-4 py-2">{v.occupation}</td>
                    <td className="border border-gray-200 px-4 py-2">{v.purpose}</td>
                    <td className="border border-gray-200 px-4 py-2">
                      {new Date(v.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

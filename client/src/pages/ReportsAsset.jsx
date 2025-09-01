import { useEffect, useState } from "react";
import {
  Download,
  FileText,
  Filter,
  SortDesc,
  X,
  Mail,
  User,
  Phone,
} from "lucide-react";

export default function AssetReports() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
  purpose: "",
  });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  // Filter + Sort states
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
  const fetchAssets = async () => {
    try {
      const response = await fetch("https://allegro-backend.onrender.com/api/assets/getAllAssets");
     
      const data = await response.json(); // directly the array
      setAssets(data || []); // ensure it's at least an empty array
    } catch (error) {
      console.error("Error fetching assets:", error);
      setAssets([]); // fallback to empty array
    } finally {
      setLoading(false);
    }
  };

  fetchAssets();
}, []);



  const handleDownloadClick = (asset) => {
    setSelectedAsset(asset);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedAsset) return;

    setSending(true);
    setMessage("");

    try {
      const response = await fetch("https://allegro-backend.onrender.com/api/download/send-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pdfLink: selectedAsset.pdfReportLink,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("📧 Report sent to your email!");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => setShowModal(false), 2000);
      } else {
        setMessage(`❌ Error: ${data.message || "Failed to send email"}`);
      }
    } catch (error) {
      setMessage("❌ Something went wrong. Try again.");
    } finally {
      setSending(false);
    }
  };

  // Get unique categories
  const categories = [
    "All",
    ...new Set(assets.map((a) => a.category).filter(Boolean)),
  ];

  // Apply filter + sort
  const filteredAssets = assets
    .filter((asset) => categoryFilter === "All" || asset.category === categoryFilter)
    .sort((a, b) => (sortOrder === "asc" ? a.year - b.year : b.year - a.year));

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-600 mx-auto mb-4"></div>
          <p className="text-slate-600 font-medium">Loading assets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-[4rem]">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-slate-700">
             Reports
          </h1>
          <h1 className="text-slate-600 text-[1rem] md:text-xl">
            Study and download our reports with ease
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 border-b border-slate-200 bg-slate-700 gap-4">
            <h2 className="text-2xl md:text-3xl font-medium text-white">
              Available Reports
            </h2>

            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <Filter className="w-4 h-4 text-slate-500" />
                <select
                  className="bg-transparent text-slate-700 font-medium outline-none cursor-pointer"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  {categories.map((cat, idx) => (
                    <option key={idx} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort by Year */}
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <SortDesc className="w-4 h-4 text-slate-500" />
                <select
                  className="bg-transparent text-slate-700 font-medium outline-none cursor-pointer"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="desc">Newest First</option>
                  <option value="asc">Oldest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          {filteredAssets.length > 0 ? (
  <div className="space-y-4">
    {/* Desktop Table */}
    <div className="hidden sm:block overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-slate-100 text-slate-700 text-sm uppercase tracking-wide">
          <tr>
            <th className="px-6 py-3 border-b">#</th>
            <th className="px-6 py-3 border-b">Title</th>
            <th className="px-6 py-3 border-b">Year</th>
            <th className="px-6 py-3 border-b">Category</th>
            <th className="px-6 py-3 border-b text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredAssets.map((asset, index) => (
            <tr
              key={asset._id}
              className="hover:bg-slate-50 transition-colors"
            >
              <td className="px-6 py-4 border-b">{index + 1}</td>
              <td className="px-6 py-4 border-b font-medium text-slate-800 max-w-xs truncate">
                {asset.heading}
              </td>
              <td className="px-6 py-4 border-b">{asset.year}</td>
              <td className="px-6 py-4 border-b">
                {asset.category ? (
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                    {asset.category}
                  </span>
                ) : (
                  "-"
                )}
              </td>
              <td className="px-6 py-4 border-b text-center">
                <button
                  onClick={() => handleDownloadClick(asset)}
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Card View */}
    <div className="sm:hidden space-y-3">
      {filteredAssets.map((asset, index) => (
        <div
          key={asset._id}
          className="bg-white p-4 rounded-lg shadow border border-slate-200"
        >
          <p className="text-slate-500 text-xs mb-1">#{index + 1}</p>
          <h4 className="font-medium text-slate-800">{asset.heading}</h4>
          <p className="text-sm text-slate-600">Year: {asset.year}</p>
          <p className="text-sm text-slate-600">
            Category:{" "}
            {asset.category ? (
              <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                {asset.category}
              </span>
            ) : (
              "-"
            )}
          </p>
          <button
            onClick={() => handleDownloadClick(asset)}
            className="mt-3 w-full bg-slate-700 hover:bg-slate-800 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
) : (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                No Assets Found
              </h3>
              <p className="text-slate-600">
                There are currently no reports available.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedAsset && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Request Report
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Enter your details to receive{" "}
              <span className="font-medium">{selectedAsset.heading}</span>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <User className="w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="flex-1 outline-none bg-transparent"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="flex-1 outline-none bg-transparent"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
                <Phone className="w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="flex-1 outline-none bg-transparent"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
<div className="flex items-center gap-2 border rounded-lg px-3 py-2">
    <input
      type="text"
      name="occupation"
      placeholder="Your Occupation"
      className="flex-1 outline-none bg-transparent"
      value={formData.occupation}
      onChange={handleChange}
      required
    />
  </div>

  {/* Purpose */}
  <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
    <input
      type="text"
      name="purpose"
      placeholder="Purpose of Download"
      className="flex-1 outline-none bg-transparent"
      value={formData.purpose}
      onChange={handleChange}
      required
    />
  </div>
              {message && (
                <p
                  className={`text-sm mt-2 ${
                    message.startsWith("📧")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {sending ? "Sending..." : "Send Report"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

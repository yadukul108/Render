import { useEffect, useState } from "react";
import { Download, X, Mail, User, Phone } from "lucide-react";
import HomeIb from "../assets/office3.jpg";
import Footer from "../components/Footer";

const Case = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
  });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch cases from backend
  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await fetch("/api/cases/getAllCase");
        const data = await res.json();
        setCases(data);
      } catch (err) {
        console.error("Error fetching cases:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  const handleDownloadClick = (study) => {
    setSelectedCase(study);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCase) return;

    setSending(true);
    setMessage("");

    try {
      const response = await fetch("/api/download/send-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          pdfLink: selectedCase.pdfLink,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("📧 Case Study sent to your email!");
        setFormData({ name: "", email: "", phone: "", purpose: "" });
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

  return (
    <div>
      {/* Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-red-900/60 z-2"></div>
      <img
        src={HomeIb}
        alt="About Us"
        className="object-cover w-full h-[42rem] md:h-[40rem] filter brightness-75"
      />
      <div className="absolute inset-0 z-3 flex items-center">
        <div className="container mx-auto px-3 md:px-8">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="mb-4">
              <div className="inline-block bg-slate-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-white text-sm font-medium tracking-wide">
                  WELCOME TO ALLEGRO CAPITAL
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
              Explore Our
              <span className="block text-red-400 font-medium">
                Case Studies
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-200 text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed font-light">
              Our case studies showcase real-world examples of how Allegro
              Capital delivers impactful financial solutions. Each story reflects
              our commitment to driving measurable results for clients.
            </p>

            <p className="mt-4 text-slate-300 text-sm md:text-base font-light max-w-2xl">
              Guiding clients with integrity and expertise since 2002.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <section className="px-4 md:px-12 py-12">
        <h2 className=" text-3xl md:text-4xl font-medium text-center mb-10 text-slate-800">
          Case Studies
        </h2>

        {loading ? (
          <p className="text-center">Loading case studies...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {cases.map((study) => (
    <div
      key={study._id}
      className="flex flex-col shadow-lg rounded-xl overflow-hidden"
    >
      {/* Left Text Content */}
      <div className="p-6 flex  bg-slate-100 flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-2">
            {study.heading}
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Year:</span> {study.year}
          </p>
          <p className="text-slate-700 ">{study.description}</p>
        </div>
        <div className="mt-4 flex gap-4">
          <button
            onClick={() => handleDownloadClick(study)}
            className="bg-red-500 text-white w-[8rem] rounded-xl py-1 cursor-pointer hover:bg-red-700 transition"
          >
            Download
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="bg-white">
        <img
          src={study.caseImage || HomeIb}
          alt={study.heading}
          className="w-auto h-auto object-cover mx-auto"
        />
      </div>
    </div>
  ))}
</div>

        )}
      </section>

      {/* Download Modal */}
      {showModal && selectedCase && (
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
              <span className="font-medium">{selectedCase.heading}</span>
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

              {message && (
                <p
                  className={`text-sm mt-2 ${
                    message.startsWith("📧") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 cursor-pointer hover:from-slate-700 hover:to-slate-800 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
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

      <Footer />
    </div>
  );
};

export default Case;

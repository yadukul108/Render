import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import logo from "../assets/logo.png";

const TransactionDetail = () => {
  const { id } = useParams();
  const [txn, setTxn] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const res = await fetch(`/api/transactions/getTransactionById/${id}`);
        if (!res.ok) throw new Error('Transaction not found');
        const data = await res.json();
        setTxn(data);
      } catch (err) {
        console.error(err);
        setTxn(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, [id]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (!txn) return <div className="p-6 text-center">Transaction not found.</div>;

  return (
    <div>
    <div className="min-h-screen bg-white p-4 md:p-6 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-medium mb-6 text-center">
        Transaction Details
      </h1>

      {/* Top Row Images */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-10 w-full max-w-7xl flex-wrap">
  {[
    { label: "Representing", value: txn.representing },
    { label: "Counter Party", value: txn.party2 },
    { label: "Asset", value: txn.asset }
  ]
    .filter(({ label, value }) => label !== "Party 2" || value) // hide Party 2 if value is falsy
    .map(({ label, value }, index) => (
      <div
        key={index}
        className="relative w-3/4 md:w-auto h-fit overflow-hidden mx-auto"
      >
        <img
          src={txn.dealPic}
          alt={value}
          className="w-full h-auto object-cover rounded-xl"
        />
        <div className="mt-4 text-slate-700 w-full text-left">
          <h1 className="text-lg md:text-xl font-medium">{value}</h1>
          <p className="text-sm">{label}</p>
        </div>
      </div>
    ))}
</div>


      {/* Details Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-7xl">
        {/* Left Box */}
        <div className="w-full md:w-[20rem] h-fit  top-6 bg-slate-100 shadow-md rounded-lg p-6 space-y-4">
          {/* Logo and Client Name */}
          <div className="flex flex-col items-start space-y-2">
            <img src={logo} alt="Client Logo" className="w-20 h-20 object-contain" />
            <div>
              <p className="text-slate-800 text-sm font-semibold">Client Name</p>
              <p className="text-slate-700 text-sm">{txn.representing}</p>
            </div>
          </div>

          <hr className="my-2 border-slate-300" />

          {/* Info Fields */}
          <div>
            <p className="text-slate-800 text-sm font-semibold">Sector:</p>
            <p className="text-slate-700 text-sm">{txn.sector}</p>
          </div>
          <div>
            <p className="text-slate-800 text-sm font-semibold">Type of Deal:</p>
            <p className="text-slate-700 text-sm">{txn.type_of_deal}</p>
          </div>
          <div>
            <p className="text-slate-800 text-sm font-semibold">Amount:</p>
            <p className="text-slate-700 text-sm">₹{txn.amount} Cr</p>
          </div>
          <div>
            <p className="text-slate-800 text-sm font-semibold">Year:</p>
            <p className="text-slate-700 text-sm">{txn.year}</p>
          </div>

          {/* Contact Button */}
          <button className="mt-4 px-4 py-2 w-full border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition duration-200">
            Contact Us
          </button>
        </div>

        {/* Right Box */}
        <div className="flex-1 rounded-lg p-6 mb-2">
          <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-700">Description</h2>
          <h1 className="text-slate-600 text-lg md:text-xl mb-2">{txn.heading}</h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum, nihil ipsa, delectus distinctio quasi asperiores minima corporis possimus animi quis odit eaque unde harum debitis vero amet, qui vel odio eius autem voluptatibus? In dolore, consequuntur asperiores nihil error libero animi atque similique quisquam. Nobis expedita culpa beatae unde adipisci quas sed dolor accusantium perferendis earum quisquam tempore dolore saepe odit, impedit vel. Dolor dolorum blanditiis explicabo saepe repudiandae quisquam ipsa? <br></br>
             <br></br>Facere, architecto laudantium, molestias veritatis nam unde suscipit accusantium iste perspiciatis explicabo debitis provident officia quis ratione corrupti eaque nisi eveniet quo consectetur nemo totam iusto vel distinctio sequi. Reiciendis ipsum aspernatur quidem fuga laudantium similique ratione perferendis <br></br><br></br>doloremque dicta assumenda explicabo, quia nesciunt ea impedit nihil eveniet id inventore consectetur quos adipisci suscipit minus quas omnis fugit! Nobis sint dolor dolores ratione dolorem. Atque, veritatis autem placeat voluptas officia enim corporis architecto, ab dolor rem quam sed tenetur nesciunt repellat porro cum alias minima provident debitis, at inventore doloremque. Temporibus iure, esse saepe tempora quaerat, vitae perspiciatis eaque exercitationem, quod in cum porro necessitatibus sapiente voluptates aliquid impedit ut obcaecati nulla. Optio est, enim consectetur adipisci fugit dolor ullam id error ad voluptates eos debitis voluptate a.
          </p>
        </div>
      </div>

    </div>
      <Footer />
      </div>
  );
};

export default TransactionDetail;

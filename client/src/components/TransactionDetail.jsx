import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import logo from "../assets/logo.png"
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
    <div className="min-h-screen bg-slate-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-medium mb-8 text-center">Transaction Details</h1>

      {/* Top Row Images */}
  <div className="flex flex-col md:flex-row justify-around items-stretch gap-6 mb-10 flex-wrap w-full">
  {/* Card Template */}
  {[ 
    { label: "Representing", value: txn.representing },
    { label: "Party 2", value: txn.party2 },
    { label: "Asset", value: txn.asset }
  ].map(({ label, value }, index) => (
    <div key={index} className="relative w-full md:w-auto h-fit overflow-hidden">
      <img
        src={txn.dealPic}
        alt={value}
        className="w-auto mx-auto h-auto object-cover rounded-xl "
      />

      {/* Gradient Overlay */}
      

      {/* Text Content */}
     <div className="mt-4 bottom-4 left-4 z-10  text-slate-700 w-full">
  <p className="text-xl font-medium">{value}</p>
  <p className="text-sm">{label}</p>
</div>

    </div>
  ))}
</div>



      {/* Details Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
  {/* Left Box */}
  <div className="w-[20rem] h-fit sticky top-6 bg-slate-200 shadow-md rounded-lg p-6 space-y-4">
    {/* Logo and Client Name */}
    <div className="flex flex-col items-start space-y-2">
      <img src={logo} alt="Client Logo" className="w-[5rem] h-[5rem] object-contain" />
      <div>
        <p className="text-slate-800 text-lg font-medium">Client Name</p>
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
  <div className="flex-1 bg-slate-100  rounded-lg p-6 mb-2">
    <h2 className="text-2xl font-medium mb-2 text-gray-800">Description</h2>
    <h1 className="text-slate-800 text-xl mb-2">{txn.heading}</h1>
    <p className="text-slate-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. In omnis consequatur, iusto error excepturi ab sed hic sequi praesentium facilis quos, molestiae nemo exercitationem itaque debitis qui fuga expedita possimus corrupti repellendus delectus ipsam! Non officiis ex numquam repellat distinctio quaerat minus quam velit error repudiandae qui <br></br>sapiente vitae aut nostrum, perferendis cumque pariatur? Quisquam dolorum sequi, saepe enim impedit debitis, omnis illum ducimus hic aperiam est placeat soluta possimus? Impedit quos repellendus provident quis, quibusdam dolores <br></br>accusamus nulla alias iusto odit magnam fugiat perspiciatis numquam ex nemo nesciunt obcaecati qui aspernatur inventore? Hic vero impedit accusamus necessitatibus amet omnis.lorem100  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus cumque sit distinctio quo facilis! Officiis molestias obcaecati quam asperiores quasi minus. Corrupti autem, labore, animi necessitatibus quam atque harum libero quaerat omnis ea eaque minima natus voluptas nihil maiores, incidunt suscipit repudiandae ipsa blanditiis consectetur fuga sunt. Quidem tempore harum ex ipsum ut reiciendis velit nam, suscipit, ullam maiores voluptatum exercitationem odit cum nostrum maxime earum accusantium porro? Culpa voluptatem soluta ullam in ex repellendus adipisci distinctio, amet magni dolore asperiores, voluptate explicabo, natus nisi ad sunt. Corrupti sunt minima perferendis consectetur nulla tenetur blanditiis quas, doloribus ab velit.</p>
  </div>
</div>
<Footer/>

    </div>
  );
};

export default TransactionDetail;

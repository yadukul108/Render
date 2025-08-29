
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { LogIn,Loader } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice';

const SignIn = () => {
 const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('https://allegro-backend.onrender.com/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/admin');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row  pt-[3rem]">
      {/* Left Side - Logo */}
      <div className="bg-slate-100 md:w-1/2 flex flex-col items-center justify-center p-8">
      <img src={logo} alt="" className="object-cover w-[10rem]" />
        <h1 className="text-xl  text-slate-600">An Independent Full-Service Investment Bank</h1>
      </div>

      {/* Right Side - Signup Form */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <h2 className="text-2xl  text-slate-700">Login with your Admin Account</h2>

       
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-slate-600">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-slate-600">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Sign in Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 rounded flex flex-row justify-center hover:bg-red-700 transition"
          >
            {loading ? (
  <>
    <Loader className="animate-spin  text-white" />
    <span className="pl-3">Loading...</span>
  </>
) : (
  'Sign In'
)}
          </button>

         

          {/* Sign In Link */}
        </form>
         {errorMessage && (
            <h1 className='mt-3 w-full text-red-500' >
              {errorMessage}
            </h1>
          )}
      </div>
    </div>
  );
}

export default SignIn;
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ForgotPassword = () => {
  const location = useLocation();
  const {resetPassword} = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || '');
  const [msg, setMsg] = useState('');

  const handleReset = () => {
    if (email.trim() === '') {
      alert('Please enter your email address!');
      return;
    }
    // Redirect to Gmail
    resetPassword(email)
    .then(() => setMsg("Link is sent to your email."))
    .catch(() => setMsg("Somethis is wrong!"))
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Reset Your Password</h1>
      <form
        className="bg-white p-6 shadow-lg rounded-md w-96"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f86011]"
            placeholder="Enter your email"
          />
        </div>
        {msg && <p>{msg}</p>}
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-[#f86011] text-white py-2 px-4 rounded-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

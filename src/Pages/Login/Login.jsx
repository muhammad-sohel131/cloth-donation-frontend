import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const {logIn, setUser} = useContext(AuthContext);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); 
  };

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    logIn(email,password)
    .then(result => {
      setUser(result.user);
      toast.success("Login Successful!");
      location.state ? navigate(location.state) : navigate("/");
    })
    .catch(err => {
      setError(err.message)
      console.log(err)
    })
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    toast.success("Google Login Successful!");
    localStorage.setItem("isLoggedIn", true);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#f86011] text-white py-3 rounded-md transition"
          >
            Login
          </button>
          <div className="text-right mt-2">
            <a
              href="/forgot-password"
              className="text-[#f86011] hover:underline text-sm"
            >
              Forgot Password?
            </a>
          </div>
        </form>

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-gray-700">Or Login with</p>
          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-[#f86011] hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

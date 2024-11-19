import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
    phone: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    setPasswordError("");
  };

  // Password validation
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) return "Password must have at least one uppercase letter.";
    if (!hasLowercase) return "Password must have at least one lowercase letter.";
    if (!isLongEnough) return "Password must be at least 6 characters long.";
    return null;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, photoURL, email, password } = formData;

    // Validate password
    const passwordValidationError = validatePassword(password);
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return;
    }

    if (name && phone && email && password) {
      createNewUser(email, password)
        .then(result => {
          toast.success("Registration Successful!");
          setUser(result.user)
          updateUserProfile({displayName:name, photoURL, phoneNumber:phone})
          .then(() => {navigate("/");})
          .catch(err => console.log(err));
        })
        .catch(err => console.log(err))
    } else {
      setError("All fields are required!");
      toast.error("Registration Failed! Please fill all fields.");
    }
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
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your Phone"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
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
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Enter your photo URL"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-[#f86011] text-white py-3 rounded-md transition"
          >
            Register
          </button>
        </form>

        <div className="mt-6 border-t pt-4 text-center">
          <p className="text-gray-700">Or Register with</p>
          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Register with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="text-[#f86011] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

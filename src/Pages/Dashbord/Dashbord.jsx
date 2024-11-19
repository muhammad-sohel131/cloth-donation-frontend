import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  // Mock data to simulate user profile info
  const { user } = useContext(AuthContext);
  console.log(user)
  const navigate = useNavigate();

  // Handle Update Profile Button Click
  const handleUpdateProfile = () => {
    navigate("/update-profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome, {user?.displayName}!
        </h2>
        <div className="text-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-medium text-gray-700">{user?.displayName}</p>
          <p className="text-sm text-gray-500">{user?.email}</p>
          <p className="text-sm text-gray-500">{user?.phoneNumber}</p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={handleUpdateProfile}
            className="bg-[#f86011] text-white py-2 px-6 rounded-md transition"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

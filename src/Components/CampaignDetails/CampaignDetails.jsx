import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CampaignDetails = () => {
  const { id } = useParams(); 
  const [campaign, setCampaign] = useState(null);
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: "",
  });

  // Fetch campaign details by ID
  useEffect(() => {
    fetch("/data/campaigns.json") // Update with actual data source
      .then((res) => res.json())
      .then((data) => {
        const campaignData = data.find((campaign) => campaign.id === parseInt(id));
        setCampaign(campaignData);
      })
      .catch((err) => console.error("Error fetching campaign:", err));
  }, [id]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: "",
    });
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-16">
        {campaign ? (
          <>
            {/* Campaign Details */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-4">{campaign.description}</p>
              <p className="text-gray-500">
                <strong>Division:</strong> {campaign.division}
              </p>
              <p className="text-gray-500">
                <strong>Contact:</strong> {campaign.contactInfo}
              </p>
              <p className="text-gray-500">
                <strong>Status:</strong> {campaign.status}
              </p>
            </div>

            {/* Donation Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Donate to this Campaign
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Quantity of Items
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="2 jackets, 3 blankets"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Item Type
                  </label>
                  <input
                    type="text"
                    name="itemType"
                    value={formData.itemType}
                    onChange={handleChange}
                    placeholder="blanket, jacket, sweater"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="House 12, Road 5, Dhanmondi, Dhaka"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Specific time for pickup"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f86011] text-white py-3 rounded-md hover:bg-[#f86011] transition"
                >
                  Submit Donation
                </button>
              </form>
            </div>
          </>
        ) : (
          <p className="text-gray-600 text-center">Loading campaign details...</p>
        )}
      </div>
    </section>
  );
};

export default CampaignDetails;

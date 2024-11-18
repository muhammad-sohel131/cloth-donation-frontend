import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  // Fetch campaigns data
  useEffect(() => {
    fetch("/data/campaigns.json") // Update this with your data source path
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error("Failed to fetch campaigns:", err));
  }, []);

  // Navigate to details page
  const handleDonateNow = (id) => {
    navigate(`/campaign-details/${id}`); // Adjust route if necessary
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
          Donation Campaigns
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {campaign.description.substring(0, 100)}...
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  <strong>Division:</strong> {campaign.division}
                </p>
                <button
                  onClick={() => handleDonateNow(campaign.id)}
                  className="bg-[#f86011] text-white py-2 px-10 rounded-lg text-lg"
                >
                  Donate Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;

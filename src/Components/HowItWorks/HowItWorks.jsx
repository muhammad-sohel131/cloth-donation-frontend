import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-[#F7F7F8] py-12">
      <div className="container mx-auto mx-container px-6 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Follow these simple steps to donate warm clothing and make a difference in someone’s life.
        </p>

        {/* Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-[#f86011] shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Step 1: Choose a Campaign
            </h3>
            <p className="text-white">
              Browse through our active donation campaigns and select one that resonates with you.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Step 2: Donate Items
            </h3>
            <p className="text-gray-600">
              Fill out the donation form with the items you wish to donate and select your pickup location.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-[#f86011] shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Step 3: Delivery and Distribution
            </h3>
            <p className="text-white">
              Our volunteers will collect your donations and distribute them to those in need.
            </p>
          </div>
        </div>

        {/* Collection Points and Divisions */}
        <div className="mt-16 border-2 py-10 px-8 border-[#f86011] rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
            Collection Points
          </h3>
          <p className="text-gray-700 text-center mb-6">
            We have collection points across multiple divisions to make donations convenient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h4 className="font-semibold text-gray-800">Dhaka</h4>
              <p className="text-sm text-gray-600">Dhanmondi, Gulshan, Mirpur</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h4 className="font-semibold text-gray-800">Chittagong</h4>
              <p className="text-sm text-gray-600">Agrabad, Halishahar</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h4 className="font-semibold text-gray-800">Sylhet</h4>
              <p className="text-sm text-gray-600">Zindabazar, Amberkhana</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center">
              <h4 className="font-semibold text-gray-800">Khulna</h4>
              <p className="text-sm text-gray-600">Sonadanga, Khalishpur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

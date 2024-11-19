import React from 'react';

const HowToHelp = () => {
  return (
    <div className="py-10">
      <div className="mx-container px-6">
        <h1 className="text-4xl text-center font-bold mb-12">How You Can Help</h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12">
          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img
              src="https://media.istockphoto.com/id/1309112046/photo/volunteer-with-donation-box-with-clothes.jpg?s=612x612&w=0&k=20&c=i0s2Cbmxb3wJbrwJShxSvCD0hwxH4YH3B6k1-vbQVUM="
              alt="Donate Clothes"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f86011]">Donate Clothing</h3>
              <p className="text-gray-600 mt-2">
                Clean out your closet and donate jackets, sweaters, blankets, and more to help those in need.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5b8723c37c9327b858b513e2/1546007604822-LXY98KDZC7LF05QHXUW3/iStock_99393945_MEDIUM.jpg"
              alt="Volunteer"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f86011]">Volunteer Your Time</h3>
              <p className="text-gray-600 mt-2">
                Help sort, package, and distribute donations by becoming a volunteer with us.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <img
              src="https://media.istockphoto.com/id/1352752672/vector/donate-donation-concept-human-hand-with-gold-coin-and-donation-box.jpg?s=612x612&w=0&k=20&c=bK-eEYOBej4WVEs6ufGCYcaGZndQtrK677ECapK6eo4="
              alt="Sponsor a Campaign"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#f86011]">Sponsor a Campaign</h3>
              <p className="text-gray-600 mt-2">
                Contribute funds to sponsor donation drives and spread the joy to more communities.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Detailed Information */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Where Your Help Goes</h2>
          <p className="text-lg mb-6">
            Your donations, time, and efforts reach the following areas, ensuring that help reaches those who need it most:
          </p>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-full shadow-lg">
              <img
                src="https://live.staticflickr.com/8377/8426569390_f66141a3bd_b.jpg"
                alt="Dhaka"
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="text-xl text-gray-700">Dhaka</h4>
            </div>
            <div className="bg-white p-6 rounded-full shadow-lg">
              <img
                src="https://www.shutterstock.com/image-photo/khulna-bangladesh-circa-july-2012-260nw-552710302.jpg"
                alt="Chittagong"
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="text-xl text-gray-700">Chittagong</h4>
            </div>
            <div className="bg-white p-6 rounded-full shadow-lg">
              <img
                src="https://www.thelancet.com/cms/asset/994fd4ef-066a-4233-ab76-fed9fc9abbdc/fx1.jpg"
                alt="Khulna"
                className="w-16 h-16 rounded-full mb-4"
              />
              <h4 className="text-xl text-gray-700">Khulna</h4>
            </div>
          </div>
        </div>

        
        <div className="mt-16 text-center border-2 py-10 px-8 border-[#f86011] rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Ready to Make a Difference?</h2>
          <p className=" text-lg mb-8">
            Join us today to donate, volunteer, or sponsor a campaign. Your contribution will make a huge impact!
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;

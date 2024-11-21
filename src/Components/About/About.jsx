import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  
  useEffect(() => {
  AOS.init({
    duration: 1000, 
      offset: 100,  
      once: false,
  });
  },[])

  return (
    <section className="py-12 mx-container">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Winter Donation
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Winter Donation is dedicated to bringing warmth to those in need across Bangladesh.  
          Our mission is to connect donors with local volunteers to deliver essential winter clothing to vulnerable communities. Together, we can ensure no one suffers through the cold without proper protection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div data-aos="fade-left" data-aos-anchor-placement="top-center" className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Donate Warm Clothing
            </h3>
            <p className="text-gray-600">
              Share jackets, blankets, sweaters, and other warm clothing items. Your small contribution can make a big difference.
            </p>
          </div>
          {/* Card 2 */}
          <div data-aos="fade-zoom-in" className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Volunteer Locally
            </h3>
            <p className="text-gray-600">
              Join our network of volunteers to help distribute donations to those in need. Together, we can spread warmth and hope.
            </p>
          </div>
          {/* Card 3 */}
          <div data-aos="fade-right"  className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Spread the Word
            </h3>
            <p className="text-gray-600">
              Help us raise awareness by sharing our mission with your friends and family. Together, we can inspire others to give back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

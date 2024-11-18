import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="mx-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: support@winterdonation.org</p>
            <p>Phone: +880-123-456-789</p>
            <p>Address: House 12, Road 5, Dhaka, Bangladesh</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p>
              Winter Donation is a platform connecting donors with volunteers to
              provide warm clothing to the needy across Bangladesh.
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-sm">
              © {new Date().getFullYear()} Winter Donation. All rights reserved.
            </p>
      </div>
    </footer>
  );
};

export default Footer;


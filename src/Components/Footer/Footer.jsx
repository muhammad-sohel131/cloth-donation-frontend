import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
            <div className="flex gap-x-10">
              <Link
                to="https://facebook.com"
                target="_blank"
                className="hover:text-gray-200 text-4xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                className="hover:text-gray-200 text-4xl"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                className="hover:text-gray-200 text-4xl"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200 text-4xl"
              >
                <FaLinkedin />
              </Link>
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


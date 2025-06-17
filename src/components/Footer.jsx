import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

 const Footer = () => {
  return (
    <footer className="bg-green-500 text-white px-4 md:px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div>
          <h1 className="text-2xl font-bold text-white">Formers.com</h1>
          <p className="mt-4 text-sm text-white">
            Trusted platform for eco-friendly fertilizers and farm essentials.
            Grow naturally, grow better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="hover:underline">
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-sm text-white mb-4 break-words">
            Email: support@formers.com
          </p>
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} Formers.com — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
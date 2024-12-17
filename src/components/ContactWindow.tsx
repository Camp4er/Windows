"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function ContactWindow() {
  return (
    <div className="p-6 bg-white rounded-md shadow-md text-gray-800 space-y-6 h-full">
      <h2 className="text-2xl font-bold text-indigo-700">Contact Me</h2>
      <p className="text-gray-500">I'd love to hear from you! Feel free to reach out using the form below or connect with me on social media.</p>

      {/* Contact Form */}
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>

        <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6 text-indigo-600">
        <a href="https://www.linkedin.com/in/poorva-saxena-983642256" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Camp4er" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com/Camp4er" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}

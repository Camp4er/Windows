import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";

interface ContactPanelProps {
  //onClose: () => void;
}

const ContactPanel: React.FC<ContactPanelProps> = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-96 shadow-md transform transition-transform translate-x-0 p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Reach out to me</h2>
      <p className="text-gray-600 mb-8">
        Please provide your details in the form below, and I'll respond promptly.
      </p>

      {/* Contact Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your email address"
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Your message for me"
          className="w-full p-3 rounded-md border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-8 space-y-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white border rounded-md shadow hover:bg-gray-50"
        >
          <FaLinkedin size={24} className="text-blue-600" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white border rounded-md shadow hover:bg-gray-50"
        >
          <FaGithub size={24} className="text-gray-800" />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white border rounded-md shadow hover:bg-gray-50"
        >
          <FaTwitter size={24} className="text-blue-400" />
          <span>Twitter</span>
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 bg-white border rounded-md shadow hover:bg-gray-50"
        >
          <FaWhatsapp size={24} className="text-green-500" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default ContactPanel;

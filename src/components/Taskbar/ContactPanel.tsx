import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaMailBulk } from "react-icons/fa";

interface ContactPanelProps {
  //onClose: () => void;
}

const ContactPanel: React.FC<ContactPanelProps> = () => {
  return (
    <div className="left-0 h-full w-[600px] shadow-md transform transition-transform translate-x-0 p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-white font-serif">
        Reach out to me
      </h2>
      <p className="text-white text-xl mb-8">
        Please provide your details in the form below, and I'll respond
        promptly.
      </p>

      <div className="flex flex-col gap-3 align-center justify-center">
      <form className="space-y-4">
        <div className="flex flex-col gap-1 flex-start align-center">
          <div className="flex flex-row gap-1">
            <input
              type="text"
              placeholder="Your name"
              className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            placeholder="Your message for me"
            className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold mt-1 p-3 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Social Links */}
      <div className="space-y-4 flex flex-col gap-1 flex-end align-center justify-center">
        <div className="flex flex-row gap-3">
        <a
          href="https://www.linkedin.com/in/poorva-saxena-983642256/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
        >
          <FaLinkedin size={24} className="text-blue-600" />
          <span className="text-white">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Camp4er"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
        >
          <FaGithub size={24} className="text-white" />
          <span className="text-white">GitHub</span>
        </a></div>
        <div className="flex flex-row gap-3">
        <a
          href="https://X.com/Camp4er"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
        >
          <Image src={"/icons/x.png"} alt="X icon" width={24} height={24}/>
          <span className="text-white">X</span>
        </a>
        <a
          href="mailto:saxenapoorva2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
        >
          <Image src="/icons/gmail.png" alt="gmail icon" width={24} height={24} />
          <span className="text-white">Email</span>
        </a></div>
      </div>
      </div>
    </div>
  );
};

export default ContactPanel;

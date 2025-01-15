import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="rounded">
      <div className="flex flex-row justify-between mb-2">
        <div className="text-white flex flex-col align-center justify-center text-left pl-4 ml-4">
          <h1 className="text-3xl">Poorva Saxena</h1>
          <h3 className="text-2xl">Frontend Developer</h3>
        </div>
        <div className="p-4">
            <Image src="/icons/heroImage.png" alt="hero image" width={160} height={160} className="heroImg"/>
        </div>
      </div>
      <div className="text-white flex flex-row rounded gap-2 w-full items-center justify-center mt-3">
      <a href="https://www.linkedin.com/in/poorva-saxena-983642256/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-gray-800 border rounded-md shadow hover:bg-gray-700 text-white"
        >
          <FaLinkedin size={24} className="text-blue-400" />
          <span className="text-white">LinkedIn</span>
        </a>
        <a
          href="https://github.com/Camp4er"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-gray-800 border rounded-md shadow hover:bg-gray-700 text-white"
        >
          <FaGithub size={24} className="text-white" />
          <span className="text-white">GitHub</span>
        </a>
        <a
          href="https://twitter.com/Camp4er"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-gray-800 border rounded-md shadow hover:bg-gray-700 text-white"
        >
          <FaTwitter size={24} className="text-blue-400" />
          <span className="text-white">Twitter</span>
        </a>
        <a
          href="mailto:saxenapoorva2004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full gap-3 p-3 bg-gray-800 border rounded-md shadow hover:bg-gray-700 text-white"
        >
          <Image src="/icons/gmail.png" alt="gmail icon" width={24} height={24} />
          <span className="text-white">Email</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;

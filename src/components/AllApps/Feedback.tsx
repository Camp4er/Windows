"use client";
import { useState } from "react";
import { FaBug, FaLightbulb } from "react-icons/fa";

const Feedback = () => {
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");

  const sendFeedback = () => {
    if (!summary.trim()) {
      alert("Please enter a summary of your feedback.");
      return;
    }

    const subject = encodeURIComponent(`Feedback: ${summary}`);
    const body = encodeURIComponent(`Details:\n${details}`);
    const email = "saxenapoorva2004@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <ul className="mt-4 space-y-2">
          <li className="p-2 bg-gray-700 rounded">Home</li>
          <li className="p-2 bg-gray-700 rounded">Feedback</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome</h1>
        <p className="text-gray-400">Your feedback helps make this better!</p>

        {/* Feedback Form */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Summarize your feedback"
            className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <textarea
            placeholder="Explain in more detail (optional)"
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button
            onClick={sendFeedback}
            className="mt-3 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </div>

        {/* Feedback Options */}
        <div className="mt-6 flex space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            <FaBug />
            <span>Report a problem</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 rounded hover:bg-yellow-700">
            <FaLightbulb />
            <span>Suggest a feature</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

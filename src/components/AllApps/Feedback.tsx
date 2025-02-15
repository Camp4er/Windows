"use client";
import React, { useState } from "react";
import {
  FaBars,
  FaBug,
  FaLightbulb,
  FaHome,
  FaCommentDots,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Feedback: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const [homeInput, setHomeInput] = useState("");
  const [feedbackInput, setFeedbackInput] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [detailedFeedback, setDetailedFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailStatus("sending");
    setErrorMessage(null);

    // Setup EmailJS parameters
    const templateParams = {
      feedbackSummary: feedbackInput,
      detailedFeedback: detailedFeedback,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );

      if (response.status === 200) {
        console.log("Feedback email sent successfully!", response);
        setEmailStatus("success");
        setFeedbackInput("");
        setDetailedFeedback("");
      } else {
        console.error(
          "Failed to send feedback email, status code:",
          response.status
        );
        setEmailStatus("error");
        setErrorMessage(
          `Failed to send email. Status code: ${response.status}`
        );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error sending feedback email:", error);
        setEmailStatus("error");
        setErrorMessage(error.message || "An unexpected error occurred.");
      } else {
        console.error("Unknown error:", error);
      }
    }
  };

  const handleHomeSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && homeInput.trim()) {
      setFeedbackInput(homeInput);
      setCurrentSection("feedback");
    }
  };

  const handleHomeButtonClick = () => {
    // e.preventDefault();
    setCurrentSection("feedback");
  };

  const sidebarVariants = {
    open: { width: 240 },
    closed: { width: 60 },
  };

  return (
    <div className="bg-gray-900 text-white flex">
      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="closed"
        animate={sidebarOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-screen flex-shrink-0 flex flex-col items-start pt-4 shadow-lg overflow-hidden"
        style={{ width: sidebarOpen ? 240 : 60, position: "sticky", top: 0 }}
      >
        <button
          className="text-2xl p-2 "
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>
        {/* Sidebar Options */}
        <nav className="mt-6">
          <ul className="w-[230px]">
            <li
              className={`flex items-center p-2 mb-1 cursor-pointer hover:bg-gray-800 rounded ml-1 transition-colors duration-200 ${
                currentSection === "home" ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentSection("home")}
            >
              <FaHome className="text-lg mr-3" />
              {sidebarOpen && <span>Home</span>}
            </li>
            <li
              className={`flex items-center p-2 mb-1 cursor-pointer hover:bg-gray-800 rounded ml-1 transition-colors duration-200 ${
                currentSection === "feedback" ? "bg-gray-800" : ""
              }`}
              onClick={() => setCurrentSection("feedback")}
            >
              <FaCommentDots className="text-lg mr-3" />
              {sidebarOpen && <span>Feedback</span>}
            </li>
          </ul>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {currentSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-3xl font-semibold mb-2 text-gray-200">
                Welcome
              </h1>
              <p className="mb-4">
                Your feedback is essential to helping us improve!
              </p>
              {/* Feedback Input */}
              <input
                type="text"
                placeholder="Give us feedback to make Windows better"
                className="w-full p-3 mb-4 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={homeInput}
                onChange={(e) => setHomeInput(e.target.value)}
                onKeyDown={handleHomeSubmit}
              />
              {/* Bug Report & Suggestion Boxes */}
              <div className="flex flex-wrap gap-4">
                <button
                  className="flex flex-col items-center justify-center w-32 h-32 bg-orange-400 hover:bg-orange-500 border rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={handleHomeButtonClick}
                >
                  <FaBug className="text-black text-3xl mb-2" />
                  <p className="text-sm text-black font-medium">
                    Report a Problem
                  </p>
                </button>
                <button
                  className="flex flex-col items-center justify-center w-32 h-32 bg-orange-400 hover:bg-orange-500 border rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200"
                  onClick={handleHomeButtonClick}
                >
                  <FaLightbulb className="text-black text-3xl mb-2" />
                  <p className="text-sm text-black font-medium">
                    Suggest a Feature
                  </p>
                </button>
              </div>
            </motion.div>
          )}
          {currentSection === "feedback" && (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-3xl font-semibold mb-2 text-gray-200">
                Feedback Form
              </h1>
              <p className="text-white mb-4">
                Tell us more about your feedback.
              </p>
              {/* Feedback Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Summarize your feedback"
                  className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={feedbackInput}
                  onChange={(e) => setFeedbackInput(e.target.value)}
                />
                <textarea
                  placeholder="Explain in more detail"
                  className="w-full p-3 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={detailedFeedback}
                  onChange={(e) => setDetailedFeedback(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-black rounded-md bg-orange-400 hover:bg-orange-500 transition-colors duration-200"
                  disabled={emailStatus === "sending"}
                >
                  {emailStatus === "sending" ? "Sending..." : "Submit Feedback"}
                </button>
              </form>

              {/* Email Status Message */}
              {emailStatus === "success" && (
                <div className="text-green-500 mt-4">
                  Feedback submitted successfully!
                </div>
              )}
              {emailStatus === "error" && (
                <div className="text-red-500 mt-4">{errorMessage}</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Feedback;

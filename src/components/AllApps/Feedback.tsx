"use client";
import React, { useState } from "react";
import { FaBars, FaBug, FaLightbulb, FaHome, FaCommentDots } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Feedback: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("home");
    const [homeInput, setHomeInput] = useState("");
    const [feedbackInput, setFeedbackInput] = useState("");

    const handleHomeSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && homeInput.trim()) {
            setFeedbackInput(homeInput);
            setCurrentSection("feedback");
        }
    };

    const sidebarVariants = {
        open: { width: 240 },
        closed: { width: 60 },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <motion.aside
                variants={sidebarVariants}
                initial="closed"
                animate={sidebarOpen ? "open" : "closed"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white h-screen flex-shrink-0 flex flex-col items-start pt-4 shadow-lg overflow-y-auto"
                style={{ width: sidebarOpen ? 240 : 60, position: "sticky", top: 0 }}
            >
                <button
                    className="text-gray-600 text-2xl p-2 "
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <FaBars />
                </button>
                {/* Sidebar Options */}
                <nav className="mt-6">
                    <ul className="w-52">
                        <li
                            className={`flex items-center p-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ${currentSection === "home" ? "bg-gray-200" : ""}`}
                            onClick={() => setCurrentSection("home")}
                        >
                            <FaHome className="text-lg mr-3 text-gray-500" />
                            {sidebarOpen && <span>Home</span>}
                        </li>
                        <li
                            className={`flex items-center p-3 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ${currentSection === "feedback" ? "bg-gray-200" : ""}`}
                            onClick={() => setCurrentSection("feedback")}
                        >
                            <FaCommentDots className="text-lg mr-3 text-gray-500" />
                            {sidebarOpen && <span>Feedback</span>}
                        </li>
                    </ul>
                </nav>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-x-hidden">
                <AnimatePresence mode="wait">
                    {currentSection === "home" && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="text-3xl font-semibold mb-2 text-gray-700">Welcome</h1>
                            <p className="text-gray-500 mb-4">Your feedback is essential to helping us improve!</p>
                            {/* Feedback Input */}
                            <input
                                type="text"
                                placeholder="Give us feedback..."
                                className="w-full p-3 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={homeInput}
                                onChange={(e) => setHomeInput(e.target.value)}
                                onKeyDown={handleHomeSubmit}
                            />
                            {/* Bug Report & Suggestion Boxes */}
                            <div className="flex flex-wrap gap-4">
                                <div className="flex flex-col items-center justify-center w-32 h-32 bg-red-100 border border-red-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <FaBug className="text-red-600 text-3xl mb-2" />
                                    <p className="text-sm text-gray-600">Report a Problem</p>
                                </div>
                                <div className="flex flex-col items-center justify-center w-32 h-32 bg-yellow-100 border border-yellow-300 rounded-md shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200">
                                    <FaLightbulb className="text-yellow-600 text-3xl mb-2" />
                                    <p className="text-sm text-gray-600">Suggest a Feature</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                    {currentSection === "feedback" && (
                        <motion.div
                            key="feedback"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="text-3xl font-semibold mb-2 text-gray-700">Feedback Form</h1>
                            <p className="text-gray-500 mb-4">Tell us more about your feedback.</p>
                            {/* Feedback Form */}
                            <input
                                type="text"
                                placeholder="Summarize your feedback"
                                className="w-full p-3 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={feedbackInput}
                                onChange={(e) => setFeedbackInput(e.target.value)}
                            />
                            <textarea
                                placeholder="Explain in more detail"
                                className="w-full p-3 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                                onClick={() => {
                                    window.location.href = `mailto:saxenapoorva2004@gmail.com?subject=${encodeURIComponent(`Feedback: ${feedbackInput}`)}`;
                                }}
                            >
                                Submit Feedback
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default Feedback;

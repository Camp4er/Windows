import Image from "next/image";
import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Error from "next/error";


const ContactPanel: React.FC = () => {
  //for emailJS
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailStatus("sending"); // Set status to sending
    setErrorMessage(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );

      if (response.status === 200) {
        console.log("Email sent successfully!", response);
        setEmailStatus("success"); // Set status to success
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Failed to send email, status code:", response.status);
        setEmailStatus("error"); // Set status to error
        setErrorMessage(
          `Failed to send email. Status code: ${response.status}`
        );
      }
    } catch (error: Error | any) {
      console.error("Error sending email:", error);
      setEmailStatus("error"); // Set status to error
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  //A new object that contain dynamic template process
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Poorva Saxena",
    message: message,
  };

  return (
    <div className="left-0 h-full w-[600px] shadow-md transform transition-transform translate-x-0 p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-white font-serif">
        Reach out to me
      </h2>
      <p className="text-white text-xl mb-8">
        Please provide your details in the form below, and I&apos;ll respond
        promptly.
      </p>

      <div className="flex flex-col gap-3 align-center justify-center">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1 flex-start align-center">
            <div className="flex flex-row gap-1">
              <input
                type="text"
                placeholder="Your name"
                className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={emailStatus === "sending"} // Disable during sending
              />
              <input
                type="email"
                placeholder="Your email address"
                className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={emailStatus === "sending"} // Disable during sending
              />
            </div>

            <textarea
              placeholder="Your message for me"
              className="text-white w-full p-3 rounded-md border bg-slate-950 border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={emailStatus === "sending"} // Disable during sending
            />
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold mt-1 p-3 rounded-md disabled:opacity-50"
              disabled={emailStatus === "sending"} // Disable during sending
            >
              {emailStatus === "sending" ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {/* Email Status Message */}
        {emailStatus === "success" && (
          <div className="text-green-500 mt-2">Email sent successfully!</div>
        )}
        {emailStatus === "error" && (
          <div className="text-red-500 mt-2">{errorMessage}</div>
        )}

        {/* Social Links */}
        <div className="space-y-4 flex flex-col gap-1 flex-end align-center justify-center">
          <div className="flex flex-row gap-3">
            <a
              href="https://www.linkedin.com/in/poorva-saxena-983642256/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
            >
              <FaLinkedin size={24} className="text-blue-400" />
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
            </a>
          </div>
          <div className="flex flex-row gap-3">
            <a
              href="https://X.com/Camp4er"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
            >
              <Image src={"/icons/x.png"} alt="X icon" width={24} height={24} />
              <span className="text-white">X</span>
            </a>
            <a
              href="mailto:saxenapoorva2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full gap-3 p-3 bg-slate-950 border rounded-md shadow hover:bg-slate-900"
            >
              <Image
                src="/icons/gmail.png"
                alt="gmail icon"
                width={24}
                height={24}
              />
              <span className="text-white">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;

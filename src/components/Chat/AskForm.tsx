import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const AskForms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_pm72toq",       // ✅ Your Service ID
        "template_qn7os8v",      // ✅ Your Template ID
        formRef.current,
        "l7kpanH9fDSJ3ohco"      // ✅ Your User ID (Public Key)
      )
      .then(
        () => {
          alert("Your request has been submitted successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-[#1a0179] text-center mb-4">
          Ask a Question
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name" // Required by EmailJS
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#1a0179] focus:ring-2 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email" // Required by EmailJS
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#1a0179] focus:ring-2 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              name="message" // Required by EmailJS
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#1a0179] focus:ring-2 outline-none"
              placeholder="Type your message here..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#1a0179] rounded-full hover:bg-opacity-90 transition"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskForms;
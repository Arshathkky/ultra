import React, { useState } from "react";
import { sampleImages } from "../data/sampleImages"; // Replace with your image path

const AskForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert("Your request has been submitted!");
    
    // Clear input fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 grid grid-cols-1 md:grid-cols-2">
      {/* Left Image */}
      <div className="w-full h-64 md:h-full">
        <img
          src={sampleImages.OrderImages} // Replace with your desired image
          alt="Ask"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="w-full h-auto md:h-full bg-white p-4 md:p-0 flex items-center justify-center">
        <div className="w-full max-w-lg p-6">
          <h2 className="text-3xl font-semibold text-[#1a0179] text-center mb-6">
            Ask a Question
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a0179]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a0179]"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a0179]"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-white bg-[#1a0179] rounded-full hover:bg-[#1a0179] transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskForm;

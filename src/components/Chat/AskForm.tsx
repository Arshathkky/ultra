import React, { useState } from "react";

const AskForms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    console.log({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full max-w-4xl  h-full bg-white mx-4 px-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-[#1a0179] text-center mb-4">
        Ask a Question
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
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
  );
};

export default AskForms;

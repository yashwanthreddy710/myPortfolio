import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
        const res = await fetch("https://myportfolio-ocjj.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setStatus("Message Sent Successfully!");
      } else {
        setStatus("Something went wrong. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section id="contact" className="min-h-screen text-white pt-28 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-400 lg:text-4xl">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 space-y-6 text-white">

  <h2 className="text-xl font-bold text-purple-600">Open to Opportunities...</h2>
<p className="text-gray-300">
  I'm actively looking for full-time software development roles where I can contribute, learn, and grow. 
  If you're hiring or have a collaboration in mind, feel free to reach out through the form or my contact details below.
</p>


  <div className="space-y-4">
    <div className="flex items-center gap-3 w-fit border p-2 rounded-lg ">
      <FaEnvelope className="text-blue-500 text-xl" />
      <span className="text-gray-300 ">yeshwanthreddy216@gmail.com</span>
    </div>
    <div className="flex items-center gap-3 w-fit border p-2 rounded-lg">
      <FaPhone className="text-green-400 text-xl" />
      <span className="text-gray-300">+91-7702853467</span>
    </div>
  </div>

  <div className="flex gap-5 pt-4">
    <a
      href="https://www.linkedin.com/in/yash-reddy-/"
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-blue-400 transition text-2xl"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/yashwanthreddy710"
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-purple-400 transition text-2xl"
    >
      <FaGithub />
    </a>
  </div>
</div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Your Email"
              required
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Enter Your Subject"
              required
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              required
              className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 h-32 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded transition"
          >
            Submit
          </button>
          {status && <p className="mt-3 text-sm text-purple-300">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
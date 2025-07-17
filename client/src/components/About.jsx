import React from "react";
import profileImg from "../assets/myPic.png";
import { FaMapMarkerAlt, FaLightbulb, FaBullseye } from "react-icons/fa";

const About = () => {
  const goToCertifications = () => {
    const section = document.getElementById("certifications");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 text-white"
    >
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="relative rounded-full border-4 border-purple-500 p-1 shadow-lg hidden md:block">
          <img
            src={profileImg}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-purple-400 lg:text-4xl">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm a Full Stack Developer with hands-on training from GUVI (an HCL Group company),
          where I gained practical experience in building scalable web applications using
          MongoDB, Express.js, React.js, and Node.js.
          <br />
          I believe in clean code, efficient solutions, and intuitive UI/UX.
          My journey is backed by real-world projects and a strong foundation in both
          frontend and backend development.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-400" />
            <p>Bachelor's Degree in Electrical Engineering from CBIT (Autonomous).</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLightbulb className="text-yellow-400" />
            <p>
              Passionate about solving problems, painting, and exploring the internet
              for learning and innovation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaBullseye className="text-red-500" />
            <p>
              Completed Full Stack MERN training at GUVI and certified by IIT-M Pravartak.
            </p>
          </div>
        </div>

        <button
          onClick={goToCertifications}
          className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-lg text-white"
        >
          View Certifications
        </button>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import profileImg from "../assets/yash pic.jpg";

const Home = () => {
  return (
    <section id="home" className=" flex flex-col md:flex-row items-center justify-between px-6 md:px-32 pt-50 text-white ">
      <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Hello, I'm{" "}
          <span className="text-purple-400">Yashwanth Reddy</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-300 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Aspiring Full Stack Developer passionate about building responsive,
          user-friendly web applications using the MERN stack. Eager to work in
          innovative environments that challenge my creativity and technical
          skills.
        </p>

        <a
          href="#skills"
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
        >
          My Skills
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 xl:pr-30">
        <div className="relative rounded-full border-4 border-purple-500 p-1 shadow-lg ">
          <img
            src={profileImg}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

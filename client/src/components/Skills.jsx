import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git/GitHub'
  ];

  const skillDescriptions = [
    {
      title: 'Proficient in MERN Stack (MongoDB, Express, React, Node.js)',
      description:
        'Built full-stack web applications integrating frontend and backend seamlessly. Delivered scalable user interfaces using React and backend services with Express and Node.js.',
    },
    {
      title: 'Advanced Frontend Development with React & Tailwind CSS',
      description:
        'Designed responsive UIs with reusable components. Used React Router for navigation and Tailwind CSS for fast, consistent styling across screens.',
    },
    {
      title: 'Robust Backend Development with Node.js & Express.js',
      description:
        'Created REST APIs, structured code into controllers, and added middleware for secure authentication and error handling using JWT and bcrypt.',
    },
    {
      title: 'Database Design & Integration with MongoDB & Mongoose',
      description:
        'Modeled NoSQL data, performed CRUD operations, and implemented schema validation using Mongoose. Used MongoDB Atlas for secure cloud-hosted databases.',
    },
    {
      title: 'Version Control & Collaboration Using Git & GitHub',
      description:
        'Applied Git best practices such as branching, commit hygiene, and pull requests. Collaborated on multiple projects via GitHub.',
    },
    {
      title: 'Deployment & Environment Setup (Netlify, Render, ENV Files)',
      description:
        'Deployed frontend to Netlify and backend to Render. Configured `.env` files and handled CORS, ensuring secure and scalable production deployment.',
    },
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-20 pb-16 flex flex-col items-center text-white ">
      <h2 className="text-3xl font-semibold mb-8 text-purple-400 lg:text-4xl">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 py-3 px-5 rounded-md text-center shadow hover:bg-purple-700 hover:scale-105 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>

      <div className="max-w-5xl w-full space-y-6 px-2 sm:px-4">
        {skillDescriptions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-purple-400 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-purple-300 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

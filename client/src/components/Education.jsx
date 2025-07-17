import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Electronics and Electronics Engineering',
      institution: 'Chaitanya Bharathi Institute of Technology(Autonomous)',
      year: '2022',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College',
      year: '2017',
    },
    {
      degree: 'S.S.C',
      institution: 'Sri Satya Sai Vidya Vihar High School',
      year: '2015',
    },
  ];

  return (
    <div className="min-h-screen px-4 md:px-8 pt-20 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-8 text-purple-400 text-center lg:text-4xl">Education</h2>
      <div className="space-y-6 w-full max-w-2xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
            <p className="text-gray-300">{edu.institution}</p>
            <p className="text-gray-400 text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

import React from 'react';

const Certifications = () => {
  const certs = [
    {
      title: 'Full Stack Web Development Certification',
      organization: 'GUVI Institute',
      link: 'https://drive.google.com/file/d/1kt22MTWxIji7WcYEDQ3Em_wDFrAof_iQ/view?usp=drivesdk',
    },
    {
      title: 'Advanced Javascript Certification',
      organization: 'GUVI Institute',
      link: 'https://drive.google.com/file/d/1l8q8aTxzjshVWCkrJU5rSfw4fMcoY-AJ/view?usp=drivesdk',
    },
    {
      title: 'HTML,CSS,Tailwind CSS Certification',
      organization: 'GUVI Institute',
      link: 'https://drive.google.com/file/d/1l2K8ycbeW21nZKt18sxZxmwOv7r0cj8W/view?usp=drivesdk',
    },
  ];

  return (
    <div
      id="certifications"
      className="min-h-[80vh] px-4 sm:px-6 pt-20 flex flex-col items-center"
    >
      <h2 className="text-3xl font-semibold mb-6 text-purple-400 lg:text-4xl">Certifications</h2>
      <div className="space-y-6 w-full max-w-3xl mx-auto">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-bold">{cert.title}</h3>
            <p className="text-gray-300">{cert.organization}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline block mt-2"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

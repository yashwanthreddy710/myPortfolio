import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Builder',
      description: 'A full-stack MERN application that allows users to create, customize, and share personal portfolios with dynamic sections like skills, projects, and custom content. Users can upload images and manage data securely with JWT-based authentication.',
      liveLink: 'https://glistening-semifreddo-1b8611.netlify.app/',
      repoLink: 'https://github.com/yashwanthreddy710/portfolioBuilder.git',
    },
    {
      title: 'Music Streaming App',
      description: 'Developed a full-stack music streaming platform allowing users to register/login, browse songs by genre, search and filter songs, play audio tracks, and manage favorites and downloads. Integrated dynamic audio playback with a user friendly interface and ensured secure authentication and state management.',
      liveLink: 'https://admirable-cassata-24e9e2.netlify.app/',
      repoLink: 'https://github.com/yashwanthreddy710/Music_App.git',
    },
    {
      title: 'Daily Journal App',
      description: 'A personal journaling web application that allows users to securely write their thoughts, moods, and tags with specific dates and times. It supports user authentication, advanced search and filtering by mood, tag, and date, and a fully responsive, modern UI optimized for all devices.',
      liveLink: 'https://rainbow-cajeta-99bb26.netlify.app/',
      repoLink: 'https://github.com/yashwanthreddy710/dailyJournal.git',
    },
    {
      title: 'Movie Search App',
      description: 'Developed a fully functional movie search application that enables users to search for movies using the OMDB API, view detailed information for each movie, apply filters by genre (movies or series), and manage their favorite movies list. The app uses React Router for seamless routing and uses Tailwind CSS to achieve a responsive, modern, and visually appealing design.',
      liveLink: 'https://loquacious-platypus-7b9aa8.netlify.app/',
      repoLink: 'https://github.com/yashwanthreddy710/Movie-Search-App.git',
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-6 pt-20 flex flex-col items-center ">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-400 lg:text-4xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-5 rounded-lg shadow hover:shadow-purple-400 transition duration-300 hover:scale-105 block relative"
          >
            <h3 className="text-lg sm:text-xl text-purple-400 font-bold mb-2 underline">{project.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-10">{project.description}</p>

            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 outline bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md transition"
              onClick={(e) => e.stopPropagation()}
            >
              Source Code
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;

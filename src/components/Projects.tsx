import React, { useState } from 'react';

const projects = [
  {
    title: 'Khana Khazana',
    description: 'A recipe search app that contains the nutritional value of ingredients in any recipe.',
    image: 'https://img.reintech.io/variants/z9hhw71iyzgbcx78p33ojs2wbb36/3f0c9f12ddc5138b80eee8ca29a3fbea5cd81e79050a059d8d9f8ee1585da977',
    tags: ['React', 'Node.js', 'TailwindCSS', 'Edamam API'],
    githubLink: 'https://github.com/avantika2195/Khana-Khazana',
    liveDemoLink: 'https://khana-khazana-demo.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    tags: ['TypeScript', 'Angular', 'CSS'],
    githubLink: 'https://github.com/avantika2195/Task-Manager',
    liveDemoLink: 'https://task-manager-srivastavaavantika465-gmailcoms-projects.vercel.app/login',
  },
  {
    title: 'Portfolio Website',
    description: 'A beautiful portfolio website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS'],
    githubLink: 'https://github.com/avantika2195/Portfolio-Website',
    liveDemoLink: 'https://portfolio-website-yd2e.vercel.app/',
  },
  {
    title: 'Companion - A blog website',
    description: 'A UI blogging website to share your thoughts on.',
    image: 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png',
    tags: ['JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/avantika2195/Companion-a-blog-web',
    liveDemoLink: 'https://companion-blog-demo.com',
  },
  {
    title: 'FoodCourt',
    description: 'A real-time UI for a food delivery app to deliver food at your location.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJcnjXcE7lSSS3J9L7V-uA6kK1gGywjoNTw&s',
    tags: ['Tailwind', 'React'],
    githubLink: 'https://github.com/avantika2195/FoodCourt',
    liveDemoLink: 'https://foodcourt-demo.com',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + projects.length) % projects.length);
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            aria-label="Previous projects"
            className="text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            &larr;
          </button>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {visibleProjects.map((project) => (
              <div key={project.title} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View on GitHub
                    </a>
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next projects"
            className="text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}


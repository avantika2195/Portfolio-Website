import { Code, Palette, Zap, Database, Layout, Server } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Frontend Developer',
  'UI Designer',
  'MEAN Stack Developer'
];

const skills = [
  { 
    icon: Code,
    title: 'Frontend Development',
    description: 'Expert in React, Angular, TypeScript, and modern web frameworks'
  },
  { 
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating pixel-perfect, responsive designs with modern design tools'
  },
  { 
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust APIs with Node.js, Express, and MongoDB'
  },
  { 
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful interfaces with Tailwind CSS and modern design systems'
  },
  { 
    icon: Server,
    title: 'Full Stack',
    description: 'End-to-end development from database to deployment'
  },
  { 
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and scalability'
  }
];

export default function About() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-6 h-20 flex items-center justify-center">
            {roles.map((role, index) => (
              <h2
                key={role}
                className={`absolute text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent transition-all duration-500 transform ${
                  index === currentRoleIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {role}
              </h2>
            ))}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences with cutting-edge technologies.
            Specializing in modern web development and scalable applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-purple-600 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
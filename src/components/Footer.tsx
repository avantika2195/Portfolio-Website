import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Avantika Srivastava
            </h3>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/avantika2195" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/avantika-srivastava-23a34a221/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:srivastavaavantika465@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Avantika Srivastava. </p>
        </div>
      </div>
    </footer>
  );
}
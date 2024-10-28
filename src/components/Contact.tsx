import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-600 dark:text-gray-300">srivastavaavantika465@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-600 dark:text-gray-300">+91 9044571722</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span className="text-gray-600 dark:text-gray-300">Delhi,India</span>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
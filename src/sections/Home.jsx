import { motion } from "framer-motion";
import backgroundImage from '../assets/background-image.jpg';

function Home() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Image me hijezim */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Blur effect */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - do të jetë mbi background */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="bg-blue-600/20 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
            ✨ Open for opportunities in Germany
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
        >
          Hello, I'm Adrian
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl md:text-3xl text-blue-100 mb-6"
        >
          Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Passionate about building modern web applications with React, Tailwind CSS, and clean code.
          Based in Kosovo, targeting the German tech market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
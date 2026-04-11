import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { 
      number: "7", 
      label: "Finished Projects",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-500">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" />
        </svg>
      )
    },
    { 
      number: "5", 
      label: "Awards Won",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-500">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
          <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
          <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
        </svg>
      )
    },
    { 
      number: "2", 
      label: "Happy Clients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-green-500">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
          <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
        </svg>
      )
    },
    { 
      number: "99+", 
      label: "Bugs Fixed",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3 transition-all duration-300 group-hover:scale-110 group-hover:text-red-500">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
          <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
          <path d="M3 13h4" />
          <path d="M17 13h4" />
          <path d="M12 20v-6" />
          <path d="M4 19l3.35 -2" />
          <path d="M4 7l3.75 2.4" />
          <path d="M20 7l-3.75 2.4" />
          <path d="M3 3l18 18" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          className="bg-white rounded-2xl shadow-lg py-12 px-6 hover:shadow-2xl transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="space-y-2 group cursor-pointer"
              >
                {stat.icon}
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-4xl md:text-5xl font-bold text-blue-600 transition-all duration-300"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 text-sm md:text-base transition-all duration-300 group-hover:text-gray-800">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;
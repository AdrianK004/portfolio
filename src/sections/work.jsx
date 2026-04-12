import { motion } from "framer-motion";

function Work() {
  const experiences = [
    {
      company: "VISITSUHAREKA.COM",
      period: "Apr 2019 - Jun 2020",
      role: "FRONT-END DEVELOPER",
      description: "Led frontend development for an informational city website, focusing on clean design and user experience. Also contributed to deployment and infrastructure setup, including OVH hosting, domain configuration, and Cloudflare security.",
    },
    {
      company: "MULTI-TECHNIK.CH",
      period: "Mar 2021 - Sep 2022",
      role: "FULL-STACK DEVELOPER",
      description: "Delivered a production-ready web application for a Swiss company, handling both frontend and backend development. Managed deployment on OVH, domain configuration, and enhanced security through Cloudflare anti-DDoS protection, ensuring reliability and performance.",
    },
    {
      company: "FREELANCER",
      period: "Oct 2022 - Present",
      role: "SOFTWARE DEVELOPERK",
      description: "Providing freelance software development services for multiple clients and companies, delivering tailored solutions from concept to deployment. Skilled in building scalable and efficient applications while maintaining strong communication and a client-focused approach.",
    },
  ];

  return (
    <section id="work" className="bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className='border-t-4 mx-0 sm:mx-4 md:mx-20 rounded-full border-blue-800'></div>
        {/* Titulli */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 mt-8">
            MY WORK EXPERIENCE
          </h2>
        </motion.div>

        {/* Lista e eksperiencave */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-white pb-6 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">
                  {exp.company}
                </h3>
                <span className="text-gray-200 font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-blue-600 font-semibold mb-3">
                {exp.role}
              </p>
              <p className="text-gray-200 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
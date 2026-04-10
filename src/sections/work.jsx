import { motion } from "framer-motion";

function Work() {
  const experiences = [
    {
      company: "Work",
      period: "Apr 2015 - Mar 2018",
      role: "FULL-STACK",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
    },
    {
      company: "Work",
      period: "Mar 2018 - Sep 2019",
      role: "SOFTWARE ENGINEER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
    },
    {
      company: "Work",
      period: "Oct 2019 - Feb 2021",
      role: "DEVOPS ENGINEER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis felis vitae risus pulvinar tincidunt. Nam ac venenatis enim.",
    },
  ];

  return (
    <section id="work" className="bg-gray-900">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
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
          <p className="text-gray-200 text-lg">
            Here's what I did before freelancing
          </p>
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
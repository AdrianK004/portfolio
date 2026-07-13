import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const experiences = [
  {
    company: "Freelancer",
    period: "Oct 2022 - Present",
    role: "Software Developer",
    description:
      "Providing freelance software development for multiple clients and companies, delivering tailored solutions from concept to deployment. Skilled in building scalable, efficient applications while maintaining strong communication and a client-focused approach.",
    current: true,
  },
  {
    company: "Multi-Technik.ch",
    period: "Mar 2021 - Sep 2022",
    role: "Full-Stack Developer",
    description:
      "Delivered a production-ready web application for a Swiss company, handling both frontend and backend. Managed deployment on OVH, domain configuration, and enhanced security with Cloudflare anti-DDoS protection for reliability and performance.",
  },
  {
    company: "VisitSuhareka.com",
    period: "Apr 2019 - Jun 2020",
    role: "Front-End Developer",
    description:
      "Led frontend development for an informational city website, focusing on clean design and user experience. Also contributed to deployment and infrastructure — OVH hosting, domain configuration and Cloudflare security.",
  },
];

function Work() {
  return (
    <section id="work" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="Work"
          highlight="Experience"
          subtitle="My professional journey building software for real clients and companies."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-brand-400/60 via-white/10 to-transparent md:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-10 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-12"
                    : "md:mr-auto md:pr-12 md:text-right"
                }`}
              >
                {/* Dot */}
                <span
                  className={`absolute left-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full ring-4 ring-ink-900 ${
                    index % 2 === 0
                      ? "bg-brand-400 md:-left-1.5"
                      : "bg-brand-400 md:left-auto md:-right-1.5"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  )}
                </span>

                <div className="rounded-2xl border border-white/10 bg-ink-850/60 p-6 shadow-card backdrop-blur transition-colors hover:border-brand-400/40">
                  <div className={`flex flex-wrap items-center gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                    <span className="rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-3 text-xl font-bold text-white">
                    {exp.company}
                  </h3>
                  <p className="mt-1 font-medium text-brand-400">{exp.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;

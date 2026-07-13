import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const journeyData = [
  {
    period: "2021 - 2025",
    title: "Studies",
    school: "University of Prizren 'Ukshin Hoti'",
    description:
      "Studied Computer Science and committed to a professional career in technology. Achieved a GPA of 9.0 and was awarded four scholarships from the state and the faculty, while developing various projects along the way.",
    location: "Prizren, Kosovo",
    highlight: "GPA 9.0 · 4 Scholarships",
  },
  {
    period: "2018 - 2021",
    title: "High School",
    school: "Gymnasium 'Jeta e Re'",
    description:
      "Focused on science and strengthened my passion for technology as an excellent student. A key achievement was contributing to the development of visitsuhareka.com, built to promote our city.",
    location: "Suharekë, Kosovo",
    highlight: "Science track",
  },
  {
    period: "2008 - 2018",
    title: "Primary School",
    school: "SH.F.M.U 'Gj.K - Skenderbeu'",
    description:
      "A foundational period where I took my first steps in education and personal development — and where my passion for computers first began. Completed with excellent academic results.",
    location: "Sallagrazhdë, Kosovo",
    highlight: "Where it started",
  },
];

const CapIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
  </svg>
);

const PinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
  </svg>
);

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Background"
          title="My"
          highlight="Journey"
          subtitle="The education and milestones that shaped my path into technology."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {journeyData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60 p-6 shadow-card backdrop-blur transition-colors hover:border-brand-400/40"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 text-white">
                  {CapIcon}
                </div>
                <span className="text-sm font-semibold text-brand-400">{item.period}</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 font-medium text-slate-200">{item.school}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                {PinIcon} {item.location}
              </p>

              <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-300">
                {item.highlight}
              </span>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;

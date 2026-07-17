import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import projects from "../data/projects";
import AuroraBackground from "../components/AuroraBackground";

const LiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <path d="M10 14l10 -10" /><path d="M15 4l5 0l0 5" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

/* Stylized in-browser mockup used as the featured preview (RebuildIT dashboard). */
function BrowserMock({ accent }) {
  const bars = [45, 70, 55, 85, 60, 95, 75, 50, 80];
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-950 shadow-card">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-800/80 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">
          rebuild-it.netlify.app
        </span>
      </div>
      {/* Body */}
      <div className="flex gap-3 p-4">
        {/* Sidebar */}
        <div className="hidden w-24 flex-col gap-2 sm:flex">
          {["Dashboard", "Clients", "Jobs", "Invoices", "Reports"].map((it, i) => (
            <div
              key={it}
              className={`rounded-md px-2 py-1.5 text-[9px] font-medium ${
                i === 0 ? `bg-gradient-to-r ${accent} text-white` : "text-slate-400"
              }`}
            >
              {it}
            </div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              { k: "Active", v: "7" },
              { k: "Revenue", v: "€9.5k" },
              { k: "Unpaid", v: "€5.6k" },
            ].map((c) => (
              <div key={c.k} className="rounded-lg border border-white/10 bg-white/5 p-2">
                <div className="text-[8px] text-slate-400">{c.k}</div>
                <div className="text-sm font-bold text-white">{c.v}</div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="mb-2 text-[8px] text-slate-400">Monthly revenue</div>
            <div className="flex h-20 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`flex-1 rounded-t bg-gradient-to-t ${accent}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBadge({ label }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
      {label}
    </span>
  );
}

function ProjectLinks({ live, github }) {
  return (
    <div className="flex flex-wrap gap-3">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          <LiveIcon /> Live Demo
        </a>
      )}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
      >
        <GithubIcon /> Code
      </a>
    </div>
  );
}

function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-28">
      <AuroraBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          subtitle="A selection of things I've designed and built — from full-stack platforms to production websites."
        />

        {/* Featured project */}
        {featured.map((p) => (
          <Reveal key={p.title} className="mb-12">
            <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-ink-850 p-6 shadow-card md:p-8 lg:grid-cols-2 lg:gap-12">
              {/* Preview */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <BrowserMock accent={p.accent} />
              </motion.div>

              {/* Details */}
              <div>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-brand-400/70" />
                  Featured Project
                </span>
                <h3 className="font-display mt-3 text-3xl font-bold text-white">
                  {p.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-brand-400">
                  {p.tagline}
                </p>
                <p className="mt-4 leading-relaxed text-slate-300">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckIcon /> {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>

                <div className="mt-7">
                  <ProjectLinks live={p.live} github={p.github} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}

        {/* Other projects grid */}
        {others.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-850 p-6 shadow-card transition-colors hover:border-brand-400/40"
                >
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M3.6 9h16.8" /><path d="M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-400">{p.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <TechBadge key={t} label={t} />
                    ))}
                  </div>
                  <div className="mt-5">
                    <ProjectLinks live={p.live} github={p.github} />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

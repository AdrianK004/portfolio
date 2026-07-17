import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal";
import cvFile from "../assets/AdrianKrasniqiCV.pdf";

const proficiency = [
  { name: "Full-Stack Development", percent: 85 },
  { name: "Java", percent: 70 },
  { name: "Object-Oriented Programming", percent: 65 },
  { name: "Python", percent: 45 },
  { name: "C++ / C#", percent: 35 },
];

const quickFacts = [
  { label: "Location", value: "Suharekë, Kosovo" },
  { label: "Experience", value: "4+ Years" },
  { label: "Degree", value: "BSc Software Design" },
  { label: "Availability", value: "Open to work" },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/adrian-krasniqi-170511400/",
    hover: "hover:text-sky-400",
    path: (
      <>
        <path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" />
        <path d="M16 16v-3a2 2 0 1 0 -4 0" />
        <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" />
      </>
    ),
  },
  {
    href: "https://github.com/AdrianK004",
    hover: "hover:text-white",
    path: (
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    ),
  },
  {
    href: "https://wa.me/38349427652",
    hover: "hover:text-green-400",
    path: (
      <>
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </>
    ),
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimated(true);
        });
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div>
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-brand-400/70" />
                Who am I
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-4 text-3xl font-bold text-white sm:text-4xl">
                A <span className="text-gradient">Software Developer</span> who loves building things
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-slate-300">
                Motivated software developer with a bachelor's degree in software
                design. Passionate about computers and technology since a young age,
                with hands-on experience in full-stack development, programming and
                databases. I'm especially interested in building modern web
                applications and solving technical problems efficiently.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 leading-relaxed text-slate-300">
                My goal is to keep growing in a professional IT environment and
                contribute to innovative software projects that make a real impact.
              </p>
            </Reveal>

            {/* Quick facts */}
            <Reveal delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {quickFacts.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      {f.label}
                    </div>
                    <div className="mt-1 font-semibold text-white">{f.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={cvFile}
                  download="AdrianKrasniqiCV.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                    <path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                  </svg>
                  Download CV
                </a>
                <div className="flex items-center gap-4">
                  {socials.map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className={`text-slate-400 transition-colors ${s.hover}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        {s.path}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: proficiency bars */}
          <Reveal delay={0.1} direction="left">
            <div className="rounded-3xl border border-white/10 bg-ink-850 p-8 shadow-card">
              <h3 className="font-display mb-6 text-xl font-bold text-white">
                Technical Proficiency
              </h3>
              <div className="space-y-5">
                {proficiency.map((skill, idx) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-semibold text-brand-400">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-400 transition-[width] duration-1000 ease-out"
                        style={{
                          width: animated ? `${skill.percent}%` : "0%",
                          transitionDelay: `${idx * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;

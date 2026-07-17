import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import backgroundImage from "../assets/background-image.jpg";
import profilePhoto from "../assets/AdrianKrasniqi.webp";
import cvFile from "../assets/AdrianKrasniqiCV.pdf";

const roles = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Problem Solver",
  "Clean Code Advocate",
];

const socials = [
  {
    label: "LinkedIn",
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
    label: "GitHub",
    href: "https://github.com/AdrianK004",
    hover: "hover:text-white",
    path: (
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    ),
  },
  {
    label: "WhatsApp",
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

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background image, heavily blended into the dark theme */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/70 to-ink-950" />
      </div>

      {/* Aurora glow */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <div className="aurora-blob animate-aurora absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-brand-600/30 blur-[100px]" />
        <div className="aurora-blob animate-aurora animation-delay-2000 absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto md:mx-0"
        >
          <div className="relative">
            <div className="absolute -inset-3 animate-pulse rounded-full bg-gradient-to-tr from-brand-600 to-sky-400 opacity-30 blur-xl" />
            <div className="animate-float relative h-40 w-40 overflow-hidden rounded-full border-2 border-white/20 shadow-glow md:h-56 md:w-56">
              <img
                src={profilePhoto}
                alt="Adrian Krasniqi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to work — Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi, I'm <span className="text-gradient-animated">Adrian Krasniqi</span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 flex items-baseline justify-center gap-x-2 whitespace-nowrap text-xl font-semibold text-slate-200 sm:text-2xl md:justify-start"
          >
            <span className="text-slate-400">I'm a</span>
            <span className="inline-block min-w-[15ch] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block whitespace-nowrap text-gradient"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:mx-0"
          >
            I build modern, scalable web applications end-to-end — turning ideas
            into clean, reliable products. Passionate about great UX, performance
            and writing code that lasts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View my work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={cvFile}
              download="AdrianKrasniqiCV.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-brand-400/50 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
                <path d="M12 17v-6" /><path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
              </svg>
              Download CV
            </a>

            <div className="flex items-center gap-3 md:ml-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-slate-300 transition-colors ${s.hover}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400 transition-colors hover:text-white"
      >
        <svg className="animate-bounce-slow h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}

export default Home;

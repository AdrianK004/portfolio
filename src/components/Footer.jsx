import { motion } from "framer-motion";

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
    label: "Facebook",
    href: "https://www.facebook.com/adrian.krasniqi.32241/",
    hover: "hover:text-blue-400",
    path: (
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
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

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold text-white">
              A<span className="text-gradient">K</span>
            </a>
            <p className="mt-2 text-sm text-slate-400">
              © 2026 <span className="font-semibold text-slate-200">Adrian Krasniqi</span>.
              Designed & built with React. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ y: -3 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`text-slate-400 transition-colors ${s.hover}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {s.path}
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

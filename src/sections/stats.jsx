import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 7,
    suffix: "",
    label: "Finished Projects",
    color: "text-brand-400",
    icon: (
      <path d="M3 17l9 5l9 -5v-3l-9 5l-9 -5v-3l9 5l9 -5v-3l-9 5l-9 -5l9 -5l5.418 3.01" />
    ),
  },
  {
    value: 5,
    suffix: "",
    label: "Awards Won",
    color: "text-yellow-400",
    icon: (
      <>
        <path d="M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
        <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
        <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
      </>
    ),
  },
  {
    value: 4,
    suffix: "+",
    label: "Years Coding",
    color: "text-emerald-400",
    icon: (
      <>
        <path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" />
      </>
    ),
  },
  {
    value: 99,
    suffix: "+",
    label: "Bugs Fixed",
    color: "text-red-400",
    icon: (
      <>
        <path d="M9.884 5.873a3 3 0 0 1 5.116 2.127v1" />
        <path d="M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705a5 5 0 0 1 -9.702 -1.705v-3a6 6 0 0 1 1 -3h1" />
        <path d="M3 13h4" /><path d="M17 13h4" /><path d="M12 20v-6" />
        <path d="M4 19l3.35 -2" /><path d="M4 7l3.75 2.4" /><path d="M20 7l-3.75 2.4" />
      </>
    ),
  },
];

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <section id="stats" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-850/80 to-ink-800/60 p-10 shadow-glow"
        >
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`mx-auto mb-3 ${stat.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {stat.icon}
                </svg>
                <h3 className="font-display text-4xl font-bold text-white md:text-5xl">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Stats;

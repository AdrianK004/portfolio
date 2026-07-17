import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const interests = [
  {
    label: "Travel",
    icon: <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727 M3 21h18" />,
  },
  {
    label: "Gaming",
    icon: (
      <>
        <path d="M9 12l-3 -3h-2a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h2l3 -3" />
        <path d="M15 12l3 -3h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2l-3 -3" />
        <path d="M12 15l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1 -1v-2l-3 -3" />
        <path d="M12 9l-3 -3v-2a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v2l-3 3" />
      </>
    ),
  },
  {
    label: "Photography",
    icon: (
      <>
        <path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><path d="M4 16v2a2 2 0 0 0 2 2h2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v2" /><path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      </>
    ),
  },
  {
    label: "Hardware Fixes",
    icon: (
      <>
        <path d="M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12" />
        <path d="M8 10v-2h2m6 6v2h-2m-4 0h-2v-2m8 -4v-2h-2" />
        <path d="M3 10h2" /><path d="M3 14h2" /><path d="M10 3v2" /><path d="M14 3v2" />
        <path d="M21 10h-2" /><path d="M21 14h-2" /><path d="M14 21v-2" /><path d="M10 21v-2" />
      </>
    ),
  },
  {
    label: "Video Editing",
    icon: (
      <>
        <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
        <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
      </>
    ),
  },
  {
    label: "Fitness",
    icon: (
      <>
        <path d="M2 12h1" /><path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
        <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
        <path d="M9 12h6" />
        <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1" />
        <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" /><path d="M22 12h-1" />
      </>
    ),
  },
];

function Blog() {
  return (
    <section id="interests" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Beyond code"
          title="I also like"
          highlight="to..."
          subtitle="A few things I enjoy when I'm away from the keyboard."
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {interests.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="group flex cursor-default flex-col items-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-ink-850 text-slate-300 shadow-card transition-all duration-300 group-hover:border-brand-400/40 group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-brand-500 group-hover:text-white md:h-24 md:w-24">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {item.icon}
                </svg>
              </div>
              <span className="mt-3 text-sm font-medium text-slate-400 transition-colors group-hover:text-brand-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

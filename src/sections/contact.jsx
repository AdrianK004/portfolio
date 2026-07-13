import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const contactCards = [
  {
    label: "Phone",
    value: "(+383) 49 427 652",
    href: "tel:+38349427652",
    color: "text-brand-400",
    icon: (
      <>
        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
      </>
    ),
  },
  {
    label: "Email",
    value: "adrian1992krasniqi@gmail.com",
    href: "mailto:adrian1992krasniqi@gmail.com",
    color: "text-emerald-400",
    icon: (
      <>
        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
        <path d="M3 7l9 6l9 -6" />
      </>
    ),
  },
  {
    label: "Location",
    value: "Hamez Fetahu 23, Suharekë 23000, Kosovo",
    href: "https://maps.google.com/?q=Suhareke,Kosovo",
    color: "text-purple-400",
    icon: (
      <>
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      </>
    ),
  },
];

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_z57maho",
        "template_k96p4el",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "qkpEhEKVrFi4Uvi0i"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400/50";

  return (
    <section id="contact" className="relative py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          highlight="together"
          subtitle="I'm a Software Developer specializing in modern applications. If you're looking for a reliable developer to build scalable, efficient solutions, let's talk."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact cards */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-850/60 p-5 shadow-card backdrop-blur transition-colors hover:border-brand-400/40"
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${c.color}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      {c.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      {c.label}
                    </div>
                    <div className="mt-1 break-words font-medium text-white transition-colors group-hover:text-brand-300">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-ink-850/60 p-6 shadow-card backdrop-blur md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className={inputClass}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                required
                className={`mt-4 resize-none ${inputClass}`}
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-8 py-3.5 font-semibold text-white shadow-glow transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {status === "success" && (
                <p className="mt-4 text-sm font-medium text-emerald-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-red-400">
                  ✕ Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;

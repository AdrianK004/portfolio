// Centralized project data — edit here to add/update portfolio projects.
const projects = [
  {
    title: "RebuildIT",
    tagline: "Business Management Platform",
    description:
      "A full-stack business management platform for tradespeople and small companies. Manage clients, jobs, materials, invoices and payments, with live dashboards, revenue analytics and role-based access — all in one place.",
    features: [
      "Real-time dashboard with revenue & job analytics",
      "Clients, jobs, materials, invoices & payments modules",
      "Authentication with roles and a live demo mode",
    ],
    tech: ["React", "Tailwind CSS", "Charts", "Auth", "REST API"],
    live: "https://rebuild-it.netlify.app",
    github: "https://github.com/AdrianK004",
    featured: true,
    accent: "from-sky-500 to-blue-600",
  },
  {
    title: "VisitSuhareka",
    tagline: "City Tourism Website",
    description:
      "An informational tourism website built to promote the city of Suharekë. Focused on clean design, fast load times and a smooth user experience, including hosting, domain configuration and Cloudflare security.",
    features: [
      "Responsive, content-driven city guide",
      "Deployed on OVH with custom domain",
      "Cloudflare security & performance layer",
    ],
    tech: ["HTML", "CSS", "JavaScript", "OVH", "Cloudflare"],
    live: "",
    github: "https://github.com/AdrianK004",
    featured: false,
    accent: "from-emerald-500 to-teal-600",
  },
];

export default projects;

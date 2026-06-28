import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import CampusConnectImg from "../assets/campus-connect.webp";
import apitest from "../assets/apitest.png";
import estate from "../assets/estate.png";
import devcollabe from "../assets/devcollab.png";

const projects = [
  {
    num: "01",
    title: "Campus Connect",
    description:
      "A centralized platform for student discovery of clubs and events, built with Next.js.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Muskan-wagh/Campus-Connect",
    demo: "https://campus-connect-seven-beta.vercel.app/",
    image: CampusConnectImg,
    featured: true,
  },
  {
    num: "02",
    title: "Estate",
    description:
      "A real estate platform for buying, selling, and renting properties.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com/Muskan-wagh/Estate-app.git",
    demo: "https://estate-app-drab.vercel.app/",
    image: estate,
    featured: true,
  },
  {
    num: "03",
    title: "Developers Collaborative Platform",
    description:
      "Built a full-stack collaboration platform where developers can connect, manage projects, share ideas, and collaborate in real time with secure authentication and scalable backend architecture.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    github: "https://github.com/Muskan-wagh/DEV_collab.git",
    demo: "https://devcollab-nu.vercel.app/",
    image: devcollabe,
    featured: false,
  },
  {
    num: "04",
    title: "API Testing Web-app",
    description:
      "A centralized platform for student discovery of clubs and events, built with Next.js.",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "REST API",
      "JavaScript",
      "Axios",
      "Framer Motion",
    ],
    github: "https://github.com/Muskan-wagh/API-Tester-webapp.git",
    demo: "https://api-tester-webapp.vercel.app/",
    image: apitest,
    featured: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="paper-block group flex flex-col h-full"
    >
      <div className="relative overflow-hidden bg-[var(--card-bg)] flex-grow">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
            aria-label={`Open ${project.title} on GitHub`}
          >
            <FaGithub size={14} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 border border-white/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white"
              aria-label={`View ${project.title} Live Demo`}
            >
              <FaArrowUpRightFromSquare size={14} />
            </a>
          )}
        </div>

        <div
          className="absolute top-4 left-4 text-[10px] tabular-nums px-2.5 py-1 border"
          style={{
            background: "var(--paper)",
            color: "var(--text-primary)",
            fontFamily: "var(--font-mono)",
            borderColor: "var(--line)",
          }}
        >
          {project.num}
        </div>
      </div>

      <div className="p-5 border-t border-[var(--line)] flex-grow flex-col">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaArrowUpRightFromSquare size={14} />
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label={`View ${project.title} Live Demo`}
              >
                <FaArrowUpRightFromSquare size={14} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-grow mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t, i) => (
            <span key={i} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-b border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">05 — Work</span>
            <h2 className="section-title">
              Selected projects
              <br />
              and experiments.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            A collection of work exploring web development, product design, and
            engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

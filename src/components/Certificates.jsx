import React from "react";
import { motion } from "framer-motion";
import certMyCaptain from "../assets/cert-mycaptain.webp";
import certPregrad from "../assets/cert-pregrad.webp";
import certSIH from "../assets/cert-sih.webp";
import certCodingBlocks from "../assets/cert-codingblocks.webp";
import certGDGFounding from "../assets/cert-gdg-founding.webp";
import certproject from "../assets/cer-project.jpeg";
import certproduct from "../assets/cert-product.png";
import cicdCertificate from "../assets/cert-CiCd.png";
import webdevCertificate from "../assets/cert-webDev.png";
const certificates = [
  {
    title: "Web Development Certificate",
    issuer: "Certificate Issuer Name",
    year: "2025",
    image: webdevCertificate,
    description:
      "Successfully completed a Web Development certification covering responsive frontend development, backend fundamentals, and modern web technologies for building full-stack applications.",
  },

  {
    title: "Founding Team Member",
    issuer: "GDG on Campus SUI Indore",
    year: "2024 — 2025",
    image: certGDGFounding,
    description:
      "Recognised as a valued Founding Team Member in the inaugural GDG on Campus chapter.",
  },
  {
    title: "Project Design and Development",
    issuer: "Sage University Indore",
    year: "2026",
    image: certproject,
    description:
      "Awarded for successfully contributing to the design, planning, and development of innovative academic projects, demonstrating problem-solving, teamwork, and technical implementation skills.",
  },
  {
    title: "Campus Ambassador",
    issuer: "MyCaptain",
    year: "2025",
    image: certMyCaptain,
    description:
      "Successfully completed the Campus Ambassador programme in Marketing.",
  },
  {
    title: "CI/CD Certificate",
    issuer: "Certificate Issuer Name",
    year: "2025",
    image: cicdCertificate,
    description:
      "Successfully completed a CI/CD certification, gaining hands-on experience in automating software build, testing, and deployment pipelines using modern DevOps practices.",
  },
  {
    title: "Smart India Hackathon",
    issuer: "SAGE University Indore",
    year: "2025",
    image: certSIH,
    description:
      "Recognised for technical creativity and teamwork at SIH 2025.",
  },
  {
    title: "Full Stack Development",
    issuer: "Coding Blocks",
    year: "2024",
    image: certCodingBlocks,
    description:
      "Summer training in full-stack engineering covering the MERN stack.",
  },
  {
    title: "Campus Representative",
    issuer: "Pregrad",
    year: "2025",
    image: certPregrad,
    description:
      "Completed the Campus Ambassador Intern programme focused on student career acceleration.",
  },
  {
    title: "Product Management Certificate",
    issuer: "Certificate Issuer Name",
    year: "2025",
    image: certproduct,
    description:
      "Completed a Product Management certification focused on product strategy, user research, roadmap planning, agile methodologies, and delivering customer-centric digital products.",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 md:py-32 border-b border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="section-label">03 — Certifications</span>
            <h2 className="section-title">
              Verified milestones
              <br />
              across communities.
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.07,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="paper-block group"
            >
              <div
                className="aspect-[16/10] overflow-hidden flex items-center justify-center p-5"
                style={{ background: "var(--card-bg)" }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5 border-t border-[var(--line)]">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="meta-line"
                    style={{ color: "var(--accent)" }}
                  >
                    {cert.issuer}
                  </span>
                  <span className="meta-line">{cert.year}</span>
                </div>
                <h3
                  className="text-3xl font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--text-primary)",
                  }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

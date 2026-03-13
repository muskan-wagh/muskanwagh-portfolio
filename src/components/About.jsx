import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "3rd", label: "Year CS Student" },
  { value: "4+", label: "Projects Built" },
  { value: "2+", label: "Years Coding" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-b border-[var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="section-label">01 — About</span>
          <h2 className="section-title">
            A brief account of the
            <br />
            engineer behind the work.
          </h2>
        </motion.div>



        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-5 text-base md:text-lg leading-relaxed mb-10">
            <p>
              I build modern web applications using{" "}
              <span className="text-[var(--text-primary)] font-medium">React.js</span>{" "}
              and{" "}
              <span className="text-[var(--text-primary)] font-medium">Next.js</span>.
              I enjoy turning ideas into clean, functional products and creating smooth
              user experiences.
            </p>

            <p>
              I’m also exploring the backend side with technologies like MongoDB,
              Express, and APIs so I can understand and build complete full-stack
              applications.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="paper-block px-4 py-4"
              >
                <div className="stat-number">{stat.value}</div>
                <div className="meta-line mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default About;

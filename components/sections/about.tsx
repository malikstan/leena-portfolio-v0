"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function About() {
  return (
    <section id="about" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            About me
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Curious about me?
          </h2>
        </motion.div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div className="glass-card relative h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
              <Image
                src="/placeholder.svg"
                alt="Leena Alotaibi"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-primary/20 blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              {"I'm a final-year AI student passionate about building intelligent digital products. My focus is on"}{" "}
              <span className="font-semibold text-highlight-blue">machine learning</span>,{" "}
              <span className="font-semibold text-highlight-blue">deep learning</span>,{" "}
              <span className="font-semibold text-highlight-purple">Generative AI</span> — turning
              technical ideas into meaningful user experiences.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              {"I've built projects that apply these technologies in practical ways. I enjoy working on personal projects and sharing my work on GitHub and LinkedIn."}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Quick bits about me:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>AI project enthusiast & lifelong learner</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                  <span>Open to freelance AI opportunities</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

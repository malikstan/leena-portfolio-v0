"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Generative AI Language Modeling with Transformers",
    provider: "IBM",
    date: "2025",
    description:
      "Advanced course on GenAI and transformer architectures, PyTorch implementation.",
    skills: [
      "PyTorch",
      "Transformers Architecture",
      "Feature Engineering",
      "Text Mining",
      "Statistical Methods",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/6Y07115XOOBK",
  },
  {
    title: "Explainable Machine Learning",
    provider: "Duke University",
    date: "2025",
    description:
      "Course on XAI techniques, making ML models interpretable and responsible.",
    skills: [
      "Explainable AI (XAI)",
      "Image Analysis",
      "Responsible AI",
      "Predictive Modeling",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/WFVF12FHASXY",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    provider: "Vanderbilt University",
    date: "2025",
    description: "Prompt engineering for LLMs, practical applications.",
    skills: [
      "Prompt Engineering",
      "OpenAI APIs",
      "LLM Application Development",
      "Creative Problem-Solving",
    ],
    link: "https://www.coursera.org/account/accomplishments/verify/QS7EQ0SSHRUY",
  },
  {
    title: "Virtual Work Experience (AI Developer, Microsoft Azure)",
    provider: "Microsoft",
    date: "2025",
    description: "AI development using Azure ML cloud platform.",
    skills: ["Microsoft Azure ML"],
    link: null,
  },
  {
    title: "HCIA in Artificial Intelligence",
    provider: "Huawei",
    date: "2024",
    description:
      "AI fundamentals, neural network architectures, AI implementation.",
    skills: ["Neural Network Architecture", "Artificial Intelligence (AI)", "Deep Learning"],
    link: null,
  },
  {
    title: "CCNA – Routing & Switching",
    provider: "Cisco",
    date: "2024",
    description: "Industry-standard networking certification.",
    skills: [
      "Network Infrastructure",
      "TCP/IP Protocol Suite",
      "Routing & Switching",
      "WAN Technologies",
    ],
    link: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Certificates() {
  return (
    <section id="certificates" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Certificates
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Professional Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Continuous learning and skill development through recognized courses
            and certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-card group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {cert.date}
                  </span>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {cert.provider}
                  </p>
                </div>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label={`View ${cert.title} certificate`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {cert.title}
              </h3>
              <p className="mb-4 flex-grow text-sm text-muted-foreground">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cert.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    +{cert.skills.length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

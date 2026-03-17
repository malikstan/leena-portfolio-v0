"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "SQL", icon: "🗃️" },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "Generative AI", icon: "✨" },
      { name: "Transformers", icon: "🤖" },
      { name: "LLMs", icon: "🧠" },
      { name: "NLP", icon: "💬" },
      { name: "Computer Vision", icon: "👁️" },
      { name: "LangChain", icon: "🔗" },
      { name: "RAG", icon: "📚" },
      { name: "AI Agents", icon: "🤝" },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Data Analysis", icon: "📊" },
      { name: "Team Leadership", icon: "👥" },
      { name: "Collaboration", icon: "🤝" },
      { name: "Problem Solving", icon: "💡" },
      { name: "Adaptability", icon: "🔄" },
    ],
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Skills
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            My Technical Toolkit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            The skills, tools and technologies I am really good at:
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-6 text-center text-lg font-semibold text-foreground md:text-left">
                {category.name}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 md:justify-start"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-card flex items-center gap-2 rounded-full px-4 py-2.5 transition-shadow hover:shadow-lg"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Coffee,
  Database,
  Sparkles,
  Bot,
  Brain,
  MessageSquare,
  Eye,
  Link,
  BookOpen,
  Users,
  BarChart3,
  Lightbulb,
  RefreshCw,
  Handshake,
} from "lucide-react";

const skillCategories = [
  {
    name: "Programming",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Coffee },
      { name: "SQL", icon: Database },
    ],
  },
  {
    name: "AI/ML",
    skills: [
      { name: "Generative AI", icon: Sparkles },
      { name: "Transformers", icon: Bot },
      { name: "LLMs", icon: Brain },
      { name: "NLP", icon: MessageSquare },
      { name: "Computer Vision", icon: Eye },
      { name: "LangChain", icon: Link },
      { name: "RAG", icon: BookOpen },
      { name: "AI Agents", icon: Handshake },
    ],
  },
  {
    name: "Other",
    skills: [
      { name: "Data Analysis", icon: BarChart3 },
      { name: "Team Leadership", icon: Users },
      { name: "Collaboration", icon: Handshake },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Adaptability", icon: RefreshCw },
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
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="glass-card flex items-center gap-2 rounded-full px-4 py-2.5 transition-shadow hover:shadow-lg"
                    >
                      <Icon size={18} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

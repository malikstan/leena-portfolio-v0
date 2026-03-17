"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Quest Analytics RAG Assistant",
    description:
      "AI-powered Retrieval-Augmented Generation assistant for Quest Analytics. Helps researchers analyze scientific papers by loading documents, splitting text into chunks, embedding content, storing in vector DB, and interacting through a QA bot interface.",
    tech: ["Python", "LangChain", "IBM Watsonx.ai"],
    image: "/placeholder.svg",
  },
  {
    title: "Coffee Recommender BERT",
    description:
      "Arabic coffee recommendation system using CAMeL-BERT, PyTorch, and Flask to provide personalized suggestions based on tasting notes, roaster data, and product names.",
    tech: ["Python", "PyTorch", "Flask"],
    image: "/placeholder.svg",
  },
  {
    title: "Saudi Cultural Heritage Storyteller",
    description:
      "Story generation app using ALLAM-7B with prompt engineering and Gradio interface to create engaging narratives about Saudi cultural heritage.",
    tech: ["Python", "ALLAM-7B", "Gradio"],
    image: "/placeholder.svg",
  },
  {
    title: "Smart Vehicle Gate Access System",
    description:
      "Arduino + Python system combining OpenCV and Tesseract OCR for license plate recognition and automated gate control.",
    tech: ["Python", "C++", "OpenCV"],
    image: "/placeholder.svg",
  },
  {
    title: "Rahhal – AI Travel Planner",
    description:
      "Streamlit app integrating GPT-4 itinerary generation, LSTM weather forecasting, and Unsplash API for destination images.",
    tech: ["Python", "GPT-4", "Streamlit"],
    image: "/placeholder.svg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Projects
          </span>
          <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of AI projects that demonstrate my skills in machine
            learning, NLP, and building practical applications.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full flex-shrink-0 lg:w-1/2"
                >
                  <div className="glass-card relative aspect-video overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  {/* Decorative blur */}
                  <div
                    className={`absolute -bottom-4 h-20 w-40 rounded-full blur-3xl ${
                      isEven
                        ? "-right-4 bg-primary/20"
                        : "-left-4 bg-secondary/20"
                    }`}
                  />
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Medical Imaging: Fetal Health AI",
    description:
      "Deep learning + Flask web app for fetal recognition & prediction using computer vision.",
    tags: ["Deep Learning", "Flask", "Computer Vision"],
  },
  {
    title: "Pregnancy Tracker ML App",
    description:
      "Machine learning (Gradient Boosting Regression) combined with Flask for high-accuracy due-date prediction.",
    tags: ["Machine Learning", "Regression", "Flask"],
  },
  {
    title: "Multilingual RAG Chatbot",
    description:
      "NLP embeddings + Pinecone vector database for robust multilingual retrieval-augmented question answering.",
    tags: ["NLP", "RAG", "Pinecone", "Embeddings"],
  },
  {
    title: "YOLOv8 Animal Detection System",
    description:
      "Real-time object detection and species classification utilizing custom trained YOLOv8 models.",
    tags: ["YOLOv8", "Object Detection", "Real-time"],
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance tracking system built with OpenCV and C++ using facial recognition technology.",
    tags: ["OpenCV", "C++", "Facial Recognition"],
  },
  {
    title: "Library Management System",
    description:
      "Desktop application developed in Java Swing using Object-Oriented principles for school use.",
    tags: ["Java", "Swing", "OOP"],
  },
];

export default function Projects() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          WORK{" "}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
          A showcase of intelligent systems, computer vision models, and
          full-stack AI applications developed to solve real-world problems.
        </p>
      </motion.div>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative border border-border p-8 md:p-12 bg-surface/20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-600 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all">
              00{idx + 1}
            </div>

            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-6 text-lg max-w-3xl leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono border border-gray-800 rounded-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 md:flex-col shrink-0">
              <button
                title="View Code"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </button>
              <button
                title="Live Demo"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

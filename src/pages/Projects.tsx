import { motion } from "motion/react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Alpha Lens: AI-Powered Financial Intelligence Platform",
    description: "My Final Year Project: a full-stack financial intelligence platform that analyses uploaded financial PDFs, generates AI-powered analyst reports, and provides FinBot, a conversational assistant grounded in document content using Retrieval-Augmented Generation (RAG). Built with FastAPI, Next.js, Qdrant, Supabase, and OpenAI models.",
    tags: ["Final Year Project", "LLMs", "RAG", "FastAPI", "Next.js", "Qdrant"],
    github: "https://github.com/laraibirfan2004/alpha-lens-fyp",
  },
  { title: "Medical Imaging: Fetal Health AI", description: "A deep learning and computer vision project exploring fetal recognition and prediction through a Flask-based application.", tags: ["Deep Learning", "Flask", "Computer Vision"] },
  { title: "Pregnancy Tracker ML App", description: "A machine learning application using Gradient Boosting Regression to estimate due dates from relevant input data.", tags: ["Machine Learning", "Regression", "Flask"] },
  { title: "Multilingual RAG Chatbot", description: "A retrieval-augmented chatbot concept combining NLP embeddings and a vector database to support multilingual question answering.", tags: ["NLP", "RAG", "Pinecone", "Embeddings"] },
  { title: "YOLOv8 Animal Detection System", description: "A computer vision project focused on real-time object detection and animal classification using custom-trained YOLOv8 models.", tags: ["YOLOv8", "Object Detection", "Computer Vision"] },
  { title: "Face Recognition Attendance System", description: "An attendance tracking application exploring facial recognition with OpenCV and C++.", tags: ["OpenCV", "C++", "Facial Recognition"] },
  { title: "Library Management System", description: "A Java Swing desktop application developed using object-oriented programming principles.", tags: ["Java", "Swing", "OOP"] },
];

export default function Projects() {
  return (
    <div className="py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">WORK</h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">A showcase of intelligent systems, computer vision models, and full-stack AI applications developed to solve real-world problems.</p>
      </motion.div>
      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div key={project.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.08 }} className="group relative border border-border p-8 md:p-12 bg-surface/20 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center hover:border-primary/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-gray-600">{String(idx + 1).padStart(3, "0")}</div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tight group-hover:text-primary transition-colors">{project.title}</h2>
              <p className="text-gray-400 mb-6 text-lg max-w-3xl leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-3">{project.tags.map((tag) => <span key={tag} className="px-3 py-1 text-xs font-mono border border-gray-800 rounded-sm text-gray-300">{tag}</span>)}</div>
            </div>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`} className="inline-flex items-center gap-2 shrink-0 border border-border px-5 py-3 rounded-full hover:bg-primary hover:text-black hover:border-primary transition-colors"><Github className="w-5 h-5" /><span className="font-mono text-sm">VIEW REPOSITORY</span></a>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Getting Started with YOLOv8 for Object Detection",
    excerpt:
      "Learn the fundamentals of real-time object detection and how to train your own custom YOLOv8 model from scratch.",
    date: "May 05, 2026",
    readTime: "6 min read",
    tags: ["Computer Vision", "YOLO"],
  },
  {
    title: "Building a Multilingual RAG Chatbot",
    excerpt:
      "An in-depth guide on implementing Retrieval-Augmented Generation using Pinecone vector database and NLP embeddings.",
    date: "April 20, 2026",
    readTime: "10 min read",
    tags: ["NLP", "RAG", "Tutorial"],
  },
  {
    title: "The Future of AI in Medical Imaging",
    excerpt:
      "Exploring how deep learning algorithms are revolutionizing preliminary diagnosis and fetal health monitoring.",
    date: "March 15, 2026",
    readTime: "8 min read",
    tags: ["Healthcare", "Deep Learning"],
  },
];

export default function Blog() {
  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
          NOTES{" "}
          <span className="text-primary font-mono text-3xl md:text-5xl">
            &amp; THOUGHTS
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">
          Articles, tutorials, and insights on Artificial Intelligence, machine
          learning architecture, and software development.
        </p>
      </motion.div>

      <div className="space-y-4">
        {posts.map((post, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group block border-b border-border py-10 hover:border-primary transition-colors cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-semibold tracking-tight mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
                  {post.excerpt}
                </p>

                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface text-xs font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all group-hover:scale-110">
                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { Clock } from "lucide-react";

const posts = [
  { title: "What I Learned Building Alpha Lens", excerpt: "My Final Year Project brought together document processing, retrieval-augmented generation, and full-stack development. A useful AI product needs more than a capable model: it also needs reliable data extraction, relevant retrieval, a clear user experience, and careful evaluation.", readTime: "3 min read", tags: ["Alpha Lens", "RAG", "Full-Stack AI"] },
  { title: "Why Retrieval-Augmented Generation Matters", excerpt: "Large language models can produce fluent answers, but they may not know the details contained in a user's documents. RAG connects a language model to a relevant knowledge source: retrieve useful passages first, then use that context to generate a grounded response.", readTime: "2 min read", tags: ["LLMs", "RAG", "NLP"] },
  { title: "A Practical View of Computer Vision", excerpt: "Building an object detection system involves more than choosing a model. Data quality, annotation, image preprocessing, evaluation, and inference speed all influence how well a solution performs outside a notebook.", readTime: "2 min read", tags: ["Computer Vision", "YOLO", "Deep Learning"] },
  { title: "From AI Models to Useful Applications", excerpt: "A model becomes more valuable when people can actually use it. APIs, interfaces, data pipelines, deployment, and monitoring help turn experiments into applications that solve practical problems.", readTime: "2 min read", tags: ["AI Engineering", "Python", "Development"] },
];

export default function Blog() {
  return (
    <div className="py-20">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">NOTES <span className="text-primary font-mono text-3xl md:text-5xl">&amp; THOUGHTS</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl font-light">Short notes on artificial intelligence, machine learning, and lessons from building software projects.</p>
      </motion.div>
      <div className="space-y-4">
        {posts.map((post, idx) => (
          <motion.article key={post.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="block border-b border-border py-10 hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row justify-between gap-8 md:items-center"><div className="flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-4"><Clock className="w-3 h-3" /> {post.readTime}<span className="ml-2">PORTFOLIO NOTE</span></div>
              <h2 className="text-3xl font-semibold tracking-tight mb-4">{post.title}</h2><p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <span key={tag} className="px-3 py-1 bg-surface text-xs font-mono text-gray-300">{tag}</span>)}</div>
            </div></div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

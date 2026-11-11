import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  BrainCircuit,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const skills = [
  { name: "Python", icon: Terminal, category: "Language" },
  { name: "C++", icon: Code2, category: "Language" },
  { name: "Deep Learning", icon: BrainCircuit, category: "AI/ML" },
  { name: "Computer Vision", icon: Cpu, category: "AI/ML" },
  { name: "YOLO", icon: BrainCircuit, category: "AI/ML" },
  { name: "React", icon: Code2, category: "Frontend" },
  { name: "Flask", icon: Database, category: "Backend" },
  { name: "MySQL", icon: Database, category: "Backend" },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="pb-20">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col justify-center relative pt-10">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10"
        >
          <div className="w-[800px] h-[800px] border border-primary rounded-full animate-pulse blur-[100px]" />
        </motion.div>

        <div className="font-mono text-primary mb-6 flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            //
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ARTIFICIAL INTELLIGENCE STUDENT & DEVELOPER
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9]"
          >
            LARAIB <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">
              IRFAN.
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-xl text-gray-400 mt-8 leading-relaxed font-light"
        >
          I build intelligent systems. Specializing in Computer Vision, NLP, and
          real-world ML applications that solve complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center gap-6"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-semibold overflow-hidden rounded-sm hover:-translate-y-1 transition-transform"
          >
            <span className="relative z-10">VIEW PROJECTS</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            LET'S TALK
          </Link>
        </motion.div>
      </section>

      {/* Ticker / Banner */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 border-y border-border py-4 overflow-hidden bg-surface/50 my-20">
        <motion.div
          className="flex whitespace-nowrap gap-10 font-mono text-sm text-gray-500 uppercase tracking-widest"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>COMPUTER VISION</span> <span className="text-primary">•</span>
          <span>NATURAL LANGUAGE PROCESSING</span>{" "}
          <span className="text-primary">•</span>
          <span>FULL-STACK DEVELOPMENT</span>{" "}
          <span className="text-primary">•</span>
          <span>DEEP LEARNING</span> <span className="text-primary">•</span>
          <span>PREDICTIVE MODELING</span>{" "}
          <span className="text-primary">•</span>
          <span>COMPUTER VISION</span> <span className="text-primary">•</span>
          <span>NATURAL LANGUAGE PROCESSING</span>{" "}
          <span className="text-primary">•</span>
          <span>FULL-STACK DEVELOPMENT</span>{" "}
          <span className="text-primary">•</span>
          <span>DEEP LEARNING</span> <span className="text-primary">•</span>
          <span>PREDICTIVE MODELING</span>{" "}
          <span className="text-primary">•</span>
        </motion.div>
      </div>

      {/* Skills Grid */}
      <section className="py-20 relative">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-primary" />
          <h2 className="text-3xl font-light tracking-tight">
            TECHNICAL SKILLS
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 border border-border bg-surface/30 hover:border-primary/50 transition-all cursor-crosshair rounded-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <skill.icon className="w-8 h-8 mb-4 text-primary opacity-80" />
              <p className="font-mono text-xs text-gray-500 mb-1">
                {skill.category}
              </p>
              <h3 className="font-medium text-lg relative z-10">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

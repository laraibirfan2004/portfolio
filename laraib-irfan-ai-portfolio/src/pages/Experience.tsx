import { motion } from "motion/react";

const experiences = [
  {
    role: "Tech Intern",
    company: "Knodemy",
    period: "Present",
    description:
      "Working on Website development, Data preprocessing, and AI-based applications.",
  },
  {
    role: "CS / ICT Instructor",
    company: "Walkthrough Academy",
    period: "2023 - Present",
    description:
      "Teaching AI, Python, and foundational programming concepts to international students.",
  },
  {
    role: "AI Intern",
    company: "Iqra University Islamabad",
    period: "2025",
    description:
      "Worked on internal academic chatbot and automation tools using NLP and ML. Assisted in model deployment and performance evaluation of AI tools.",
  },
  {
    role: "AI Intern",
    company: "Code Alpha",
    period: "2024",
    description:
      "Worked on YOLO-based object detection and performance optimization. Contributed to data pipelines and training workflows for computer vision tasks.",
  },
];

const education = [
  {
    degree: "BS Artificial Intelligence",
    institute: "Air University Islamabad",
    period: "2022 - 2026",
    details:
      "Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP, Data Structures",
  },
  {
    degree: "FSc (Pre-Engineering)",
    institute: "Hope College of Sciences",
    period: "2020 - 2022",
    details: "Relevant Coursework: ICT, IT, CS",
  },
  {
    degree: "Private Schooling",
    institute: "Margalla Grammar School",
    period: "till 2020",
    details: "",
  },
];

export default function Experience() {
  return (
    <div className="py-20">
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl md:text-7xl font-bold tracking-tighter mb-20"
      >
        EXPERIENCE{" "}
        <span className="text-primary font-mono text-3xl md:text-5xl">
          &amp; EDU
        </span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="font-mono text-primary text-xl mb-10 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            WORK HISTORY
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:w-1/2 md:-ml-4 flex flex-col md:items-end md:pr-12 md:text-right relative">
                  <div className="absolute left-[-36px] md:right-[-25px] md:left-auto top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-black z-10" />
                  <span className="text-primary font-mono text-sm block mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <h4 className="text-gray-400 font-mono text-sm mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-mono text-primary text-xl mb-10 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-primary"></span>
            EDUCATION
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:w-1/2 md:-ml-4 flex flex-col md:items-end md:pr-12 md:text-right relative">
                  <div className="absolute left-[-36px] md:right-[-25px] md:left-auto top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-black z-10" />
                  <span className="text-primary font-mono text-sm block mb-2">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <h4 className="text-gray-400 font-mono text-sm mb-3">
                    {edu.institute}
                  </h4>
                  {edu.details && (
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      {edu.details}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

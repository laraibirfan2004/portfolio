import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="text-primary">&lt;</span>
          Laraib /<span className="text-primary">&gt;</span>
        </NavLink>

        <div className="hidden md:flex items-center bg-surface/80 backdrop-blur-md rounded-full px-4 py-2 border border-border">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm transition-colors ${
                  isActive ? "text-primary" : "text-gray-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 border-b-2 border-primary -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div>
          <a
            href="https://github.com/laraibirfan2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono border border-border px-4 py-2 rounded-full hover:border-primary hover:text-primary transition-all"
          >
            GITHUB
          </a>
        </div>
      </div>
    </motion.header>
  );
}

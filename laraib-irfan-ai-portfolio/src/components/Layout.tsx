import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen grid-bg relative selection:bg-primary/30">
      <Navbar />
      <main className="pt-24 px-6 max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>
      <footer className="border-t border-border mt-20 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} Laraib Irfan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/laraib-i-796340260/"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/laraibirfan2004"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:ilaraibirfan2004@gmail.com"
              className="hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

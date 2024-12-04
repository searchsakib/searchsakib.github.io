"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full max-w-6xl bg-[#112240] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/3 p-8 bg-[#1d2d50]">
          <motion.div className="mb-8 text-center lg:text-left" {...fadeIn}>
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#64ffda] mx-auto lg:mx-0">
              <div className="w-full h-full bg-[#64ffda] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#1d2d50]">JD</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-[#ccd6f6]">Jane Doe</h1>
            <p className="text-xl mb-4 text-[#64ffda]">Frontend Developer</p>
          </motion.div>
          <motion.div className="space-y-4" {...fadeIn}>
            <p className="text-sm leading-relaxed">
              Passionate frontend developer with 5 years of experience crafting
              beautiful and responsive web interfaces. Committed to creating
              intuitive and engaging user experiences through clean and
              efficient code.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#64ffda]/10 text-[#64ffda]"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#64ffda]/10 text-[#64ffda]"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-[#64ffda]/10 text-[#64ffda]"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 p-8 flex flex-col">
          <motion.div className="mb-6 flex space-x-4" {...fadeIn}>
            {["about", "projects", "skills"].map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`text-lg ${
                  activeTab === tab
                    ? "text-[#64ffda] border-b-2 border-[#64ffda]"
                    : "text-[#8892b0]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </motion.div>

          <div
            ref={contentRef}
            className="flex-grow overflow-y-auto pr-4 custom-scrollbar"
            style={{
              height: "calc(100vh - 400px)",
              maxHeight: "500px",
            }}
          >
            {activeTab === "about" && (
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  About Me
                </h2>
                <p className="mb-4">
                  I am a frontend developer with a passion for creating
                  beautiful, functional, and user-centered digital experiences.
                  With 5 years of experience in the field, I specialize in
                  building responsive web applications using modern JavaScript
                  frameworks and libraries.
                </p>
                <p>
                  I am dedicated to writing clean, maintainable code and
                  constantly improving my skills. When I am not coding, you can
                  find me exploring new design trends, contributing to
                  open-source projects, or sharing my knowledge through blog
                  posts and mentoring.
                </p>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div {...fadeIn} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  Featured Projects
                </h2>
                {[
                  {
                    title: "Modern UI Kit",
                    description:
                      "A comprehensive UI kit built with React and Styled Components, featuring 50+ reusable components and dark/light mode support.",
                    icon: "UI",
                  },
                  {
                    title: "E-commerce SPA",
                    description:
                      "A single-page application built with Next.js and Redux, featuring server-side rendering and optimized performance.",
                    icon: "SPA",
                  },
                  {
                    title: "Portfolio Generator",
                    description:
                      "A React-based tool that allows developers to create and customize their portfolio websites with ease.",
                    icon: "PG",
                  },
                ].map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#233554] rounded-lg p-6 flex flex-col md:flex-row items-center"
                  >
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <div className="rounded-lg overflow-hidden bg-[#64ffda]/10 h-40 flex items-center justify-center">
                        <span className="text-[#64ffda] text-4xl">
                          {project.icon}
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-[#ccd6f6]">
                        {project.title}
                      </h3>
                      <p className="text-[#8892b0] mb-4">
                        {project.description}
                      </p>
                      <div className="flex space-x-4">
                        <Button variant="outline" className="group">
                          <Globe className="mr-2 h-4 w-4" />
                          View Live
                        </Button>
                        <Button variant="outline" className="group">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  Skills & Expertise
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Core Technologies
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>HTML5 & CSS3</li>
                      <li>JavaScript (ES6+)</li>
                      <li>TypeScript</li>
                      <li>React & Next.js</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Styling
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Sass/SCSS</li>
                      <li>Styled Components</li>
                      <li>Tailwind CSS</li>
                      <li>CSS Modules</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Tools & Ecosystem
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Webpack & Vite</li>
                      <li>Git & GitHub</li>
                      <li>Jest & React Testing Library</li>
                      <li>Storybook</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Design & UX
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Responsive Design</li>
                      <li>UI/UX Principles</li>
                      <li>Figma & Sketch</li>
                      <li>Accessibility (WCAG)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
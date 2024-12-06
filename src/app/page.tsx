"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills");
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

  const tabs = ["skills", "projects", "about"];
  const projects = [
    {
      title: "Blood Aid",
      description:
        "A website using firebase and react, user can register for blood donation. Admin panel for admins, users and volunteers. Different search parameters to find suitable blood donor and a blog posting functionality to raise awareness about blood donation.",
      image: "/images/blood-aid.png",
      live: "https://blood-aid-3dd80.web.app",
      code: "https://github.com/searchsakib/bloodaid-client",
    },
    {
      title: "Job Quest",
      description:
        "A React-based website that allows users to register and post a job. Job seekers can find their suitable jobs by job category.",
      image: "/images/job-quest.png",
      live: "https://jobquest-59d5a.web.app",
      code: "https://github.com/searchsakib/jobquest-client",
    },
    {
      title: "Workout Gear",
      description:
        "A Website for gym equipment. Search Product by name and category options for easier site navigation.",
      image: "/images/workout-gear.png",
      live: "https://workout-gear-client.vercel.app",
      code: "https://github.com/searchsakib/workout_gear_client",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      <motion.div
        className="w-full max-w-6xl bg-[#112240] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:w-1/3 p-4 lg:p-8 bg-[#1d2d50]">
          <motion.div className="mb-8 text-center lg:text-left" {...fadeIn}>
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#64ffda] mx-auto lg:mx-0">
              <div className="w-full h-full bg-[#64ffda] flex items-center justify-center">
                <span className="text-4xl font-bold text-[#1d2d50]">JD</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-[#ccd6f6]">
              Md. Nazmus Sakib
            </h1>
            <p className="text-xl mb-4 text-[#64ffda]">Frontend Developer</p>
          </motion.div>
          <motion.div className="space-y-4" {...fadeIn}>
            <p className="text-sm leading-relaxed">
              Passionate frontend developer crafting beautiful and responsive
              web interfaces. Committed to creating intuitive and engaging user
              experiences through clean and efficient code.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link href="https://github.com/searchsakib" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-[#64ffda] text-[#64ffda]"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>

              <Link
                href="https://www.linkedin.com/in/searchsakib"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-[#64ffda] text-[#64ffda]"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="mailto:searchsakib@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-[#64ffda] text-[#64ffda]"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-2/3 p-4 lg:p-8 flex flex-col">
          <motion.div
            className="mb-6 flex flex-col md:flex-row md:space-x-4"
            {...fadeIn}
          >
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`text-lg mx-5 md:mx-0 ${
                  activeTab === tab
                    ? "text-[#1d2d50] md:text-[#64ffda] md:border-b-2 bg-[#64ffda] md:bg-transparent rounded-none border-[#64ffda]"
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
            {activeTab === "skills" && (
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  Skills & Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      {/* <li>Sass/SCSS</li> */}
                      <li>Tailwind CSS</li>
                      <li>Styled Components</li>
                      {/* <li>CSS Modules</li> */}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Tools & Ecosystem
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Vite</li>
                      <li>Git & GitHub</li>
                      <li>Postman</li>
                      {/* <li>Jest & React Testing Library</li> */}
                      {/* <li>Storybook</li> */}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#64ffda]">
                      Design & UX
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Responsive Design</li>
                      <li>UI/UX Principles</li>
                      <li>Figma </li>
                      {/* <li>Accessibility (WCAG)</li> */}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div {...fadeIn} className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  Featured Projects
                </h2>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#233554] rounded-lg p-4 md:p-6 flex flex-col md:flex-row items-center"
                  >
                    <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <div className="rounded-lg overflow-hidden bg-[#64ffda]/10 h-40 flex items-center justify-center">
                        <Image
                          src={project.image}
                          alt={`${project.title} image`}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover object-top"
                        ></Image>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-xl font-semibold mb-2 text-[#ccd6f6]">
                        {project.title}
                      </h3>
                      <p className="text-[#8892b0] mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 space-x-0">
                        <Link href={project.live} target="_blank">
                          <Button className="group border border-[#64ffda] bg-transparent text-[#64ffda] hover:bg-[#64ffda]  hover:text-black">
                            <Globe className="mr-2 h-4 w-4" />
                            View Live
                          </Button>
                        </Link>
                        <Link href={project.code} target="_blank">
                          <Button className="group border border-[#64ffda] bg-transparent text-[#64ffda] hover:bg-[#64ffda]  hover:text-black flex">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === "about" && (
              <motion.div {...fadeIn}>
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  About Me
                </h2>
                <p className="mb-4">
                  I am a frontend developer with a passion for creating
                  beautiful, functional, and user-centered digital experiences.
                  My area of expertise in building responsive web applications
                  using modern JavaScript frameworks and libraries.
                </p>
                <p>
                  I am dedicated to writing clean, maintainable code and
                  constantly improving my skills. When I am not coding, I try to
                  explore programming fundamentals and watch podcasts about
                  various topics.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const tabs = ["skills", "projects", "about"];
  const projects = [
    {
      title: "Workout Gear",
      description:
        "A Website for gym equipment. Search Product by name and category options for easier site navigation.",
      image: "/images/workout-gear.png",
      live: "https://workout-gear-client.vercel.app",
      code: "https://github.com/searchsakib/workout_gear_client",
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
      title: "Blood Aid",
      description:
        "A website using firebase and react, user can register for blood donation. Admin panel for admins, users and volunteers. Different search parameters to find suitable blood donor and a blog posting functionality to raise awareness about blood donation.",
      image: "/images/blood-aid.png",
      live: "https://blood-aid-3dd80.web.app",
      code: "https://github.com/searchsakib/bloodaid-client",
    },
    {
      title: "Prep JS",
      description:
        "A website for Most common Javascript & Typescript interview questions with answers. It has a must-know option for a shortlist of questions and answers. ",
      image: "/images/prep.png",
      live: "https://prepjs.pages.dev",
      code: "https://github.com/searchsakib/prepJS",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] p-4 sm:p-8 flex items-center justify-center overflow-hidden">
      <div
        data-aos="fade-up"
        className="w-full min-h-[650px] max-w-7xl bg-[#112240] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        <div className="lg:w-1/3 p-4 lg:p-8 bg-[#1d2d50]">
          <div data-aos="fade-up" className="mb-8 text-center lg:text-left">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[#64ffda] mx-auto lg:mx-0">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/images/profile-img.jpeg"
                  alt="profile image"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-top"
                ></Image>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2 text-[#ccd6f6]">
              Md. Nazmus Sakib
            </h1>
            <p className="text-xl mb-4 text-[#64ffda]">Frontend Developer</p>
          </div>
          <div data-aos="fade-up" className="space-y-4">
            <p className="text-base leading-relaxed">
Frontend Web Developer based in Bangladesh, specializing in building functional and responsive web interfaces using JavaScript, TypeScript, React, and Next.js. Committed to delivering intuitive and engaging user experiences through clean, efficient, and maintainable code.
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
          </div>
        </div>

        <div className="lg:w-2/3 p-4 lg:p-8 flex flex-col">
          <div className="mb-6 md:space-x-4" data-aos="fade-up">
            {tabs.map((tab) => (
              <Button
                key={tab}
                variant="ghost"
                className={`text-lg  ${
                  activeTab === tab
                    ? "text-[#1d2d50] md:text-[#64ffda] md:border-b-2 bg-[#64ffda] md:bg-transparent rounded-none border-[#64ffda]"
                    : "text-[#8892b0]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Button>
            ))}
          </div>

          <div
            ref={contentRef}
            className="flex-grow overflow-y-auto pr-4 custom-scrollbar"
            style={{
              minHeight: "300px",
              maxHeight: "500px",
            }}
          >
            {activeTab === "skills" && (
              <div>
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
              </div>
            )}

            {activeTab === "projects" && (
              <div className="space-y-6">
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
              </div>
            )}

            {activeTab === "about" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
                  About Me
                </h2>
                <p className="mb-4">
                 I am a frontend web developer who enjoys building clean, simple, and easy-to-use websites. I focus on creating interfaces that look good, work smoothly on all devices, and feel comfortable for users. I work with modern web technologies to turn ideas and designs into real, usable web pages.
                </p>
                <p>
                 I am always trying to learn and grow as a developer. When I’m not coding, I like exploring programming basics and listening to podcasts on different topics to broaden my knowledge and thinking.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

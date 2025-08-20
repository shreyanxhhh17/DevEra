import React from "react";
import { FaGithub,FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../Landing/Header";

const mockProjects = [
  {
    name: "Phishing URL Detector",
    description:
      "Built a real-time phishing URL detector using FastAPI and machine learning to ensure safe browsing.",
    github: "https://github.com/shreyansh/phishing-detector",
    duration: "Feb 2025 - Mar 2025",
  },
  {
    name: "Devera - Dev Collaboration Platform",
    description:
      "A MERN-based app that lets developers form teams, collaborate on projects, and build a public portfolio.",
    github: "https://github.com/shreyansh/devera",
    duration: "Jan 2025 - Present",
  },
  {
    name: "AI Resume Builder",
    description:
      "Created an AI-powered resume builder that customizes CVs based on user input and job roles.",
    github: "https://github.com/shreyansh/ai-resume-builder",
    duration: "Nov 2024 - Dec 2024",
  },
];

export default function UserProjects() {
  return (
    <>
      <div className="min-h-screen bg-[#1e1e1e] text-white font-sans px-6 md:px-20 py-12">
      <Header/>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-1">My Projects</h1>
          <p className="text-gray-400 text-sm">
            Explore the real-world projects I've built to sharpen my skills.
          </p>
        </header>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {mockProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-lg shadow hover:shadow-lg p-6 transition-all duration-200"
            >
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:underline text-sm"
                >
                  <FaGithub /> GitHub
                </a>
                <span className="text-xs text-gray-400">{project.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

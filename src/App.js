import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import logo from "./logo.png";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="bg-[#fffce1] dark:bg-gray-900 text-[#4a4a4a] dark:text-gray-100 min-h-screen font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full backdrop-blur bg-white/80 dark:bg-gray-900/80 shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <span className="text-xl font-bold cursor-pointer">Sarath Ramachandran</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium justify-center">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-blue-600 cursor-pointer capitalize"
                >
                  {label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl ml-2 cursor-pointer"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      {/* Social Links */}
      <div className="fixed left-3 top-1/2 -translate-y-1/2 space-y-6 z-40 text-2xl">
        {[
          { icon: <FaGithub />, href: "https://github.com/zjsarath" },
          { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/sarathrc" },
          { icon: <FaEnvelope />, href: "mailto:zjsarath@gmail.com" },
          { icon: <FaPhone />, href: "tel:+447721703679" },
        ].map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 cursor-pointer block"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Hero */}
      <section id="home" className="pt-32 text-center px-4 scroll-mt-24">
        <motion.img
          src={`${process.env.PUBLIC_URL}/sarath.png`}
          alt="Sarath Ramachandran"
          className="mx-auto border-4 border-blue-600 shadow-2xl rounded-full h-64 w-64 object-cover mb-6"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl font-extrabold text-blue-600 cursor-default capitalize"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          👋 Hi, I'm Sarath Ramachandran
        </motion.h1>
        <p className="mt-2 text-base md:text-lg font-medium cursor-default text-gray-700 dark:text-gray-300">
          Software Developer · Quality Engineer · System Design Enthusiast
        </p>
        <a
          href="#projects"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Explore My Work
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto text-center mt-20 px-4 scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
          Software Engineer at William Hill, transitioning into full-stack development. I build
          reliable systems using Java, Spring Boot, and React. I enjoy turning complex ideas into
          intuitive experiences. In my free time, I explore photography, off-roading, and travel.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto text-center mt-20 px-4 scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-10 text-left text-sm md:text-base">
          <div className="p-4 rounded bg-white/90 dark:bg-gray-800 hover:shadow-xl">
            <h3 className="font-bold text-blue-600 mb-2">Technical Stack</h3>
            <ul className="space-y-1">
              <li>Java, Spring Boot, Kafka, DynamoDB</li>
              <li>React, Redux, JavaScript, HTML/CSS</li>
              <li>TestCafe, Cypress, Jest, JUnit, Selenium</li>
              <li>Git, GitLab CI/CD, Postman, IntelliJ</li>
            </ul>
          </div>
          <div className="p-4 rounded bg-white/90 dark:bg-gray-800 hover:shadow-xl">
            <h3 className="font-bold text-blue-600 mb-2">Professional Tools</h3>
            <ul className="space-y-1">
              <li>Agile / Scrum, SDLC, ATDD</li>
              <li>Stakeholder Demos & Peer Reviews</li>
              <li>Debugging, Monitoring, Communication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto text-center mt-20 px-4 scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          <a
            href="https://github.com/zjsarath/zjsarath/tree/main/personal-projects"
            className="bg-white/90 dark:bg-gray-800 p-4 rounded shadow-md text-left hover:shadow-lg transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-blue-600 font-semibold">📁 Personal Projects</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              A collection of small-to-mid sized apps including shopping cart, reports, etc.
            </p>
          </a>
          <a
            href="https://github.com/zjsarath/zjsarath/tree/main/personal-projects/shopping-cart"
            className="bg-white/90 dark:bg-gray-800 p-4 rounded shadow-md text-left hover:shadow-lg transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-blue-600 font-semibold">🛒 Shopping Cart</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Cart system with quantity control, persistent state, and simple UI.
            </p>
          </a>
          <a
            href="https://github.com/zjsarath/zjsarath/tree/main/feature-delivery-reports"
            className="bg-white/90 dark:bg-gray-800 p-4 rounded shadow-md text-left hover:shadow-lg transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-blue-600 font-semibold">📊 Feature Delivery Reports</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Logs, releases, and reports from key project deliveries.
            </p>
          </a>
          <a
            href="https://github.com/zjsarath/zjsarath"
            className="bg-white/90 dark:bg-gray-800 p-4 rounded shadow-md text-left hover:shadow-lg transition cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="text-blue-600 font-semibold">🔗 GitHub Repo</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Explore all my public repositories and pinned projects in one place.
            </p>
          </a>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto mt-20 px-4 text-center scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Experience & Education
        </h2>
        <div className="flex justify-center">
          <div className="border-l-2 border-[#ffd966] pl-6 text-left">
            <div className="mb-8">
              <div className="text-sm text-gray-500 dark:text-gray-400">Nov 2023 – Present</div>
              <h3 className="text-lg font-bold">Software Quality Engineer - William Hill</h3>
              <p className="text-sm">Manual + automation testing, React + Java dev, delivery reports.</p>
            </div>
            <div className="mb-8">
              <div className="text-sm text-gray-500 dark:text-gray-400">2023 – 2026</div>
              <h3 className="text-lg font-bold">Level 4 Software Developer Apprenticeship - QA Ltd</h3>
              <p className="text-sm">Modules in Java, SDLC, Agile, Testing, and Web Dev.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="text-center mt-20 px-4 scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Resume
        </h2>
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download
          className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        >
          <HiDownload className="mr-2 text-lg" /> Download Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center mt-20 px-4 pb-20 scroll-mt-24">
        <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);

            fetch("https://formsubmit.co/ajax/zjsarath@gmail.com", {
              method: "POST",
              body: data,
            })
              .then(response => response.json())
              .then(() => {
                form.reset();
                document.getElementById("thankyou-message").style.display = "block";
              })
              .catch(error => console.error("Error:", error));
          }}
          className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md space-y-4 text-left"
        >
          <div>
            <label className="block text-sm mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-2 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded cursor-pointer"
          >
            Send Message
          </button>

          <p
            id="thankyou-message"
            className="text-green-600 text-sm font-medium mt-4 hidden"
          >
            ✅ Thanks for reaching out! I’ll get back to you shortly.
          </p>
        </form>
      </section>

      <footer className="text-center py-6 text-xs text-gray-500 dark:text-gray-400">
        © 2025 Sarath Ramachandran. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
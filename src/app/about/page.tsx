"use client";

import { FaCode, FaRobot } from "react-icons/fa";
import { MdCampaign, MdWork } from "react-icons/md";
import { PiGraduationCapBold } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <MdCampaign className="text-5xl text-blue-600" />,
    title: "Digital Marketing",
    items: ["Meta Ads", "TikTok Ads", "SMM Strategy and Planning"],
  },
  {
    icon: <FaCode className="text-5xl text-green-600" />,
    title: "Programming",
    items: ["Python", "TypeScript", "Next.js & Tailwind CSS"],
  },
  {
    icon: <FaRobot className="text-5xl text-purple-600" />,
    title: "Artificial Intelligence",
    items: ["Conversation Bots", "AI Agents", "AI Automation"],
  },
];

const experiences = [
  {
    role: "AI Engineer",
    company: "Sorganex",
    period: "2023 - Present",
    description:
      "Building AI agents, automating workflows, and deploying scalable ML models to improve decision-making systems.",
  },
  {
    role: "Social Media Marketer",
    company: "Freelance",
    period: "2021 - 2023",
    description:
      "Created marketing funnels, ran high-ROI Meta & TikTok ads, and managed SMM strategy for eCommerce brands.",
  },
  {
    role: "Frontend Developer Intern",
    company: "TechLab",
    period: "2020 - 2021",
    description:
      "Contributed to frontend development with React and Tailwind, focusing on UI/UX and performance.",
  },
];

const education = [
  {
    degree: "M.Phil in Artificial Intelligence",
    school: "Virtual University",
    period: "2022 - 2024",
    description:
      "Specialized in ML, neural networks, and AI-driven systems. Thesis on real-time AI automation tools.",
  },
  {
    degree: "Bachelor of Computer Science",
    school: "University of Peshawar",
    period: "2018 - 2022",
    description:
      "Focused on programming, data structures, web development, and databases. Joined coding competitions and seminars.",
  },
];

const certifications = [
  {
    title: "Meta Certified Digital Marketing Associate",
    provider: "Meta Blueprint",
    year: "2023",
  },
  {
    title: "Google Analytics Certification",
    provider: "Google",
    year: "2022",
  },
  {
    title: "AI for Everyone",
    provider: "Coursera (Andrew Ng)",
    year: "2021",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-24 px-4 space-y-24">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          👋 About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I’m a passionate developer and digital strategist blending code and
          creativity to build impactful, user-focused solutions. From
          programming to AI and marketing — I turn ideas into results.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          🔧 My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 dark:text-white">
                {skill.title}
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1 text-center">
                {skill.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          💼 My Experience
        </h2>
        <div className="relative border-l border-gray-300 dark:border-gray-600 max-w-2xl mx-auto pl-6 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                <MdWork className="text-sm" />
              </span>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {exp.company} ({exp.period})
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          🎓 Education
        </h2>
        <div className="relative border-l border-gray-300 dark:border-gray-600 max-w-2xl mx-auto pl-6 space-y-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                <PiGraduationCapBold className="text-sm" />
              </span>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {edu.school} ({edu.period})
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          🏅 Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <FaCertificate className="text-4xl text-yellow-500 mb-3" />
              <h3 className="text-lg font-semibold dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">{cert.provider}</p>
              <p className="text-xs text-gray-400">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;

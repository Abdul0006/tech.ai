// src/app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import { FaCode, FaRobot, FaBullhorn, FaShoppingCart, FaPaintBrush, FaGraduationCap } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack development using Next.js, TypeScript, and Tailwind CSS for responsive and high-performance web applications.",
    icon: <FaCode className="text-4xl text-blue-600" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Meta Ads, TikTok Ads, content strategy, and social media campaigns to grow your brand and reach.",
    icon: <FaBullhorn className="text-4xl text-pink-500" />,
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent automation, chatbots, and custom AI tools to enhance your business efficiency and customer experience.",
    icon: <FaRobot className="text-4xl text-purple-600" />,
  },
  {
    title: "E-Commerce Setup",
    description:
      "Shopify, Daraz, and custom online store setup with seamless integrations and marketing funnel support.",
    icon: <FaShoppingCart className="text-4xl text-green-600" />,
  },
  {
    title: "UI/UX & Branding",
    description:
      "Modern, user-centric designs using Figma and Tailwind to ensure intuitive experiences and strong brand identity.",
    icon: <FaPaintBrush className="text-4xl text-yellow-500" />,
  },
  {
    title: "LMS & Course Platforms",
    description:
      "Custom LMS development for instructors to manage, upload, and monetize their courses seamlessly.",
    icon: <FaGraduationCap className="text-4xl text-red-500" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Title */}
      <motion.h1
        className="text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">
              {service.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

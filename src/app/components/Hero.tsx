"use client"; // Mark this as a Client Component

import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion, Variants } from 'framer-motion';

// Helper function for animations with TypeScript types
const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  delay: number = 0
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1.2,
      delay: delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      {/* Dotted Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <motion.div 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Hello, I am <br />
            <span className="text-primary">Abdul Wahab</span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 font-light">
            I am a passionate&nbsp;
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2000,
                'Marketer',
                2000,
                'Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="font-semibold text-primary"
              repeat={Infinity}
            />
          </div>
          
          <p className="max-w-xl mx-auto lg:mx-0 text-gray-500 dark:text-gray-400 mb-10">
            I specialize in crafting intelligent digital experiences that bridge the gap between powerful technology and strategic marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-100 font-bold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6">
            <Link href="#" target="_blank" className="text-3xl text-gray-500 dark:text-gray-400 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaGithub />
            </Link>
            <Link href="#" target="_blank" className="text-3xl text-gray-500 dark:text-gray-400 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaLinkedin />
            </Link>
            <Link href="#" target="_blank" className="text-3xl text-gray-500 dark:text-gray-400 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaFacebook />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Image */}
<motion.div
  variants={fadeIn('left', 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex justify-center items-center"
>
  {/* Floating animation container */}
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    }}
    // Adjusted sizing for better visual balance on large screens
    className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]"
  >
    {/* Refined background glow effect for a more subtle look */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-400 rounded-full blur-2xl opacity-40"></div>
    
    <Image
      src="/profile-pic.png" 
      alt="Photograph of Abdul Wali"
      width={500}
      height={500}
      className="relative rounded-full w-full h-full object-cover shadow-lg"
      priority
    />
  </motion.div>
</motion.div>
      </div>
    </section>
  );
};

export default Hero;
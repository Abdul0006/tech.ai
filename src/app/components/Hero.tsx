// import { LinkIcon } from '@heroicons/react/24/outline'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

// const Hero = () => {
//   return (
//     <section className="py-28 container max-w-7xl mx-auto px-4">
//         <div className='max-w-3xl mx-auto text-center'>
//             <div className='flex flex-col items-center mb-4'>
//                 <Image src="/Profile.jpg" alt = 'profile image' width={100} height={100} 
//                 className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
//             </div>
//             <h1 className='text-4xl md:text-6xl font-bold mb-6'>Hi! I am <span className='text-primary'>Abdul</span></h1>
//             <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>A passionate AI Engineer and Marketer</p>
            
//             <div className='flex justify-center space-x-4 mb-8'>
//             <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
//             <FaGithub/>
//             </Link>

//             <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
//             <FaLinkedin/>
//             </Link>

//             <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
//             <FaFacebook/>
//             </Link>
//             </div>
//             <div className='flex flex-col md:flex-row justify-center gap-4'>
//                 <Link href="/projects" className='inline-block px-8 py-3 bg-primary w-full md:w-auto  text-white rounded-lg hover:bg-primary/70 transition-colors duration-300'>
//                     View Projects
//                 </Link>

//                 <Link href="/projects" className='inline-block px-8 py-3 bg-gray-500 w-full md:w-auto  text-white  rounded-lg hover:bg-gray-300 hover:text-gray-800 transition-colors duration-300'>
//                     Contact Me
//                 </Link>
//             </div>
//         </div>
//         </section>
//   )
// }

// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
// import Image from 'next/image'
// import Link from 'next/link'

// const Hero = () => {
//   return (
//     <section className="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-32 px-4">
//       <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
//       <div className="relative max-w-5xl mx-auto text-center z-10">
//         <div className="flex flex-col items-center mb-6">
//           <Image
//             src="/Profile.jpg"
//             alt="profile image"
//             width={120}
//             height={120}
//             className="rounded-full shadow-xl ring-4 ring-primary w-32 h-32 object-cover mb-4"
//           />
//         </div>

//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
//           Hello, I’m <span className="text-primary">Abdul</span>
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
//           A passionate <span className="font-medium text-primary">AI Engineer</span> and <span className="font-medium text-primary">Marketer</span> crafting intelligent digital experiences.
//         </p>

//         <div className="flex justify-center space-x-6 mb-10">
//           <Link href="https://github.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//             <FaGithub />
//           </Link>
//           <Link href="https://linkedin.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//             <FaLinkedin />
//           </Link>
//           <Link href="https://facebook.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//             <FaFacebook />
//           </Link>
//         </div>

//         <div className="flex flex-col md:flex-row justify-center gap-4">
//           <Link
//             href="/projects"
//             className="inline-block px-8 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary/80 transition-all duration-300 w-full md:w-auto"
//           >
//             View Projects
//           </Link>
//           <Link
//             href="/contact"
//             className="inline-block px-8 py-3 border border-gray-500 text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-full md:w-auto"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// // export default Hero

// export default Hero

// import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
// import Image from 'next/image'
// import Link from 'next/link'

// const Hero = () => {
//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-28 px-4">
//       <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
//         {/* Left Content */}
//         <div className="text-center md:text-left md:w-1/2">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
//             Hello, I’m <span className="text-primary">Abdul</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
//             A passionate <span className="font-medium text-primary">AI Engineer</span> and <span className="font-medium text-primary">Marketer</span> crafting intelligent digital experiences.
//           </p>

//           <div className="flex justify-center md:justify-start space-x-6 mb-8">
//             <Link href="https://github.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//               <FaGithub />
//             </Link>
//             <Link href="https://linkedin.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//               <FaLinkedin />
//             </Link>
//             <Link href="https://facebook.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
//               <FaFacebook />
//             </Link>
//           </div>

//           <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
//             <Link
//               href="/projects"
//               className="inline-block px-8 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary/80 transition-all duration-300 w-full md:w-auto"
//             >
//               🚀 View Projects
//             </Link>
//             <Link
//               href="/contact"
//               className="inline-block px-8 py-3 border border-gray-500 text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-full md:w-auto"
//             >
//               📬 Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Right Profile Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <Image
//             src="/Profile.jpg"
//             alt="Profile image"
//             width={250}
//             height={250}
//             className="rounded-full shadow-2xl ring-4 ring-primary object-cover w-64 h-64"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-28 px-4">
      <div className="container max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Hello, I’m <span className="text-primary">Abdul</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate <span className="font-medium text-primary">AI Engineer</span> and <span className="font-medium text-primary">Marketer</span> crafting intelligent digital experiences.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 mb-8">
            <Link href="https://github.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaLinkedin />
            </Link>
            <Link href="https://facebook.com" target="_blank" className="text-2xl text-gray-600 dark:text-gray-300 hover:text-primary transition-transform transform hover:scale-125 duration-300">
              <FaFacebook />
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-primary/80 transition-all duration-300 w-full md:w-auto"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-gray-500 text-gray-800 dark:text-gray-100 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 w-full md:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Profile Image - rectangular and modern */}
        <div className="md:w-1/2 flex justify-center md:justify">
          <div className="overflow-hidden rounded-xl shadow-2xl ring-4 hover:scale-125 ring-primary transform hover:rotate-1 transition duration-500">
            <Image
              src="/Profile.jpg"
              alt="Profile image"
              width={320}
              height={380}
              className="object-cover w-72 h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

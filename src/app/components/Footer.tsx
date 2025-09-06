import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
        <div className='container mx-w-7xl px-4 py-8 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='mb-4 md:mb-0'>
                    <Link href='/' className='text-xl font-bold text-primary '>techAI&trade;</Link>
                    <p className='text-sm text-secondary mt-2 '> {new Date().getFullYear()} techAI all rights reserved.</p>

                </div>
                <div className='flex space-x-4 mb-8'>
                    <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
                        <FaGithub/>
                    </Link>

                    <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
                        <FaLinkedin/>
                    </Link>

                    <Link href='/' className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-color duration-300'>
                        <FaFacebook/>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'

const NewsLetter = () => {
  return (
    <section className='py-20 bg-white/70 dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up'>
        <div className='p-8 md:p-12'>
                <div className='max-w-2xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <h2 className='text-2xl mb-4 font-bold'>Subscribe to my Newsletter</h2>
                            <p className='text-gray-600 dark:text-gray-400 mb-6'>Get the latest updates, articles, and exclusive content delivered straight to your inbox.</p>
                        </div>
                        <form>
                        <div className='flex flex-col md:flex-row gap-4'>
                            <input 
                            type='email' 
                            placeholder='Enter your email address' 
                            className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white'
                            required
                        />
                            <button 
                            type='submit' 
                            className='px-6 py-2 bg-blue-600 text-white rounded-md transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            Subscribe
                            </button>
                        </div>
                        </form>
                    </div>

                </div>

        </div>
    </section>
)
}

export default NewsLetter
// import { div } from "framer-motion/client"

import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectsPage = () => {
    return (
        <main className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
            <Projects />
        </main>
    )
}
const Projects = () => {
          return (
            <section className='py-20 container max-w-7xl mx-auto px-4'>
                <h2 className='text-3xl font-bold mb-12 text-center'>My Projects</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map((project) =>
                        <article key={project.title} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                            <div className='relative aspect-video rounded-lg overflow-hidden mb-4'>
                                <Image src={project.image} alt={project.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                            <p className='dark:text-gray-300 text-gray-800 mb-4'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4 justify-start'>
                                {
                                    project.technologies.map((tech)=>
                                    <span className='inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm mr-2 mb-2' key={tech}>
                                        {tech}
                                    </span>
                                    )
                                }
                            </div>
        
                            <div className='flex items-center justify-start mt-2 gap-4'>
                                <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'>
                                    <FaGithub className='w-5 h-5' /> <span>Code</span>
                                </Link>
                                <Link href={project.githubLink} target='_blank' className='flex items-center gap-2 text-secondary hover:text-primary transition-colors'>
                                    <FaExternalLinkAlt className='w-5 h-5' /> <span>Live Demo</span>
                                </Link>
                            </div>
        
                        </article>
                        )
                    }
                </div>
            </section>
          )
        }
        
export default ProjectsPage;
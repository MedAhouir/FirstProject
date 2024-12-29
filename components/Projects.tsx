import { PROJECTS } from "@/constants"
import Image from "next/image"

const Projects = () => {
  return (
    <section className="my-10 flex flex-col lg:flex-row justify-between container text-white px-16">
        {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col gap-2 w-[500px] my-6">
                <Image src={project.picture} alt={project.title} width={500} height={300} />
                <h3 className="font-lora font-400 text-3xl py-5">{project.title}</h3>
                <p className="text-gray-400 text-lg w-[485px]">{project.description}</p>
            </div>
        ))}
    </section>
  )
}

export default Projects
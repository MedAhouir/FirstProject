import { LOGOS } from "@/constants"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="text-start p-16 text-white container">
      <h2 className="text-6xl mb-4 font-lora">
        <div className="w-full">Helping companies build</div>
        <div className="mt-3">better, scalable software.</div>
      </h2>
      <div className="w-[600px] h-[150px] text-start mx-auto lg:mx-0">
        <p className="text-gray-400 text-lg">
          Award-winning web developer and author, with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook, and
          more.
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-between items-center mt-8 opacity-70">
        {LOGOS.map((logo) => (
          <div key={logo.key} className="flex justify-center basis-1/6 sm:basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <Image 
              src={logo.path} 
              alt={logo.key} 
              width={100} 
              height={100}  
            />
          </div>
          ))}
      </div>
    </section>
  )
}

export default Hero
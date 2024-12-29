import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import ContactButton from "./ContactButton"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-9 px-16 bg-black text-white">
        <Link href={"/"} className="text-lg font-lora">Mohamed <span className="font-bold">AHOUIR</span></Link>
        <div className="hidden lg:flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} 
            className="regular-16 text-gray-400 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-white">
                {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex">
          <ContactButton title="Get in touch" className="hidden lg:flex" />
        </div>
        <div className="flex lg:hidden">
          <Image src={"Hamburger Menu.svg"} alt="Menu" height={30} width={30} className="cursor-pointer"></Image>
        </div>
    </nav>
  )
}

export default Navbar
import { CONTACTS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='mt-10 flex flex-row bg-gray-700 justify-between text-white py-6 px-[5.5rem]'>
        <Link href={"/"} className="text-lg font-lora">Mohamed <span className="font-bold">AHOUIR</span></Link>
        <div className='flex flex-row justify-between gap-2 lg:mr-10'>
            {CONTACTS.map((contact) => (
                 <Image 
                    src={contact.path} 
                    alt={contact.key} 
                    width={30} 
                    height={30} />
            ))}
        </div>
    </section>
  )
}

export default Footer
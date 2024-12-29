import Link from "next/link";

type ButtonProps = {
  title: string;
  className?: string
}

const ContactButton = ({className, title}:ButtonProps) => {
  return (
    <button className={`font-lora px-8 py-3 bg-yellow-300 text-black  dark:border-white font-semibold ${className}`}>
      <Link href="#">{title}</Link>
    </button>
  )
}

export default ContactButton
      
   
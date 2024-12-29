import ContactButton from "./ContactButton"

const Contact = () => {
  return (
    <section className="text-start p-16 text-white container">
        <h3 className="font-lora text-4xl mb-4">Interested in working with me?</h3>
        <p className="w-[450px] mb-4 text-gray-400">I'm active on all social media platforms listed below,
            but you can also me an email and I will get back to you within 24-48 hours.</p>
        <ContactButton title="Get in touch" className="flex" />
    </section>
  )
}

export default Contact
import AccordionGallery from "./ui/reactbits/AccordionGallery"

const socialLinks = [
  {
    image: "/LinkedIn.png",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/jagan368/",
  },
  {
    image: "/Medium.png",
    label: "Medium",
    link: "https://medium.com/@jagan_reddy",
  },
  {
    image: "/Github.png",
    label: "GitHub",
    link: "https://github.com/JaganReddy-dev/",
  },
]

const Connect = () => {
  return (
    <section id="connect" className="flex py-12 md:py-20 flex-col px-4">
      <div className="max-w-5xl mx-auto w-full gap-10">
        <h1 className="text-4xl font-semibold text-indigo-400 uppercase tracking-widest text-center">
          Connect
        </h1>
        <h2 className="text-3xl font-medium text-white leading-tight mb-10 text-center">
          Find me around <span className="text-indigo-400">The Web</span>
        </h2>

        <AccordionGallery
          items={socialLinks}
          defaultIndex={0}
          accentColor="#818cf8"
          height={340}
          expandRatio={0.74}
          trigger="hover"
          grayscale
        />
      </div>
    </section>
  )
}

export default Connect

"use client"

import AccordionGallery from "./ui/reactbits/AccordionGallery"
import ConnectCard from "./cards/ConnectCard"
import usePrefersDark from "../hooks/usePrefersDark"

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
    image: "/GitHub.png",
    label: "GitHub",
    link: "https://github.com/JaganReddy-dev/",
  },
]

const Connect = () => {
  const prefersDark = usePrefersDark()

  return (
    <section id="connect" className="flex py-12 md:py-20 flex-col px-4">
      <div className="max-w-5xl mx-auto w-full gap-10">
        <h1 className="text-4xl font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest text-center">
          Connect
        </h1>
        <h2 className="text-3xl font-medium text-gray-900 dark:text-white leading-tight mb-10 text-center">
          Find me around <span className="text-indigo-600 dark:text-indigo-400">The Web</span>
        </h2>

        {/* Hover-driven accordion on desktop; touch users get simple
            stacked cards since the accordion needs hover to work well. */}
        <div className="hidden md:block">
          <AccordionGallery
            items={socialLinks}
            defaultIndex={0}
            accentColor="#818cf8"
            height={340}
            expandRatio={0.74}
            trigger="hover"
            grayscale
            overlayColor={prefersDark ? "#060010" : "transparent"}
            textColor={prefersDark ? "#ffffff" : "#0f172a"}
          />
        </div>

        <div className="flex md:hidden flex-col items-center gap-5">
          {socialLinks.map((social) => (
            <ConnectCard
              key={social.label}
              socialName={social.label}
              src={social.image}
              link={social.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Connect

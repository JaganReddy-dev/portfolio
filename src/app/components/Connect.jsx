import ConnectCard from "./cards/ConnectCard"

const Connect = () => {
  return (
    <section id="connect" className="flex py-20 mb-30 flex-col">
      <h1 className="text-4xl font-semibold text-indigo-400 uppercase tracking-widest text-center">
        Connect
      </h1>
      <h2 className="text-3xl font-medium text-white leading-tight mb-10 text-center">
        Find me around <span className="text-indigo-400">The Web</span>
      </h2>
      <div className="flex md:flex-row items-center flex-col w-full justify-center gap-5 mt-5">
        <ConnectCard
          socialName="LinkedIn"
          src="/LinkedIn.png"
          link="https://www.linkedin.com/in/jagan368/"
        />
        <ConnectCard
          socialName="Medium"
          src="/Medium.png"
          link="https://medium.com/@jagan_reddy"
        />
        <ConnectCard
          socialName="GitHub"
          src="/GitHub.png"
          link="https://github.com/JaganReddy-dev/"
        />
      </div>
    </section>
  )
}

export default Connect

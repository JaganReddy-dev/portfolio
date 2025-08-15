import Image from "next/image";
import Typewriter from "./ui/TypeWriter";

const Hero = () => {
  const tech = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSql",
    "Jest",
    "Tailwind CSS",
  ];
  return (
    <>
      <section className="flex flex-col md:flex-row mt-20 mx-20 items-center justify-center gap-10">
        {/* Left - Profile */}
        <div className="flex flex-col items-center">
          <Image
            src="/Hero.png"
            alt="Profile picture of Jagan Reddy"
            className="w-40 h-40 rounded-full object-cover hover:cursor-pointer"
            priority
            width={160}
            height={160}
          />
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold">Hello,</h1>
            <h1 className="text-xl font-bold">I am Jagan Reddy</h1>
            <p className="text-gray-500">Software Engineer • Web Developer</p>
          </div>
        </div>

        {/* Right - About */}
        <div className="md:w-1/2">
          <p className="text-lg leading-relaxed">
            I am a software engineer with with a Master's degree and AWS
            certification, passionate about web development and creating
            innovative solutions. I specialize in building interactive and
            user-friendly web applications.
            <br />
            <br />
            <span className="">My primary tools of choice Includes:</span>
          </p>
          {/* Fixed container with minimum height to prevent layout shift */}
          <div className="min-h-[2rem] mt-2">
            <Typewriter tech={tech} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

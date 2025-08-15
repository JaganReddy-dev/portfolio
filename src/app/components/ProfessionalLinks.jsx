import ProfessionalCard from "./ui/ProfessionalCard";

const ProfessionalLinks = () => {
  return (
    <section id="socials" className="flex my-20 flex-col">
      <h1 className="text-4xl font-sans text-center mb-3">Find me on!</h1>
      <div className="flex md:flex-row items-center flex-col w-full justify-center gap-5 mt-5">
        <ProfessionalCard
          projectName="LinkedIn"
          src="/LinkedIn.png"
          link="https://www.linkedin.com/in/jagan368/"
        />
        <ProfessionalCard
          projectName="Medium"
          src="/Medium.png"
          link="https://medium.com/@jagan_reddy"
        />
        <ProfessionalCard
          projectName="GitHub"
          src="/GitHub.png"
          link="https://github.com/JaganReddy-dev/"
        />
      </div>
    </section>
  );
};

export default ProfessionalLinks;

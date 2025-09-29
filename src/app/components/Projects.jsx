import ProfessionalCard from "./ui/ProfessionalCard";

const Projects = () => {
  return (
    <section id="socials" className="flex my-20 flex-col">
      <h1 className="text-4xl font-sans font-bold text-center mb-3">
        Projects
      </h1>
      <div className="flex md:flex-row items-center flex-col w-full justify-center gap-5 mt-5">
        <ProfessionalCard
          projectName="AWS Static Site"
          src="/AWS-Static-Site.png"
          link="https://voidspace-static-website-bucket.s3.us-east-1.amazonaws.com/index.html"
        />
      </div>
    </section>
  );
};

export default Projects;

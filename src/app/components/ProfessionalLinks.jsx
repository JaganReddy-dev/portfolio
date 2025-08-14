import React from "react";
import ProfessionalCard from "./ui/ProfessionalCard";
import GihubImage from "../../../public/Github.png";
import LinkedinImage from "../../../public/Linkedin.png";
import MediumImage from "../../../public/Medium.png";

const ProfessionalLinks = () => {
  return (
    <section id="socials" className="flex my-20 flex-col">
      <h1 className="text-4xl font-sans text-center mb-3">Find me on!</h1>
      <div className="flex md:flex-row items-center flex-col w-full justify-center gap-5 mt-5">
        <ProfessionalCard
          projectName="LinkedIn"
          path={LinkedinImage}
          link="https://www.linkedin.com/in/jagan368/"
        />
        <ProfessionalCard
          projectName="Medium"
          path={MediumImage}
          link="https://medium.com/@jagan_reddy"
        />
        <ProfessionalCard
          projectName="Github"
          path={GihubImage}
          link="https://github.com/JaganReddy-dev/"
        />
      </div>
    </section>
  );
};

export default ProfessionalLinks;

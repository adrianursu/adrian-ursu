import ExperienceCard from "./ExperienceCard";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import FlexLarge from "../Layout/FlexLarge";

import {
  universityTechnologies,
  nagarroTechnologies,
  creativeTimTechnologies,
} from "../../utils/technologies";

const MyExperience = () => {
  return (
    <FlexLarge>
      <ExperienceCard
        imageSrc={design}
        imageAlt="image-design"
        year={"2019-2022"}
        where='Bachelor Degree in Computer Science University "Lucian Blaga" of Sibiu, Romania'
        technologies={universityTechnologies}
      />
      <ExperienceCard
        imageSrc={code}
        imageAlt="code-image"
        year={"2020-2021"}
        where="Remote Learning and Summer Intern Nagarro Company (Sibiu)"
        technologies={nagarroTechnologies}
      />
      <ExperienceCard
        imageSrc={consulting}
        imageAlt="like-image"
        year="2021"
        where="Front-End Developer Intern at Creative Tim Company (Bucharest)"
        technologies={creativeTimTechnologies}
      />
    </FlexLarge>
  );
};

export default MyExperience;

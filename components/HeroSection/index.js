import Image from "next/image";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import adrian from "../../public/adrian.jpg";

const HeroSection = () => {
  return (
    <div className="text-center pb-10 px-15 md:px-10">
      <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Adrian Ursu
      </h2>
      <h3 className="text-lg py-2 dark:text-white md:text-3xl">
        Front-End Developer
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl md:py-5">
        I am an ambitious and progress-focused young frontend developer, fresh
        graduate in Computer Science. Recently relocated to Copenhagen, looking
        for new opportunities.
      </p>
      <div className="mx-auto rounded-full w-60 h-60 relative overflow-hidden mt-5 md:h-96 md:w-96 lg:h-96 lg:w-96">
        <Image
          src={adrian}
          layout="fill"
          objectFit="cover"
          alt="image of Adrian Ursu"
          priority
        />
      </div>
      <div className="text-5xl flex justify-center gap-16 pt-6 text-gray-600 dark:text-gray-400">
        <a
          target="_blank"
          href="https://www.github.com/adrianursu"
          rel="noreferrer"
        >
          <AiFillGithub className="grow" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/adrian.ursu8"
          rel="noreferrer"
        >
          <AiFillInstagram className="grow" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ursu-adrian-9487461b9/"
        >
          <AiFillLinkedin className="grow" />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;

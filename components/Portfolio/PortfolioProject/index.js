import Image from "next/image";

const PortfolioProject = ({
  redirectTo,
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
}) => {
  return (
    <div className="basis-1/3 flex-1 grow">
      <a href={redirectTo} target="_blank" rel="noreferrer">
        <Image
          className="rounded-lg object-cover cursor-pointer"
          width={"100%"}
          height={"80%"}
          layout="responsive"
          src={imageSrc}
          alt={imageAlt}
        />

        <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-900 dark:text-teal-500">
          {projectName}
        </h4>
      </a>
      <p className="text-sm text-center">{projectDescription}</p>
    </div>
  );
};

export default PortfolioProject;

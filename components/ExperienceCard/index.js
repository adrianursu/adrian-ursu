import Card from "../Layout/Card";
import Image from "next/image";
import Technology from "../Technology";

const ExperienceCard = ({ year, where, technologies, imageSrc, imageAlt }) => {
  return (
    <Card>
      <Image src={imageSrc} width={100} height={100} alt={imageAlt} />
      <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
        {year}
      </h3>
      <p className="py-2 text-xs md:text-sm dark:text-gray-200">{where}</p>
      <hr className="p-2" />

      <div className="grid grid-cols-2 gap-7 font-courierPrime">
        {technologies.map((technology) => {
          return <Technology name={technology} key={technology} />;
        })}
      </div>
    </Card>
  );
};

export default ExperienceCard;

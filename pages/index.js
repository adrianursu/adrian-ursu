import Head from "next/head";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import adrian from "../public/adrian.jpg";
import maiestria from "../public/laptop.jpg";
import chat from "../public/chat-bachelor.jpg";
import myPaint from "../public/my-paint.jpg";
import dashboard from "../public/creative-tim.jpg";
import dogs from "../public/dogs.jpg";
import magdacesti from "../public/magdacesti.jpg";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          onClick={() => {
            setTheme("light");
          }}
          className="cursor-pointer text-2xl text-yellow-300 rotate "
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className="cursor-pointer text-2xl text-gray-700"
          onClick={() => {
            setTheme("dark");
          }}
        />
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Adrian Ursu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bgLight px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="pt-10 pb-8 mb-6 flex justify-between dark:text-white md:mb-12">
            <h1 className="font-courierPrime text-xl">&lt;/&gt;</h1>
            <ul className="flex items-center">
              <li>{renderThemeChanger()}</li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://raw.githubusercontent.com/adrianursu/adrianursu.github.io/main/public/cv.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center pb-10 px-15 md:px-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Adrian Ursu
            </h2>
            <h3 className="text-lg py-2 dark:text-white md:text-3xl">
              Front-End Developer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl md:py-5">
              I am an ambitious and progress-focused young frontend developer,
              fresh graduate in Computer Science. Recently relocated to
              Copenhagen, looking for new opportunities.
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
        </section>
        <section>
          <div>
            <h3 className="text-2xl py-1 dark:text-white md:text-3xl">
              Educational &#38; Professional Background
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              During the last years I have actively studied to broaden my
              understanding and skills in IT. Therefore, I have decided that
              being a <span className="text-teal-500"> front-end </span>
              developer is the path I want to pursue as this career matches my
              abilities, needs and passion. I believe that IT is a dynamic,
              prospective industry, where
              <span className="text-teal-500"> self-learning</span> and taking
              additional courses is a key to factor to success.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
              <Image src={design} width={100} height={100} alt="image-design" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                2018-2022
              </h3>
              <p className="py-2 text-xs md:text-sm dark:text-gray-200">
                Bachelor Degree in Computer Science University &quot;Lucian
                Blaga&quot; of Sibiu, Romania
              </p>
              <hr className="p-2" />

              <div className="grid grid-cols-2 gap-7 font-courierPrime">
                <div className="item text-xs rounded-xl">Data Structures</div>

                <div className="item text-xs flex items-center justify-center  rounded-xl">
                  OOP
                </div>
                <div className="item text-xs  rounded-xl">Algorithms</div>
                <div className="item text-xs  rounded-xl">Clean Code</div>
                <div className="item text-xs  rounded-xl">C++</div>
                <div className="item text-xs rounded-xl">Java</div>
                <div className="item text-xs  rounded-xl">HTML5</div>
                <div className="item text-xs  rounded-xl">CSS3</div>
                <div className="item text-xs  rounded-xl">Linux</div>
                <div className="item text-xs  rounded-xl">MySQL</div>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <Image src={code} width={100} height={100} alt="code-image" />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200 ">
                2020-2021
              </h3>
              <p className=" py-2 text-xs md:text-sm dark:text-gray-200">
                Remote Learning and Summer Intern Nagarro Company (Sibiu)
              </p>
              <hr className="p-2" />
              <div className="grid grid-cols-2 gap-7 font-courierPrime">
                <div className="item text-xs rounded-xl ">Java</div>

                <div className="item text-xs  rounded-xl">SpringBoot</div>
                <div className="item text-xs  rounded-xl">Maven</div>
                <div className="item text-xs  rounded-xl">Hibernate</div>
                <div className="item text-xs rounded-xl flex justify-center items-center">
                  Git
                </div>
                <div className="item text-xs rounded-xl">UML Diagrams</div>
                <div className="item text-xs m-auto  rounded-xl">
                  Agile Methodologies
                </div>
                <div className="item text-xs  rounded-xl">Design Patterns</div>
              </div>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="like-image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                2021
              </h3>
              <p className=" py-2 text-xs md:text-sm dark:text-gray-200">
                Front-end Developer Intern at Creative Tim Company (Bucharest)
              </p>
              <hr className="p-2" />
              <div className="grid grid-cols-2 gap-7 font-courierPrime">
                <div className="item text-xs rounded-xl ">JavaScript</div>

                <div className="item text-xs  rounded-xl">React.js</div>
                <div className="item text-xs  rounded-xl">MaterialUI</div>
                <div className="item text-xs  rounded-xl">JSS</div>
                <div className="item text-xs  rounded-xl">
                  UI/UX Best Practices
                </div>
                <div className="item text-xs  rounded-xl">
                  Styled Components
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some past projects I have worked on.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://www.maiestria.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover cursor-pointer"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={maiestria}
                  alt="maiestria.com"
                />

                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  www.maiestria.com
                </h4>
              </a>
              <p className="text-sm">
                Developed & Customized wordpress e-commerce for a community of
                15k+ members.
              </p>
            </div>
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://my-chat-bachelor.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={chat}
                  alt="chat app"
                />
                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  myChat
                </h4>
              </a>
              <p className="text-sm">
                Bachelor application developed using MERN Stack + Socket.IO.
                ChakraUI used as a design system for the frontend.
              </p>
            </div>
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://github.com/adrianursu/myPaint"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={myPaint}
                  alt="paint done in c#"
                />
                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  Paint Clone
                </h4>
              </a>
              <p className="text-sm">
                Paint clone developed in C# using Windows Forms. Added image
                processing such as zoom, crop with preview, rotate, flip.
              </p>
            </div>
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://material-design-dashboard-2.vercel.app/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={dashboard}
                  alt="creative-tim-dashboard"
                />
                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  Material Dashboard 2
                </h4>
              </a>
              <p className="text-sm">
                As an Intern at Creative Tim, I was responsible for upgrading
                one of the products using React + MaterialUI as a design system.
                I was assigned a mentor who guided me in order to fulfil all the
                tasks.
              </p>
            </div>
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://github.com/adrianursu/dog-api-project"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={dogs}
                  alt="dogs-breeds-project"
                />
                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  Dog Breeds
                </h4>
              </a>
              <p className="text-sm">
                Web app for fetching all the dog breeds and photos of them. Also
                you can add an image to favorites and delete it. (React, React
                Router, Axios).
              </p>
            </div>
            <div className="basis-1/3 flex-1 grow">
              <a
                href="https://www.magdacesti.md"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"80%"}
                  layout="responsive"
                  src={magdacesti}
                  alt="magdacesti.md"
                />
                <h4 className="text-xl text-center font-courierPrime text-teal-600">
                  www.magdacesti.md
                </h4>
              </a>
              <p className="text-sm">
                Developed & Customized wordpress website of my hometown
                Măgdăcești.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

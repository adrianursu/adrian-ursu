import Head from "next/head";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import maiestria from "../public/1.jpg";
import chat from "../public/3.jpg";
import myPaint from "../public/4.jpg";
import dashboard from "../public/5.jpg";
import dogs from "../public/6.jpg";
import magdacesti from "../public/2.jpg";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adrian Ursu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bgLight px-10 dark:bg-gray-900 dark:bg-none md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <HeroSection />
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
                <div className="item text-xs  rounded-xl flex justify-center items-center">
                  Design Patterns
                </div>
                <div className="item text-xs  rounded-xl">JUnit</div>
                <div className="item text-xs  rounded-xl">MySQL</div>
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
                <div className="item text-xs  rounded-xl">State Management</div>
                <div className="item text-xs flex justify-center items-center  rounded-xl">
                  Git
                </div>
                <div className="item text-xs  rounded-xl">ChakraUI</div>
                <div className="item text-xs  rounded-xl">TailwindCSS</div>
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

                <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-600">
                  www.maiestria.com
                </h4>
              </a>
              <p className="text-sm text-center">
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
                <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-600">
                  myChat
                </h4>
              </a>
              <p className="text-sm text-center">
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
                <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-600">
                  Paint Clone
                </h4>
              </a>
              <p className="text-sm text-center">
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
                <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-600">
                  Material Dashboard 2
                </h4>
              </a>
              <p className="text-sm text-center">
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
                <h4 className="text-xl text-center pt-4 font-courierPrime text-teal-600">
                  Dog Breeds
                </h4>
              </a>
              <p className="text-sm text-center">
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
                <h4 className="text-xl pt-4 text-center font-courierPrime text-teal-600">
                  www.magdacesti.md
                </h4>
              </a>
              <p className="text-sm text-center">
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

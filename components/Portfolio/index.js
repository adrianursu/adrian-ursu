import PortfolioIntro from "./PortfolioIntro";
import FlexContainer from "./PortfolioIntro/FlexContainer";
import PortfolioProject from "./PortfolioProject";
import maiestria from "../../public/1.jpg";
import chat from "../../public/3.jpg";
import myPaint from "../../public/4.jpg";
import dashboard from "../../public/5.jpg";
import dogs from "../../public/6.jpg";
import magdacesti from "../../public/2.jpg";

const Portfolio = () => {
  return (
    <section className="py-10">
      <PortfolioIntro />
      <FlexContainer>
        <PortfolioProject
          redirectTo={"https://www.maiestria.com"}
          imageSrc={maiestria}
          imageAlt="maiestria.com"
          projectName={"www.maiestria.com"}
          projectDescription="Developed & Customized wordpress e-commerce for a community of 15k+
            members."
        />
        <PortfolioProject
          redirectTo={"https://my-chat-bachelor.herokuapp.com/"}
          imageSrc={chat}
          imageAlt="chat app"
          projectName="myChat"
          projectDescription={
            "Bachelor application developed using MERN Stack + Socket.IO. ChakraUI used as a design system for the frontend."
          }
        />
        <PortfolioProject
          redirectTo={"https://github.com/adrianursu/myPaint"}
          imageSrc={myPaint}
          imageAlt={"paint c#"}
          projectName="Paint Clone"
          projectDescription={
            "Paint clone developed in C# using Windows Forms. Added image processing such as zoom, crop with preview, rotate, flip."
          }
        />
        <PortfolioProject
          redirectTo={
            "https://material-design-dashboard-2.vercel.app/dashboard"
          }
          imageSrc={dashboard}
          imageAlt={"creative-tim-dashboard"}
          projectName="Material Dashboard 2"
          projectDescription={
            "As an Intern at Creative Tim, I was responsible for upgrading one of the products using React + MaterialUI as a design system. I was assigned a mentor who guided me in order to fulfil all the tasks."
          }
        />
        <PortfolioProject
          redirectTo={"https://github.com/adrianursu/dog-api-project"}
          imageSrc={dogs}
          imageAlt={"dogs-breeds-project"}
          projectName="Dog Breeds"
          projectDescription={
            "Web app for fetching all the dog breeds and photos of them. Also you can add an image to favorites and delete it. (React, React Router, Axios)."
          }
        />
        <PortfolioProject
          redirectTo={"https://www.magdacesti.md"}
          imageSrc={magdacesti}
          imageAlt={"magdacesti.md"}
          projectName="www.magdacesti.md"
          projectDescription={
            "Developed & Customized wordpress website of my hometown Măgdăcești."
          }
        />
      </FlexContainer>
    </section>
  );
};

export default Portfolio;

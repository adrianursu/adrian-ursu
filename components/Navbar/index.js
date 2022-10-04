import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Navbar = () => {
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
  );
};

export default Navbar;

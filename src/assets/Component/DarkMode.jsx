import { React, useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const DarkMode = ({theme, setTheme}) => {

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
    
      <MdDarkMode
        onClick={changeTheme}
        className={` positionCenter absolute text-2xl${
          theme === "dark" && "hidden"
        } `}
      />
      <MdOutlineLightMode
        onClick={changeTheme}
        className={` positionCenter absolute text-2xl ${
          theme === "light" && "hidden"
        } `}
      />
    </>
  );
};

export default DarkMode;

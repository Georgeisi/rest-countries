import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const icon = darkMode ? (
    <MdDarkMode style={{ color: "white" }} />
  ) : (
    <MdOutlineDarkMode />
  );

  useEffect(() => {
    if (darkMode === false) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [darkMode]);
  return (
    <div className="d-flex justify-content-between px-3 py-4 bg-dark-blue">
      <p className="text-color-white">Where in the world</p>
      <div
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="d-flex gap-2  align-items-center"
      >
        {icon}
        <p className="text-color-white m-0">Dark Mode</p>
        <Link to='/detail'>Hi</Link>
      </div>
    </div>
  );
};

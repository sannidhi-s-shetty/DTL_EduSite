import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styledComponents/GlobalStyles";
import { useEffect } from "react";
// import { ThemeProvider } from "./styledComponents/GlobalStyles";
import { ThemeProvider } from "styled-components";
// import { basic } from "./styledComponents/Theme.styled.js";
import { basic } from "./styledComponents/Theme.styled";
// import { Redirect } from "react"; 

//Componnets
import Header from "./components/header/Header";
import Home from "./home";
import Calculator from "./components/calculator/Calculator";
import Algebra from "./components/Content/algebra";
import Algebrainfo from "./components/Content/algebraInfo";
import AlgebraTricks from "./components/Content/algebraTricks";
import Quiz from "./quiz";

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState(basic);
  // function to handle user theme selection on click and save it to local storage
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    toggleActiveTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };
  function toggleActiveTheme(theme) {
    const themeBtns = document.querySelectorAll(".theme-btn");
    themeBtns.forEach((themeBtn) => {
      if (themeBtn.classList.contains(theme.name)) {
        themeBtn.classList.add("active");
      } else {
        themeBtn.classList.remove("active");
      }
    });
  }
  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));

    if (currentTheme) {
      setSelectedTheme(currentTheme);
      toggleActiveTheme(currentTheme);
    }
  }, []);
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header HandleThemeChange={HandleThemeChange} />
        <Routes>
          <Route path="/home" exact element={<>
          <Home />
          </>} />
          <Route path="/algebra" exact element={<>
          <Algebra />
          </>} />
          <Route path="/algebra-tricks" exact element={<>
          <AlgebraTricks />
          </>} />
          <Route path="/algebra-info" exact element={<>
          <Algebrainfo />
          </>} />
          <Route path="/calculator" exact element={<>
          <Calculator />
          </>} />
          <Route path="/quiz" exact element={<>
          <Quiz />
          </>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

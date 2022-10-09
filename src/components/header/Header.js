import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";
const Header = ({ HandleThemeChange }) => {
  const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("././home");
    }
    const handleClick3 = () => {
      navigate("../quiz");
  }

    const handleClick2 = () => {
      navigate("./calculator");
  }
  return (
    <nav className="navbar">
      <div>
        <button onClick={handleClick1} type="button" className="mainBtns">Home</button>
        <button onClick={handleClick3} type="button" className="mainBtns">Quiz</button>
        <div className="dropdown">
          <button type="button" className="mainBtns">Algebra</button>
          <div className="dropdown-content">
            <a href="http://localhost:3000/algebra">Concepts</a>
            <a href="http://localhost:3000/algebra-tricks">Tricks</a>
            <a href="http://localhost:3000/algebra-info">ExtraInfo</a>
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="mainBtns">Linear Equations in 2 variables</button>
          <div className="dropdown-content">
            <a href="https://www.youtube.com/watch?v=szovCVjZK_k">reference 1</a>
            <a href="https://www.youtube.com/watch?v=uVoGUBEf4js">reference 2</a>
            <a href="https://www.youtube.com/watch?v=Xe0r3iBoRzo">reference 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="mainBtns">Polynomials</button>
          <div className="dropdown-content">
            <a href="https://www.youtube.com/watch?v=SAQWC_ECu7g">reference 1</a>
            <a href="https://www.youtube.com/watch?v=h-x-BwNsF0U&list=PLag1CXTqVRCeRNYWHTt-m3WfxwAOrn26P">reference 2</a>
            <a href="https://www.youtube.com/watch?v=Np1ZX917I1E">reference 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button type="button" className="mainBtns">Linear Inequalities</button>
          <div className="dropdown-content">
            <a href="https://www.youtube.com/watch?v=IzbfOF55Uho">reference 1</a>
            <a href="https://www.youtube.com/watch?v=lMlGz3Twf5s">reference 2</a>
            <a href="https://www.youtube.com/watch?v=qsXW5kbQnic">reference 3</a>
          </div>
        </div>
      </div>
      <div>
        <button onClick={handleClick2} type="button" className="mainBtns">Calculator</button>
        <ThemeSwitcher HandleThemeChange={HandleThemeChange} />
      </div>
    </nav>
  );
};

export default Header;

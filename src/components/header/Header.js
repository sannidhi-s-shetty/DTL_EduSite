import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";
import Algebra from "../Content/algebra"
const Header = ({ HandleThemeChange }) => {
  const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("././home");
    }

    const handleClick2 = () => {
      navigate("./calculator");
  }
  return (
    <nav class="navbar">
      <div>
        <button onClick={handleClick1} type="button" className="mainBtns">Home</button>
        <div class="dropdown">
          <button type="button" className="mainBtns">Math</button>
          <div class="dropdown-content">
            <a href="http://localhost:3000/algebra">Algebra</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button type="button" className="mainBtns">Linear Equations in 2 variables</button>
          <div class="dropdown-content">
            <a href="https://www.youtube.com/watch?v=szovCVjZK_k">Link 1</a>
            <a href="https://www.youtube.com/watch?v=uVoGUBEf4js">Link 2</a>
            <a href="https://www.youtube.com/watch?v=Xe0r3iBoRzo">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button type="button" className="mainBtns">Polynomials</button>
          <div class="dropdown-content">
            <a href="https://www.youtube.com/watch?v=SAQWC_ECu7g">Link 1</a>
            <a href="https://www.youtube.com/watch?v=h-x-BwNsF0U&list=PLag1CXTqVRCeRNYWHTt-m3WfxwAOrn26P">Link 2</a>
            <a href="https://www.youtube.com/watch?v=Np1ZX917I1E">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button type="button" className="mainBtns">Linear Inequalities</button>
          <div class="dropdown-content">
            <a href="https://www.youtube.com/watch?v=IzbfOF55Uho">Link 1</a>
            <a href="https://www.youtube.com/watch?v=lMlGz3Twf5s">Link 2</a>
            <a href="https://www.youtube.com/watch?v=qsXW5kbQnic">Link 3</a>
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

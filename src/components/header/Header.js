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
          <button type="button" className="mainBtns">Subject B</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button type="button" className="mainBtns">Subject C</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div class="dropdown">
          <button type="button" className="mainBtns">Subject D</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
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

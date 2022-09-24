import ThemeSwitcher from "./ThemeSwitcher";
import { useNavigate } from "react-router-dom";

const Header = ({ HandleThemeChange }) => {
  const navigate = useNavigate();

    const handleClick1 = () => {
        navigate("././home");
    }

    const handleClick2 = () => {
      navigate("./calculator");
  }

  return (
    <header>
      <button onClick={handleClick1} type="button" className="mainBtns">Home</button>
      <button onClick={handleClick2} type="button" className="mainBtns">Calculator</button>
      <h1>Algebra Helper</h1>
      <ThemeSwitcher HandleThemeChange={HandleThemeChange} />
    </header>
  );
};

export default Header;

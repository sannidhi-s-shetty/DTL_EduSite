import { createRoot } from "react-dom/client";

//Styles
import "./assets/Styles.css";
import App from "./App";

const Index = () => {
 return(
  <App />
 );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index />);

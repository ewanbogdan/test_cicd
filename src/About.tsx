import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>About</p>
        <Link to="/">to the Main page</Link>
      </header>
    </div>
  );
};

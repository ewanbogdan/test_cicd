import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Main</p>
        <Link to="/about">to the About page</Link>
      </header>
    </div>
  );
};

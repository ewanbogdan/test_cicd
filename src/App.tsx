import { Link, Route, Routes } from "react-router-dom";
import { Main, About } from "components";

export const App = () => {
  return (
    <div className="background">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about" Component={About} />
      </Routes>
    </div>
  );
};

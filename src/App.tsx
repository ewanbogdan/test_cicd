import { About } from "About";
import { Main } from "Main";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav>
        <ul>
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
    </>
  );
};

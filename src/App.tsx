import { About } from "About";
import { Main } from "Main";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/about" Component={About} />
    </Routes>
  );
};

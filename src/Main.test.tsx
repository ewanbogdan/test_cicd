import React from "react";
import { render, screen } from "@testing-library/react";
import { Main } from "components";

test("renders learn react link", () => {
  render(<Main />);
  const linkElement = screen.getByText(/Main/i);
  expect(linkElement).toBeInTheDocument();
});

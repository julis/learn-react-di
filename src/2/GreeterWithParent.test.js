import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { GreeterContainer, Greeter } from "./GreeterWithParent";

afterEach(cleanup);

test("GreeterContainer should say good morning", async () => {
  const { getByText } = render(<GreeterContainer />);
  fireEvent.click(getByText("Show Alert"));

  expect(getByText("Good Morning")).toBeDefined();
});

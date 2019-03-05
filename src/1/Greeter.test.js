import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { GreeterConcrete } from "./Greeter";

afterEach(cleanup);

test("Greeter should say good morning (concrete)", async () => {
  const { getByText } = render(<GreeterConcrete />);
  fireEvent.click(getByText("Show Alert"));

  expect(getByText("Good Morning")).toBeDefined();
});

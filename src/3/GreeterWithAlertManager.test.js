import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { AlertManager, Greeter } from "./GreeterWithAlertManager";

afterEach(cleanup);

test("GreeterContainer should say good morning", async () => {
  const { getByText } = render(<Greeter />);
  fireEvent.click(getByText("Show Alert"));

  expect(getByText("Good Morning")).toBeDefined();
});

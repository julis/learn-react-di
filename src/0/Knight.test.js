import React from "react";
import { render, cleanup } from "react-testing-library";

import { KnightA, KnightB, KnightC } from "./Knight";

afterEach(cleanup);

test("KnightA should use sword", async () => {
  const { getByText } = render(<KnightA weapon={"sword"} />);

  expect(getByText("Knight with sword")).toBeDefined();
});

test("KnightB should use archer", async () => {
  let knight;
  const { getByText } = render(<KnightB ref={c => (knight = c)} />);
  knight.setWeapon("archer");

  expect(getByText("Knight with archer")).toBeDefined();
});

test("KnightC should use axe", async () => {
  const { getByText } = render(<KnightC weapon={"axe"} />);

  expect(getByText("Knight with axe")).toBeDefined();
});

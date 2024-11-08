import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { App } from "./App";

describe("Behavior App", () => {
  const screenRender = <App />;

  it("should render App", () => {
    const { getByText } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("Effective and efficient");

    expect(body).toBeTruthy();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Footer } from "./Footer";

describe("Behavior Footer", () => {
  const screenRender = <Footer onClick={jest.fn()} />;

  it("should render Footer", () => {
    const { getByText } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("GET STARTED");

    expect(body).toBeTruthy();
  });
});

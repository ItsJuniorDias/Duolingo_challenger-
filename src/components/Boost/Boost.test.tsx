import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Boost } from "./Boost";

describe("Behavior Boost", () => {
  const screenRender = <Boost />;

  it("should render Boost learn", () => {
    const { getByText } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("Boost your learning with Super Duolingo");

    expect(body).toBeTruthy();
  });

  it("should render Boost language", () => {
    const { getByText } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText(
      "Learning a language on Duolingo is completely free, but you can remove ads and support free education with Super. First 2 weeks on us!"
    );

    expect(body).toBeTruthy();
  });
});

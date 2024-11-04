import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import { Body } from "./Body";

describe("Behavior Body", () => {
  const screenRender = (
    <Body onClickAlreay={jest.fn()} onClickFree={jest.fn()} />
  );

  it("should render Body", () => {
    const { getByText } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("GET STARTED");

    expect(body).toBeTruthy();
  });
});

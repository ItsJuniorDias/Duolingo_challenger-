import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { Header } from "./Header";

describe("Behavior Header", () => {
  const screenRender = <Header onClick={jest.fn()} />;

  it("should render Header", () => {
    const { getByText, getByTestId } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("Site language: English");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = getByTestId("custom-button");

    fireEvent.click(button);

    expect(body).toBeTruthy();
  });
});

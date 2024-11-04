import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { Header } from "./Header";

const onClickMock = jest.fn();

describe("Behavior Header", () => {
  const screenRender = <Header onClick={onClickMock} />;

  it("should render Header", () => {
    const { getByText, getByTestId } = render(screenRender);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const body = getByText("Site language: English");

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const button = getByTestId("custom-button");

    fireEvent.click(button);

    expect(body).toBeTruthy();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

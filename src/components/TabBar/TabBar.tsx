import React from "react";

import vectorLeft from "../../assets/vector-left.svg";
import vectorRight from "../../assets/vector_right.svg";

import { TabBar, TitleTabBar, ImageVector } from "./styles";

export const TabBarComponent = () => {
  return (
    <>
      <TabBar>
        <ImageVector src={vectorLeft} />
        <TitleTabBar>{`SPANISH`}</TitleTabBar>
        <TitleTabBar>{`FRENCH`}</TitleTabBar>
        <TitleTabBar>{`GERMAN`}</TitleTabBar>
        <TitleTabBar>{`ITALIAN`}</TitleTabBar>
        <TitleTabBar>{`PORTUGUESE`}</TitleTabBar>
        <TitleTabBar>{`DUTCH`}</TitleTabBar>
        <TitleTabBar>{`JAPANESE`}</TitleTabBar>
        <ImageVector src={vectorRight} />
      </TabBar>
    </>
  );
};

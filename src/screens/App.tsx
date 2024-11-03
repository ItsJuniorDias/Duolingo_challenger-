import React from "react";

import { Header, Body, TabBarComponent, World, Why } from "../components";

import { Divider, ContentDivider } from "./styles";

function App() {
  return (
    <>
      <Header />
      <Body />
      <TabBarComponent />
      <World />
      <ContentDivider>
        <Divider />
      </ContentDivider>
      <Why />
    </>
  );
}

export default App;

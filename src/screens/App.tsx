import React from "react";

import {
  Header,
  Body,
  TabBarComponent,
  World,
  Why,
  Boost,
  Learn,
  Schools,
  English,
  Effective,
  Footer,
} from "../components";

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

      <ContentDivider>
        <Divider />
      </ContentDivider>

      <Boost />

      <ContentDivider>
        <Divider />
      </ContentDivider>

      <Learn />

      <ContentDivider>
        <Divider />
      </ContentDivider>

      <Schools />

      <ContentDivider>
        <Divider />
      </ContentDivider>

      <English />

      <ContentDivider>
        <Divider />
      </ContentDivider>

      <Effective />

      <Footer />
    </>
  );
}

export default App;

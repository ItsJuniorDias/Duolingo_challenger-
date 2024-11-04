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

export function App() {
  return (
    <>
      <Header />
      <Body
        onClickAlreay={() => console.log("Cliquei alreay")}
        onClickFree={() => console.log("Cliquei free")}
      />
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

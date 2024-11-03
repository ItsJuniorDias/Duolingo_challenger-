import React from "react";
import logo from "../assets/logo.svg";
import vectorDown from "../assets/vector_down.svg";
import background from "../assets/background.svg";
import planet from "../assets/planet.svg";
import {
  Container,
  Image,
  Text,
  ImageVector,
  Content,
  Button,
  ContentBody,
  Imagebackground,
  ContentPlanet,
  ImagePlanet,
  ContainerFree,
  ConteinerBody,
} from "./styles";

function App() {
  return (
    <>
      <Container>
        <Image src={logo} />

        <Content>
          <Text>Site language: English</Text>

          <Button onClick={() => console.log("CLICOU")}>
            <ImageVector src={vectorDown} />
          </Button>
        </Content>
      </Container>

      <ContentBody>
        <ConteinerBody>
          <Imagebackground src={background} />

          <ContentPlanet>
            <ImagePlanet src={planet} />
          </ContentPlanet>

          <ContainerFree></ContainerFree>
        </ConteinerBody>
      </ContentBody>
    </>
  );
}

export default App;
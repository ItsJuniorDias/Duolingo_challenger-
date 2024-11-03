import React from "react";

import background from "../../assets/background.svg";
import planet from "../../assets/planet.svg";

import {
  ContentBody,
  ContentPlanet,
  Imagebackground,
  ConteinerBody,
  ImagePlanet,
  ContainerFree,
  ButtonFree,
  ContentFree,
  TitleFree,
  TitleButton,
  ButtonAlready,
  TitleAlready,
} from "./styles";

export const Body = () => {
  return (
    <>
      <ContentBody>
        <ConteinerBody>
          <Imagebackground src={background} />

          <ContentPlanet>
            <ImagePlanet src={planet} />
          </ContentPlanet>

          <ContainerFree />
        </ConteinerBody>
      </ContentBody>

      <ContentFree>
        <TitleFree>
          {`The free, fun, and effective way to\nlearn a language!`}
        </TitleFree>
      </ContentFree>

      <ButtonFree onClick={() => console.log("CLIQUEI AQUI")}>
        <TitleButton>{`GET STARTED`}</TitleButton>
      </ButtonFree>

      <ButtonAlready onClick={() => console.log("CLIQUEI AQUI")}>
        <TitleAlready>{`GET STARTED`}</TitleAlready>
      </ButtonAlready>
    </>
  );
};

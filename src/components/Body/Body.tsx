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

interface BodyProps {
  onClickFree: () => void;
  onClickAlreay: () => void;
}

export const Body = ({ onClickFree, onClickAlreay }: BodyProps) => {
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

      <ButtonFree onClick={onClickFree}>
        <TitleButton>{`GET STARTED`}</TitleButton>
      </ButtonFree>

      <ButtonAlready onClick={onClickAlreay}>
        <TitleAlready>{`I ALREADY HAVE AN ACCOUNT`}</TitleAlready>
      </ButtonAlready>
    </>
  );
};

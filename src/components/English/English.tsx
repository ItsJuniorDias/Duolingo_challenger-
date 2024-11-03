import React from "react";

import icon_english from "../../assets/icon_english.svg";

import {
  Container,
  ContainerEnglish,
  ContainerTextEnglish,
  ContentEnglish,
  DescriptionEnglish,
  ImageVector,
  ImgEnglish,
  TextEnglish,
  TitleEnglish,
} from "./styles";

export const English: React.FC = () => {
  return (
    <ContainerEnglish>
      <ContentEnglish>
        <ContainerTextEnglish>
          <TitleEnglish>{`The Duolingo English Test`}</TitleEnglish>

          <DescriptionEnglish>
            {`Welcome to the convenient, fast, and affordable English test accepted around the world. By integrating the latest assessment science and AI, we empower anyone to take the test where and when they’re at their best.`}
          </DescriptionEnglish>

          <TextEnglish>Bring Duolingo to your classroom</TextEnglish>
        </ContainerTextEnglish>

        <ImgEnglish src={icon_english} />
      </ContentEnglish>
    </ContainerEnglish>
  );
};

import React from "react";

import icon_english from "../../assets/icon_english.svg";

import {
  Container,
  ContainerLearn,
  ContainerTextLearn,
  ContentLearn,
  DescriptionLearn,
  ImageVector,
  ImgLearn,
  TitleLearn,
  TextSchools,
} from "./styles";

export const English: React.FC = () => {
  return (
    <ContainerLearn>
      <ContentLearn>
        <ContainerTextLearn>
          <TitleLearn>{`The Duolingo English Test`}</TitleLearn>

          <DescriptionLearn>
            {`Welcome to the convenient, fast, and affordable English test accepted around the world. By integrating the latest assessment science and AI, we empower anyone to take the test where and when they’re at their best.`}
          </DescriptionLearn>

          <TextSchools>Bring Duolingo to your classroom</TextSchools>
        </ContainerTextLearn>

        <ImgLearn src={icon_english} />
      </ContentLearn>
    </ContainerLearn>
  );
};

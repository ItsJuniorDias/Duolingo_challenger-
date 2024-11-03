import React from "react";

import iconSchools from "../../assets/icon_schools.svg";

import {
  ContainerSchools,
  ContainerTextSchools,
  ContentSchools,
  DescriptionSchools,
  ImgSchools,
  TextSchools,
  TitleSchools,
} from "./styles";

export const Schools: React.FC = () => {
  return (
    <ContainerSchools>
      <ContentSchools>
        <ImgSchools src={iconSchools} />

        <ContainerTextSchools>
          <TitleSchools>{`Duolingo for Schools`}</TitleSchools>

          <DescriptionSchools>
            {`Free teacher tools to help students learn languages through the Duolingo app, both in and out of the classroom.`}
          </DescriptionSchools>

          <TextSchools>Bring Duolingo to your classroom</TextSchools>
        </ContainerTextSchools>
      </ContentSchools>
    </ContainerSchools>
  );
};

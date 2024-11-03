import React from "react";

import icon_effective from "../../assets/icon_effective.svg";

import {
  Container,
  ContainerEffective,
  ContainerTextEffective,
  ContentEffective,
  DescriptionEffective,
  ImageVector,
  ImgEffective,
  TextEffective,
  TitleEffective,
} from "./styles";

export const Effective: React.FC = () => {
  return (
    <>
      <ContainerEffective>
        <ContentEffective>
          <ImgEffective src={icon_effective} />

          <ContainerTextEffective>
            <TitleEffective>{`Effective and efficient courses`}</TitleEffective>

            <DescriptionEffective>
              {`Our courses effectively and efficiently teach reading, listening, and speaking skills. Check out our latest research!`}
            </DescriptionEffective>

            <TextEffective>Learn more about our research</TextEffective>
          </ContainerTextEffective>
        </ContentEffective>
      </ContainerEffective>
    </>
  );
};

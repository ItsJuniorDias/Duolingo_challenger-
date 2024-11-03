import React from "react";

import iconBoost from "../../assets/icon_boost.svg";

import {
  ContainerBoost,
  ContainerTextBoost,
  ContentBoost,
  DescriptionBoost,
  ImgBoost,
  TitleBoost,
  TextLearn,
} from "./styles";

export const Boost = () => {
  return (
    <>
      <ContainerBoost>
        <ContentBoost>
          <ImgBoost src={iconBoost} />

          <ContainerTextBoost>
            <TitleBoost>{`Boost your learning with Super Duolingo`}</TitleBoost>

            <DescriptionBoost>
              {`Learning a language on Duolingo is completely free, but you can remove ads and support free education with Super. First 2 weeks on us!`}
            </DescriptionBoost>

            <TextLearn>Learn more about Super Duolingo</TextLearn>
          </ContainerTextBoost>
        </ContentBoost>
      </ContainerBoost>
    </>
  );
};

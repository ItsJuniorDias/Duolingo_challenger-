import React from "react";

import duolingo from "../../assets/duolingo_icon.svg";

import {
  ContainerWorld,
  ContentWorld,
  ImgWorld,
  ContainerTextWorld,
  TitleWorld,
  DescriptionWorld,
} from "./styles";

export const World = () => {
  return (
    <>
      <ContainerWorld>
        <ContentWorld>
          <ImgWorld src={duolingo} />

          <ContainerTextWorld>
            <TitleWorld>{`The world’s #1 way to learn a language`}</TitleWorld>

            <DescriptionWorld>
              {`Learning with Duolingo is fun, and research shows that it works! With quick, bite-sized lessons, you’ll earn points and unlock new levels while gaining real-world communication skills.`}
            </DescriptionWorld>
          </ContainerTextWorld>
        </ContentWorld>
      </ContainerWorld>
    </>
  );
};

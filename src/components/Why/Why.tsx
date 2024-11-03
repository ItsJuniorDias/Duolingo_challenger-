import React from "react";

import {
  ContainerWhy,
  ContentWhy,
  ContainerNotebook,
  TitleWhy,
} from "./styles";

export const Why = () => {
  return (
    <ContainerWhy>
      <ContentWhy>
        <TitleWhy>{`Why you’ll love learning with Duolingo`}</TitleWhy>

        <ContainerNotebook></ContainerNotebook>
      </ContentWhy>
    </ContainerWhy>
  );
};

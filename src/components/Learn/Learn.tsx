import React from "react";
import iconLearn from "../../assets/icon_learn.svg";

import {
  Container,
  ContainerLearn,
  ContainerTextLearn,
  ContentLearn,
  DescriptionLearn,
  ImageVector,
  ImgLearn,
  TextLearn,
  TitleLearn,
} from "./styles";

export const Learn: React.FC = () => {
  return (
    <>
      <ContainerLearn>
        <ContentLearn>
          <ContainerTextLearn>
            <TitleLearn>{`Learn anytime, anywhere.`}</TitleLearn>

            <DescriptionLearn>
              {`Make your breaks and commutes more productive with our iPhone and Android apps. Download them and see why Apple and Google gave us their highest accolades.`}
            </DescriptionLearn>
          </ContainerTextLearn>

          <ImgLearn src={iconLearn} />
        </ContentLearn>
      </ContainerLearn>
    </>
  );
};

import React from "react";

import fireIcon from "../../assets/fireIcon.svg";
import fireCheck from "../../assets/iconCheck.svg";
import fireNotebook from "../../assets/iconNotebook.svg";
import iconKing from "../../assets/icon_king.svg";
import iconGirl from "../../assets/icon_girl.svg";

import {
  ContainerWhy,
  ContentWhy,
  ContainerNotebook,
  TitleWhy,
  Column,
  Row,
  Description,
  Text,
  ContainerIcon,
  Img,
  ContainerStay,
  ImageNotebookg,
  ImgHave,
} from "./styles";

export const Why = () => {
  return (
    <ContainerWhy>
      <ContentWhy>
        <TitleWhy>{`Why you’ll love learning with Duolingo`}</TitleWhy>

        <ContainerNotebook>
          <Row>
            <ContainerIcon>
              <Img src={fireIcon} />
            </ContainerIcon>
            <Column>
              <Text>Effective and efficient</Text>

              <Description>
                Our courses effectively and efficiently teach reading,
                listening, and speaking skills. Check out our latest research!
              </Description>
            </Column>

            <ContainerStay>
              <ImageNotebookg src={fireNotebook} />
            </ContainerStay>

            <ContainerIcon>
              <Img src={iconKing} />
            </ContainerIcon>
            <Column>
              <Text>Stay motivated</Text>

              <Description>
                We make it easy to form a habit of language learning, with
                game-like features, fun challenges, and reminders from our
                friendly mascot, Duo the owl.
              </Description>
            </Column>
          </Row>
        </ContainerNotebook>

        <ContainerNotebook>
          <Row>
            <ContainerIcon>
              <Img src={fireCheck} />
            </ContainerIcon>
            <Column>
              <Text>Personalized learning</Text>

              <Description>
                Combining the best of AI and language science, lessons are
                tailored to help you learn at just the right level and pace.
              </Description>
            </Column>

            <ContainerIcon>{/* <Img src={iconKing} /> */}</ContainerIcon>
            <Column>
              <Text></Text>

              <Description></Description>
            </Column>

            <ContainerIcon>
              <ImgHave src={iconGirl} />
            </ContainerIcon>
            <Column>
              <Text>Have fun with it!</Text>

              <Description>
                Effective learning doesn’t have to be boring! Build your skills
                each day with engaging exercises and playful characters.
              </Description>
            </Column>
          </Row>
        </ContainerNotebook>
      </ContentWhy>
    </ContainerWhy>
  );
};

import React from "react";

import {
  Container,
  TextTitle,
  Content,
  ButtonFree,
  TitleButton,
  Body,
  Column,
  Row,
  ContentFooter,
  Title,
  Description,
} from "./styles";

export interface FooterProps {
  onClick: () => void;
}

export const Footer = ({ onClick }: FooterProps) => {
  return (
    <>
      <Container>
        <Column>
          <Content>
            <TextTitle>Learn a language with Duolingo.</TextTitle>

            <ButtonFree onClick={onClick}>
              <TitleButton>{`GET STARTED`}</TitleButton>
            </ButtonFree>
          </Content>

          <Body>
            <Row>
              <ContentFooter>
                <Title>About us</Title>
                <Description>Courses</Description>
                <Description>Mission</Description>
                <Description>Approach</Description>
                <Description>Efficacy</Description>
                <Description>Research</Description>
                <Description>Careers</Description>
                <Description>Brand guidelines</Description>
                <Description>Store</Description>
                <Description>Investors</Description>
                <Description>Contact us</Description>
              </ContentFooter>

              <ContentFooter>
                <Title>Products</Title>
                <Description>Duolingo</Description>
                <Description>Duolingo for Schools</Description>
                <Description>Duolingo English Test</Description>
                <Description>Duolingo ABC</Description>
                <Description>Duolingo Math</Description>
                <Description>Podcast</Description>
                <Description>Stories</Description>
                <Description>Duolingo for Business</Description>
                <Description>Super Duolingo</Description>
                <Description>Gift Super Duolingo</Description>
              </ContentFooter>

              <ContentFooter>
                <Title>Apps</Title>
                <Description>Duolingo for Android</Description>
                <Description>Duolingo for iOS</Description>
                <Description>Duolingo ABC (iOS)</Description>
              </ContentFooter>

              <ContentFooter>
                <Title>Help and support</Title>
                <Description>Duolingo FAQs</Description>
                <Description>Schools FAQs</Description>
                <Description>Duolingo English Test FAQs </Description>
                <Description>Status</Description>
              </ContentFooter>

              <ContentFooter>
                <Title>Privacy and terms</Title>
                <Description>Community guidelines</Description>
                <Description>Terms</Description>
                <Description>Privacy</Description>
                <Description>
                  Respecting your "do not sell my personal information" rights
                </Description>

                <Title>Social</Title>
                <Description>Community guidelines</Description>
                <Description>Blog</Description>
                <Description>Instagram</Description>
                <Description>Facebook</Description>
                <Description>Twitter</Description>
                <Description>YouTube</Description>
              </ContentFooter>
            </Row>
          </Body>
        </Column>
      </Container>
    </>
  );
};

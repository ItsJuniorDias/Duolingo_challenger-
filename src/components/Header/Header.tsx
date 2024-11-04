import React from "react";
import logo from "../../assets/logo.svg";
import vectorDown from "../../assets/vector_down.svg";

import { Container, Image, ImageVector, Content, Button, Text } from "./styles";

export interface HeaderProps {
  onClick: () => void;
}

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <Container>
      <Image src={logo} />

      <Content>
        <Text>Site language: English</Text>

        <Button onClick={onClick}>
          <ImageVector src={vectorDown} />
        </Button>
      </Content>
    </Container>
  );
};

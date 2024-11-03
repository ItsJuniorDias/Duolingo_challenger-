import React from "react";
import logo from "../../assets/logo.svg";
import vectorDown from "../../assets/vector_down.svg";

import { Container, Image, ImageVector, Content, Button, Text } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image src={logo} />

      <Content>
        <Text>Site language: English</Text>

        <Button onClick={() => console.log("CLICOU")}>
          <ImageVector src={vectorDown} />
        </Button>
      </Content>
    </Container>
  );
};

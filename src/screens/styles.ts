import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #24538f;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  width: 153px;
  height: 36px;
`;

export const ImageVector = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 16px;
`;

export const Button = styled.button`
  background-color: #24538f; /* Blue color with 50% opacity */
  color: white;
  /* padding: 10px 20px; */
  margin-top: 8px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 1;
`;

export const Text = styled.h4`
  font-family: "Nunito-Regular";
  color: #ffffff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentBody = styled.div`
  height: 732px;
  width: 100%;
  background-color: #24538f;
  z-index: 100;
  /* display: flex; */
`;

export const Imagebackground = styled.img`
  height: 1440px;
  width: 100%;
  margin-top: -375px;
`;

export const ContentPlanet = styled.div`
  height: 360px;
  width: 360px;
  margin-left: 125px;
  margin-top: -900px;
`;

export const ImagePlanet = styled.img`
  height: 360px;
  width: 360px;
`;

export const ContainerFree = styled.div`
  height: 360px;
  width: 360px;
`;

export const ConteinerBody = styled.div`
  /* display: flex;
  align-items: center; */
`;

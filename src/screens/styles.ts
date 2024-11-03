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
  z-index: 1;
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

export const ContentFree = styled.div`
  height: 242px;
  width: 713px;
  /* background-color: blue; */
  margin-top: -550px;
  margin-left: 600px;
  display: flex;

  justify-content: center;
`;

export const TitleFree = styled.h1`
  font-family: "Nunito-Regular";
  font-size: 32px;
  text-align: center;
  /* background-color: red; */
  padding-left: 80px;
  padding-right: 80px;
  color: #ffffff;
`;

export const ButtonFree = styled.button`
  width: 320px;
  height: 46px;
  background-color: #58cc02;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 0px;
  margin-top: -100px;
  margin-left: 800px;
`;

export const TitleButton = styled.h1`
  font-family: "Nunito-Bold";
  font-size: 13px;
  color: #ffffff;
`;

export const ButtonAlready = styled.button`
  width: 320px;
  height: 46px;
  background-color: #24538f;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-color: #042c60;
  margin-top: 16px;
  margin-left: 800px;
`;

export const TitleAlready = styled.h1`
  font-family: "Nunito-Bold";
  font-size: 13px;
  color: #ffffff;
`;

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

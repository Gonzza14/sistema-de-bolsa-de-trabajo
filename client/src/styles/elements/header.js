import styled from "styled-components";

export const BaseHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 10vh;
  z-index: 20;
`;

export const BaseTitle = styled.h1`
  font-family: "Montserrat-Bold";
  margin-top: 0.7em;
  margin-right: 1em;
  text-align: center;
  color: #06062A;
`;

export const BaseLogo = styled.img`
  width: 7em;
  margin-left: 0.3em;
`;

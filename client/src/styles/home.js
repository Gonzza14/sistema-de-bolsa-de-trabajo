import styled from "styled-components";

export const HomeContainer = styled.div`
  flex: auto;
  margin-left: 7em;
  flex-direction: column;
  align-items: center;
`;

export const HomeHeader = styled.header`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 92%;
  height: 6em;
`;

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25em;
  height: 100vh;
  width: 100%;
`;

export const HeroContainer = styled.div`
  position: relative;
`;

export const HomeTitle = styled.h1`
  font-family: "Montserrat-Bold";
  margin-top: 0.7em;
  text-align: center;
  color: #f3f3f3;
`;

export const HomeCurve = styled.div``;

export const HomeLogo = styled.img`
  width: 3em;
`;

export const HomeBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroTitle = styled.h2`
  font-family: "Montserrat-Bold";
  text-align: center;
  font-size: 3em;
  color: #06062A;
  margin: 0;
`;

export const HeroTitleTwo = styled.h3`
  font-family: "Montserrat-Bold";
  margin-top: 4em;
  width: 50vh;
  text-align: center;
  color: #0f2651;
`;

export const ButtonEmpresa = styled.button`
  margin-top: 2em;
  text-decoration: none;
  color: #f3f3f3;
  background-color: #E84616;
  padding: 1em;
`;

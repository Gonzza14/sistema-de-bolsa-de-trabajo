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
  width: 90%;
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
  color: #06062A;
`;

export const HomeCurve = styled.div``;

export const HomeLogo = styled.img`
  width: 7em;
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
  color: #06062a;
  margin: 0;
`;

//------------------------------------------------------------
//Seccion 2

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 71.25em;
  max-height: 40em;
  padding: 8rem 6rem;
  display: flex;
  align-items: center;
`;

export const SectionInner = styled.div`
  max-width: 36rem;
`;

export const HeroTitleTwo = styled.h3`
  font-family: "Montserrat-Bold";
  font-size: 1.875rem;
  line-height: 2.75rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  margin-bottom: 2rem;
`;

export const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  margin-bottom: 3rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const ButtonLogin = styled.button`
  margin-top: 2em;
  text-decoration: none;
  color: #f3f3f3;
  background-color: #e84616;
  padding: 1em;
  width: 50%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;


export const ImgSection = styled.img`
  max-width: 25em;
  margin-left: 10em;
  object-fit: cover;
`;

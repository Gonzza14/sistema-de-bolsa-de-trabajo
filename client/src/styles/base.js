import styled from "styled-components";

export const BaseContainer = styled.div`
  flex: auto;
  margin-left: 8em;
  flex-direction: column;
  align-items: center;
`;

export const BaseSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25em;
  height: 100vh;
  width: 100%;
`;

export const BaseSectionHeader = styled(BaseSection)`
  height: 90vh;
`;

export const BaseSectionData = styled(BaseSectionHeader)`
  justify-content: flex-start;
`

export const BaseBody = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const SectionContainer = styled.div`
  width: 100%;
  max-width: 71.25em;
  max-height: 40em;
  padding: 8rem 6rem;
  display: flex;
  align-items: center;
`;


export const DataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const SectionTitle = styled.h1`
`
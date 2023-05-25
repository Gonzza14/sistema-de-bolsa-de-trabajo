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

//Style curriculum

export const BaseContainerCV = styled.div`
  margin: 0 auto;
	border: 2px solid #dcdce6;
  border-radius: 4px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  max-width: 90%;
	width: 100%;
	height: 100%;
  display: flex;
  flex-direction: column;
	align-items: center;
`;

export const ContainerCol = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	flex-wrap: wrap;
	overflow-x: hidden;
`;

export const Column4 = styled.div`
	flex: 3;
	border: 2px solid #dcdce6;
	border-radius: 4px;
	padding: 16px;
	width: 100%;
	margin: 8px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
	position: sticky;
	top:0px;
	min-width: 300px;
`;

export const Column8 = styled.div`
	flex:9;
	border:2px solid #dcdce6;
	border-radius:4px;
	padding:16px;
	margin:8px;
	width:100%;
	height:100%;
	box-shadow:0px1px3px rgba(0,0,0,0.2);
	min-width:300px;
`;

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
  flex-direction: column;
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


export const CardContent = styled.p`
`;

export const CardContainer = styled.div`
  background-color: #F2F2FF;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ButtonOpt = styled.button`
  /* Add your styles here */
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

export const Timeline = styled.div`
  position: relative;
  width: 100%;
`;

export const TimelineCard = styled.div`
margin: 2px;
  position: relative;
  background-color: inherit;
  width: 100%;
`;

export const TimelineCardLeft = styled(TimelineCard)`
  left: 0;
`;

export const TimelineCardContent = styled.div`
  padding: 0.25px; /* Reduce the padding to make the content more compact */
  border-radius: 6px;
  font-size: 14px; /* Reduce the font size to make the text smaller */
  box-shadow: 0px -1px white, 0px -2px white, 0px -3px white, 0px -4px white,
    0px -5px white, 0px -6px white, 0px -7px white, 0px -8px white,
    0px -9px white, 0px -10px #ddd, 2px -10px #ddd, 4p;
`;

export const CardTitle = styled.h2`
  font-size: 16px; /* Reduce the font size to make the text smaller */
`;

export const TimelineCardButtons = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  display: flex;
  align-items: center;
`;
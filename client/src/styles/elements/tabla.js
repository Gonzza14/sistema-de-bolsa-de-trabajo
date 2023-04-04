import styled from "styled-components";

export const TablaContainer = styled.table`
  text-align: left;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  display: table;
  padding: 0;
`;

export const TablaHeader = styled.thead``;

export const TablaHeaderCell = styled.th`
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
  background-color: #06062a;
`;

export const TablaColumnTitle = styled.p`
  font-size: 1em;
  margin: 0;
  text-align: left;
  color: #f3f3f3;
  font-family: "Montserrat-Bold";
`;

export const TablaBody = styled.tbody``;

export const TablaTD = styled.td`
  font-weight: normal;
  font-size: 1em;
  padding-bottom: 1%;
  padding-top: 1%;
  padding-left: 1%;

  &:last-child {
    width: 10%;
  }

  &:nth-child(1) {
    color: #e84616;
  }

  &:hover {
    background-color: #e84616;
    font-weight: bold;
    color: #f3f3f3;

    box-shadow: #c23507 -1px 1px, #c23507 -2px 2px, #c23507 -3px 3px,
      #c23507 -4px 4px, #c23507 -5px 5px, #c23507 -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;

    &:nth-child(1) {
      color: #f3f3f3;
    }
    
    &:last-child(){
      color: #f3f3f3;
    }
  }
`;

export const TablaRow = styled.tr`
  &:nth-child(odd) {
    background-color: #c3c1d2;
  }

  &:nth-child(even) {
    background-color: #c3c1d2;
  }

  &:hover {
    background-color: #747191;

    ${TablaTD}:nth-child(n) {
      color: #f3f3f3;
    }
  }
`;

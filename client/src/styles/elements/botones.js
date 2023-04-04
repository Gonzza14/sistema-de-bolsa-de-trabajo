import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const ButtonRegister = styled(Link)`
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
export const ButtonLogin = styled(ButtonRegister)`
  width: 10em;
  height: 1em;
  margin-top: 0;
`;

export const ButtonCreate = styled(Link)`
  width: 12em;
  height: 1em;
  margin-top: 0;
  margin-bottom: 1em;
  color: #f3f3f3;
  background-color: #e84616;
  padding: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-weight: 600;
`;

export const ButtonOp = styled.button`
  width: 1em;
  margin-right: 0.5em;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  color: #f3f3f3;
  padding: 0.3em
  display: flex;
  
`
export const StyledFontAwesomeIconBoton = styled(FontAwesomeIcon)`
  color: #06062A;

  &:hover {
    color: #f3f3f3
  }
`;

export const SpanButton = styled.span`
  margin-left: 0.5em;
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

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

`

export const ButtonCreate = styled(ButtonRegister)`
    width: 10em;
    height: 1em;
    margin-top: 0;
`
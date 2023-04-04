import { DataContainer } from "../../base";
import styled from "styled-components";
import { ButtonContainer } from "../../elements/botones";

export const GestionSection = styled(DataContainer)`
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 100%;
  max-height: 150%;
`;

export const ButtonSection = styled(ButtonContainer)`
  width: 100%;
  justify-content: flex-end;
`;

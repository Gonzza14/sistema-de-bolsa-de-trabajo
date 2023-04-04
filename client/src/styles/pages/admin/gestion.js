import { DataContainer } from "../../base";
import styled from "styled-components";
import { ButtonContainer } from "../../elements/botones";

export const GestionSection = styled(DataContainer)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const ButtonSection = styled(ButtonContainer)`
  width: 90%;
  justify-content: flex-end;
`;

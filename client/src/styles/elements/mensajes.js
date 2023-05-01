import styled from "styled-components";

export const MensajeValidacion = styled.p`
  color: #e84616;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

export const Mensaje = styled.p`
    padding: 1rem 0rem;
    text-align: center;
    color: #f3f3f3;
    font-weight: bold;
    background-color: ${props => props.bgColor};
    width: 100%;
`;

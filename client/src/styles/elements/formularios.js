import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
`;

export const FormTitle = styled.h2``;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin: 10px 0;
`;

export const FormInput = styled.input`
  border: 0;
  height: 100%;
  padding: 1em 1.3em;
  background: #C3C1D2;
  color: #0F2651;
  border-radius: 3px;
`;

export const FormInputBotton = styled.input`
  margin: 1.5em 0;
  background-color: #06062a;
  width: 50%;
  padding: 1em;
  justify-content: center;
  align-self: flex-end;
  border: 0;
  color: #f3f3f3;


  &:hover {
    background-color: #e84616;
  }
`;

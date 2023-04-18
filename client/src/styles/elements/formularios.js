import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 95%;
`;

export const FormTitle = styled.h2``;
export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin: 10px 0;
`;

export const FormInput = styled.input`
  border: 0;
  height: 6em;
  padding: 1em 1.3em;
  background: #c3c1d2;
  color: #0f2651;
  border-radius: 3px;
`;

export const FormTextArea = styled.textarea`
  border: 0;
  height: 100%;
  padding: 1em 1.3em;
  background: #c3c1d2;
  color: #0f2651;
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

import styled from "styled-components";

export const ModalArticle = styled.article`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
  justify-content: center;
  align-items: center;
  &.is-open {
    display: flex;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 480px;
  min-height: 200px;
  max-height: 600px;
  overflow-y: auto;
  background-color: #c3c1d2;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 2.5em;
  background-color: #06062A;
`;
export const ModalTitleHeader = styled.p`
  font-size: 1rem;
  padding: 0.8em;
  color: #f3f3f3;
  margin: 0;
`;

export const ModalTitle = styled.p`
  font-size: 1rem;
  padding: 0.8em;
`;
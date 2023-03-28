import styled from "styled-components";

export const SearchContainer = styled.fieldset`
  position: relative;
  padding: 0;
  margin-right: 2.5em;
  margin-top: 3em;
  border: 0;
  width: 50em;
`;

export const IconsContainer = styled.div`
  position: absolute;
  top: 0.3em;
  right: -1.5em;
  width: 2em;
  height: 2em;
  overflow: hidden;
`;

export const EquisArriba = styled.div``;

export const EquisAbajo = styled.div``;

export const IconClose = styled.div`
  position: absolute;
  top: 0.4em;
  left: 0.5em;
  width: 75%;
  height: 75%;
  opacity: 0;
  cursor: pointer;
  transform: translateX(-200%);
  border-radius: 50%;
  transition: opacity 0.25s ease,
    transform 0.43s cubic-bezier(0.694, 0.048, 0.335, 1);
  &:before {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: 2px solid transparent;
    border-top-color: #0f2651;
    border-left-color: #0f2651;
    border-bottom-color: #0f2651;
    transition: opacity 0.2s ease;
  }
  ${EquisArriba} {
    position: relative;
    width: 100%;
    height: 50%;
    &:before {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 3px;
      width: 50%;
      height: 2px;
      background-color: #0f2651;
      transform: rotate(45deg);
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      right: 0px;
      width: 50%;
      height: 2px;
      background-color: #0f2651;
      transform: rotate(-45deg);
    }
  }
  ${EquisAbajo} {
    position: relative;
    width: 100%;
    height: 50%;
    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 4px;
      width: 50%;
      height: 2px;
      background-color: #0f2651;
      transform: rotate(-45deg);
    }
    &:after {
      content: "";
      position: absolute;
      top: 5px;
      right: 1px;
      width: 50%;
      height: 2px;
      background-color: #0f2651;
      transform: rotate(45deg);
    }
  }
`;

export const IconSearch = styled.div`
  position: relative;
  top: 5px;
  left: 8px;
  width: 50%;
  height: 50%;
  opacity: 1;
  border-radius: 50%;
  border: 3px solid #0f2651;
  transition: opacity 0.25s ease,
    transform 0.43s cubic-bezier(0.694, 0.048, 0.335, 1);
  &:after {
    content: "";
    position: absolute;
    bottom: -9px;
    right: -2px;
    width: 4px;
    border-radius: 3px;
    transform: rotate(-45deg);
    height: 10px;
    background-color: #0f2651;
  }
`;

export const SearchInput = styled.input`
  border: 0;
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  background: #C3C1D2;
  color: #0F2651;
  border-radius: 3px;
  //box-shadow: 1px 8px 15px rgba(75, 72, 72, 0.1);
  transition: all 0.4s ease;
  &:focus {
    outline: none;
    //box-shadow: 0px 9px 20px rgba(75, 72, 72, 0.3);
    + ${IconsContainer} {
      ${IconClose} {
        opacity: 1;
        transform: translateX(0);
      }
      ${IconSearch} {
        opacity: 0;
        transform: translateX(200%);
      }
    }
  }
`;


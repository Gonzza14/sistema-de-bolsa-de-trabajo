import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  &.boton-modal{
    justify-content: flex-end;
  }
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
  margin-right: 2em;
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
  padding: 0.3em;
  display: flex;
`;
export const StyledFontAwesomeIconBoton = styled(FontAwesomeIcon)`
  color: #06062a;
	font-size: 18px;
  &:hover {
    color: #f3f3f3;
  }
`;

export const IconoBorrarModal = styled(FontAwesomeIcon)`
  color: #f3f3f3;
  padding-right: 0.5em;
`;

export const IconoCerrarModal = styled(FontAwesomeIcon)`
  color: #f3f3f3;
  padding-right: 1em;
  &:hover {
    color: #e84616;
  }
`;

export const SpanButton = styled.span`
  margin-left: 0.5em;
`;

export const ButtonModalClose = styled(ButtonOp)`
  position: absolute;
  top: 0.5rem;
  //top: -1rem;
  right: 0.5rem;
  padding: 0.3rem 0.3rem 0rem 1rem;
`;

export const ButtonModalDelete = styled(ButtonOp)`
  background-color: #06062A;
  width: 7em;
  padding: 1em 4em; 
  margin-right: 1em;
  justify-content: center;

  &:hover {
    background-color: #e84616;
  }
`;

export const EditButton = styled(ButtonCreate)`
  margin-bottom: 0;
`

const fill = keyframes`
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
`;

export const ButtonCreateCV = styled(Link)`
  width: 1em;
  height: 0em;
  margin-top: 0;
  margin-bottom: 1em;
  margin-left: auto;
	background-image: linear-gradient(to right, #06062a 50%, rgb(232, 70, 22) 50%);
  color: #000000;
  background-color: #06062a;
  padding: 1em;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  font-weight: 600;
  border-radius: .5em;
`;

export const ContainerButtonAdd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
`;

export const Contenedor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
  height: 50vh;
`;

export const ContenidoIzquierdo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const ContenidoDerecho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-image: url('/src/assets/images/img_cv2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
	animation: ${fadeIn} 0.5s linear;
  min-height: 500px; // Establece una altura mínima para el contenedor
`;



export const Titulo = styled.h1`
  text-align: center;
	text-shadow: 1px 1px 2px black;
  padding: 10px;
  animation: ${fadeIn} 0.5s linear;
`;


export const Subtitulo = styled.h2`
  text-align: center;
	text-shadow: 1px 1px 2px black;
  padding: 10px;
	animation: ${fadeIn} 1s linear;
	
`;


export const Boton = styled.button`
  font-size: 1.4em;
  display: inline-block;
  background-image: linear-gradient(to right, #06062a 50%, rgb(232, 70, 22) 50%);
  background-size: 200% 100%;
  background-position: left;
  color: white;
  border-radius: 5px;
  border-color: white;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-position 0.5s ease-in-out;
  &:hover {
    animation: ${fill} 0.5s forwards;
  }
`;

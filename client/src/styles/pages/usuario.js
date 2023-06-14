import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FormInput, FormInputBotton, FormSelect} from "../elements/formularios";

export const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EditText = styled.p`
  margin-top: 0;
  font-size: 1em;
  font-weight: bold;
`;

export const EditDescription = styled.p`
  margin: 0;
`;

export const EditCard = styled.div`
  margin: 1em;
  background-color: white;
  color: #06062a;
  width: 100%;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.377);
  border-radius: 20px;
  display: flex;
  padding: 2em;
  justify-content: space-between;
  align-items: center;
`;

//-----------------------------------------------------------------------
export const SectionPerfil = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const HeaderPerfil = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(#e84616, transparent);
  margin-bottom: 1.25rem;
`;

export const PortadaPerfil = styled.div`
  display: block;
  position: relative;
  width: 90%;
  height: 17rem;
  background-image: linear-gradient(45deg, #0f2651, #0f2651);
  border-radius: 0 0 20px 20px;
`;

export const AvatarPerfil = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  align-items: center;
  justify-content: center;
  border: 7px solid #ffffff;
  background-color: #dfe5f2;
  border-radius: 50%;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: -40px;
  left: calc(50% - 90px);
  z-index: 1;
`;

export const ImgPerfil = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  object-fit: cover;
`;

export const ButtonAvatarPerfil = styled.button`
  position: absolute;
  left: -2px;
  top: -2px;
  border: 0;
  background-color: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
`;

export const IconAvatarPerfil = styled(FontAwesomeIcon)``;

export const EditPerfil = styled(Link)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  border-radius: 8px;
  padding: 12px 25px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
`;

export const IconEditPerfil = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

export const BodyPerfil = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 750px;
  align-content: center;
`;

export const BioPerfil = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  margin-bottom: 1.25rem;
  text-align: center;
`;

export const NamePerfil = styled.h3`
  display: block;
  width: 100%;
  font-size: 1.75em;
  margin-bottom: 0.5rem;
`;

export const FooterPerfil = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem 2rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-radius: 15px;
  justify-content: center;
  `;


export const DatosPerfil = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  list-style: none;
`;

export const ItemPerfil = styled.div`
  padding: 1.5em 2em;
  flex: 1;
`;

export const IconDataPerfil = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  font-size: 1.2rem;
  vertical-align: middle;
`;

//---------------------------------------------------------------------------

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const FormLabelUser = styled.label`
  width: 30%;
`;

export const FormInputUser = styled(FormInput)`
  width: 70%;`;

export const FormSelectUser = styled(FormSelect)`
  width: 75%;
`;

export const InputButtonUser = styled(FormInputBotton)`
  width:50%
  `

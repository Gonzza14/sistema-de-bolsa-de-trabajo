import { Header } from "../components/Header";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { BaseContainer, BaseBody, BaseSectionData } from "../styles/base";
import {
  SmallButton,
  StyledFontAwesomeIconBoton,
} from "../styles/elements/botones";
import { useNavigate } from "react-router-dom";

export const Buscar = () => {
  const navigate = useNavigate();
  return (
    <BaseContainer>
      <Header titulo="Buscar" />
      <SmallButton onClick={() => navigate(-1)}>
        <StyledFontAwesomeIconBoton icon={faArrowLeft} size="xl" />
        Regresar
      </SmallButton>
      <BaseBody>
        <BaseSectionData></BaseSectionData>
      </BaseBody>
    </BaseContainer>
  );
};

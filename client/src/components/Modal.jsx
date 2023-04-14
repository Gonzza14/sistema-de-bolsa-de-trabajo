import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ButtonModalClose, IconoCerrarModal, StyledFontAwesomeIconBoton } from "../styles/elements/botones";
import { ModalArticle, ModalContainer, ModalHeader, ModalTitleHeader } from "../styles/elements/modal";

export const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        <ModalArticle className={`${isOpen && "is-open"}`} onClick={closeModal}>
            <ModalContainer onClick={handleModalContainerClick}>
                <ModalHeader>
                    <ModalTitleHeader>Eliminar registro</ModalTitleHeader>
                    <ButtonModalClose onClick={closeModal}>
                        <IconoCerrarModal icon={faXmark} size="1x" />
                    </ButtonModalClose>
                </ModalHeader>
                {children}
            </ModalContainer>
        </ModalArticle>
    );
}
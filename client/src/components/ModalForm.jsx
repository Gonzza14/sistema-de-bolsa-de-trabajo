import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ButtonModalClose, IconoCerrarModal } from "../styles/elements/botones";
import {
  ModalArticle,
  ModalContainerCV,
  ModalHeaderCV,
  ModalTitleHeader,
} from "../styles/elements/modal";

export const ModalForm = ({ children, isOpen, closeModal, dataToEdit }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <ModalArticle className={`${isOpen && "is-open"}`}>
      <ModalContainerCV onClick={handleModalContainerClick}>
        <ModalHeaderCV>
          <ModalTitleHeader>
            {dataToEdit
              ? "Editar registro"
              : "Agregar registro"}
          </ModalTitleHeader>
          <ButtonModalClose onClick={closeModal}>
            <IconoCerrarModal icon={faXmark} size="1x" />
          </ButtonModalClose>
        </ModalHeaderCV>
        {children}
      </ModalContainerCV>
    </ModalArticle>
  );
};

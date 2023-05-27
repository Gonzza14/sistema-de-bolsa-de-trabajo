import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ButtonModalClose, IconoCerrarModal } from "../styles/elements/botones";
import {
  ModalArticle,
  ModalContainerCV,
  ModalHeader,
  ModalTitleHeader,
} from "../styles/elements/modal";

export const ModalForm = ({ children, isOpen, closeModal, dataToEdit }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  console.log(dataToEdit);
  return (
    <ModalArticle className={`${isOpen && "is-open"}`}>
      <ModalContainerCV onClick={handleModalContainerClick}>
        <ModalHeader>
          <ModalTitleHeader>
            {dataToEdit
              ? "Editar registro"
              : "Agregar registro"}
          </ModalTitleHeader>
          <ButtonModalClose onClick={closeModal}>
            <IconoCerrarModal icon={faXmark} size="1x" />
          </ButtonModalClose>
        </ModalHeader>
        {children}
      </ModalContainerCV>
    </ModalArticle>
  );
};

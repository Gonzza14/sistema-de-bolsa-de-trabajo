import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const useModalCV = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue);
    const navigate = useNavigate();

    const openModalCV = () => {
			setIsOpen(true);
		};
  
    const closeModal = () => {
			let path = "/GestionCurriculum";
			navigate(path);
			setIsOpen(false)};
  
    return [isOpen, openModalCV, closeModal];
}
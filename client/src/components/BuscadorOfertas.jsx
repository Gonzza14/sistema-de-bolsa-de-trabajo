import {
  EquisAbajo,
  EquisArriba,
  IconClose,
  IconsContainer,
  IconSearch,
  SearchContainer,
  SearchInput,
} from "../styles/elements/buscador-ofertas";
import { useRef } from "react";

export const BuscadorOfertas = ({
  placeHolder,
  className,
  search,
  searcher,
  setSearch,
  setLocationSearch,
  setModalitySearch,
	setIdOfertaTipoSearch,
}) => {
  let inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setSearch("");
    setLocationSearch("");
    setModalitySearch("");
		setIdOfertaTipoSearch("");
  };

  return (
    <SearchContainer className={className}>
      <SearchInput
        placeholder={placeHolder}
        className={className}
        ref={inputRef}
        value={search}
        onChange={searcher}
      />
      <IconsContainer>
        <IconSearch />
        <IconClose
          onClick={(e) => handleClick(e, setLocationSearch, setModalitySearch)}
        >
          <EquisArriba />
          <EquisAbajo />
        </IconClose>
      </IconsContainer>
    </SearchContainer>
  );
};

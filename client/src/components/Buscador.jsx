import {
    EquisAbajo,
    EquisArriba,
    IconClose,
    IconsContainer,
    IconSearch,
    SearchContainer,
    SearchInput,
} from "../styles/elements/buscador";
import { useRef } from "react";

export const Buscador = ({ placeHolder, className, search, searcher, setSearch }) => {
    let inputRef = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.value = "";
        setSearch("");
    }
    return (
        <SearchContainer className={className}>
            <SearchInput placeholder={placeHolder} className={className} ref={inputRef} value={search} onChange={searcher}/>
            <IconsContainer>
                <IconSearch />
                <IconClose onClick={handleClick}>
                    <EquisArriba />
                    <EquisAbajo />
                </IconClose>
            </IconsContainer>
        </SearchContainer>
    );
};

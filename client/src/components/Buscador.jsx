import {
    EquisAbajo,
    EquisArriba,
    IconClose,
    IconsContainer,
    IconSearch,
    SearchContainer,
    SearchInput,
} from "../styles/elements/buscador";

export const Buscador = () => {
    return (
        <SearchContainer>
            <SearchInput placeholder="Buscar empleo" />
            <IconsContainer>
                <IconSearch />
                <IconClose>
                    <EquisArriba />
                    <EquisAbajo />
                </IconClose>
            </IconsContainer>
        </SearchContainer>
    );
};

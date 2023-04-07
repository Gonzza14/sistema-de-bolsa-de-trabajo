import { Header } from "../components/Header";
import { TarjetaEmpleo } from "../components/empleo";
import { BaseContainer, BaseBody, BaseSectionData, SectionTitle } from "../styles/base";
import { PostulacionesSection } from "../styles/pages/postulaciones";

const empleos = [
    {
        titulo: "Programador C#",
        empresa: "Oracle",
        descripcionEmpleo: "Programador con experiencia"
    },
    {
        titulo: "Programador Java",
        empresa: "DevJb",
        descripcionEmpleo: "Programador con experiencia"
    },
    {
        titulo: "Programador C#",
        empresa: "Oracle",
        descripcionEmpleo: "Programador con experiencia"
    },
    {
        titulo: "Programador Java",
        empresa: "DevJb",
        descripcionEmpleo: "Programador con experiencia"
    },
]

const getItems = empleos.map((item, key) => {

})


export const Postulaciones = () => {
    return (
        <BaseContainer>
            <Header titulo="Postulaciones" />
            <BaseBody>
                <BaseSectionData>
                    <SectionTitle>Postulaciones realizadas</SectionTitle>
                    <PostulacionesSection>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo
                            tituloEmpleo="Titulo del empleo"
                            nombreEmpresa="Nombre de la empresa"
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                    </PostulacionesSection>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};
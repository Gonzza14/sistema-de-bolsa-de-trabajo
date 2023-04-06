import { Header } from "../components/Header";
import { TarjetaEmpleo } from "../components/empleo";
import { BaseContainer, BaseBody, BaseSection, SectionContainer} from "../styles/base";

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

    const getItems = empleos.map((item, key)=>{
        
    })


export const Postulaciones = () => {
    return (
        <BaseContainer>
            <Header titulo="Postulaciones"/>
            <BaseBody>
                <h1>Postulaciones realizadas</h1>
                <BaseSection>
                    <SectionContainer>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                    </SectionContainer>
                    <SectionContainer>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                        <TarjetaEmpleo 
                            tituloEmpleo = "Titulo del empleo" 
                            nombreEmpresa="Nombre de la empresa" 
                            descripcionEmpleo="Descripcion del empleo"
                            enlace="#">
                        </TarjetaEmpleo>
                    </SectionContainer>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
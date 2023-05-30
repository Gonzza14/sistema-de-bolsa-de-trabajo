import { faMapSigns, faCalendarAlt, faImage, faPersonHalfDress, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection, BaseSectionData } from "../../../styles/base";
import { SectionPerfil, HeaderPerfil, PortadaPerfil, AvatarPerfil, ImgPerfil, ButtonAvatarPerfil, IconAvatarPerfil, BodyPerfil, BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil } from "../../../styles/pages/usuario";
import { useRef } from "react";
export const Usuario = () => {

    const hiddenFileInput = useRef(null);

    const handleClick = e => {
        hiddenFileInput.current.click();
    }

    const handleChange = e => {
        const fileUploaded = e.target.files[0];
        console.log(fileUploaded);
    };
    return (
        <BaseContainer>
            <BaseBody>
                <BaseSectionData>
                    <SectionPerfil>
                        <HeaderPerfil>
                            <PortadaPerfil>
                                <AvatarPerfil>
                                    <ImgPerfil />
                                    <ButtonAvatarPerfil onClick={handleClick}>
                                        <IconAvatarPerfil icon={faImage} size="xl"></IconAvatarPerfil>
                                    </ButtonAvatarPerfil>
                                    <input type="file" style={{ display: 'none' }} ref={hiddenFileInput}onChange={handleChange}/>
                                </AvatarPerfil>
                            </PortadaPerfil>
                        </HeaderPerfil>
                        <BodyPerfil>
                            <BioPerfil>
                                <NamePerfil>Gonzalo Antonio Ortiz Mejia</NamePerfil>
                            </BioPerfil>
                            <FooterPerfil>
                                <DatosPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faMapSigns} size="xl"></IconDataPerfil>Direccion de usuario: </ItemPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faPhoneAlt} size="xl"></IconDataPerfil>Telefono: </ItemPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faCalendarAlt} size="xl"></IconDataPerfil>Fecha de nacimiento: </ItemPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faPersonHalfDress} size="xl"></IconDataPerfil>Genero: </ItemPerfil>
                                </DatosPerfil>
                                <DatosPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faFacebook} size="xl"></IconDataPerfil>Facebook: </ItemPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faTwitter} size="xl"></IconDataPerfil>Twitter: </ItemPerfil>
                                    <ItemPerfil><IconDataPerfil icon={faLinkedin} size="xl"></IconDataPerfil>Linkedin: </ItemPerfil>
                                </DatosPerfil>
                            </FooterPerfil>
                        </BodyPerfil>
                    </SectionPerfil>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};
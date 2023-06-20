import { VerUsuarioEmp } from "./VerUsuarioEmp";
import {
    BioPerfil,
    FooterPerfil,
    FormContainer,
    FormGroup,
    FormLabelUser,
    FormInputUser,
    InputButtonUser,
    NamePerfil,
    HeaderPerfil,
    PortadaPerfil,
    AvatarPerfil,
    EditPerfil,
    IconEditPerfil,
    ImgPerfil,
    ButtonAvatarPerfil,
    IconAvatarPerfil,
    BodyPerfil

} from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { useForm } from "../../../hooks/useForm";
import moment from 'moment';
import { useLocation } from "react-router-dom";
import { useRef, useEffect} from "react";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import React, { useState } from 'react';

const initialForm = {
    nombresEmpresa: "",
    direcEmpresa: "",
    telefonoEmpresa: "",
    fotoDePerfil: "",
    id: null
}

const validateForm = (form) => {
    let errors = {};
    return errors;
}


export const EditarPerfilEmp = ({
    updateDataSolicitante,
    error,
    loading,
    setDataToEdit,
    dataToEdit,
    dataBase,
    setResponse,
}) => {
    let path = "/UsuarioEmp"

    let {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        subirFotoSubmit
    } = useForm(
        initialForm,
        validateForm,
        path,
        null,
        updateDataSolicitante,
        dataToEdit,
        setDataToEdit
    )
    
    const { pathname } = useLocation()

    const hiddenFileInput = useRef(null);

    const [selectedFile, setSelectedFile] = useState()

    const [previewImage, setPreviewImage] = useState(null);

    useEffect(() => {
        if (!selectedFile) {
            {dataBase && setPreviewImage(`/perfil/${dataBase.fotoDePerfil}`)}
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreviewImage(objectUrl)


        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    //dataBase ? setPreviewImage(`/perfil/${dataBase.fotoDePerfil}`) : setPreviewImage('/perfil/nofoto.png')

    const handleFileClick = e => {
        hiddenFileInput.current.click();
        e.preventDefault();
    }
    const handleFileChange = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    };

    const handleEditClick = () => {
        setResponse(false);
        setDataToEdit(dataBase);
    }

    return (
        <>
            {dataBase && <VerUsuarioEmp
                error={error}
                loading={loading}
                dataToEdit={dataToEdit}
                dataBase={dataBase}
                setResponse={setResponse}>
                <FormContainer onSubmit={subirFotoSubmit}>
                    <HeaderPerfil>
                        <PortadaPerfil>
                            <AvatarPerfil>
                                {previewImage && <ImgPerfil src={previewImage} alt="Preview" />}
                                {pathname === "/UsuarioEmp/editar" &&
                                    <>
                                        <ButtonAvatarPerfil onClick={handleFileClick}>
                                            <IconAvatarPerfil icon={faImage} size="xl"></IconAvatarPerfil>
                                        </ButtonAvatarPerfil>
                                        <input id="fotoDePerfil" name="fotoDePerfil" type="file" style={{ display: 'none' }} ref={hiddenFileInput} onChange={handleFileChange} />
                                    </>
                                }
                            </AvatarPerfil>
                            {pathname !== "/UsuarioEmp/editar" &&
                                <EditPerfil to={'editar'} onClick={handleEditClick}>
                                    <IconEditPerfil icon={faPen} size="xl"></IconEditPerfil>
                                    Editar usuario
                                </EditPerfil>
                            }
                        </PortadaPerfil>
                    </HeaderPerfil>
                    <BodyPerfil>
                        <BioPerfil>
                            <NamePerfil>Editar perfil de usuario</NamePerfil>
                        </BioPerfil>
                        <FooterPerfil>
                        <FormGroup>
                            <FormLabelUser htmlFor="nombreEmpresa">Nombre Empresa</FormLabelUser>
                            <FormInputUser
                                type="text"
                                id="nombreEmpresa"
                                name="nombreEmpresa"
                                placeholder="Nombre de la empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.nombreEmpresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabelUser htmlFor="direcEmpresa">Direccion de la empresa:</FormLabelUser>
                            <FormInputUser
                                type="text"
                                id="direcEmpresa"
                                name="direcEmpresa"
                                placeholder="Direccion de empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.direcEmpresa}
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormLabelUser htmlFor="telefonoEmpresa">Telefono:</FormLabelUser>
                            <FormInputUser
                                type="tel"
                                id="telefonoEmpresa"
                                name="telefonoEmpresa"
                                placeholder="Numero telefonico de la empresa"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={form.telefonoEmpresa}
                            />
                        </FormGroup>
                        </FooterPerfil>
                    </BodyPerfil>
                    <InputButtonUser type="submit" value="Enviar" />
                </FormContainer>
            </VerUsuarioEmp>}
            



        </>
    )
}
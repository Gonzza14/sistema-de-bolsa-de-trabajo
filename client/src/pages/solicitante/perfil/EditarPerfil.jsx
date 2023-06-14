import { VerUsuario } from "./VerUsuario";
import {
    BioPerfil,
    FooterPerfil,
    FormContainer,
    FormGroup,
    FormLabelUser,
    FormInputUser,
    FormSelectUser,
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
    Genero: {},
    idGenero: "",
    nombresSolic: "",
    apellidosSolic: "",
    fechaNacimiento: "",
    dui: "",
    pasaporte: "",
    nit: "",
    nup: "",
    direcSolic: "",
    telefonoSolic: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    fotoDePerfil: "",
    id: null
}

const validateForm = (form) => {
    let errors = {};

    if (form.dui != null) {
        errors.dui = `El Documento Unico de identidad es requerido`;
    } else {
        delete errors.dui;
    }


    return errors;
}


export const EditarPerfil = ({
    updateDataSolicitante,
    error,
    loading,
    setDataToEdit,
    dataToEdit,
    dataBase,
    setResponse,
}) => {
    let path = "/Usuario"

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


    const handleSelect = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        form.Genero.nombreGenero = e.nativeEvent.target[index].text;
        form.Genero.id = e.nativeEvent.target.value;
    }


    let nacimiento = null;
    let fechaFormateada = null;
    if (dataBase) {
        nacimiento = new Date(form.fechaNacimiento);
        nacimiento.setMinutes(nacimiento.getMinutes() + nacimiento.getTimezoneOffset())
        const year = nacimiento.getFullYear();
        const month = nacimiento.getMonth() + 1;
        const day = nacimiento.getDate();
        fechaFormateada = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
        form.fechaNacimiento = fechaFormateada
    }


    return (
        <>
            {dataBase && <VerUsuario
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
                                {pathname === "/Usuario/editar" &&
                                    <>
                                        <ButtonAvatarPerfil onClick={handleFileClick}>
                                            <IconAvatarPerfil icon={faImage} size="xl"></IconAvatarPerfil>
                                        </ButtonAvatarPerfil>
                                        <input id="fotoDePerfil" name="fotoDePerfil" type="file" style={{ display: 'none' }} ref={hiddenFileInput} onChange={handleFileChange} />
                                    </>
                                }
                            </AvatarPerfil>
                            {pathname !== "/Usuario/editar" &&
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
                                <FormLabelUser htmlFor="nombresSolic">Nombres</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="nombresSolic"
                                    name="nombresSolic"
                                    placeholder="Nombres completos"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.nombresSolic}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="apellidosSolic">Apellidos</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="apellidosSolic"
                                    name="apellidosSolic"
                                    placeholder="Apellidos completos"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.apellidosSolic}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="direcSolic">Direccion de usuario:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="direcSolic"
                                    name="direcSolic"
                                    placeholder="Direccion de usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.direcSolic}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="telefonoSolic">Telefono:</FormLabelUser>
                                <FormInputUser
                                    type="tel"
                                    id="telefonoSolic"
                                    name="telefonoSolic"
                                    placeholder="Numero telefonico del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.telefonoSolic}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="fechaNacimiento">Fecha de nacimiento:</FormLabelUser>
                                <FormInputUser
                                    type="date"
                                    id="fechaNacimiento" twitter
                                    name="fechaNacimiento"
                                    placeholder="Fecha de nacimiento del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.fechaNacimiento}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="idGenero">Genero:</FormLabelUser>
                                <FormSelectUser
                                    id="idGenero"
                                    name="idGenero"
                                    placeholder="Seleccione el genero"
                                    onChange={handleSelect}
                                    onBlur={handleBlur}
                                    defaultValue={form.idGenero}
                                >
                                    <option value={form.idGenero} disabled>{form.Genero.nombreGenero}</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otro</option>
                                </FormSelectUser>
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="dui">Documento unico de identidad (DUI):</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="dui"
                                    name="dui"
                                    placeholder="Documento unico de identidad"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.dui}
                                />
                                {errors.dui && (
                                    <MensajeValidacion>{errors.dui}</MensajeValidacion>
                                )}
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="pasaporte">Pasaporte:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="pasaporte"
                                    name="pasaporte"
                                    placeholder="Pasaporte del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.pasaporte}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="nit">NIT:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="nit"
                                    name="nit"
                                    placeholder="NIT del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.nit}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="nup">NUP:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="nup"
                                    name="nup"
                                    placeholder="NUP del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.nup}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="facebook">Facebook:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="facebook"
                                    name="facebook"
                                    placeholder="Facebook del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.facebook}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="twitter">Twitter:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="twitter"
                                    name="twitter"
                                    placeholder="Twitter del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.twitter}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabelUser htmlFor="linkedin">Linkedin:</FormLabelUser>
                                <FormInputUser
                                    type="text"
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="Twitter del usuario"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={form.linkedin}
                                />
                            </FormGroup>
                        </FooterPerfil>
                    </BodyPerfil>
                    <InputButtonUser type="submit" value="Enviar" />
                </FormContainer>
            </VerUsuario>}
        </>
    )
}
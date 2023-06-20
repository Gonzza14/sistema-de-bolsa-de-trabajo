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
import { useRef, useEffect } from "react";
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
    let regexDui = /^\d{8}-?\d$/;
    let regexPasaporte = /^[A-Z]{1,2}\d{7}$/
    let regexNit = /^\d{15}$/
    let regexNup = /^\d{12}$/
    var hoy = new Date();
    var fechaNac = new Date(form.fechaNacimiento);

    // Restamos la fecha de nacimiento a la fecha actual
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
    var dia = hoy.getDate() - fechaNac.getDate();

    // Ajustamos la edad en función del mes y el día
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }

    if (!form.nombresSolic.trim()) {
        errors.nombresSolic = "El campo nombre es requerido";
    } else {
        delete errors.nombresSolic;
    }

    if (!form.apellidosSolic.trim()) {
        errors.apellidosSolic = "El campo apellidos es requerido";
    } else {
        delete errors.apellidosSolic;
    }

    if (form.direcSolic.length > 255) {
        errors.direcSolic = "El campo no debe poseer mas de 255 caracteres";
    } else if (form.direcSolic === "") {
        delete errors.direcSolic;
    } else {
        delete errors.direcSolic;
    }

    if (form.telefonoSolic.length > 12) {
        errors.telefonoSolic = "El campo no debe poseer mas de 12 caracteres";
    } else if (form.telefonoSolic === "") {
        delete errors.telefonoSolic;
    } else {
        delete errors.telefonoSolic;
    }

    if (edad < 15) {
        errors.fechaNacimiento = "Debes ser mayor de 15 años"
    } else {
        delete errors.fechaNacimiento;
    }

    if (form.idGenero === "0") {
        errors.idGenero = "El campo genero es requerido";
    } else {
        delete errors.idGenero;
    }

    if (!form.dui.trim()) {
        errors.dui = "El campo DUI es requerido";
    } else if (!regexDui.test(form.dui.trim())) {
        errors.dui = "El campo DUI no es valido";
    } else {
        delete errors.dui;
    }

    if (!regexPasaporte.test(form.pasaporte.trim())) {
        errors.pasaporte = "El campo pasaporte no es valido";
    } else if (form.pasaporte === "") {
        delete errors.pasaporte;
    } else {
        delete errors.pasaporte;
    }

    if (!regexNit.test(form.nit.trim())) {
        errors.nit = "El campo NIT no es valido";
    } else if (form.nit === "") {
        delete errors.nit;
    } else {
        delete errors.nit;
    }

    if (!regexNup.test(form.nup.trim())) {
        errors.nup = "El campo Nup no es valido";
    } else if (form.nup === "") {
        delete errors.nup;
    } else {
        delete errors.nup;
    }

    if (form.facebook.length > 255) {
        errors.facebook = "El campo no debe poseer mas de 255 caracteres";
    } else if (form.facebook === "") {
        delete errors.facebook;
    } else {
        delete errors.facebook;
    }

    if (form.twitter.length > 255) {
        errors.twitter = "El campo no debe poseer mas de 255 caracteres";
    } else if (form.twitter === "") {
        delete errors.twitter;
    } else {
        delete errors.twitter;
    }

    if (form.twitter.linkedin > 255) {
        errors.linkedin = "El campo no debe poseer mas de 255 caracteres";
    } else if (form.linkedin === "") {
        delete errors.linkedin;
    } else {
        delete errors.linkedin;
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
            { dataBase && setPreviewImage(`/perfil/${dataBase.fotoDePerfil}`) }
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
                            {errors.nombresSolic && <MensajeValidacion>{errors.nombresSolic}</MensajeValidacion>}
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
                            {errors.apellidosSolic && <MensajeValidacion>{errors.apellidosSolic}</MensajeValidacion>}
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
                            {errors.direcSolic && <MensajeValidacion>{errors.direcSolic}</MensajeValidacion>}
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
                            {errors.telefonoSolic && <MensajeValidacion>{errors.telefonoSolic}</MensajeValidacion>}
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
                            {errors.fechaNacimiento && <MensajeValidacion>{errors.fechaNacimiento}</MensajeValidacion>}
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
                            {errors.idGenero && <MensajeValidacion>{errors.idGenero}</MensajeValidacion>}
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
                                {/*errors.dui && (
                                    <MensajeValidacion>{errors.dui}</MensajeValidacion>
                                )*/}
                            </FormGroup>
                            {errors.dui && <MensajeValidacion>{errors.dui}</MensajeValidacion>}
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
                            {errors.pasaporte && <MensajeValidacion>{errors.pasaporte}</MensajeValidacion>}
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
                            {errors.nit && <MensajeValidacion>{errors.nit}</MensajeValidacion>}
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
                            {errors.nup && <MensajeValidacion>{errors.nup}</MensajeValidacion>}
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
                            {errors.facebook && <MensajeValidacion>{errors.facebook}</MensajeValidacion>}
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
                            {errors.twitter && <MensajeValidacion>{errors.twitter}</MensajeValidacion>}
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
                            {errors.linkedin && <MensajeValidacion>{errors.linkedin}</MensajeValidacion>}
                        </FooterPerfil>
                    </BodyPerfil>
                    <InputButtonUser type="submit" value="Enviar" />
                </FormContainer>
            </VerUsuario>}
        </>
    )
}
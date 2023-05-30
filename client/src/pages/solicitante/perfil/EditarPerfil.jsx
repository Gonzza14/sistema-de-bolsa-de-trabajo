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

} from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { useForm } from "../../../hooks/useForm";

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
    id: null
}

const validateForm = (form) => {
    let errors = {};
    return errors;
}

export const EditarPerfil = ({
    updateData,
    error,
    loading,
    setDataToEdit,
    dataToEdit,
    setResponse,
}) => {

    let url = "http://localhost:3000/api/generos"

    let { dataBase } = useCustomFetch(url)

    let path = "/Usuario"

    let {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(
        initialForm,
        validateForm,
        path,
        null,
        updateData,
        dataToEdit,
        setDataToEdit
    )

    const handleSelect = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        form.Genero.nombreGenero = e.nativeEvent.target[index].text;
        form.Genero.id = e.nativeEvent.target.value;
    }


    return (
        <>
            {dataBase && <VerUsuario
                error={error}
                loading={loading} dui
                dataToEdit={dataToEdit}
                dataBase={dataBase}
                setResponse={setResponse}>
                <FormContainer onSubmit={handleSubmit}>
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
                                {dataBase &&
                                    dataBase.map((genero) => <option key={genero.id} value={genero.id}>{genero.nombreGenero}</option>)
                                }
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
                        <InputButtonUser type="submit" value="Enviar" />
                    </FooterPerfil>
                </FormContainer>
            </VerUsuario>}
        </>
    )
}
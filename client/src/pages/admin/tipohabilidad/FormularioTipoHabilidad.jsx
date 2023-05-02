import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
    nombreTipoHabilidad: "",
    id: null,
};

const validateForm = (form) => {
    let errors = {};

    if (!form.nombreTipoHabilidad.trim()){
        errors.nombreTipoHabilidad = "El nombre del tipo de habilidad es requerido";
    }
    return errors;
};

export const FormularioTipoHabilidad = ({
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
}) => {
    let path = "/GestionTipoHabilidad";

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
        createData,
        updateData,
        dataToEdit,
        setDataToEdit
    );

    return (
        <FormContainer>
            <FormTitle>{dataToEdit ? "Editar tipo de habilidad" : "Agregar tipo de habilidad"}</FormTitle>
            <Formulario onSubmit={handleSubmit}>
                <FormLabel htmlFor="nombreTipoHabilidad">
                    Tipo de Habilidad
                </FormLabel>
                <FormInput 
                    type="text"
                    id="nombreTipoHabilidad"
                    name="nombreTipoHabilidad"
                    placeholder="Tipo de habilidad"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.nombreTipoHabilidad}/>
                {errors.nombreTipoHabilidad && <MensajeValidacion>{errors.nombreTipoHabilidad}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </FormContainer>
    );
};
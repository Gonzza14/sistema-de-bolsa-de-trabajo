import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
    nombreTipoExamen: "",
    id: null,
};

const validateForm = (form) => {
    let errors = {};

    if (!form.nombreTipoExamen.trim()){
        errors.nombreTipoExamen = "El nombre del tipo de examen es requerido";
    }
    return errors;
};

export const FormularioTipoExamen = ({
    createData,
    updateData,
    dataToEdit,
    setDataToEdit,
}) => {
    let path = "/GestionTipoExamen";

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
            <FormTitle>{dataToEdit ? "Editar tipo de examen" : "Agregar tipo de examen"}</FormTitle>
            <Formulario onSubmit={handleSubmit}>
                <FormLabel htmlFor="nombreTipoExamen">
                    Tipo de Examen
                </FormLabel>
                <FormInput 
                    type="text"
                    id="nombreTipoExamen"
                    name="nombreTipoExamen"
                    placeholder="Tipo de examen"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.nombreTipoExamen}/>
                {errors.nombreTipoExamen && <MensajeValidacion>{errors.nombreTipoExamen}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </FormContainer>
    );
};
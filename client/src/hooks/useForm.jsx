import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useForm = (initialForm, validateForm, path, createData, updateData, dataToEdit, setDataToEdit, subirArchivo, updateSubirArchivo) => {

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
      }, [dataToEdit]);
    

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };


    const handleSubmit = (e) => {
        handleChange(e);
        e.preventDefault();
        setErrors(validateForm(form));

        if (Object.keys(validateForm(form)).length === 0) {
            if (form.id === null) {
                createData(form);
            } else if (updateData){
                updateData(form);
            }

            handleReset();
        }
    }

		const subirArchivoSubmit = (e) => {
			handleChange(e);
			e.preventDefault();
			setErrors(validateForm(form));
	
			if (Object.keys(validateForm(form)).length === 0) {
					// Obtener el archivo del formulario
					const fileInput = document.querySelector('#archivoExamen');
					const file = fileInput.files[0];
					if (form.id === null) {
							subirArchivo(form, file);
					} else if (updateData) {
						console.log(form)
						updateSubirArchivo(form, file);
					}
	
					handleReset();
			}
	};
	

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
        navigate(path)
      };

    return {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit, subirArchivoSubmit
    }

}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useFormReg = (initialForm, validateForm, path, createData, updateData, dataToEdit, setDataToEdit) => {

    const [formReg, setForm] = useState(initialForm);
    const [errorsReg, setErrors] = useState({});

    const navigate = useNavigate();
    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
      }, [dataToEdit]);
    

    const handleChangeReg = (e) => {
        const { name, value } = e.target;

        setForm({
            ...formReg,
            [name]: value,
        });
    };

    const handleBlurReg = (e) => {
        handleChangeReg(e);
        setErrors(validateForm(formReg));
    };


    const handleSubmitReg = (e) => {
        handleChangeReg(e);
        e.preventDefault();
        setErrors(validateForm(formReg));

        if (Object.keys(validateForm(formReg)).length === 0) {
            if (formReg.id === null) {
                createData(formReg);
            } else if (updateData){
                updateData(formReg);
            }

            handleReset();
        }
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
        navigate(path)
      };

    return {
        formReg,
        errorsReg,
        handleChangeReg,
        handleBlurReg,
        handleSubmitReg
    }

}
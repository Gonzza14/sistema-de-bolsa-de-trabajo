import React, { useState, useEffect } from 'react';

const initialForm = {
    nombre: "",
    descripcion: "",
    id: null
}

export const FormularioEmpresa = () => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => { }
    const handleSubmit = (e) => { }
    const handleReset = (e) => { }
    return (
        <div>
            <h2>Agregar empresa</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombreEmpresa">Nombre</label>
                <input type="text" onChange={handleChange} value={form.nombre} id="nombreEmpresa" name="nombreEmpresa" placeholder="Nombre de la empresa" />
                <label htmlFor="descripcionEmpresa">Descripcion</label>
                <input type="text" onChange={handleChange} value={form.descripcion} id="descripcionEmpresa" name="descripcionEmpresa" placeholder="descripcion" />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
    );
}
import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormTextArea, FormSelect } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
import { useCustomFetch } from "../../../hooks/useCustomFetch"
const sesion = 1;
const initialForm = {
  Categoria:{},
  idEmpresa: sesion,
  idCategoriaOfer: "",
  tituloOferta: "",
  fechaExpiracion: "",
  descOferta: "",
  perfilAcademico:"",
  habilidades:"",
  expLaboral:"",
  rangoSalar:"",
  ubicacion:"",
  modalidad:"",
  estado: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;
  let regexMod = /^.{1,15}$/;
  let regexTitle = /^.{1,50}$/;
  let regexInfo = /^.{1,255}$/;
  let regexDesc = /^.{1,2048}$/;

  if(!form.tituloOferta.trim()){
    errors.tituloOferta = `El titulo del anuncio de oferta laboral es requerido`
  }else if (!regexName.test(form.tituloOferta.trim())) {
    errors.tituloOferta = "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  }else if (!regexTitle.test(form.tituloOferta.trim())) {
    errors.descOferta = "No debe de contener mas de 50 caracteres";
  }
  else{
    delete errors.tituloOferta;
  }
  


  if(!form.fechaExpiracion.trim()){
    errors.fechaExpiracion = `La fecha de expiracion de la oferta laboral es requerida`
  }
  else{
    delete errors.fechaExpiracion;
  }

  if(!form.descOferta.trim()){
    errors.descOferta = `La descripción de la oferta es requerida`
  }else if (!regexDesc.test(form.descOferta.trim())) {
    errors.descOferta = "No debe de contener mas de 2048 caracteres";
  }else{
    delete errors.descOferta;
  }

  if(!form.perfilAcademico.trim()){
    errors.perfilAcademico = `El perfil academico de la oferta es requerido`
  }else if (!regexDesc.test(form.perfilAcademico.trim())) {
    errors.perfilAcademico = "No debe de contener mas de 2048 caracteres";
  }else{
    delete errors.perfilAcademico;
  }
  
  if(!form.habilidades.trim()){
    errors.habilidades = `Las habilidades solicitadas en la oferta es requerida`
  }else if (!regexDesc.test(form.habilidades.trim())) {
    errors.habilidades = "No debe de contener mas de 2048 caracteres";
  }else{
    delete errors.habilidades;
  }

  if(!form.expLaboral.trim()){
    errors.expLaboral = `La experiencia laboral solicitada en la oferta es requerida`
  }else if (!regexDesc.test(form.expLaboral.trim())) {
    errors.expLaboral = "No debe de contener mas de 2048 caracteres";
  }else{
    delete errors.expLaboral;
  }

  if(!form.rangoSalar.trim()){
    errors.rangoSalar = `El rango salarial en la oferta es requerida`
  }else if (!regexInfo.test(form.rangoSalar.trim())) {
    errors.expLaboral = "No debe de contener mas de 255 caracteres";
  }else{
    delete errors.rangoSalar;
  }

  if(!form.ubicacion.trim()){
    errors.ubicacion = `La ubicacion del trabajo es requerida`
  }else if (!regexInfo.test(form.ubicacion.trim())) {
    errors.ubicacion = "No debe de contener mas de 255 caracteres";
  }else{
    delete errors.ubicacion;
  }

  if(!form.modalidad.trim()){
    errors.modalidad = `La modalidad del trabajo es requerida`
  }else if (!regexMod.test(form.modalidad.trim())) {
    errors.modalidad = "No debe de contener mas de 15 caracteres";
  }else{
    delete errors.modalidad;
  }

  return errors;
};

export const DetalleOfertaEmpleo = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const url = 
  process.env.NODE_ENV === "production"
  ? "/api/categoriaofertas"
  : "http://localhost:3000/api/categoriaofertas"
  let { dataBase } = useCustomFetch(url);
  let path = "/GestionOfertaEmpleo";

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
  )
  const handleSelect = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
    form.categoriaOfer = e.nativeEvent.target[index].text;
    form.idCategoriaOfer = e.nativeEvent.target.value;
}

  return (
    <FormContainer>
      <FormTitle>{dataToEdit ? "Ver detalle oferta de empleo" : "Agregar oferta de empleo"}</FormTitle>
      <Formulario onSubmit={handleSubmit}>
       {/*Titulo oferta*/} 
        <FormLabel htmlFor="tituloOferta">Titulo de la oferta</FormLabel>
        <FormInput
          type="text"
          id="tituloOferta"
          name="tituloOferta"
          placeholder="Titulo de la oferta"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.tituloOferta}
          disabled={true}
        />
        {errors.tituloOferta && <MensajeValidacion>{errors.tituloOferta}</MensajeValidacion>}
        {/*Categoria*/} 
        <FormLabel htmlFor="idCategoriaOfer">Categoria de la oferta</FormLabel>
        <FormSelect
            id="idCategoriaOfer"
            name="idCategoriaOfer"
            placeholder="Seleccione la categoria"
            onChange={handleSelect}
            onBlur={handleBlur}
            defaultValue={'0'}
            disabled={true}
            >
            <option value="0" disabled>Seleccione la categoría</option>

            {dataBase &&
                dataBase.map((cate) => <option selected={dataToEdit && cate.id === dataToEdit.idCategoriaOfer} key={cate.id} value={cate.id}>{cate.categoriaOfer} </option>)
            }
            

        </FormSelect>
        {errors.idCategoriaOfer && <MensajeValidacion>{errors.idCategoriaOfer}</MensajeValidacion>}
        {/*Fecha expiracion*/} 
        <FormLabel htmlFor="fechaExpiracion">Fecha de expiración de la oferta</FormLabel>
        <FormInput
          type="date"
          id="fechaExpiracion"
          name="fechaExpiracion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaExpiracion.split("T")[0]}
          disabled={true}
        />
        {errors.fechaExpiracion && <MensajeValidacion>{errors.fechaExpiracion}</MensajeValidacion>}
        
        {/*Descripcion*/} 
        <FormLabel htmlFor="descOferta">Descripción de la oferta</FormLabel>
        <FormTextArea
          type="text"
          id="descOferta"
          name="descOferta"
          placeholder="Descripción de oferta"
          rows="10"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.descOferta}
          disabled={true}>
            
        </FormTextArea>
        {errors.descOferta && <MensajeValidacion>{errors.descOferta}</MensajeValidacion>}

         {/*perfil academico*/} 
         <FormLabel htmlFor="perfilAcademico">Perfil académico solicitado</FormLabel>
        <FormTextArea
          type="text"
          id="perfilAcademico"
          name="perfilAcademico"
          placeholder="Perfil académico"
          rows="8"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.perfilAcademico}
          disabled={true}>
        </FormTextArea>
        {errors.perfilAcademico && <MensajeValidacion>{errors.perfilAcademico}</MensajeValidacion>}

        {/*habilidades*/} 
        <FormLabel htmlFor="habilidades">Habilidades solicitadas</FormLabel>
        <FormTextArea
          type="text"
          id="habilidades"
          name="habilidades"
          placeholder="Habilidades"
          rows="8"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.habilidades}
          disabled={true}>
        </FormTextArea>
        {errors.habilidades && <MensajeValidacion>{errors.habilidades}</MensajeValidacion>}

        {/*Experiencia*/} 
        <FormLabel htmlFor="expLaboral">Experiencia laboral solicitada</FormLabel>
        <FormTextArea
          type="text"
          id="expLaboral"
          name="expLaboral"
          placeholder="Experiencia laboral"
          rows="6"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.expLaboral}
          disabled={true}>
        </FormTextArea>
        {errors.expLaboral && <MensajeValidacion>{errors.expLaboral}</MensajeValidacion>}

        {/*rango salario*/} 
        <FormLabel htmlFor="rangoSalar">Rango Salarial ($) </FormLabel>
        <FormInput
          type="text"
          id="rangoSalar"
          name="rangoSalar"
          placeholder="Rango salarial"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.rangoSalar}
          disabled={true}>
        </FormInput>
        {errors.rangoSalar && <MensajeValidacion>{errors.rangoSalar}</MensajeValidacion>}

        {/*Ubicacion*/} 
        <FormLabel htmlFor="ubicacion">Ubicación del empleo </FormLabel>
        <FormTextArea
          type="text"
          id="ubicacion"
          name="ubicacion"
          placeholder="Ubicación del empleo"
          rows="2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.ubicacion}
          disabled={true}>
        </FormTextArea>
        {errors.ubicacion && <MensajeValidacion>{errors.ubicacion}</MensajeValidacion>}

        {/*Modalidad*/} 
        <FormLabel htmlFor="modalidad">Modalidad del empleo </FormLabel>
        <FormInput
          type="text"
          id="modalidad"
          name="modalidad"
          placeholder="Modalidad del empleo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.modalidad}
          disabled={true}>
        </FormInput>
        {errors.modalidad && <MensajeValidacion>{errors.modalidad}</MensajeValidacion>}

        {/*Estado*/} 
        <FormLabel htmlFor="estado">Estado de la oferta</FormLabel>
        <FormSelect
            id="estado"
            name="estado"
            placeholder="Seleccione el estado"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.estado.toString()}
            disabled={true}
            >
            <option value="0" disabled>Seleccione estado</option>
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
        </FormSelect>
        {errors.estado && <MensajeValidacion>{errors.estado}</MensajeValidacion>}

        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

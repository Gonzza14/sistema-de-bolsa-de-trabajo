import "../styles/elements/card-empleo.css";
import { ButtonLogin } from "../styles/elements/botones";


const categories = {
  1: "Informática",
  2: "Recursos Humanos",
  3: "Mercadeo",
  4: "Finanzas",
};

export const TarjetaEmpleo = (props) => {
  let cadena = props.descripcion;
  let empresa = props.empresa;
  let direccion = props.direccion;
  let modalidad = props.modalidad;
  let salario = props.salario;
  let categoria = categories[props.categoria];
  const estilos = { width: props.width };
  const ancho = { width: "100%" };
  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h2 className="titulos">{props.titulo}</h2>
        </div>
        <div className="card-body">
          <p>Direccion: {direccion}</p>
          <p>Rango salario: {salario}</p>
          <p>Modalidad: {modalidad}</p>
          <p>Categoria: {categoria}</p>
        </div>
        <div className="card-footer">
          <ButtonLogin to={props.link}>Ver oferta</ButtonLogin>
        </div>
      </div>
    </div>
  );
};

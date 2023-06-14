import "../styles/elements/card-empleo.css"
import { ButtonLogin } from '../styles/elements/botones'

export const TarjetaEmpleo = (props) => {
    let cadena = props.descripcion.substring(0,200) + "...";
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="titulos">{props.titulo}</h2>
            </div>
            <div className="card-body">
                <p>{cadena}</p>
            </div>
            <div className="card-footer">
                <ButtonLogin to={props.link}>Ver oferta</ButtonLogin>
            </div>
        </div>
    )
}

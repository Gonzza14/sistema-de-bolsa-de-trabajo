import "../styles/elements/card-empleo.css"

export const TarjetaEmpleo = (props) => {
    let cadena = props.descripcion.substring(0,200) + "...";
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="titulos">{props.titulo}</h2>
                <h5 className="titulos">{props.empresa}</h5>
            </div>
            <div className="card-body">
                <p>{cadena}</p>
            </div>
            <div className="card-footer">
                <a className="button-card" href="#">Ver empleo</a>
            </div>
        </div>
    )
}

import "../styles/elements/card-empleo.css"

export const TarjetaEmpleo = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="titulos">{props.tituloEmpleo}</h2>
                <h5 className="titulos">{props.nombreEmpresa}</h5>
            </div>
            <div className="card-body">
                <p>{props.descripcionEmpleo}</p>
            </div>
            <div className="card-footer">
                <a className="button-card" href="#">Ver empleo</a>
            </div>
        </div>
    )
}

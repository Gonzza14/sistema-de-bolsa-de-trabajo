import "../styles/elements/card-empleo.css"

export const TarjetaEmpleo = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="titulos">{props.titulo}</h2>
                <h5 className="titulos">{props.titulo}</h5>
            </div>
            <div className="card-body">
                <p>{props.descripcion}</p>
            </div>
            <div className="card-footer">
                <a className="button-card" href="#">Ver empleo</a>
            </div>
        </div>
    )
}

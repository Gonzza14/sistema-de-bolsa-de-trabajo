import "../styles/elements/card-empleo.css"
import Loader from "../components/Loader";

export const TarjetaEmpleo = (error, loading, dataBase) => {
    return (
        <div className="card">
            {loading && <Loader />}
            {
                error && (
                    <Message
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#E84616"
                    />
                )
            }
            {
                datos.map((postulacion) => {
                    <div key={postulacion.idOferta}>
                        <div className="card-header">
                        <h2 className="titulos">{postulacion.tituloOferta}</h2>
                        <h5 className="titulos">hola</h5>
                        </div>
                        <div className="card-body">
                            <p>hola</p>
                        </div>
                        <div className="card-footer">
                            <a className="button-card" href="#">Ver empleo</a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

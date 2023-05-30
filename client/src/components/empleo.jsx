import "../styles/elements/card-empleo.css"
import Loader from "../components/Loader";
import Message from "../components/Message"


export const TarjetaEmpleo = ({error, loading, dataBase}) => {
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
                dataBase && dataBase.map((postulacion) => (
                    <div key={postulacion.idOferta}>
                        <div className="card-header">
                        <h2 className="titulos">{postulacion.tituloOferta}</h2>
                        <h5 className="titulos"></h5>
                        </div>
                        <div className="card-body">
                            <p>{postulacion.descOferta}</p>
                        </div>
                        <div className="card-footer">
                            <a className="button-card" href="#">Ver empleo</a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

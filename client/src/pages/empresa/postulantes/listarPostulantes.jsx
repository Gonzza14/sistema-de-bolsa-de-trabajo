import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection, BaseSectionData } from "../../../styles/base";
import "../../../styles/elements/card-empleo.css";
import "../../../styles/pages/detalleOferta.css";
import { useCustomFetch } from "../../../hooks/useCustomFetchAndres";


export const ListarPostulantes = () => {

    let idOfert = "2"
    let tituloOferta = ""
    let titulo = ""
    let id = ""

    let urlPostulantes = "http://127.0.0.1:3000/api/solicitantes/post/" + idOfert
    let [ postulantes ] = useCustomFetch(urlPostulantes);

    let urlOferta = "http://localhost:3000/api/ofertas/" + idOfert
    let [ oferta ] = useCustomFetch(urlOferta);
    if(oferta){
        tituloOferta = (oferta.tituloOferta)
        titulo = 'Ver postulantes para la oferta "' + tituloOferta + '"'
        
    }

    function nombrarGenero (idPost, idGenero) {
        const Http = new XMLHttpRequest();
        let urlGenero = "http://127.0.0.1:3000/api/generos/" + idGenero;
        Http.open("GET", urlGenero);
        Http.send();

        Http.onreadystatechange = (e) => {
            var genero = JSON.parse(Http.responseText)
            document.getElementById('gen' + idPost).innerHTML = genero.nombreGenero;
        }

        //window.location.reload()
    }
    
    /*function registrarPostula (idOfertAux, idSolicitante) {
        console.log('Botón clickeado');
        
        const Http = new XMLHttpRequest();
        let urlRegistrarPostulacion = "http://localhost:3000/api/postula/ins/" + idOfertAux + "/" + idSolicitante;
        Http.open("GET", urlRegistrarPostulacion);
        Http.send();

        Http.onreadystatechange = (e) => {
            console.log(Http.responseText)
        }

        window.location.reload()
    }*/

    return (
        <BaseContainer>
            <Header titulo={titulo} />
            <BaseBody>
                <BaseSection>
                    <BaseSectionData>
                    { postulantes &&
                            postulantes[0].map((postu) => 

                            <div className="card">
                                <div className="card-header">
                                    <h1 className="">{ postu.nombresSolic } { postu.apellidosSolic }</h1>
                                    <p className="">Telefono: { postu.telefonoSolic }</p>
                                </div>

                                <div className="card-body">
                                    <h3 className="titulos">Fecha de nacimiento</h3>
                                    <p className="">{ (postu.fechaNacimiento).toString().slice(0, 10) }</p>

                                    <h3 className="titulos">Genero</h3>
                                    <p className="" id={id = "gen" + postu.id}>{ nombrarGenero(postu.id, postu.idGenero) }</p>

                                    <h3 className="titulos">Direccion</h3>
                                    <p className="">{ postu.direcSolic }</p>

                                    <h3 className="titulos">Facebook</h3>
                                    <p className="">{ postu.facebook }</p>

                                    <h3 className="titulos">Twitter</h3>
                                    <p className="">{ postu.twitter }</p>

                                    <h3 className="titulos">Linkedin</h3>
                                    <p className="">{ postu.linkedin }</p>

                                    <button className="button-card"> Ver CV </button>
                                </div>
                            </div>

                            )
                        }
                    </BaseSectionData>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};

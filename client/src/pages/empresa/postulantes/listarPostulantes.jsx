import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSection, BaseSectionData } from "../../../styles/base";
import "../../../styles/elements/card-empleo.css";
import "../../../styles/pages/detalleOferta.css";
import { useCustomFetch } from "../../../hooks/useCustomFetchAndres";
import { GestionSection } from "../../../styles/pages/admin/gestion";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../../components/Modal";
import { ModalTitle } from "../../../styles/elements/modal";
import { FormularioCorreo }  from "./FormularioCorreo";


export const ListarPostulantes = () => {
    const [isOpen, openModal, closeModal] = useModal(false);

    let idOfert = "1"
    let tituloOferta = ""
    let titulo = ""
    let id = ""

    let urlPostulantes = "http://127.0.0.1:3000/api/solicitantes/post/" + idOfert
    let [postulantes] = useCustomFetch(urlPostulantes);

    let urlOferta = "http://localhost:3000/api/ofertas/" + idOfert
    let [oferta] = useCustomFetch(urlOferta);
    if (oferta) {
        tituloOferta = (oferta.tituloOferta)
        titulo = 'Ver postulantes para la oferta "' + tituloOferta + '"'

    }

    function nombrarGenero(idPost, idGenero) {
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

    const handleSend = (e) => {
        openModal();
    }

    return (
        <BaseContainer>
            <Header titulo={titulo} />
            <BaseBody>
                <BaseSection>
                    <BaseSectionData>
                        <GestionSection>
                            {postulantes &&
                                postulantes[0].map((postu) =>
                                    <>
                                        <div className="card-oferta">
                                            <div className="card-header">
                                                <h1 className="">{postu.nombresSolic} {postu.apellidosSolic}</h1>
                                                <p className="">Telefono: {postu.telefonoSolic}</p>
                                            </div>

                                            <div className="card-body">
                                                <h3 className="titulos">Fecha de nacimiento</h3>
                                                <p className="">{(postu.fechaNacimiento).toString().slice(0, 10)}</p>

                                                <h3 className="titulos">Genero</h3>
                                                <p className="" id={id = "gen" + postu.id}>{nombrarGenero(postu.id, postu.idGenero)}</p>

                                                <h3 className="titulos">Direccion</h3>
                                                <p className="">{postu.direcSolic}</p>

                                                <h3 className="titulos">Facebook</h3>
                                                <p className="">{postu.facebook}</p>

                                                <h3 className="titulos">Twitter</h3>
                                                <p className="">{postu.twitter}</p>

                                                <h3 className="titulos">Linkedin</h3>
                                                <p className="">{postu.linkedin}</p>

                                                <button className="button-card"> Ver CV </button>
                                                <button className="button-card" onClick={handleSend}> Enviar correo electronico </button>
                                            </div>
                                        </div>

                                        <Modal isOpen={isOpen} closeModal={closeModal} titulo="Enviar correo">
                                            <FormularioCorreo correo={postu.correoUsuario}></FormularioCorreo>
                                        </Modal>

                                    </>

                                )
                            }
                        </GestionSection>

                    </BaseSectionData>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};

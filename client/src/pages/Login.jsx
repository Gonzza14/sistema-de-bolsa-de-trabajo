import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } 
from "../styles/base";
import "../styles/pages/login.css";
import { useCustomFetch } from "../hooks/useCustomFetch";


export const Login = () => {
    let url = "http://localhost:3000/api/roles"

    const { pathname } = useLocation()

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        createData,
        updateData,
        deleteData,
        error,
        loading,
        response,
        setResponse,
        handleClick
    } = useCustomFetch(url);
    
    //const roles = dataBase.rols;
    //console.log(roles);
    return (
        <BaseContainer>
            <Header titulo="Login"/>
            <BaseBody>
                <BaseSection>
                    <div className="main">  	
                        <input type="checkbox" id="chk" aria-hidden="true"/>
                        <div className="signup">
                            <form>
                                <label htmlFor="chk" aria-hidden="true">Crear Cuenta</label>
                                <input type="text" name="txt" placeholder="Nombre de usuario" required=""/>
                                <input type="email" name="email" placeholder="Email" required=""/>
                                <select onChange={event => console.log(event.target.value)}>
                                    <option value="">Seleccione un rol</option>
                                    
                                    <option value="1" >1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="password" name="pswd" placeholder="Contraseña" required=""/>
                                <button>Crear Cuenta</button>
                            </form>
                        </div>

                        <div className="login">
                            <form>
                                <label htmlFor="chk" aria-hidden="true">Iniciar Sesión</label>
                                <input type="email" name="email" placeholder="Email" required=""/>
                                <input type="password" name="pswd" placeholder="Constraseña" required=""/>
                                <button>Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
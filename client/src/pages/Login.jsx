import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } 
from "../styles/base";
import "../styles/pages/login.css"

export const Login = () => {
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
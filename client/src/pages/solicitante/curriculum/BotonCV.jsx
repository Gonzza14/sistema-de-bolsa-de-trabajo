import React, { Component } from "react";
import {Boton} from '../../../styles/elements/botones.js';

class BotonCV extends Component {
	constructor(props) {
		super(props);

		this.handleClick = () => {
			console.log("XD");
		};
}
    render() {
        return (
            <div>
                <Boton onClick={this.handleClick}>Crea tu currículum</Boton>
            </div>
        );
    }
}

export default BotonCV;
import React, { Component } from 'react';
import {
	Switch,
	Route,
} from "react-router-dom";
import BadenPowell from "./secoes/BadenPowell";
import Dionysiotonial from "./secoes/DionysioTonial";
import Marista from "./secoes/Marista";
import Viamao from "./secoes/Viamao";

class Ramos extends Component
{
	render() {
		return (
			<Switch>
				<Route exact={true} path={this.props.match.path+"/badenpowell"} component={BadenPowell} />
				<Route exact={true} path={this.props.match.path+"/dionysioTonial"} component={Dionysiotonial} />
				<Route exact={true} path={this.props.match.path+"/marista"} component={Marista} />
				<Route exact={true} path={this.props.match.path+"/viamao"} component={Viamao} />
			</Switch>
		);
	}
}

export default Ramos;

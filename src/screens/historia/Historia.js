import React, { Component } from 'react';
import {
	Switch,
	Route,
} from "react-router-dom";
import BadenPowell from "./secoes/BadenPowell";
import DionysioTonial from "./secoes/DionysioTonial";
import Viamao from "./secoes/Viamao";
import Marista from "./secoes/Marista";

class Historia extends Component
{
	render() {
		return (
			<Switch>
				<Route exact={true} path={this.props.match.path+"/badenpowell"} component={BadenPowell} />
				<Route exact={true} path={this.props.match.path+"/dionysiotonial"} component={DionysioTonial} />
				<Route exact={true} path={this.props.match.path+"/viamao"} component={Viamao} />
				<Route exact={true} path={this.props.match.path+"/marista"} component={Marista} />
			</Switch>
		);
	}
}

export default Historia;

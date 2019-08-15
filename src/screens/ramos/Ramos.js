import React, { Component } from 'react';
import {
	Switch,
	Route,
} from "react-router-dom";
import Lobo from "./lobo/Lobo";
import Escoteiro from "./escoteiro/Escoteiro";
import Senior from "./senior/Senior";
import Pioneiro from "./pioneiro/Pioneiro";

class Ramos extends Component
{
	render() {
		return (
			<Switch>
				<Route exact={true} path={this.props.match.path+"/lobo"} component={Lobo} />
				<Route exact={true} path={this.props.match.path+"/escoteiro"} component={Escoteiro} />
				<Route exact={true} path={this.props.match.path+"/senior"} component={Senior} />
				<Route exact={true} path={this.props.match.path+"/pioneiro"} component={Pioneiro} />
			</Switch>
		);
	}
}

export default Ramos;

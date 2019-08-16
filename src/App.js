import React, { Component } from 'react';
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Ramos from "./screens/ramos/Ramos";
import Calendario from "./screens/calendario/Calendario";
var hist = createBrowserHistory();
class App extends Component {
	render() {
		return (
			<Router history={hist}>
				<Switch>
			      <Route path="/ramos" component={Ramos} />
			      <Route path="/calendario" component={Calendario} />
			      <Route exact={true} path="/login" component={Login} />
			      <Route exact={true} path="/" component={Home} />
			    </Switch>
			</Router>
		);
	}
}

export default App;

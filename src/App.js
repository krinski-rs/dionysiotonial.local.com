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
import Historia from "./screens/historia/Historia";
import Escotismo from "./screens/escotismo/Escotismo";
import Blog from "./screens/blog/Blog";

var hist = createBrowserHistory();
class App extends Component {
	render() {
		return (
			<Router history={hist}>
				<Switch>
			      <Route path="/ramos" component={Ramos} />
			      <Route path="/calendario" component={Calendario} />
			      <Route path="/historia" component={Historia} />
			      <Route exact={true} path="/escotismo" component={Escotismo} />
			      <Route exact={true} path="/blog" component={Blog} />
			      <Route exact={true} path="/login" component={Login} />
			      <Route exact={true} path="/" component={Home} />
			    </Switch>
			</Router>
		);
	}
}

export default App;

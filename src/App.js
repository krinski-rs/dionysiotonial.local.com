import React, { Component } from 'react';
import {
	Router,
	Switch,
	Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./screens/login/Login";
var hist = createBrowserHistory();
class App extends Component {
	render() {
		return (
			<Router history={hist}>
				<Switch>
			      <Route path="/" component={Login} />
			    </Switch>
			</Router>
		);
	}
}

export default App;

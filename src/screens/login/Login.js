import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import CssBaseline from "@material-ui/core/CssBaseline";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

import Header from "../../components/header/Header";
import HeaderLinks from "../../components/header/HeaderLinks";
import Footer from "../../components/footer/Footer";
import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import CardBody from "../../components/card/CardBody";
import CardHeader from "../../components/card/CardHeader";
import CardFooter from "../../components/card/CardFooter";
import CustomInput from "../../components/input/CustomInput";

import style from "../../assets/jss/screens/login/style";

//import image from "../../assets/img/bg7.jpg";

class Login extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			cardAnimaton: "cardHidden"
		};
	}
	
	componentDidMount() {
		setTimeout(
			function() {
				this.setState({ cardAnimaton: "" });
			}.bind(this),
			700
		);
	}
	
	render() {
		const { classes, ...rest } = this.props;
		return (
			<React.Fragment>
				<CssBaseline />
				<Header
					absolute
					color="transparent"
					brand="G.E.M.I.D.T."
					rightLinks={<HeaderLinks />}
					{...rest}
				/>
				<div
					className={classes.pageHeader}
					style={{
						backgroundImage: "url(/images/lenco_dionysio.jpg)",
						backgroundSize: "cover",
						backgroundPosition: "top center"
					}}
				>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								<Card className={classes[this.state.cardAnimaton]}>
									<form className={classes.form}>
										<CardHeader color="primary" className={classes.cardHeader}>
											<h4>Login</h4>
											<div className={classes.socialLine}>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}
												>
													<i className={"fab fa-twitter"} />
												</Button>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}
												>
													<i className={"fab fa-facebook"} />
												</Button>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}
												>
													<i className={"fab fa-google-plus-g"} />
												</Button>
											</div>
										</CardHeader>
										<p className={classes.divider}>Or Be Classical</p>
										<CardBody>
											<CustomInput
												labelText="First Name..."
												id="first"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													type: "text",
													endAdornment: (
														<InputAdornment position="end">
														<People className={classes.inputIconsColor} />
														</InputAdornment>
													)
												}}
											/>
											<CustomInput
												labelText="Email..."
												id="email"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													type: "email",
													endAdornment: (
														<InputAdornment position="end">
														<Email className={classes.inputIconsColor} />
														</InputAdornment>
													)
												}}
											/>
											<CustomInput
											labelText="Password"
											id="pass"
											formControlProps={{
												fullWidth: true
											}}
											inputProps={{
												type: "password",
												endAdornment: (
													<InputAdornment position="end">
													<Icon className={classes.inputIconsColor}>
													lock_outline
													</Icon>
													</InputAdornment>
												),
												autoComplete: "off"
											}}
											/>
										</CardBody>
										<CardFooter className={classes.cardFooter}>
											<Button simple color="primary" size="lg">
												Get started
											</Button>
										</CardFooter>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
					<Footer whiteFont />
				</div>
			</React.Fragment>
		);
	}
}

Login.propTypes = {
	classes: PropTypes.object
};

export default withStyles(style)(Login);

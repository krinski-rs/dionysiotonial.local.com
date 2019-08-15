import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../../components/header/Header";
import HeaderLinks from "../../components/header/HeaderLinks";
import Footer from "../../components/footer/Footer";
import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";
import Button from "../../components/button/Button";
import Parallax from "../../components/parallax/Parallax";

import style from "../../assets/jss/screens/home/style";

import Ramos from "./secoes/Ramos";
import TeamSection from "./section/TeamSection";
import WorkSection from "./section/WorkSection";

const dashboardRoutes = [];

class Home extends React.Component
{
	render() {
		const { classes, ...rest } = this.props;
		return (
			<React.Fragment>
				<Header
					color="transparent"
					routes={dashboardRoutes}
					brand="G.E.M.I.D.T."
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: "white"
					}}
					{...rest}
				/>
				<Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<h1 className={classes.title}>Grupo Escoteiro Irmão Dionysio Tonial</h1>
								<h4>
									Fundado em 1º de junho de 2002, o Grupo Escoteiro Marista Irmão Dionysio Tonial, 
									tem sua sede localizada nas dependencias do Instituto Marista Graças, 
									no município de Viamão.
								</h4>
								<br />
								<Button
									color="danger"
									size="lg"
									href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fas fa-play" />
									Watch video
								</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<Ramos />
						<TeamSection />
						<WorkSection />
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

Home.propTypes = {
	classes: PropTypes.object
};

export default withStyles(style)(Home);

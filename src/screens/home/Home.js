import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../../components/header/Header";
import HeaderLinks from "../../components/header/HeaderLinks";
import Footer from "../../components/footer/Footer";
import GridContainer from "../../components/grid/GridContainer";
import GridItem from "../../components/grid/GridItem";
import Button from "../../components/CustomButtons/Button.jsx";
import Parallax from "../../components/Parallax/Parallax.jsx";

import style from "../../assets/jss/screens/home/style";

import ProductSection from "./section/ProductSection";
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
								<h1 className={classes.title}>Your Story Starts With Us.</h1>
								<h4>
									Every landing page needs a small description after the big
									bold title, that{"'"}s why we added this text here. Add here
									all the information that can make you or your product create
									the first impression.
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
						<ProductSection />
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

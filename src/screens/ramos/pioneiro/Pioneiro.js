import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Header from "../../../components/header/Header";
import HeaderLinks from "../../../components/header/HeaderLinks";
import Parallax from "../../../components/parallax/Parallax";
import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import Button from "../../../components/button/Button";
import Footer from "../../../components/footer/Footer";
import NavPills from "../../../components/navpills/NavPills";

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import style from "../../../assets/jss/screens/ramos/style";
import studio1 from "../../../assets/img/examples/studio-1.jpg";
import studio2 from "../../../assets/img/examples/studio-2.jpg";
import studio3 from "../../../assets/img/examples/studio-3.jpg";
import studio4 from "../../../assets/img/examples/studio-4.jpg";
import studio5 from "../../../assets/img/examples/studio-5.jpg";
import work1 from "../../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../../assets/img/examples/clem-onojegaw.jpg";

class Pioneiro extends React.Component
{
	render() {
		const { classes, ...rest } = this.props;
		const imageClasses = classNames(
			classes.imgRaised,
			classes.imgRoundedCircle,
			classes.imgFluid
		);
		const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
		return (
			<React.Fragment>
				<Header
					color="transparent"
					brand="G.E.M.I.D.T."
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 200,
						color: "white"
					}}
					{...rest}
				/>
				<Parallax small filter image={require("../../../assets/img/profile-bg.jpg")} />
		        <div className={classNames(classes.main, classes.mainRaised)}>
		          <div>
		            <div className={classes.container}>
		              <GridContainer justify="center">
		                <GridItem xs={12} sm={12} md={6}>
		                  <div className={classes.profile}>
		                    <div>
		                      <img src={"/logo_ramo_pioneiro.png"} alt="..." className={imageClasses} />
		                    </div>
		                    <div className={classes.name}>
		                      <h3 className={classes.title}>Ramo Pioneiro</h3>
		                      <h6>18 anos a 21 anos</h6>
		                      <Button justIcon link className={classes.margin5}>
		                        <i className={"fab fa-twitter"} />
		                      </Button>
		                      <Button justIcon link className={classes.margin5}>
		                        <i className={"fab fa-instagram"} />
		                      </Button>
		                      <Button justIcon link className={classes.margin5}>
		                        <i className={"fab fa-facebook"} />
		                      </Button>
		                    </div>
		                  </div>
		                </GridItem>
		              </GridContainer>
		              <div className={classes.description}>
		                <p>
							A partir dos 18 anos, e até os 21 incompletos, integramos o Ramo Pioneiro. 
							Nossa equipe forma o clã, e é onde nos apoiamos e descobrimos interesses em comum. 
							Levamos a sério nosso lema “Servir”, já que vivemos uma aventura que não é mais 
							simbólica ou imaginária, pois experimentamos o papel real do adulto por meio 
							do serviço e das atividades de desenvolvimento comunitário.
						</p>
						<p>
							O cotidiano no clã nos dá bastante liberdade, mas já estamos cientes da 
							responsabilidade que isso traz – somos nós que organizamos nossas próprias 
							atividades. Esse é o período em que entramos na vida adulta, e estamos concluindo 
							a formação de nossos valores e princípios.
						</p>
						<p>
							Mesmo estando no clã, já podemos participar como adultos voluntários em outros 
							Ramos atuar ativamente em nossas comunidades. Prestes a completar 21 anos, é 
							chegada a hora de encerrar nossa caminhada como jovem no Movimento Escoteiro. 
							A Cerimônia de Partida marca essa etapa, que pode ser seguida pela vida escoteira 
							no papel de voluntário, como escotista ou dirigente.
		                </p>
		              </div>
		              <GridContainer justify="center">
		                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
		                  <NavPills
		                    alignCenter
		                    color="primary"
		                    tabs={[
		                      {
		                        tabButton: "Studio",
		                        tabIcon: Camera,
		                        tabContent: (
		                          <GridContainer justify="center">
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={studio1}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={studio2}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={studio5}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={studio4}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                          </GridContainer>
		                        )
		                      },
		                      {
		                        tabButton: "Work",
		                        tabIcon: Palette,
		                        tabContent: (
		                          <GridContainer justify="center">
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={work1}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={work2}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={work3}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={work4}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={work5}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                          </GridContainer>
		                        )
		                      },
		                      {
		                        tabButton: "Favorite",
		                        tabIcon: Favorite,
		                        tabContent: (
		                          <GridContainer justify="center">
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={work4}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={studio3}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                            <GridItem xs={12} sm={12} md={4}>
		                              <img
		                                alt="..."
		                                src={work2}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={work1}
		                                className={navImageClasses}
		                              />
		                              <img
		                                alt="..."
		                                src={studio1}
		                                className={navImageClasses}
		                              />
		                            </GridItem>
		                          </GridContainer>
		                        )
		                      }
		                    ]}
		                  />
		                </GridItem>
		              </GridContainer>
		            </div>
		          </div>
		        </div>
				<Footer />
			</React.Fragment>
		);
	}
}

Pioneiro.propTypes = {
	classes: PropTypes.object
};
export default withStyles(style)(Pioneiro);

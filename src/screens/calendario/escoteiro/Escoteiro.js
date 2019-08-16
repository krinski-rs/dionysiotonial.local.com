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

class Escoteiro extends React.Component
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
			<div>
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
		                      <img src={"/logo_ramo_escoteiro.png"} alt="..." className={imageClasses} />
		                    </div>
		                    <div className={classes.name}>
		                      <h3 className={classes.title}>Ramo Escoteiro</h3>
		                      <h6>11 anos a 14 anos</h6>
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
							Entre os 11 e 14 anos, fazemos parte do Ramo Escoteiro – somos patrulhas de 5 a 8 
							jovens, de meninos e meninas, que juntas formam uma tropa. Aqui, além de trabalhar 
							em equipe e entender a importância de respeitar a natureza, aprendemos diversas 
							coisas que nos deixam mais confiantes e decididos.
						</p>
						<p>
							Cada patrulha tem seu próprio bastão e bandeirola, onde gravamos lembranças 
							marcantes de nossa experiência juntos, assim como o livro de patrulha, que tem 
							todas as informações sobre os membros e fotografias das nossas ações. Elegemos 
							um monitor, que age como um líder dentro de nosso grupo, e desenvolvemos algumas 
							atividades por conta própria, como ir ao cinema, jogar algum jogo, etc.
						</p>
						<p>
							Atividades como acampamentos e excursões fazem parte da nossa vivência no Ramo 
							Escoteiro, sempre com o acompanhamento de adultos. Com nosso lema “Sempre Alerta”, 
							estamos interessados em descobrir coisas novas e estar cercados de amigos.
						</p>
						<p>
							Antes de completar 15 anos, passamos por um período de transição em que nos 
							adaptamos à realidade do Ramo Sênior, e nos despedimos da tropa escoteira com a 
							Cerimônia de Passagem.
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
			</div>
		);
	}
}

Escoteiro.propTypes = {
	classes: PropTypes.object
};
export default withStyles(style)(Escoteiro);

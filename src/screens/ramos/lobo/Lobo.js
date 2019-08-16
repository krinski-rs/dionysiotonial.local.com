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

class Lobo extends React.Component
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
		                      <img src={"/logo_ramo_lobinho.png"} alt="..." className={imageClasses} />
		                    </div>
		                    <div className={classes.name}>
		                      <h3 className={classes.title}>Ramo Lobinho</h3>
		                      <h6>6 anos e meio a 10 anos e meio</h6>
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
						Especialmente concebido para atender às necessidades de desenvolvimento das crianças 
						de ambos os sexos na faixa etária compreendida entre 7 e 10 anos, o programa educativo 
						aplicado ao Ramo Lobinho concentra a sua ênfase no processo de socialização da criança, 
						preparando-a para que, ao atingir a idade e as condições necessárias, prossiga a sua 
						formação no ramo escoteiro.
						<br />
						O Lobismo é inspirado no "Livro da Jangal", de Rudyard Kipling, resumido em "Mowgli, o 
						menino-lobo".
						<br />
						A seção do grupo escoteiro que congrega os lobinhos é denominada alcatéia (de Lobinhos, 
						Lobinhas ou Mista).
						</p>
						<p>
						O chefe é chamado de Akelá pelas crianças e seus assistentes são chamados Baloo, 
						Baguera, Kaa, Chill ou outros nomes constantes do "Livro da Jângal". A escolha dos 
						nomes dos assistentes é feita em geral pelas crianças.
						<br />
						A Alcatéia é dividida em unidades denominadas Matilhas, cada uma com 4 a 6 crianças, 
						as quais constituem as equipes de trabalho e de jogos, sem atingir contudo, o grau de 
						estratificação e de desenvolvimento recomendado para o sistema de patrulhas, adotado 
						nos ramos Escoteiro e Sênior.
						</p>
						<p>
						Uma Alcatéia completa deve contar com 4 Matilhas. O lobo é o animal símbolo de todas 
						as Matilhas, que se distinguem numa mesma Alcatéia pelas cores próprias dos lobos. A 
						Matilha é liderada por um Lobinho ou Lobinha denominado Primo, auxiliado por outro 
						denominado Segundo.
						<br />
						Os Primos e Segundos são designados pelo Akelá, mas cada Primo deve ser consultado 
						antes da designação do seu Segundo.
						<br />
						Antes de completar 11 anos, o Lobinho deve deixar a Alcatéia e ser transferido para a 
						Tropa do Ramo Escoteiro, em uma adequada cerimônia de passagem. Se o Grupo não possui 
						essa espécie de seção, a criança deve ser encaminhada a outro Grupo que a possua.
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

Lobo.propTypes = {
	classes: PropTypes.object
};
export default withStyles(style)(Lobo);

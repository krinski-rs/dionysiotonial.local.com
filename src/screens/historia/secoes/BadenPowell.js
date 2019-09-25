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

class BadenPowell extends React.Component
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
				<Parallax small filter image={"/images/baden_powell_banner.png"} />
		        <div className={classNames(classes.main, classes.mainRaised)}>
		          <div>
		            <div className={classes.container}>
		              <GridContainer justify="center">
		                <GridItem xs={12} sm={12} md={6}>
		                  <div className={classes.profile}>
		                    <div>
		                      <img src={"/images/baden_powell.jpg"} alt="..." className={imageClasses} />
		                    </div>
		                    <div className={classes.name}>
		                      <h3 className={classes.title}>Baden-Powell</h3>
		                      <h6>Robert Stephenson Smyth Baden-Powell</h6>
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
							O Movimento Escoteiro foi fundado em 1907 pelo General Robert Baden-Powell, 
							na Inglaterra. Sem pretender trazer a rigidez militar para o Movimento Escoteiro, 
							Baden-Powell aproveitou os elementos positivos de fomento à camaradagem, iniciativa, 
							coragem e autodisciplina, bem como técnicas que seriam úteis no desenvolvimento dos 
							jovens para criar um movimento educacional.
						</p>
						<p>
							Baden-Powell utilizou-se dos saberes e habilidades que aprendeu no serviço militar em 
							lugares agrestes da índia e da África, quando se tornou conhecido como “Impisa”, 
							(“o lobo que nunca dorme”, em português, pelas suas missões noturnas) para ajudar a juventude. 
							Pode-se dizer que a faísca iniciadora do Escotismo foi a publicação do livro “Ajudas à Exploração 
							Militar” (Aids To Scouting, 1899, de B-P), que continha informações para os militares sobre seguir 
							pistas, exploração e técnicas que se referiam à vida em campo, e que os rapazes ingleses usaram 
							para se divertir de maneira aventurosa. Baden-Powell foi considerado um herói por haver resistido 
							vitoriosamente a um cerco de 217 dias em Mafeking, África do Sul, durante a Guerra dos Bôeres.
						</p>
						<p>
							Percebendo o enorme interesse dos jovens em aprender e replicar as técnicas citadas no livro, 
							Baden-Powell empenhou-se em adaptá-lo para ser um acréscimo atraente ao programa das escolas 
							britânicas. Reuniu experiências e as atividades dos exploradores para criar algo que pudesse realmente 
							ser utilizado na educação e formação dos jovens: o Escotismo.
						</p>
						<p>
							No dia 1º de agosto de 1907, ele levou 20 rapazes para a Ilha de Brownsea, no Canal da Mancha, para 
							realizar o primeiro acampamento escoteiro do mundo – essa era a forma que B-P havia encontrado para 
							testar suas ideias. Ao longo de oito dias, ele aplicou diversos ensinamentos sobre vida em equipe e 
							ao ar livre, acampamentos, fogueiras, jogos, rastreamento, observação e dedução, técnicas de primeiros 
							socorros, alimentação e boas ações. Ele havia pensado nessa diversidade de práticas para que os jovens 
							pudessem voltar para casa mais independentes e com novas habilidades.
		                </p>
						<p>
							O acampamento foi um sucesso e, no início do ano seguinte, Baden-Powell lançou as seis edições do guia 
							“Escotismo para Rapazes”, sem sonhar que estaria fundando o maior movimento educacional de jovens do 
							planeta. A busca pelos manuais foi tão grande que ocasionou o surgimento de Tropas Escoteiras por toda 
							parte. Em vista dessa inesperada expansão do Movimento, B-P solicitou que fosse passado para a reserva 
							(aposentadoria) do Exército, a fim de dedicar-se à sua “segunda vida”, como chamava o Escotismo. Passou, 
							então, a viajar por diversos países, para orientar a constituição e o trabalho das associações escoteiras 
							e para fazer do Escotismo uma grande fraternidade mundial.
		                </p>
						<p>
							O Escotismo foi crescendo, ramificando-se também numa vertente para as meninas (em 1909) e, em 1920, com o 
							fim da Primeira Guerra Mundial, reuniu cerca de 8 mil jovens em Londres para o primeiro Jamboree Mundial, o 
							maior evento escoteiro do mundo.
		                </p>
						<p>
							Não há como retratar a história do Movimento Escoteiro sem retratar a história de seu fundador, proclamado 
							“Chefe Escoteiro Mundial” pela multidão de rapazes presentes ao primeiro grande evento escoteiro. B-P dedicou 
							o resto de sua vida à concretização do Movimento Escoteiro, crente que o desenvolvimento dos jovens, o respeito 
							ao próximo e a prática de boas ações diárias, poderiam auxiliar a construir um mundo melhor.
		                </p>
						<p>
							Baden-Powell envelheceu e passou a morar no Quênia, ao lado da mulher, Olave Baden-Powell, que o acompanhou 
							em todas as aventuras, atuando para que as meninas também pudessem se divertir e aprender no Movimento Escoteiro. 
							B-P faleceu em casa, em 8 de janeiro de 1941.
		                </p>
						<p>
							Mesmo com a partida de seu criador, o Escotismo continuou a crescer e a conquistar o coração de crianças, jovens e 
							adultos, alcançando mais de 40 milhões de membros em 216 países e territórios.
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

BadenPowell.propTypes = {
	classes: PropTypes.object
};
export default withStyles(style)(BadenPowell);

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "../../../components/grid/GridContainer";
import GridItem from "../../../components/grid/GridItem";
import InfoArea from "../../../components/infoarea/InfoArea";

import style from "../../../assets/jss/screens/home/product/style";

class Ramos extends React.Component {
	render() {
		const { classes } = this.props;
		const pathLobo = "M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z";
		const pathEscoteiro = "M2,16.25C2,16.25 4,3.75 12,3.75C20,3.75 22,16.25 22,16.25C22,16.25 20,20.25 12,20.25C4,20.25 2,16.25 2,16.25M3.35,15.65C3.35,15.65 4.3,19 12,19C17,19 20,17.8 20.65,15.85C21.3,13.9 15.65,7.6 14.65,7.6C13.65,7.6 11.2,12 10.45,12C8.45,12 8.9,10 7.15,10C5.4,10 3.35,15.65 3.35,15.65Z";
		const pathSenior = "M20 19.88V22L18.2 20.83L13.41 11.83A4.94 4.94 0 0 0 15.19 10.83M15 7A3 3 0 0 1 12 10A3.27 3.27 0 0 1 11.56 10L5.8 20.83L4 22V19.88L9.79 9A3 3 0 0 1 12 4V2A1 1 0 0 1 13 3V4.18A3 3 0 0 1 15 7M13 7A1 1 0 1 0 12 8A1 1 0 0 0 13 7M4.22 10L6 11.8L4.56 14.56L2.1 12.1M12 17.76L10.5 16.25L9 19L12 22L15 19L13.53 16.23M19.78 10L18 11.8L19.5 14.56L21.9 12.1Z";
		const pathPioneiro = "M9.8,8.9L7,23H9.1L10.9,15L13,17V23H15V15.5L12.9,13.5L13.5,10.5C14.63,11.81 16.29,12.73 18.15,12.95L16,23H17L20,9L19.04,8.8L18.58,11C16.86,10.85 15.44,9.89 14.7,8.6L13.7,7C13.5,6.65 13.2,6.37 12.84,6.2C12.5,6 12.08,5.96 11.68,6C11.28,6.09 10.92,6.27 10.63,6.55C10.34,6.83 10.14,7.19 10.06,7.58L9.8,8.9M7.08,6.92L9.4,7.38L8.4,12.46L6.08,12L7.08,6.92M13.5,5.5A2,2 0 0,0 15.5,3.5A2,2 0 0,0 13.5,1.5A2,2 0 0,0 11.5,3.5A2,2 0 0,0 13.5,5.5Z";
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>Você gostaria de ter uma vida cheia de Aventuras?</h2>
						<h5 className={classes.description}>
							No Escotismo você vai ter. O maior movimento do mundo feito de jovens. 
							Uma comunidade onde você pode ser quem é e descobre que pode muito mais. 
							Se você tem vontade de superar desafios e testar os seus limites, o 
							Movimento Escoteiro é para você.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={3}>
							<InfoArea
								title="Lobinho"
								description="Você forma laços de confiança quando está no Ramo Lobinho (6,5 a 10 anos)."
								svgPath={pathLobo}
								iconColor="warning"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<InfoArea
								title="Escoteiro"
								description="Cria autonomia ao viver as aventuras do Ramo Escoteiro (10 a 14 anos)."
								svgPath={pathEscoteiro}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<InfoArea
							title="Sênior"
							description="Supera os seus medos nas atividades desafiantes do Ramo Sênior (15 a 17 anos).

"
							svgPath={pathSenior}
							iconColor="primary"
							vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={3}>
							<InfoArea
							title="Pioneiro"
							description="E aplica seus conhecimentos em prol da construção de um mundo melhor nas ações comunitárias realizadas pelo Ramo Pioneiro (18 a 21 anos)."
							svgPath={pathPioneiro}
							iconColor="danger"
							vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

Ramos.propTypes = {
	classes: PropTypes.object
};

export default withStyles(style)(Ramos);

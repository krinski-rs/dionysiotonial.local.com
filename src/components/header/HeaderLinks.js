import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { History, CallSplit, RecentActors, EventAvailable, Terrain } from "@material-ui/icons";

// core components
import CustomDropdown from "../../components/dropdown/CustomDropdown";
import Button from "../../components/button/Button";

import style from "../../assets/jss/components/header/linkStyle";

function HeaderLinks({ ...props }) {
	const { classes } = props;
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Ramos"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					buttonIcon={CallSplit}
					dropdownList={[
						<Link to="/ramos/lobo" className={classes.dropdownLink}>
							Lobinho
						</Link>,
						<Link to="/ramos/escoteiro" className={classes.dropdownLink}>
							Escoteiro
						</Link>,
						<Link to="/ramos/senior" className={classes.dropdownLink}>
							Sênior
						</Link>,
						<Link to="/ramos/pioneiro" className={classes.dropdownLink}>
							Pioneiro
						</Link>
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="História"
					buttonProps={{
						className: classes.navLink,
						color: "transparent"
					}}
					buttonIcon={History}
					dropdownList={[
						<Link to="/historia/badenpowell" className={classes.dropdownLink}>
							Baden-Powell
						</Link>,
						<Link to="/historia/dionysiotonial" className={classes.dropdownLink}>
							Dionysio Tonial
						</Link>,
						<Link to="/historia/viamao" className={classes.dropdownLink}>
							Viamão
						</Link>,
						<Link to="/historia/marista" className={classes.dropdownLink}>
							Marista
						</Link>,
					]}
				/>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					<Terrain className={classes.icons} />&nbsp;Escotismo
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					<EventAvailable className={classes.icons} />&nbsp;Calendário
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Button
					href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
					color="transparent"
					target="_blank"
					className={classes.navLink}
				>
					<RecentActors className={classes.icons} />&nbsp;Blog
				</Button>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-twitter"
					title="siga-nos no twitter"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						href="https://twitter.com/CreativeTim?ref=creativetim"
						target="_blank"
						color="transparent"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-twitter"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="siga-nos no facebook"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.facebook.com/CreativeTim?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-facebook"} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="siga-nos no instagram"
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
				>
					<Button
						color="transparent"
						href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
						target="_blank"
						className={classes.navLink}
					>
						<i className={classes.socialIcons + " fab fa-instagram"} />
					</Button>
				</Tooltip>
			</ListItem>
		</List>
	);
}

export default withStyles(style)(HeaderLinks);

import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import SvgIcon from '@material-ui/core/SvgIcon';

//import infoStyle from "../../assets/jss/material-kit-react/components/infoStyle.jsx";
import style from "../../assets/jss/components/infoarea/style";

function InfoArea({ ...props }) {
	const { classes, title, description, iconColor, vertical } = props;
	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		[classes[iconColor]]: true,
		[classes.iconWrapperVertical]: vertical
	});
	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical
	});
	return (
		<div className={classes.infoArea}>
			<div className={iconWrapper}>
				<SvgIcon className={iconClasses}>
					<path d={props.svgPath} />
				</SvgIcon>
			</div>
			<div className={classes.descriptionWrapper}>
				<h4 className={classes.title}>{title}</h4>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
}

InfoArea.defaultProps = {
	iconColor: "gray"
};

InfoArea.propTypes = {
	classes: PropTypes.object.isRequired,
	svgPath: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconColor: PropTypes.oneOf([
		"primary",
		"warning",
		"danger",
		"success",
		"info",
		"rose",
		"gray"
	]),
	vertical: PropTypes.bool
};

export default withStyles(style)(InfoArea);

import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Header from "../../../components/header/Header";
import HeaderLinks from "../../../components/header/HeaderLinks";
import Parallax from "../../../components/parallax/Parallax";
import Footer from "../../../components/footer/Footer";

import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments
} from "@devexpress/dx-react-scheduler-material-ui";

import style from "../../../assets/jss/screens/calendario/style";

class Lobo extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			data: [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 30, 9, 30),
    endDate: new Date(2018, 5, 30, 11, 30),
    id: 0,
    location: "Room 1"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 25, 12, 0),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 1,
    location: "Room 1"
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 5, 25, 14, 30),
    endDate: new Date(2018, 5, 25, 15, 30),
    id: 2,
    location: "Room 2"
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 26, 12, 0),
    endDate: new Date(2018, 5, 26, 13, 35),
    id: 4,
    location: "Room 2"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 5, 26, 14, 30),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
    location: "Room 2"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 5, 27, 9, 45),
    endDate: new Date(2018, 5, 27, 11, 15),
    id: 6,
    location: "Room 1"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 5, 27, 12, 0),
    endDate: new Date(2018, 5, 27, 14, 0),
    id: 7,
    location: "Room 3"
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 5, 27, 15, 15),
    endDate: new Date(2018, 5, 27, 16, 30),
    id: 8,
    location: "Room 3"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 12, 0),
    id: 9,
    location: "Room 3"
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 5, 28, 11, 0),
    endDate: new Date(2018, 5, 28, 13, 30),
    id: 10,
    location: "Room 1"
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 5, 28, 14, 0),
    endDate: new Date(2018, 5, 28, 15, 30),
    id: 11,
    location: "Room 2"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
    location: "Room 2"
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 5, 29, 14, 30),
    endDate: new Date(2018, 5, 29, 16, 0),
    id: 13,
    location: "Room 3"
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 5, 29, 16, 30),
    endDate: new Date(2018, 5, 29, 18, 0),
    id: 14,
    location: "Room 3"
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 5, 29, 12, 20),
    endDate: new Date(2018, 5, 29, 14, 0),
    id: 15,
    location: "Room 2"
  },
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 6, 2, 9, 30),
    endDate: new Date(2018, 6, 2, 15, 30),
    id: 16,
    location: "Room 1"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 6, 2, 12, 0),
    endDate: new Date(2018, 6, 2, 13, 0),
    id: 17,
    location: "Room 3"
  },
  {
    title: "Install New Router in Dev Room",
    startDate: new Date(2018, 6, 2, 14, 30),
    endDate: new Date(2018, 6, 2, 17, 30),
    id: 18,
    location: "Room 2"
  },
  {
    title: "Approve Personal Computer Upgrade Plan",
    startDate: new Date(2018, 6, 2, 16, 0),
    endDate: new Date(2018, 6, 3, 9, 0),
    id: 19,
    location: "Room 2"
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 6, 3, 10, 15),
    endDate: new Date(2018, 6, 3, 13, 35),
    id: 20,
    location: "Room 1"
  },
  {
    title: "New Brochures",
    startDate: new Date(2018, 6, 3, 14, 30),
    endDate: new Date(2018, 6, 3, 15, 45),
    id: 21,
    location: "Room 3"
  },
  {
    title: "Install New Database",
    startDate: new Date(2018, 6, 3, 15, 45),
    endDate: new Date(2018, 6, 4, 12, 15),
    id: 22,
    location: "Room 3"
  },
  {
    title: "Approve New Online Marketing Strategy",
    startDate: new Date(2018, 6, 4, 12, 35),
    endDate: new Date(2018, 6, 4, 14, 15),
    id: 23,
    location: "Room 3"
  },
  {
    title: "Upgrade Personal Computers",
    startDate: new Date(2018, 6, 4, 15, 15),
    endDate: new Date(2018, 6, 4, 20, 30),
    id: 24,
    location: "Room 2"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 6, 0),
    endDate: new Date(2018, 6, 5, 14, 20),
    id: 25,
    location: "Room 1"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 5, 14, 35),
    endDate: new Date(2018, 6, 5, 16, 20),
    id: 26,
    location: "Room 1"
  },
  {
    title: "Customer Workshop 2",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 5, 11, 20),
    id: 27,
    location: "Room 2"
  },
  {
    title: "Prepare 2015 Marketing Plan",
    startDate: new Date(2018, 6, 5, 20, 0),
    endDate: new Date(2018, 6, 6, 13, 30),
    id: 28,
    location: "Room 3"
  },
  {
    title: "Brochure Design Review",
    startDate: new Date(2018, 6, 6, 14, 10),
    endDate: new Date(2018, 6, 6, 15, 30),
    id: 29,
    location: "Room 3"
  },
  {
    title: "Create Icons for Website",
    startDate: new Date(2018, 6, 6, 10, 0),
    endDate: new Date(2018, 6, 7, 14, 30),
    id: 30,
    location: "Room 1"
  },
  {
    title: "Upgrade Server Hardware",
    startDate: new Date(2018, 6, 3, 9, 30),
    endDate: new Date(2018, 6, 3, 12, 25),
    id: 31,
    location: "Room 2"
  },
  {
    title: "Submit New Website Design",
    startDate: new Date(2018, 6, 3, 12, 30),
    endDate: new Date(2018, 6, 3, 18, 0),
    id: 32,
    location: "Room 2"
  },
  {
    title: "Launch New Website",
    startDate: new Date(2018, 6, 3, 12, 20),
    endDate: new Date(2018, 6, 3, 14, 10),
    id: 33,
    location: "Room 2"
  },
  {
    title: "Book Flights to San Fran for Sales Trip",
    startDate: new Date(2018, 5, 26, 0, 0),
    endDate: new Date(2018, 5, 27, 0, 0),
    id: 34,
    location: "Room 1"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 30, 14, 30),
    id: 35,
    location: "Room 1"
  },
  {
    title: "Google AdWords Strategy",
    startDate: new Date(2018, 6, 3, 0, 0),
    endDate: new Date(2018, 6, 4, 10, 30),
    id: 36,
    location: "Room 3"
  },
  {
    title: "Rollout of New Website and Marketing Brochures",
    startDate: new Date(2018, 6, 5, 10, 0),
    endDate: new Date(2018, 6, 9, 14, 30),
    id: 37,
    location: "Room 3"
  },
  {
    title: "Update NDA Agreement",
    startDate: new Date(2018, 6, 1, 10, 0),
    endDate: new Date(2018, 6, 3, 14, 30),
    id: 38,
    location: "Room 2"
  },
  {
    title: "Customer Workshop",
    startDate: new Date(2018, 6, 1),
    endDate: new Date(2018, 6, 2),
    allDay: true,
    id: 39,
    location: "Room 1"
  }
]
		};
	}
	
	render() {
		const { classes, ...rest } = this.props;	  
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
				<Parallax little filter image={require("../../../assets/img/profile-bg.jpg")} />
		        <div className={classNames(classes.main, classes.mainRaised)}>
						<Scheduler data={this.state.data} locale={'pt-BR'}>
							<ViewState currentDate="2018-06-28" />
							<WeekView startDayHour={ 0 } endDayHour={24} firstDayOfWeek={1} />
							<Toolbar />
							<DateNavigator />
							<Appointments />
						</Scheduler>

		        </div>
				<Footer />
			</div>
		);
	}
}

Lobo.propTypes = {
	classes: PropTypes.object
};
export default withStyles(style)(Lobo);

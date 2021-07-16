import React, {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {bindActionCreators} from "redux";
import setCurrentDayCalendarDispatch from "../store/Dispatch/CurrentDayCalendarDispatch";
import {connect} from "react-redux";

class CalendarFrizer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {currentDay} = this.props;
        console.log(this.props)

        const onChange = (nextValue) => {
            this.props.setCurrentDayCalendarDispatch(nextValue)
        }
        return (
            <div>
                <Calendar
                    onChange={onChange}
                    value={currentDay}
                    onClickDay={() => console.log(currentDay)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentDay: state.currentDayCalendarReducer.currentDay,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setCurrentDayCalendarDispatch: setCurrentDayCalendarDispatch
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarFrizer);


import {setCurrentDayCalendar} from "../actions/CurrentDateCalendarAction";

export default function setCurrentDayCalendarDispatch(currebtDayToBeSet) {
    return dispatch => {
        dispatch(setCurrentDayCalendar(currebtDayToBeSet))
    }
}

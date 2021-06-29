import {SET_CURRENT_DAY_CALENDAR} from "./CurrentDateCalendarActionTypes";

export function setCurrentDayCalendar(currentDayToBeSet) {
    return {
        type: SET_CURRENT_DAY_CALENDAR,
        payload: {currentDayToBeSet}
    }
}

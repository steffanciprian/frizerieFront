import {SET_CURRENT_DAY_CALENDAR} from "../actions/CurrentDateCalendarActionTypes";

const initialState = {
    currentDay: new Date(),
}

export default function currentDayCalendarReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_DAY_CALENDAR:
            return {
                ...state,
                currentDay: action.payload.currentDayToBeSet,
            }

        default:
            return state;
    }
}

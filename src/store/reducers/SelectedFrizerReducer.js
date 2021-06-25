import {SELECTED_FRIZER_ID} from "../actions/SelectedFrizerActionTypes";

const initialState = {
    selectedFrizerId: -1,
}

export default function setSelectedFrizerIdReducer(state = initialState, action) {
    switch (action.type) {
        case SELECTED_FRIZER_ID :
            return {
                ...state,
                selectedFrizerId: action.payload.idToBeSet
            }
        default :
            return state
    }
}

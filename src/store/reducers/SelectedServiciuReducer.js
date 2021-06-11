import {SELECT_SERVICIU_ID} from "../actions/SelectServiciuActionTypes";

const initialState = {
    selectedServiciuId: -1,
}

export default function setSelectedServiciuReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_SERVICIU_ID :
            return {
                ...state,
                selectedServiciuId: action.payload.idToBeSet
            }

        default :
            return state;
    }
}


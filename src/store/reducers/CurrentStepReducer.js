import {SET_CURRENT_STEP} from '../actions/CurrentStepActionTypes'

const initialState = {
    currentStep: 0,
}

export default function currentStepReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_STEP:
            return {
                ...state,
                currentStep: action.payload.currentStep
            }

        default :
            return state;
    }
}

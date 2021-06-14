import {SET_CURRENT_STEP} from './CurrentStepActionTypes'

export function setCurrentStep(currentStep) {
    return {
        type: SET_CURRENT_STEP,
        payload: {currentStep}
    }
}

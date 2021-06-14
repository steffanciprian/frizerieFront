import {setCurrentStep} from '../actions/CurrentStepAction'
export default function setCurrentStepDispatch(currentStep)
{
    return dispatch =>{
        dispatch(setCurrentStep(currentStep))
    }
}

import {selectServiciuId} from "../actions/SelectServiciuAction";

export default function setSelectedServiciuId(serviciuId) {
    return dispatch => {
        dispatch(selectServiciuId(serviciuId))
    }
}

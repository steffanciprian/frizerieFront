import {SELECT_SERVICIU_ID} from "./SelectServiciuActionTypes";

export function selectServiciuId(idToBeSet) {
    return {
        type: SELECT_SERVICIU_ID,
        payload: {idToBeSet}
    }
}

import {SELECTED_FRIZER_ID} from "./SelectedFrizerActionTypes";

export function selectedFrizerId(idToBeSet)
{
    return {
        type: SELECTED_FRIZER_ID,
        payload :{idToBeSet}
    }
}

import {selectedFrizerId} from "../actions/SelectedFrizerAction";

export default function setSelectedFrizerId(frizerId) {
    return dispatch => {
        dispatch(selectedFrizerId(frizerId))
    }
}

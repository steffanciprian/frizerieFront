import axios from 'axios';
import {fetchDataPending, fetchDataError, fetchDataSucces} from "../actions/FetchServiciiActions";

export default function fetchServicii() {
    return dispatch => {
        dispatch(fetchDataPending());
        axios
            .get('http://localhost:8080/servicii')
            .then(response => {
                dispatch(fetchDataSucces(response.data));
            })
            .catch(error =>
                dispatch(fetchDataError(error)))
    }
}

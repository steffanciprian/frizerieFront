import axios from 'axios';
import {fetchFrizeriPending, fetchFrizeriError, fetchFrizeriSuccess} from "../actions/FetchFrizeriActions";

export default function fetchFrizeriDispatch() {
    return dispatch => {
        dispatch(fetchFrizeriPending());
        axios
            .get('http://localhost:8080/programare/stylist')
            .then(response => {
                dispatch(fetchFrizeriSuccess(response.data));
            })
            .catch(error =>
                dispatch(fetchFrizeriError(error)))
    }
}

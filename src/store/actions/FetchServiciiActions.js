import {FETCH_SERVICII_SUCCESS, FETCH_SERVICII_ERROR, FETCH_SERVICII_PENDING} from './FetchServiciiActionTypes';

export function fetchDataPending() {
    return {
        type: FETCH_SERVICII_PENDING
    };
}

export function fetchDataSucces(servicii) {
    return {
        type: FETCH_SERVICII_SUCCESS,
        payload: {servicii}
    };
}

export function fetchDataError(error) {
    return {
        type: FETCH_SERVICII_ERROR,
        payload: {error}
    }
}

import {
    FETCH_FRIZERI_SUCCESS,
    FETCH_FRIZERI_PENDING,
    FETCH_FRIZERI_ERROR
} from '../actions/FetchFrizeriActionTypes'

export function fetchFrizeriPending() {
    return {
        type: FETCH_FRIZERI_PENDING
    };
}

export function fetchFrizeriSuccess(frizeri) {
    return {
        type: FETCH_FRIZERI_SUCCESS,
        payload: {frizeri}
    };
}

export function fetchFrizeriError(error) {
    return {
        type: FETCH_FRIZERI_ERROR,
        payload: {error}
    }
}

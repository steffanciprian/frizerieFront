import {
    FETCH_SERVICII_ERROR,
    FETCH_SERVICII_PENDING,
    FETCH_SERVICII_SUCCESS
} from "../actions/FetchServiciiActionTypes";

const initialState = {
    loading: false,
    servicii: [],
    error: null,
}

export default function fetchServiciiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICII_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_SERVICII_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                servicii: action.payload.servicii,
            }

        case FETCH_SERVICII_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                servicii: []
            }
        default:
            return state;
    }
}

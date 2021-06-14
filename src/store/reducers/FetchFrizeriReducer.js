import {FETCH_FRIZERI_PENDING, FETCH_FRIZERI_ERROR, FETCH_FRIZERI_SUCCESS} from "../actions/FetchFrizeriActionTypes";

const initialState = {
    frizeri: [],
    loading: true,
    error: null,
}

export default function fetchFrizeriReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FRIZERI_PENDING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case FETCH_FRIZERI_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                frizeri: action.payload.frizeri
            }
        case FETCH_FRIZERI_ERROR:
            return {
                ...state,
                error: action.payload.error,
                frizeri: []
            }
        default:
            return state;
    }

}

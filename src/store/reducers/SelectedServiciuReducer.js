const initialState = {
    selectedServiciuId: -1,
}

export default function setSelectedServiciuReducer(state = initialState, action) {
    switch (action.type) {
        case 'setServiciuId' :
            return {
                selectedServiciuId: action.selectedServiciuId
            }
        default :
            return state;
    }
}


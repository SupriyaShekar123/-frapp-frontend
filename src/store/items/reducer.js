import { FETCH_SUCCES, NEW_ITEM, UPDATE_ITEM } from "./actions"

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_SUCCES:
        return [ ...payload ]
    case NEW_ITEM:
        return [ ...state, ...payload ]
    case UPDATE_ITEM:
        return [ ...state.filter(item => item.id !== payload.id), ...payload ]
    default:
        return state
    }
}

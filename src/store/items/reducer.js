import { FETCH_SUCCES } from "./actions"

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_SUCCES:
        return [ ...state, ...payload ]
    default:
        return state
    }
}

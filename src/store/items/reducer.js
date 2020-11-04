import { FETCH_SUCCES, NEW_ITEM } from "./actions"

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case FETCH_SUCCES:
        return [ ...payload ]
    case NEW_ITEM:
        return [ ...state, ...payload ]

    default:
        return state
    }
}

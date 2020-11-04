import axios from 'axios'
import { apiUrl } from '../../config/constants'
import { selectId } from '../user/selectors'

export const FETCH_SUCCES = 'FETCH_SUCCES'

export const fetchSucces = payload => {
    return {
        type: FETCH_SUCCES,
        payload
    }
}

export const fetchItems = userId => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${apiUrl}/items/${getState(selectId)}`)

        dispatch(fetchSucces(res.data))
    } catch (error) {
        console.log(error.message)
    }
}
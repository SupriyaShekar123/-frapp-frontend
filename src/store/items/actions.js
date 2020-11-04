import axios from 'axios'
import { apiUrl } from '../../config/constants'
import { selectId, selectToken } from '../user/selectors'

export const FETCH_SUCCES = 'FETCH_SUCCES'
export const NEW_ITEM = 'NEW_ITEM'

export const newItem = payload =>  {
    return { 
        type: NEW_ITEM, payload
    }
}
export const fetchSucces = payload => {
    return {
        type: FETCH_SUCCES,
        payload
    }
}

export const postItem = item => async (dispatch, getState) => {
    const token = selectToken(getState())
    if (token === null) return
    try {     
        const res = await axios.post(`${apiUrl}/items`, {
            item,
            headers: { Authorization: `Bearer ${token}` }
        })

        dispatch(newItem(res.data))
    } catch (error) {
        console.log(error.message)
    }
}

export const fetchItems = () => async (dispatch, getState) => {
    const token = selectToken(getState())
    const id = selectId(getState())
    console.log(token, id)
    if (token === null) return
    try {
        const res = await axios.get(`${apiUrl}/items/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log(res)
        dispatch(fetchSucces(res.data))
    } catch (error) {
        console.log(error.message)
    }
}
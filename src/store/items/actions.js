import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectId, selectToken } from "../user/selectors";
import { selectItemById } from "./selectors";

export const FETCH_SUCCES = "FETCH_SUCCES";
export const NEW_ITEM = "NEW_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const newItem = (payload) => {
  return {
    type: NEW_ITEM,
    payload,
  };
};
export const fetchSucces = (payload) => {
  return {
    type: FETCH_SUCCES,
    payload,
  };
};

export const updateSucces = (payload) => {
  return {
    type: UPDATE_ITEM,
    payload,
  };
};

export const updateItem = (id, wastedOrEaten) => async (dispatch, getState) => {
  const token = selectToken(getState());
  const userId = selectId(getState());

  if (token === null || id === null || userId === null) return;
  try {
    const res = await axios.patch(`${apiUrl}/items/${userId}`, {
      data: { wasted: wastedOrEaten, id },
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(updateItem(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const postItem = (item) => async (dispatch, getState) => {
  const token = selectToken(getState());
  if (token === null) return;
  try {
    const res = await axios.post(`${apiUrl}/items`, {
      data: item,
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(newItem(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchItems = () => async (dispatch, getState) => {
  const token = selectToken(getState());
  const id = selectId(getState());
  console.log(token, id);
  if (token === null) return;
  try {
    const res = await axios.get(`${apiUrl}/items/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    dispatch(fetchSucces(res.data));
  } catch (error) {
    console.log(error.message);
  }
};

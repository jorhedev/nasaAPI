import axios from "axios";

export const GET_IMAGENES = "GET_IMAGENES";
export const SET_INDEX_PAGE = "SET_INDEX_PAGE";
export const ORDER_DATE = "ORDER_DATE";

const ApiKey = "zhJQlfJN85HwVKwYRXBZdHEj2Ywd6KqZDkm7Ubwg";

export const getImagenes = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${ApiKey}&count=48`
    );
    const imagenes = apiData.data;

    dispatch({ type: GET_IMAGENES, payload: imagenes });
  };
};

export const setIndexPage = (index) => {
  return {
    type: SET_INDEX_PAGE,
    payload: index,
  };
};

export const orderDate = (orden) => {
  return {
    type: ORDER_DATE,
    payload: orden,
  };
};

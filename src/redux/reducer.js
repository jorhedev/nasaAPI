import { GET_IMAGENES, SET_INDEX_PAGE, ORDER_DATE } from "./actions";

const initialState = {
  imagenes: [],
  updatedShowImages: [],
  indexPage: 1,
  quantityImages: 6,
  indexFirstImages: 0,
  indexLastImages: 6,
  quantityPages: 1,
  prevIndexPage: 1,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGENES:
      return {
        ...state,
        imagenes: action.payload,
        updatedShowImages: action.payload.slice(
          state.indexFirstImages,
          state.indexLastImages
        ),
        quantityPages: Math.ceil(action.payload.length / state.quantityImages),
      };

    case SET_INDEX_PAGE: {
      let index = action.payload || state.indexPage;
      let first = (index - 1) * state.quantityImages;
      let last = index * state.quantityImages;
      let update = state.imagenes.slice(first, last);
      return {
        ...state,
        indexPage: index,
        indexLastImages: last,
        indexFirstImages: first,
        updatedShowImages: update,
        prevIndexPage: state.indexPage,
      };
    }

    case ORDER_DATE: {
      const sortedByDate = [...state.updatedShowImages].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
          return action.payload === "newest-first" ? 1 : -1;
        }
        if (dateA > dateB) {
          return action.payload === "oldest-first" ? 1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        updatedShowImages: sortedByDate,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;

import { createSlice } from "@reduxjs/toolkit";
import API from "../../api";
import { loadMemes } from "./memeSlice";
import { MEMES_PER_PAGE } from "../../constants";
export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    count: 0,
    previous: "",
    next: "",
    currentPage: 1,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setNext: (state, action) => {
      state.next = action.payload;
    },
    setPrevious: (state, action) => {
      state.previous = action.payload;
    },
    setAll: (state, action) => {
      state.count = Math.ceil(action.payload.count / MEMES_PER_PAGE);
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const {
  setCount,
  setNext,
  setPrevious,
  setCurrent,
  setAll,
} = paginationSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// currentPage is the new page number passed
export const setByPageNumberAsync = (currentPage) => (dispatch) => {
  API.get(`/memes/?page=${currentPage}`).then((res) => {
    console.log("res = ", res.data.results);
    dispatch(setAll({ ...res.data, currentPage }));
    dispatch(loadMemes(res.data.results));
  });
};

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectCount = (state) => state.pagination.count;
// export const selectShouldNavigate = (state) => state.meme.shouldNavigate;

export default paginationSlice.reducer;

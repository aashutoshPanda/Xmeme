import { createSlice } from "@reduxjs/toolkit";
import { MEMES_PER_PAGE } from "../../constants";
export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    pageNumber: 1,
    totalPages: 1,
  },
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = Math.ceil(action.payload / MEMES_PER_PAGE);
    },
  },
});

export const { setPageNumber, setTotalPages } = paginationSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// currentPage is the new page number passed

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectPageNumber = (state) => state.pagination.pageNumber;
export const selectTotalPages = (state) => state.pagination.totalPages;

export default paginationSlice.reducer;

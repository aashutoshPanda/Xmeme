import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./slices/memeSlice";
import paginationReducer from "./slices/paginationSlice";

export default configureStore({
  reducer: {
    meme: memeReducer,
    pagination: paginationReducer,
  },
});

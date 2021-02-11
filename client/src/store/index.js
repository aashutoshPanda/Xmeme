import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./slices/memeSlice";
import alertReducer from "./slices/alertSlice";
import loadingReducer from "./slices/loadingSlice";
import paginationReducer from "./slices/paginationSlice";
export default configureStore({
  reducer: {
    meme: memeReducer,
    alert: alertReducer,
    loading: loadingReducer,
    pagination: paginationReducer,
  },
});

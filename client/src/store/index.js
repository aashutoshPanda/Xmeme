import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./slices/memeSlice";
import alertReducer from "./slices/alertSlice";
import loadingReducer from "./slices/loadingSlice";

export default configureStore({
  reducer: {
    meme: memeReducer,
    alert: alertReducer,
    loading: loadingReducer,
  },
});

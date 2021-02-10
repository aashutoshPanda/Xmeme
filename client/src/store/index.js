import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./slices/memeSlice";
import alertReducer from "./slices/alertSlice";

export default configureStore({
  reducer: {
    meme: memeReducer,
    alert: alertReducer,
  },
});

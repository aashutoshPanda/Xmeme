import { configureStore } from "@reduxjs/toolkit";
import memeReducer from "./slices/memeSlice";

export default configureStore({
  reducer: {
    meme: memeReducer,
  },
});

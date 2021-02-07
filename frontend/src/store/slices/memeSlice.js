import { createSlice } from "@reduxjs/toolkit";
import API from "../../api";

export const memeSlice = createSlice({
  name: "meme",
  initialState: {
    memeList: [],
    memeToUpdate: {},
  },
  reducers: {
    loadMemes: (state, action) => {
      state.memeList = action.payload;
    },
    addMeme: (state, action) => {
      state.memeList.push(action.payload);
    },
    setMemeToUpdate: (state, action) => {
      state.memeToUpdate = action.payload;
    },
    updateMeme: (state, action) => {
      const meme = state.memeList.find((meme) => meme.id === action.payload.id);
      if (meme) {
        meme.name = action.payload.name;
        meme.url = action.payload.url;
        meme.caption = action.payload.caption;
      }
    },
    deleteMeme: (state, action) => {
      state.memeList = state.memeList.filter(
        (meme) => meme.id !== action.payload
      );
    },
  },
});

export const {
  loadMemes,
  addMeme,
  setMemeToUpdate,
  updateMeme,
  deleteMeme,
} = memeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getMemesAsync = () => (dispatch) => {
  API.get(`/memes/`).then((res) => {
    console.log("meme data", res.data);
    dispatch(loadMemes(res.data));
  });
};
export const PostMemeAsync = (data) => (dispatch) => {
  API.post(`/memes/`, data).then((res) => {
    console.log("meme data after post", res.data);
    dispatch(addMeme(res.data));
  });
};
export const UpdateMemeAsync = (data) => (dispatch) => {
  API.put(`/memes/${data.id}/`, data).then((res) => {
    console.log("meme data after update", res.data);
    dispatch(updateMeme(res.data));
  });
};
export const DeleteMemeAsync = (id) => (dispatch) => {
  API.delete(`/memes/${id}/`).then((res) => {
    dispatch(deleteMeme(id));
  });
};
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectMemeToUpdate = (state) => state.meme.memeToUpdate;
export const selectMemeList = (state) => state.meme.memeList;
// export const selectShouldNavigate = (state) => state.meme.shouldNavigate;

export default memeSlice.reducer;

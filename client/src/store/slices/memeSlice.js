import { createSlice } from "@reduxjs/toolkit";
import { setIsOpen, setType, setMessage, reset } from "./alertSlice";
import API from "../../api";

export const memeSlice = createSlice({
  name: "meme",
  initialState: {
    memeList: [],
    memeToUpdate: {
      name: "",
      caption: "",
      url: "",
      id: "",
    },
    memeToAdd: { name: "", caption: "", url: "" },
    memeListCurrentPage: [],
  },
  reducers: {
    loadMemes: (state, action) => {
      state.memeList = action.payload;
      state.memeListCurrentPage = action.payload;
    },
    addMeme: (state, action) => {
      state.memeList.push(action.payload);
    },
    setMemeToUpdate: (state, action) => {
      state.memeToUpdate.name = action.payload.name;
      state.memeToUpdate.caption = action.payload.caption;
      state.memeToUpdate.url = action.payload.url;
      state.memeToUpdate.id = action.payload.id;
    },
    setMemeToAdd: (state, action) => {
      state.memeToAdd.name = action.payload.name;
      state.memeToAdd.caption = action.payload.caption;
      state.memeToAdd.url = action.payload.url;
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
    searchMeme: (state, action) => {
      state.memeList = state.memeListCurrentPage.filter((item) => {
        if (action.payload === "") return item;
        if (item.caption.toLowerCase().includes(action.payload)) return item;
      });
    },
  },
});

export const {
  loadMemes,
  addMeme,
  setMemeToUpdate,
  updateMeme,
  deleteMeme,
  setMemeToAdd,
  searchMeme,
} = memeSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const makeMessageFromError = (errorData) => {
  let message = "";
  for (let key in errorData) {
    // check if the property/key is defined in the object itself, not in parent
    if (errorData.hasOwnProperty(key)) {
      console.log(key, errorData[key]);
      message += `${key} : ${errorData[key]}\n`;
    }
  }
  return message;
};
const hadleErrors = (err) => (dispatch) => {
  console.log("error was = ", err.response.data);
  const message = makeMessageFromError(err.response.data);
  dispatch(setType("error"));
  dispatch(setMessage(message));
  dispatch(setIsOpen(true));
};
export const getMemesAsync = () => (dispatch) => {
  API.get(`/memes/`).then((res) => {
    console.log("meme data", res.data);
    dispatch(loadMemes(res.data));
  });
};
export const PostMemeAsync = (data) => (dispatch) => {
  API.post(`/memes/`, data)
    .then((res) => {
      console.log("meme data after post", res.data);
      dispatch(addMeme(res.data));
      const message = "Successfully Posted !";
      dispatch(setMessage(message));
      dispatch(setIsOpen(true));
      dispatch(setType("success"));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(hadleErrors(err));
      }
    });
};
export const UpdateMemeAsync = (data) => (dispatch) => {
  API.put(`/memes/${data.id}/`, data)
    .then((res) => {
      console.log("meme data after update", res.data);
      dispatch(updateMeme(res.data));
      const message = "Successfully Updated!";
      dispatch(setMessage(message));
      dispatch(setType("success"));
      dispatch(setIsOpen(true));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(hadleErrors(err));
      }
    });
};
export const DeleteMemeAsync = (id) => (dispatch) => {
  API.delete(`/memes/${id}/`)
    .then((res) => {
      dispatch(deleteMeme(id));
    })
    .catch((err) => {
      if (err.response) {
        dispatch(hadleErrors(err));
      }
    });
};
// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectMemeToUpdate = (state) => state.meme.memeToUpdate;
export const selectMemeToAdd = (state) => state.meme.memeToAdd;
export const selectMemeList = (state) => state.meme.memeList;
// export const selectShouldNavigate = (state) => state.meme.shouldNavigate;

export default memeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    isOpen: false,
    type: "none",
    message: "",
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    reset: (state, action) => {
      state.isOpen = false;
      state.type = "none";
      state.message = "";
    },
  },
});

export const { setIsOpen, setType, setMessage, reset } = alertSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// // The function below is called a selector and allows us to select a value from
// // the state. Selectors can also be defined inline where they're used instead of
// // in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectAlertIsOpen = (state) => state.alert.isOpen;
export const selectAlertType = (state) => state.alert.type;
export const selectAlertMessage = (state) => state.alert.message;

export default alertSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialformPartsState = { formParts: 0, showCounter: true,info:{} };

//createSlice takes an obj as arg it creates a slice for pieces of  states that are not directly related like authentication and coutner
//slice of global state

const formPartsSlice = createSlice({
  //can be anyname
  name: 'counter',
  initialState:initialformPartsState,
  reducers: {
    //add methods
    increment(state) {
      state.formParts++;
    },

    decrement(state) {
      state.formParts--;
      //you can now mutate the internal state cuz the toolkit uses an internal package that creates a new obj for you
    },
    infoUpdate(state, action) {
      state.info = {...state.info ,...action.payload};
    },

  },
});

export const formPartsActions = formPartsSlice.actions;
export default formPartsSlice.reducer
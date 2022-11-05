import { configureStore, createSlice } from '@reduxjs/toolkit';
import formpartsReducer from '../formparts'


const store = configureStore({
  //reducer:counterSlice for one main reducer fn slice
  reducer: {fp : formpartsReducer},

});
export default store;


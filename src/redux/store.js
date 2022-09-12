import {configureStore} from '@reduxjs/toolkit';
import cakecounterReducer from './cake/counterSlice';

export default configureStore({
  reducer: {
    cakecounter: cakecounterReducer,
  },
});

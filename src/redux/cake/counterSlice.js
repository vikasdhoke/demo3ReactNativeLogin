import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    decrement: state => {
      state.value -= 1;
    },
  },
});

export const {decrement} = counterSlice.actions;

export default counterSlice.reducer;

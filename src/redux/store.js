import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cake/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

 
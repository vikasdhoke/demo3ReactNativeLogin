// import { applyMiddleware, createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import thunk from 'redux-thunk';
import counterReducer from './cake/counterSlice'


// import cakereducer from './cake/cakeReducer';
import reducers from './cake/reducer/cakeReducer';
// applyMiddleware

// export default configureStore( reducers , {}, applyMiddleware(thunk) );
// export default configureStore( reducers  );


export default configureStore({
  reducer: {
    // count: counterReducer,
    counter: counterReducer,
  },
})

// ***
// const reducer = {
//     count: counterReducer,
// }


// const store = configureStore({
// //   reducer: {
//     reducer: reducer,
//     devTools: true, 
// //   },
// })

// export default store

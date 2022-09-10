import { applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk';

// import cakereducer from './cake/cakeReducer';
import reducers from './cake/reducer/cakeReducer';
applyMiddleware

export const store = createStore( reducers , {}, applyMiddleware(thunk) );

 
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  rootReducer
  , initialState
  , compose(
    applyMiddleware(...middleWare),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };

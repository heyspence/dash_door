import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import session from './session'
import sessionReducer from './session';
import errorsReducer from './errors';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

let enhancer = applyMiddleware(thunk);

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;


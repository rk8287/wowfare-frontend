import {createStore,combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { profileReducer, userReducer } from './Reducer/userReducer';
import { newProductReducer, productDetailsReducer, productReducer } from './Reducer/productReducer';


const reducer = combineReducers({
  user: userReducer,
  products:productReducer,
  profile:profileReducer,
  newProduct: newProductReducer,
  productDetails:productDetailsReducer,
});

let initialState = {
 
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
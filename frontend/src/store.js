import { getAllProductsReducer, getProductByIdReducer ,deleteProductReducer,addProductReducer} from "./reducers/productReducers";
import {combineReducers} from'redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducer} from '../src/reducers/cartReducer'
import {loginReducer, registerNewUserReducer} from '../src/reducers/userReducer'
import {getOrdersByIdReducer, placeOrderReducer} from '../src/reducers/orderReducer'
import { getOrdersByUserIdReducer } from '../src/reducers/orderReducer';
// import { getOrdersByIdReducer } from '../src/reducers/orderReducer';
const finalReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer :  getProductByIdReducer,
    cartReducer : cartReducer ,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer:placeOrderReducer,
    getOrdersByUserIdReducer:getOrdersByUserIdReducer,
    getOrdersByIdReducer:getOrdersByIdReducer,
    deleteProductReducer:deleteProductReducer,
    addProductReducer:addProductReducer
})

const cartItems = localStorage.getItem('cartItems') ?JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser =localStorage.getItem('currentUser')?JSON.parse(localStorage.getItem('currentUser')) :null
const initialState ={
  cartReducer : {cartItems:cartItems },
  loginReducer : {currentUser:currentUser}
}
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store =createStore(finalReducer,initialState,composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
))
 export default store
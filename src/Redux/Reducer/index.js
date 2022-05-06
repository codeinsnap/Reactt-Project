import handleCart from './handleCart';
import handleAddToCart from './handleCart'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    handleCart,
    handleAddToCart
})

export default rootReducers
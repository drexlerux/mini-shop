import {createStore, applyMiddleware} from 'redux';
import Raven from "raven-js";
import thunk from 'redux-thunk';
import ActionFlags from './ActionFlags';

const reducer = (state, action) => {
    if(action.type === ActionFlags.REPLACE_PRODUCTS){
        return {
            ...state,
            products: action.products
        }
    }else if(action.type === ActionFlags.ADD_TO_CART){
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }else if(action.type === ActionFlags.REMOVE_FROM_CART){
        return {
            ...state,
            cart: state.cart.filter(item=>item.id !== action.product.id)
        }
    }else if(action.type === ActionFlags.TOGGLE_ALERT){
        return {
            ...state,
            alert: action.alert
        }
    }

    return state
}

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

// El Create store recibe la funcion reductora y un obj con el estado inicial
export default createStore(
    reducer,
    {cart: [], products: [], alert: null},
    applyMiddleware(logger, crashReporter, thunk)
);

import {createStore, applyMiddleware, combineReducers} from 'redux';
import Raven from "raven-js";
import thunk from 'redux-thunk';
import {products, cart, alert} from './reducers'

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
    combineReducers({products, cart, alert}),
    applyMiddleware(logger, crashReporter, thunk)
);

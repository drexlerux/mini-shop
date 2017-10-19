import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === 'ADD_TO_CART'){
        if(state.cart.filter(item => item.id === action.product.id).length > 0){
            alert(`El producto ${action.product.name} ya ha sido agregado`);
            return state
        }

        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }else if(action.type === 'REMOVE_FROM_CART'){
        return {
            ...state,
            cart: state.cart.filter(item=>item.id !== action.product.id)
        }
    }

    return state
}

// El Create store recibe la funcion reductora y un obj con el estado inicial
export default createStore(reducer, {cart: []});
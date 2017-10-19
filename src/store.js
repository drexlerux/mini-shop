import {createStore} from 'redux';

const reducer = (state, action) => {
    if(action.type === 'ADD_TO_CART'){
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    }else if(action.type === 'REMOVE_FROM_CART'){
        return {
            ...state,
            cart: state.cart.filter(item=>item.id !== action.product.id)
        }
    }else if(action.type === 'TOGGLE_ALERT'){
        console.log(state);
        return {
            ...state,
            alert: action.alert
        }
    }

    return state
}

const initProducts =[
    { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
    { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
    { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
];

// El Create store recibe la funcion reductora y un obj con el estado inicial
export default createStore(reducer, {cart: [], products: initProducts, alert: null});

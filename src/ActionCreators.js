import ActionFlags from './ActionFlags';
import Products from './services/Products';
const ActionCreators = {
    requestProducts(){
        console.log('aqui');
        return dispatch => { Products.getAll(dispatch) }
    },

    receiveProducts(products){
        console.log(products)
        return {
            type: ActionFlags.REPLACE_PRODUCTS,
            products
        }
    },

    addToCart(product){
        return {
            type: ActionFlags.ADD_TO_CART,
            product
        }
    },
    removeFromCart(product){
        return {
            type: ActionFlags.REMOVE_FROM_CART,
            product
        }
    },
    toggleAlert(alert){
        return {
            type: ActionFlags.TOGGLE_ALERT,
            alert
        }
    }
}

export default ActionCreators;

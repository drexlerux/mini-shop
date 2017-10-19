const ActionCreators = {
    addToCart(product){
        return {
            type: 'ADD_TO_CART',
            product
        }
    },
    removeFromCart(product){
        return {
            type: 'REMOVE_FROM_CART',
            product
        }
    },
    toggleAlert(alert){
        return {
            type: 'TOGGLE_ALERT',
            alert
        }
    }
}

export default ActionCreators;

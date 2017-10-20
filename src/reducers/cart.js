import ActionFlags from '../ActionFlags';
const cart = (state=[], action) => {
    if(action.type === ActionFlags.ADD_TO_CART){
        return state.concat(action.product)
    }else if(action.type === ActionFlags.REMOVE_FROM_CART){
        return state.filter(item=>item.id !== action.product.id)
    }

    return state
}

export default cart;

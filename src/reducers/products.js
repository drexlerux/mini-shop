import ActionFlags from '../ActionFlags';
const product = (state=[], action) => {
    if(action.type === ActionFlags.REPLACE_PRODUCTS){
        return action.products
    }
    return state
}

export default product;

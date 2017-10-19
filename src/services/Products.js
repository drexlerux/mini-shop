import fetch from 'isomorphic-fetch';
import ActionCreators from '../ActionCreators';
const Products = {
    getAll(dispatch){
        return fetch('http://localhost:4000/products')
               .then(
                    response => response.json(),
                    error => console.log('An error ocurred', error)
                )
               .then(
                    json => dispatch(ActionCreators.receiveProducts(json))
                )
    }
}

export default Products;

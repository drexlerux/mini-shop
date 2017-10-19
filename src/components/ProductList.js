import React from 'react';
import {Col, Row, Thumbnail, Button, Glyphicon, InputGroup, FormControl} from 'react-bootstrap';
import ActionCreators from '../ActionCreators';
import SweetAlert from 'react-bootstrap-sweetalert';
import {connect} from 'react-redux';


let QuantityInput = (props) =>{
    return(
        <form>
            <InputGroup>
                <InputGroup.Addon>#</InputGroup.Addon>
                <FormControl type="number" min={1} inputRef = {props.inputRef}/>
            </InputGroup>
        </form>
    )
}


const ProductList = ({products, cart, alert, _addToCart}) => {
    let quantityTextInput = {};
    return(
        <div className="class-name">
            <Col xs={12} sm={12} md={8} lg={8}>
                <Row>
                    { products.map(product=>(
                        <Col xs={12} sm={6} md={4} lg={4} key={product.id}>
                            <Thumbnail src={product.image} alt="242x200">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price}</p>
                                <p>
                                  <Button bsStyle="primary" onClick={() => _addToCart(product, cart, quantityTextInput[product.id])}>
                                        <Glyphicon glyph="shopping-cart"/> Add to card
                                  </Button>

                                </p>
                                <QuantityInput inputRef={input => quantityTextInput[product.id] = input }/>
                            </Thumbnail>
                        </Col>)
                    )}
                </Row>
                {alert}
            </Col>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        products: state.products,
        cart: state.cart,
        alert: state.alert
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _addToCart(product, cart, quantityTextInput){
            let productQuantityOrdered = quantityTextInput.value;
            let rProduct = {};
            let alert1 = (
                <SweetAlert danger title="Error" onConfirm={() => _hideAlert(dispatch)}>
                    {`No ha ingresado la cantidad para el producto ${product.name}`}
                </SweetAlert>
            )

            let alert2 = (
                <SweetAlert danger title="Error" onConfirm={() => _hideAlert(dispatch)}>
                    {`El producto ${product.name} ya ha sido agregado`}
                </SweetAlert>
            )


            if(productQuantityOrdered === ''){
                _showAlert(product, alert1, dispatch)
                return
            }

            if(cart.filter(item => item.id === product.id).length > 0){
                _showAlert(product, alert2, dispatch)
                return
            }
            // Cuando se realiza el dispatch se llama la funcion reductora

            rProduct = Object.assign({quantity: parseInt(productQuantityOrdered)}, product);
            quantityTextInput.value = '';
            dispatch(ActionCreators.addToCart(rProduct));
        }
    }
}

const _showAlert = (product, alert, dispatch) => {
    dispatch(ActionCreators.toggleAlert(alert));
}

const _hideAlert = (dispatch) => {
    dispatch(ActionCreators.toggleAlert(null));
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

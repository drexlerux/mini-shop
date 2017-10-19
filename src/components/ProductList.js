import React,{Component} from 'react';
import {Col, Row, Thumbnail, Button, Glyphicon} from 'react-bootstrap';
import store from '../store';
import ActionCreators from '../ActionCreators';
import SweetAlert from 'react-bootstrap-sweetalert';

export default class ProductList extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            products: [
                { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
                { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
                { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
            ],
            alert: null
        };

        this._addToCart = this._addToCart.bind(this);
        this._hideAlert = this._hideAlert.bind(this);
    }
    render() {
        return (
            <div className="class-name">
                <Col xs={12} sm={12} md={8} lg={8}>
                    <Row>
                        { this.state.products.map(product=>(
                            <Col xs={12} sm={6} md={4} lg={4} key={product.id}>
                                <Thumbnail src={product.image} alt="242x200">
                                    <h3>{product.name}</h3>
                                    <p>Price: ${product.price}</p>
                                    <p>
                                      <Button bsStyle="primary" onClick={() => this._addToCart(product)}>
                                        <Glyphicon glyph="shopping-cart"/> Add to card
                                      </Button>
                                    </p>
                                </Thumbnail>
                            </Col>)
                        )}
                    </Row>
                    {this.state.alert}
                </Col>
            </div>
        );
    }

    _addToCart(product){
        let alert = (
            <SweetAlert danger title="Error" onConfirm={this._hideAlert}>
                {`El producto ${product.name} ya ha sido agregado`}
            </SweetAlert>
        )
        if(store.getState().cart.filter(item => item.id === product.id).length > 0){
            this.setState({alert});
            return
        }
        // Cuando se realiza el dispatch se llama la funcion reductora
        store.dispatch(ActionCreators.addToCart(product));
    }

    _hideAlert(){
        this.setState({alert: null})
    }
}

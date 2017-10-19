import React,{Component} from 'react';
import { Col, Panel, Button, Glyphicon, Table} from 'react-bootstrap';
import store from '../store';
export default class ShoppingCart extends Component {
    constructor(props){
    	super(props);
    	this.state = {
            cart: []
        };
        store.subscribe(() =>{
            this.setState({cart: store.getState().cart })
        })
    }
    render() {
        let total = this.state.cart.reduce((sum, product)=> sum + product.price , 0);
        return (
            <Col xs={12} sm={12} md={4} lg={4}>
                <Panel header="Shopping cart" bsStyle="primary" footer={"Total: $" +  total }>
                    <Table fill>
                        <tbody>
                            { this.state.cart.map(product => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td className="text-right">${product.price}</td>
                                    <td className="text-right">
                                        <Button bsSize="xsmall" bsStyle="danger" onClick={()=>this._removeFromCart(product)}>
                                            <Glyphicon glyph="trash" />
                                        </Button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                </Panel>
            </Col>
        );
    }

    _removeFromCart(product){
        store.dispatch({
            type: 'REMOVE_FROM_CART',
            product
        })
    }

}

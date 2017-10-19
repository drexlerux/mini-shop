import React,{Component} from 'react';
import { Col, Panel, Button, Glyphicon, Table} from 'react-bootstrap';
import ActionCreators from '../ActionCreators';
import {connect} from 'react-redux';

const ShoppingCart = ({cart, _removeFromCart}) => {

    let total = cart.reduce((sum, product)=> sum + product.price , 0);

    return (
        <Col xs={12} sm={12} md={4} lg={4}>
            <Panel header="Shopping cart" bsStyle="primary" footer={"Total: $" +  total }>
                <Table fill>
                    <tbody>
                        { cart.map(product => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td className="text-right">${product.price}</td>
                                <td className="text-right">
                                    <Button bsSize="xsmall" bsStyle="danger" onClick={()=>_removeFromCart(product)}>
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

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _removeFromCart(product){
            dispatch(ActionCreators.removeFromCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

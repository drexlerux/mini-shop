import React, { Component } from 'react';
import {Grid, Row } from 'react-bootstrap';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Grid>
                    <Row>
                        <ProductList/>
                        <ShoppingCart/>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default App;

import React,{Component} from 'react';
import { Navbar } from 'react-bootstrap';
export default class Class extends Component {
    render() {
        return (
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Mini Shop</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

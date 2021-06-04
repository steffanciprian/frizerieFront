import React, {Component} from "react";
import {Navbar} from 'react-bootstrap';
import "./Navbar.css"

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frizeri: [],
        }
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="navbar">
                            <span
                                className="span"
                                style={{fontSize: 15, fontWeight: 'bold', margin: 10, color: 'black'}}
                                onClick={() => console.log("ceva")}>PROGRAMEAZA-TE</span>
                            <span
                                className="span"
                                style={{fontSize: 15, fontWeight: 'bold', margin: 10, color: 'black'}}
                                onClick={() => console.log("ceva")}>PRETURI</span>
                            <span
                                className="span"
                                style={{fontSize: 15, fontWeight: 'bold', margin: 10, color: 'black'}}
                                onClick={() => console.log("ceva")}>LOCALIZARE</span>
                            <span
                                className="span"
                                style={{fontSize: 15, fontWeight: 'bold', margin: 10, color: 'black'}}
                                onClick={() => console.log("ceva")}>ARTICOLE</span>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}

export default NavbarComponent;

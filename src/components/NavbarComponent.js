import React from "react";
import {Navbar} from 'react-bootstrap';
import "./Navbar.css"
import {useHistory} from "react-router-dom";

const NavbarComponent = () => {
    const history = useHistory();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <div className="navbar">
                                <span
                                    className="span"
                                    onClick={() =>
                                        history.push('programare')}
                                >PROGRAMEAZA-TE</span>

                        <span
                            className="span"
                            onClick={() =>
                                history.push('preturi')}
                        >PRETURI</span>
                        <span
                            className="span"
                            onClick={() => console.log('ciprian')}
                        >LOCALIZARE</span>
                        <span
                            className="span"
                            onClick={() => console.log('ciprian')}
                        >ARTICOLE</span>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent;

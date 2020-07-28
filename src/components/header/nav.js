import React, { useState } from 'react';
import classes from './nav.module.css'
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarToggler, Collapse, Nav } from 'reactstrap';
import ButtonCreateAccount from '../buttons/createFreeAccount';

function NavMainPage() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="faded" light expand="md" className={`nav justify-content-end float-right col-12`}>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className={`col-12 col-md-7 col-lg-8 mt-2 mt-md-0 mt-lg-0 justify-content-end`}>
                    <Nav navbar >
                        <NavItem className={`mr-n2 mr-md-0 mr-lg-0 ${classes.navItemList}`}>
                            <Link to="/aboutUs" className={classes.navTextLink}>About</Link>
                        </NavItem>
                        <NavItem className={`mr-n2 mr-md-0 mr-lg-0 ${classes.navItemList}`}>
                            <Link to="/helpCenter" className={classes.navTextLink}>FAQ</Link>
                        </NavItem>
                        <NavItem className={`mr-n2 mr-md-0 mr-lg-0 ${classes.navItemList}`}>
                            <Link to="/pricing" className={classes.navTextLink}>Pricing</Link>
                        </NavItem>
                        <NavItem className={`mr-n2 mr-md-0 mr-lg-0 ${classes.navItemList}`}>
                            <Link to="/contactUs" className={classes.navTextLink}>Contact Us</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavItem className={`col-12 col-md-3 col-lg-2 mt-2 mt-md-0 mt-lg-0 mr-n2 mr-md-0 mr-lg-0 ${classes.navItemListSpecial}`}>
                    <Link to="/login" className={classes.navTextHighlight}>Sing In</Link>
                </NavItem>
                <NavItem className={`col-12 col-md-2 col-lg-2 mt-2 mt-md-0 mt-lg-0 mb-2 mb-md-0 mb-lg-0 mr-n3 mr-md-0 mr-lg-0 ${classes.navItemList}`}>
                    <Link to="/registerOptions" lassName={classes.button}><ButtonCreateAccount /></Link>
                </NavItem>
            </Navbar>
        </div>
    )

}

export default NavMainPage;
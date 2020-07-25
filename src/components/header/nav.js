import React from 'react';
import classes from './nav.module.css'
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ButtonCreateAccount from '../buttons/createFreeAccount';

function NavMainPage() {

    return (
        <div>
            <Nav>
                <NavItem className="nav justify-content-end nav-justified">
                    <NavLink href="#" className="nav-item"><Link to="/aboutUs" className={`nav-item ${classes.navText}`}>About</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-item"><Link to="/helpCenter" className={`nav-item ${classes.navText}`}>FAQ</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-item"><Link to="/pricing" className={`nav-item ${classes.navText}`}>Pricing</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="nav-item"><Link to="/contactUs" className={`nav-item ${classes.navText}`}>Contact Us</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"><Link to="/login" className={`nav-item ${classes.navTextHighlight}`}>Sing In</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className={`nav-item ${classes.button}`}><Link to="/registerOptions"><ButtonCreateAccount /></Link></NavLink>
                </NavItem>
            </Nav>
        </div>
    )

}

export default NavMainPage;
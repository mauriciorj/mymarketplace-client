import React from 'react';
import NavMainPage from './nav';
import classes from './header.module.css'
import { Link } from 'react-router-dom';

function HeaderMainPage() {

    return (
        <header className={`col-12 ${classes.header}`}>
            <div className="row">
                <div className={`col-3 ${classes.logo}`}><Link to="/" className={classes.logoLnk}>Psychy</Link></div>
                <div className={`col-2`}></div>
                <div className={`col-7 ${classes.navMain}`}><NavMainPage /></div>
            </div>
        </header>
    )

}

export default HeaderMainPage;
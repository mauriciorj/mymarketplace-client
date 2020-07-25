import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import classes from './notRegistered.module.css';

const notRegistered = () => {
    return (
        <div>
            <hr className={classes.hrConfig} />
            <div className={`row ${classes.registerDiv}`}>
                <div className={`col-6 col-sm-4 col-md-5`} >
                    <p className={classes.registerText}>Not registered?</p>
                </div>
                <div className={`col-6`}>
                    <Link className={`linkStyleRegisterPill`} to="/registerOptions"><Badge className={`registerPill`} pill>Register Here!</Badge></Link>
                </div>
            </div>
        </div>
    )
}

export default notRegistered;
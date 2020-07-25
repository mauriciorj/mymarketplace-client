import React from 'react';
import classes from './jumbotron.module.css';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/mainPage/jumbotron/img1.jpg';
import ButtonCreateAccount from '../buttons/createFreeAccount';

function OpenDiv() {

    return (
        <div className={`row ${classes.rowDiv}`}>
            <div className={`col ${classes.leftDiv}`}>
                <div className={`col ${classes.jumboText}`}>
                    <h2>Your support any time, any where.</h2>
                    <br/>
                    <h5>We are here to provide the best support for everyone, any time and everywhere.</h5>
                    <br/>
                    <div className={`${classes.button}`}>
                    <Link to="/registerOptions"><ButtonCreateAccount /></Link>
                    </div>
                </div>
            </div>
            <div className={`col ${classes.rightDiv}`}>
                <img src={img1} class="img-fluid" alt="Responsive image" />
            </div>

        </div>
    )
}

export default OpenDiv;
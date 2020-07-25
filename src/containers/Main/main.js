import React from 'react';
import classes from './main.module.css'
import { Link } from 'react-router-dom';
import HeaderMainPage from '../../components/header/header';
import Jumbotron from '../../components/mainPage/jumbotron';
import ThreeSteps from '../../components/mainPage/threeSteps';
import TalkningAboutUs from '../../components/mainPage/talkingAboutUs';
import ButtonCreateAccount from '../../components/buttons/createFreeAccount';
import Footer from '../../components/footer/footer';

function Main() {

    return (
        <div>
            <div className={classes.headerDiv}>
                <div className={`container`}>
                    <HeaderMainPage />
                </div>
            </div>
            <div className={`jumbotron ${classes.jumbotron}`}>
                <div className={`container`}>
                    <Jumbotron />
                </div>
            </div>
            <div>
                <div className={`container`}>
                    <ThreeSteps />
                </div>
            </div>
            <div>
                <div className={`container`}>
                    <TalkningAboutUs />
                </div>
            </div>
            <div>
                <div className={`container ${classes.ButtonCreateAccount}`}>
                <Link to="/registerOptions"><ButtonCreateAccount /></Link>
                </div>
            </div>
            <div className={classes.footerDiv}>
                <div className={`container`}>
                    <Footer />
                </div>
            </div>
        </div>
    )


}

export default Main;
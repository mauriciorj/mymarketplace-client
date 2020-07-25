import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './login.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import LoginForm from '../../components/loginForm/loginComponent';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function RegisterOption() {
    return (
        <div>
            <div className={classes.headerDiv}>
                <div className={`container`}>
                    <HeaderMainPage />
                </div>
            </div>
            <div className={`container ${classes.jumbotronOption}`}>
                <Breadcrumb>
                    <BreadcrumbItem className={classes.breadcrumMainItem}><Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><ExitToAppIcon /> Sign In</BreadcrumbItem>
                </Breadcrumb>
                <div className={`text-left ${classes.aboutUsDiv}`}>
                    <LoginForm />
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

export default RegisterOption;
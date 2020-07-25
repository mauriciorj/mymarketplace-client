import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './accountCreated.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import AccountCreated from '../../components/loginForm/accountCreatedMsg';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import DoneIcon from '@material-ui/icons/Done';

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
                    <BreadcrumbItem active><DoneIcon /> Account Created</BreadcrumbItem>
                </Breadcrumb>
                <div className={`text-left ${classes.aboutUsDiv}`}>
                    <AccountCreated/>
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
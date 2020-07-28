import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './recoveryPassword.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import RecoveryPasswordForm from '../../components/loginForm/recoveryPasswordComponent';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

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
                    <BreadcrumbItem><Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><LockOpenOutlinedIcon /> Recovery Password</BreadcrumbItem>
                </Breadcrumb>
                <div className={`text-left`}>
                    <RecoveryPasswordForm />
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
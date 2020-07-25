import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './createUserAccount.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonIcon from '@material-ui/icons/Person';
import CreateAccountForm from '../../components/createAccountForm/createUserAccountUserForm';

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
                    <BreadcrumbItem active><PersonIcon /><Link className={`linkBreadcrumbLogin`} to="/registerOptions"> Type of Account</Link></BreadcrumbItem>
                    <BreadcrumbItem active><AccountBoxIcon /> Register User</BreadcrumbItem>
                </Breadcrumb>

                <div className={`row`}>
                    <CreateAccountForm />
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
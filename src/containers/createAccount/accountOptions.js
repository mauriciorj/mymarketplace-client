import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './accountOptions.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import AccountOptionForm from '../../components/createAccountForm/accountOptionsForm';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

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
                    <BreadcrumbItem active><PersonIcon /> Account Type</BreadcrumbItem>
                </Breadcrumb>
                <div className={`text-center`}>
                    <AccountOptionForm/>
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
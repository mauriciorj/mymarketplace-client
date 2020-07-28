import React from 'react';
import HeaderMainPage from '../../components/header/header';
import Footer from '../../components/footer/footer';
import classes from './pricing.module.css';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import Pricing from '../../components/pricing/pricing';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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
                    <BreadcrumbItem active><AttachMoneyIcon /> Pricing</BreadcrumbItem>
                </Breadcrumb>
                <div className={`text-left ${classes.aboutUsDiv}`}>
                    <Pricing/>
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
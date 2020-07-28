import React from 'react';
import classes from './footer.module.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <div className={classes.footerMainDiv}>
            <div className="row col-10 ml-2">
                <div className={`col-10 col-md-4 col-lg-4 order-1 ${classes.groupList}`}>
                    <div className={classes.footerTitle}>PSYCHY</div>
                    <ListGroup>
                    <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/registerOptions" className={`d-flex align-items-center ${classes.listItem}`}>Create Account</Link></ListGroupItem>
                        <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/login" className={`d-flex align-items-center ${classes.listItem}`}>Sign In</Link></ListGroupItem>
                        <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/pricing" className={`d-flex align-items-center ${classes.listItem}`}>Pricing</Link></ListGroupItem>
                        <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/aboutUs" className={`d-flex align-items-center ${classes.listItem}`}>About</Link></ListGroupItem>
                    </ListGroup>
                </div>
                <div className={`col-10 ol-md-4 col-lg-4 order-2 ${classes.groupList}`}>
                    <div className={classes.footerTitle}>SUPPORT</div>
                    <ListGroup>
                        <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/helpCenter" className={`d-flex align-items-center ${classes.listItem}`}>Help Center</Link></ListGroupItem>
                        <ListGroupItem className={`d-flex align-items-center ${classes.listItem}`}><Link to="/contactUs" className={`d-flex align-items-center ${classes.listItem}`}>Contact Us</Link></ListGroupItem>
                    </ListGroup>
                </div>
                <div className={`col-10 col-md-4 col-lg-4 order-3 ${classes.groupList}`}>
                    <div className={classes.footerTitle}>Follow Us</div>
                    <div className={`row ${classes.footerFollowUs}`}><FacebookIcon className={classes.footerSocialIcon}/> <InstagramIcon className={classes.footerSocialIcon}/></div>
                </div>
            </div>
            <div className="row">
            <div className={` text-center ${classes.copyRightRow}`}>
                Copyright © 2020 Sychy. All Rights Reserved
            </div>
            </div>
        </div>
    )

}

export default Footer;
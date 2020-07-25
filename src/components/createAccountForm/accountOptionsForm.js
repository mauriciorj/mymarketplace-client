import React from 'react';
import classes from './accountOptionsForm.module.css';
import { Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

function RegisterOption() {
    return (
        <div>
            <div className={`row`}>
                <div className={`text-center ${classes.rowOptionsTitle}`}>
                    Are you a client or a professional?
                    </div>
            </div>
            <div className={`row`}>
                <div className={`text-center ${classes.rowOptions}`}>
                    <Link to="/registeruser"><Button outline color="primary" className={classes.buttonSpecs}>I'm a user</Button></Link>
                </div>
            </div>
            <div className={`row`}>
                <div className={`text-center ${classes.divisionOptions}`}>
                </div>
            </div>
            <div className={`row`}>
                <div className={`text-center ${classes.rowOptions}`}>
                    <Button outline color="danger" className={classes.buttonSpecs}>I'm a professional</Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterOption;
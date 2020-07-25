import React from 'react';
import classes from './accountCreatedMsg.module.css'
import { Alert } from 'reactstrap';

function AboutUsForm() {

    return (
        <div>
            <div className={`text-center ${classes.text}`}>
                <Alert color="primary">
                    <p>Account created!</p>
                    <p>Please check your e-mail to validate your account and start using our system.</p>
                </Alert>
            </div>
        </div>
    )

}

export default AboutUsForm;
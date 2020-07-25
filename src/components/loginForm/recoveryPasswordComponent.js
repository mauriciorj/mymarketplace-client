import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios/axios';
import * as actions from '../../store/actions/index';
import { Alert, Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, Row, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import classes from './recoveryPasswordComponent.module.css';
import validation from '../../shared/validation';
import NotRegistered from './notRegistered';
import Spinner from '../spinner/spinner';

const ForgotPassword = (props) => {

    const [formConfig, setFormConfig] = useState({
        email: {
            errorMessage: null,
            placeholder: 'Your E-Mail here',
            showErrorMessage: null,
            value: '',
            valid: null,
            sent: false
        },
        loading: null
    })

    // Validate email
    const emailValidation = (event) => {

        let valueReceived = event.target.value.toLowerCase()

        const oldObjt = { ...formConfig }
        oldObjt.email.value = valueReceived;
        setFormConfig(oldObjt);

        let validEmail = validation(valueReceived, "email");

        if (formConfig.email.value === '') {
            const oldObjt = { ...formConfig }
            oldObjt.email.valid = false;
            oldObjt.email.errorMessage = null;
            oldObjt.email.showErrorMessage = null;
            oldObjt.email.sent = false;
            setFormConfig(oldObjt);
        } else {
            if (validEmail) {
                //email is valid and the value will be updated
                const oldObjt = { ...formConfig }
                oldObjt.email.valid = true;
                oldObjt.email.errorMessage = null;
                oldObjt.email.showErrorMessage = null;
                oldObjt.email.sent = false;
                setFormConfig(oldObjt);
            } else {
                //email is not valid and the error will be updated
                const oldObjt = { ...formConfig }
                oldObjt.email.valid = false;
                oldObjt.email.errorMessage = 'Please insert a valid email.';
                oldObjt.email.sent = false;
                setFormConfig(oldObjt);
            }
        }
    }

    // Control the validation error message
    const showMessages = () => {
        if (formConfig.email.valid === false && formConfig.email.errorMessage !== null) {
            const oldObjt = { ...formConfig }
            oldObjt.email.showErrorMessage = true;
            oldObjt.email.sent = false;
            setFormConfig(oldObjt);
        }
    }

    // Reset all conditions once click on the input form
    const resetConditions = () => {
        const oldObjt = { ...formConfig }
        oldObjt.email.valid = false;
        oldObjt.email.errorMessage = null;
        oldObjt.email.showErrorMessage = null;
        oldObjt.email.sent = false;
        setFormConfig(oldObjt);
    }

    // Once the format of email is valid, the database will be checked
    // If the email exist or not a message will be shown thru the validEmail condtions
    const submitHandler = (event) => {
        event.preventDefault();
        if (formConfig.email.valid === true) {
            props.onRecoveryEmail(formConfig.email.value);
        }
        if (formConfig.email.value === '' && formConfig.email.sent === false) {
            const oldObjt = { ...formConfig }
            oldObjt.email.showErrorMessage = true;
            oldObjt.email.errorMessage = 'Please insert your email.';
            setFormConfig(oldObjt);
        }
    }

    return (
        <div className={`container centrelizerForm`}>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                <Row className={`row clearfix d-flex ${classes.formTitle}`}>Recovery Password</Row>

                {(props.loading)?
                <Spinner />:
                <div></div>}

                {(props.validEmail === null) ?
                            <div></div> :
                            (props.validEmail) ?
                                <Alert className={classes.AlertPassword} color="primary">Done! We send an email with instructions.</Alert> :
                                <Alert className={classes.AlertPassword} color="danger">Email didn't find. Please try again.</Alert>}
                {(props.validEmail) ?
                <div></div>:
                <Form className={classes.formMargin} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label className={classes.labelStyle}>Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <AlternateEmailIcon fontSize="small" /></InputGroupText>
                            </InputGroupAddon>
                            <Input
                                invalid={(formConfig.email.showErrorMessage !== null) ? true : false}
                                onClick={resetConditions}
                                onChange={emailValidation}
                                onBlur={showMessages}
                                value={formConfig.email.value}
                                type="email"
                                name="email"
                                id="email"
                                className={(formConfig.email.showErrorMessage !== null) ? classes.inputConfigInvalid : classes.inputConfig}
                                placeholder={formConfig.email.placeholder} />
                        </InputGroup>
                    </FormGroup>

                    {(formConfig.email.showErrorMessage === true) ?
                        <Alert color="danger">{formConfig.email.errorMessage}</Alert> :
                        <div></div>}

                    <div className={`row`}>
                        <Button
                            className={classes.buttonConfig}
                            type="submit"
                            color="primary">
                            Recovery&nbsp;
                            <VpnKeyIcon />
                        </Button>
                    </div>
                </Form>
                }
                <NotRegistered />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        validEmail: state.loginReducer.validEmail,
        loading: state.loginReducer.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRecoveryEmail: (email) =>
            dispatch(actions.recoveryEmail(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword, axios);
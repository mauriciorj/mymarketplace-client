import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios/axios';
import * as actions from '../../store/actions/index';
import { Link, Redirect } from 'react-router-dom';
import { Alert, Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, Row, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NearMeIcon from '@material-ui/icons/NearMe';
import classes from './loginComponent.module.css';
import NotRegistered from './notRegistered';
import validation from '../../shared/validation';

const Login = (props) => {

    const [formConfig, setFormConfig] = useState({
        email: {
            errorMessage: null,
            placeholder: 'Your E-Mail here',
            showErrorMessage: null,
            value: '',
            valid: null,
            sent: false
        },
        passordLogin: {
            errorMessage: null,
            placeholder: 'Your E-Mail here',
            showErrorMessage: null,
            value: '',
            valid: null,
            sent: false
        },
        formResult: {
            errorMessage: 'Email and/or password wrong!',
            showErrorMessage: null,
        },
        redirctTo: false
    })

    // Validate email
    const inputValidation = (event, inputField) => {

        resetConditions(inputField)

        let valueReceived = null;

        if(inputField === "email"){
            valueReceived = event.target.value.toLowerCase();
        }else{
            valueReceived = event.target.value
        }

        const oldObjt = { ...formConfig }
        oldObjt[inputField].value = valueReceived;
        setFormConfig(oldObjt);

        let inputTest = validation(valueReceived, inputField);

        if (inputTest === true) {
            //field is valid and the value will be updated
            const oldObjt = { ...formConfig }
            oldObjt[inputField].valid = true;
            oldObjt[inputField].errorMessage = null;
            oldObjt[inputField].showErrorMessage = null;
            oldObjt[inputField].sent = false;
            setFormConfig(oldObjt);
        } else {
            //email is not valid and the error will be updated
            const oldObjt = { ...formConfig }
            oldObjt[inputField].valid = false;
            oldObjt.email.errorMessage = inputTest;
            oldObjt.email.sent = false;
            setFormConfig(oldObjt);
        }

    }

    // Reset all conditions once click on the input form
    const resetConditions = (inputField) => {
        const oldObjt = { ...formConfig }
        oldObjt[inputField].valid = false;
        oldObjt[inputField].errorMessage = null;
        oldObjt[inputField].showErrorMessage = null;
        oldObjt[inputField].sent = false;
        oldObjt.formResult.showErrorMessage = false;
        setFormConfig(oldObjt);
    }

    // Control the validation error message
    const showMessages = (inputField) => {
        if (formConfig[inputField].valid === false && formConfig[inputField].errorMessage !== null) {
            const oldObjt = { ...formConfig }
            oldObjt[inputField].showErrorMessage = true;
            oldObjt[inputField].sent = false;
            setFormConfig(oldObjt);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (formConfig.email.value === '' && formConfig.email.sent === false) {
            const oldObjt = { ...formConfig }
            oldObjt.email.showErrorMessage = true;
            oldObjt.email.errorMessage = 'Please insert your email.';
            setFormConfig(oldObjt);
        } else if (formConfig.passordLogin.value === '' && formConfig.passordLogin.sent === false) {
            const oldObjt = { ...formConfig }
            oldObjt.passordLogin.showErrorMessage = true;
            oldObjt.passordLogin.errorMessage = 'Please insert your password.';
            setFormConfig(oldObjt);
        } else if (formConfig.email.valid === true) {
            props.onSendLogin(formConfig.email.value, formConfig.passordLogin.value)
        }
    }

    useEffect(() => {

        if (props.loginUserResult === null) {
            
        } else if (props.loginUserResult === true){
            const oldObjt = { ...formConfig }
            oldObjt.redirctTo = true;
            setFormConfig(oldObjt);
        }else if (props.loginUserResult === false){
            const oldObjt = { ...formConfig }
            oldObjt.formResult.showErrorMessage = true;
            setFormConfig(oldObjt);
        }
        // eslint-disable-next-line
    },[props.loginUserResult])

    if(formConfig.redirctTo){
        return <Redirect to="/userDashboard" />
      }


    return (
        <div className={`container centrelizerForm`}>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                <Row className={`row clearfix d-flex ${classes.formTitle}`}>Login</Row>

                {(formConfig.formResult.showErrorMessage === true) ?
                    <Alert className={classes.AlertPassword} color="danger">{formConfig.formResult.errorMessage}</Alert> :
                    <div></div>}



                <Form className={classes.formMargin} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                        <Label className="labelStyle">Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <AlternateEmailIcon fontSize="small" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                invalid={(formConfig.email.showErrorMessage !== null) ? true : false}
                                type="email"
                                name="email"
                                id="Email"
                                value={formConfig.email.value}
                                onChange={(event) => inputValidation(event, "email")}
                                onBlur={() => showMessages("email")}
                                className={(formConfig.email.showErrorMessage !== null) ? classes.inputConfigInvalid : classes.inputConfig}
                                placeholder={formConfig.email.placeholder} />
                        </InputGroup>
                    </FormGroup>
                    {(formConfig.email.showErrorMessage === true) ?
                        <Alert color="danger">{formConfig.email.errorMessage}</Alert> :
                        <div></div>}
                    <FormGroup className={`pt-2`}>
                        <Label className={`labelStyle`}>Password</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <VpnKeyIcon fontSize="small" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                type="password"
                                name="passordLogin"
                                id="passordLogin"
                                onChange={(event) => inputValidation(event, "passordLogin")}
                                onBlur={() => showMessages("passordLogin")}
                                className={(formConfig.passordLogin.showErrorMessage !== null) ? classes.inputConfigInvalid : classes.inputConfig}
                                placeholder={formConfig.passordLogin.placeholder} />
                        </InputGroup>
                    </FormGroup>
                    {(formConfig.passordLogin.showErrorMessage === true) ?
                        <Alert color="danger">{formConfig.passordLogin.errorMessage}</Alert> :
                        <div></div>}
                    <div className="row">
                        <Button className={classes.buttonConfig} type="submit" color="primary">
                            Log In <NearMeIcon fontSize="small" />
                        </Button>
                    </div>
                </Form>

                <div className={`row ${classes.recoveryPassDiv}`}>
                    <p className={classes.recoveryPassText}>Forgot your password ?
                    <Link className={`registerHereLink`} to="/recoveryPassword">&nbsp;Click here!
                        </Link>
                    </p>
                </div>
                <NotRegistered />
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        loginUserResult: state.loginReducer.loginUserResult,
        error: state.loginReducer.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSendLogin: (email, password) => dispatch(actions.sendLogin(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login, axios);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios/axios';
import * as actions from '../../store/actions/index';
import { Alert, Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, Badge, Row, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Link } from 'react-router-dom';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import classes from './recoveryPasswordComponent.module.css';

const ForgotPassword = (props) => {

    const [formConfig, setFormConfig] = useState({
        email: {
            placeholder: 'Your E-Mail here',
            value: '',
            valid: null,
            touched: false,
            validation: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            error: null
        }
    })

    const emailValidation = (event) => {
        // value received from input form
        let valueReceived = event.target.value

        //rules to validate the email
        let regExpression = formConfig.email.validation;

        if (regExpression.test(valueReceived)) {
            //email is valid and the value will be updated
            const oldObjt = {...formConfig}
            oldObjt.email.valid = true;
            oldObjt.email.touched = true;
            oldObjt.email.error = null;
            setFormConfig(oldObjt);
        } else {
            //email is valid and the error will be updated
            const oldObjt = {...formConfig}
            oldObjt.email.valid = false;
            oldObjt.email.touched = false;
            oldObjt.email.error = 'Please insert a valida email.';
            setFormConfig(oldObjt);
        }

    }

    useEffect(() => {
        if(props.validEmail){
            const oldObjt = {...formConfig}
            oldObjt.email.value = '';
            setFormConfig(oldObjt);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.validEmail])

    const emailhandler = (event) => {
        let email = event.target.value;
        const oldObjt = {...formConfig}
        oldObjt.email.value = email;
        setFormConfig(oldObjt);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onRecoveryEmail(formConfig.email.value);
    }

    return (
        <div className={`container centrelizerForm`}>
            <div className={`col-12 col-sm-8 col-md-6 breadcrumbDiv`}>
                <Breadcrumb>
                    <BreadcrumbItem className={classes.breadcrumMainItem}><Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><LockOpenOutlinedIcon /> Recovery Password</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                <Row className={`row clearfix d-flex ${classes.formTitle}`}>Recovery Password</Row>
                <Form className={classes.formMargin} onSubmit={(e) => submitHandler(e)}>
                    <FormGroup>
                    {(props.validEmail === null) ?
                    <div></div> :
                    (props.validEmail) ?
                    <Alert color="primary">Email sent with instructions.</Alert> :
                    <Alert color="danger">Email didn't find. Please try again.</Alert>}
                        <Label className={classes.labelStyle}>Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><AlternateEmailIcon fontSize="small" /></InputGroupText>
                            </InputGroupAddon>
                            <Input invalid={(formConfig.email.valid === false) ? true : false} onBlur={emailValidation} onChange={emailhandler} value={formConfig.email.value} type="email" name="email" id="email" className={(formConfig.email.valid === false) ? classes.inputConfigInvalid : classes.inputConfig} placeholder={formConfig.email.placeholder} />
                        </InputGroup>
                    </FormGroup>
                    {(formConfig.email.error !== null) ?
                        <Alert color="danger">{formConfig.email.error}</Alert> :
                        <div></div>}
                    <div className={`row`}>
                        <Button disabled={!formConfig.email.valid} className={classes.buttonConfig} type="submit" color="primary">Recovery  <VpnKeyIcon /></Button>
                    </div>
                </Form>
                <hr className={classes.hrConfig} />
                <div className={`row ${classes.registerDiv}`}>
                    <div className={`col-6 col-sm-4 col-md-5`} >
                        <p className={classes.registerText}>Not registered?</p>
                    </div>
                    <div className={`col-6`}>
                        <Link className={`linkStyleRegisterPill`} to="/registeruser"><Badge className={`registerPill`} pill>Register Here!</Badge></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        validEmail: state.validEmail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRecoveryEmail: (email) =>
        dispatch(actions.recoveryEmailInit(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword, axios);
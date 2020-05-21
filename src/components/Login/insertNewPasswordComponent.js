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
import classes from './insertNewPasswordComponent.module.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Spinner from '../../components/spinner/spinner';
//import validation from '../../shared/validation';

const ForgotPassword = (props) => {

    const [formConfig, setFormConfig] = useState({
        passwordOne: {
            color: null,
            errorMessage: null,
            maxLength: 16,
            minLength: 6,
            placeholder: 'Your new password here',
            showErrorMessage: null,
            showInputField: false,
            showPassword: false,
            value: '',
            valid: null
        },
        passwordTwo: {
            color: null,
            errorMessage: null,
            maxLength: 16,
            minLength: 6,
            placeholder: 'Repeat your new password here',
            showErrorMessage: null,
            showInputField: false,
            showPassword: false,
            value: '',
            valid: null
        }
    })

    // Validate password
    const passwordValidation = (event) => {

        let valueReceived = event.target.value

        const oldObjt = { ...formConfig }
        oldObjt.passwordOne.value = valueReceived;
        setFormConfig(oldObjt);

        //let validPassword = validation(valueReceived, "password");
        let validPassword = true;

        if (formConfig.passwordOne.value === '') {
            const oldObjt = { ...formConfig }
            oldObjt.passwordOne.valid = false;
            oldObjt.passwordOne.errorMessage = null;
            oldObjt.passwordOne.showErrorMessage = null;
            setFormConfig(oldObjt);
        } else {
            if (valueReceived.length <= formConfig.passwordOne.minLength) {
                const oldObjt = { ...formConfig }
                oldObjt.passwordOne.valid = false;
                oldObjt.passwordOne.errorMessage = 'Your email must have more than ' + formConfig.passwordOne.minLength + ' characters.';
                setFormConfig(oldObjt);
            } else if (valueReceived.length >= formConfig.passwordOne.maxLength) {
                const oldObjt = { ...formConfig }
                oldObjt.passwordOne.valid = false;
                oldObjt.passwordOne.errorMessage = 'Your email must have less than ' + formConfig.passwordOne.maxLength + ' characters.';
                setFormConfig(oldObjt);
            } else if (!validPassword) {
                //email is not valid and the error will be updated
                const oldObjt = { ...formConfig }
                oldObjt.passwordOne.valid = false;
                oldObjt.passwordOne.errorMessage = 'Your password doesn\'t match with all rules.';
                setFormConfig(oldObjt);
            } else {
                //email is valid and the value will be updated
                const oldObjt = { ...formConfig }
                oldObjt.passwordOne.valid = true;
                oldObjt.passwordOne.errorMessage = null;
                oldObjt.passwordOne.showErrorMessage = null;
                setFormConfig(oldObjt);
            }
        }
    }

    const passwordValidationTwo = (event) => {
        let valueReceived = event.target.value

        const oldObjt = { ...formConfig }
        oldObjt.passwordTwo.value = valueReceived;
        setFormConfig(oldObjt);

        if (formConfig.passwordOne.value === formConfig.passwordTwo.value) {
            const oldObjt = { ...formConfig }
            oldObjt.passwordTwo.valid = true;
            oldObjt.passwordTwo.errorMessage = null;
            setFormConfig(oldObjt);
        } else {
            const oldObjt = { ...formConfig }
            oldObjt.passwordTwo.valid = false;
            oldObjt.passwordTwo.errorMessage = 'Passwords didn\'t match';
            setFormConfig(oldObjt);
        }
    }

    // Control the validation error message
    const showMessagesOne = () => {
        if (formConfig.passwordOne.valid === false && formConfig.passwordOne.errorMessage !== null) {
            const oldObjt = { ...formConfig }
            oldObjt.passwordOne.showErrorMessage = true;
            setFormConfig(oldObjt);
        }
    }

    const showMessagesTwo = () => {
        if (formConfig.passwordTwo.valid === false && formConfig.passwordTwo.errorMessage !== null) {
            const oldObjt = { ...formConfig }
            oldObjt.passwordTwo.showErrorMessage = true;
            setFormConfig(oldObjt);
        }
    }

    // Reset all conditions once click on the input form
    const resetConditions = () => {
        const oldObjt = { ...formConfig }
        oldObjt.passwordOne.valid = false;
        oldObjt.passwordOne.errorMessage = null;
        oldObjt.passwordOne.showErrorMessage = false;
        oldObjt.passwordOne.showErrorMessage = null;
        setFormConfig(oldObjt);
    }

    const resetConditionsTwo = () => {
        const oldObjt = { ...formConfig }
        oldObjt.passwordTwo.valid = false;
        oldObjt.passwordTwo.errorMessage = null;
        oldObjt.passwordTwo.showErrorMessage = false;
        oldObjt.passwordTwo.showErrorMessage = null;
        setFormConfig(oldObjt);
    }

    // Once the format of email is valid, the database will be checked
    // If the email exist or not a message will be shown thru the validEmail condtions
    const submitHandler = (event) => {
        event.preventDefault();

        if (formConfig.passwordOne.valid === true && formConfig.passwordTwo.valid === true) {
            //props.onResetPassword(tokenUrl, formConfig.passwordOne.value);
            //console.log('OK -> token: ' + tokenUrl + ' newpassword: ' + formConfig.passwordOne.value)
        } else if (formConfig.passwordOne.value === '') {
            const oldObjt = { ...formConfig }
            oldObjt.passwordOne.showErrorMessage = true;
            oldObjt.passwordOne.errorMessage = 'Please insert your new password.';
            setFormConfig(oldObjt);
        } else if (formConfig.passwordOne.value !== formConfig.passwordTwo.value) {
            const oldObjt = { ...formConfig }
            oldObjt.passwordTwo.showErrorMessage = true;
            oldObjt.passwordTwo.errorMessage = 'Passwords didn\'t match';
            setFormConfig(oldObjt);
        }
    }

    const viewPassword = () => {
        const oldObjt = { ...formConfig }
        oldObjt.passwordOne.showInputField = !oldObjt.passwordOne.showInputField;
        oldObjt.passwordOne.showPassword = !oldObjt.passwordOne.showPassword;
        setFormConfig(oldObjt);
    }

    const { onCheckTokenExpiryDate } = props;
    const tokenUrl = props;

    useEffect(() => {
        const search = props.location.search;
        const params = new URLSearchParams(search);
        const tokenUrl = params.get('token');

        onCheckTokenExpiryDate(tokenUrl);
        //console.log(props.tokenUrlCheck);
    },[tokenUrl]);

    let formResetPassword = (
        <div>
            <Row className={`row clearfix d-flex ${classes.formTitle}`}>Insert a new password</Row>
            <Form className={classes.formMargin} onSubmit={(e) => submitHandler(e)}>
                <FormGroup>

                    <Label className={classes.labelStyle}>New password</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" >
                            <InputGroupText className={classes.inputGroup}>
                                <AlternateEmailIcon fontSize="small" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            invalid={(formConfig.passwordOne.showErrorMessage !== null) ? true : false}
                            onClick={resetConditions}
                            onChange={passwordValidation}
                            onBlur={showMessagesOne}
                            value={formConfig.passwordOne.value}
                            type={(formConfig.passwordOne.showInputField) ? "text" : "password"}
                            name="password"
                            id="password"
                            className={(formConfig.passwordOne.showErrorMessage !== null) ?
                                classes.inputConfigInvalid :
                                classes.inputConfig}
                            placeholder={formConfig.passwordOne.placeholder} />
                        <InputGroupAddon addonType="append" >
                            <InputGroupText className={(formConfig.passwordOne.showErrorMessage !== null) ? classes.inputGroupPrependInvalid : classes.inputGroupPrepend}>
                                {(formConfig.passwordOne.showInputField) ?
                                    <VisibilityOffIcon className={classes.eyeIcon} fontSize="small" onClick={viewPassword} /> :
                                    <VisibilityIcon className={classes.eyeIcon} fontSize="small" onClick={viewPassword} />}
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
                {(formConfig.passwordOne.showErrorMessage !== null) ?
                    <Alert color="danger">{formConfig.passwordOne.errorMessage}</Alert> :
                    <div></div>}
                <FormGroup>
                    <Label className={classes.labelStyle}>Repeat your new password</Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend" >
                            <InputGroupText className={classes.inputGroup}>
                                <AlternateEmailIcon fontSize="small" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            invalid={(formConfig.passwordTwo.showErrorMessage !== null) ? true : false}
                            onClick={resetConditionsTwo}
                            onChange={passwordValidationTwo}
                            onBlur={showMessagesTwo}
                            value={formConfig.passwordTwo.value}
                            type="password"
                            name="passwordTwo"
                            id="passwordTwo"
                            className={(formConfig.passwordTwo.showErrorMessage !== null) ?
                                classes.inputConfigInvalid :
                                classes.inputConfig}
                            placeholder={formConfig.passwordTwo.placeholder} />
                    </InputGroup>

                </FormGroup>

                {(formConfig.passwordTwo.showErrorMessage !== null) ?
                    <Alert color="danger">{formConfig.passwordTwo.errorMessage}</Alert> :
                    <div></div>}

                <div className={`row`}>
                    <Button
                        className={classes.buttonConfig}
                        type="submit"
                        color="primary">
                        Recovery  <VpnKeyIcon />
                    </Button>
                </div>
            </Form>
        </div>
    )

    if(props.tokenUrlCheck === null){
        formResetPassword = <Spinner />
    }else if(props.tokenUrlCheck === false){
        formResetPassword =(
        <Alert color="danger" id="tokenExpired" className={classes.tokenExpired}>
            <p>Your token is expired!</p>
            <p>Please click <Link to="/recoverypassword">here</Link> to recovery your password.</p>
        </Alert>)
    }

    return (
        <div className={`container centrelizerForm`}>
            <div className={`col-12 col-sm-8 col-md-6 breadcrumbDiv`}>
                <Breadcrumb>
                    <BreadcrumbItem className={classes.breadcrumMainItem}><Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><LockOpenOutlinedIcon /> Reset Your Password</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>

                {formResetPassword}

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
        tokenUrlCheck: state.tokenUrlCheck,
        error: state.error,
        newPassword: state.newPassword
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckTokenExpiryDate: (tokenUrl) =>
            dispatch(actions.recoveryTokenCheck(tokenUrl)),
        onResetPassword: (tokenUrl, newpassword) =>
            dispatch(actions.resetPassword(tokenUrl, newpassword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword, axios);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from '../../axios/axios';
import { Tooltip, Alert, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SendIcon from '@material-ui/icons/Send';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Flag from 'react-world-flags';
import PublicIcon from '@material-ui/icons/Public';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import ExploreIcon from '@material-ui/icons/Explore';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import classes from './createUserAccountUserForm.module.css';
import usStates from './usStates';
import caProvinces from './regionList/caProvinces';
import validation from '../../shared/validation';
import { dayBirth, monthBirth, yearsBirth } from './regionList/birthCalendar';
import Spinner from '../spinner/spinner';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const [formConfig, setFormConfig] = useState({
        email: {
            errorMessage: null,
            placeholder: 'Your E-Mail here',
            showErrorMessage: null,
            value: '',
            valid: null,
            min: null,
            max: null
        },
        password: {
            errorMessage: null,
            max: 16,
            min: 6,
            placeholder: 'Your password here',
            showErrorMessage: null,
            value: '',
            valid: null,
            showInputField: false
        },
        firstName: {
            errorMessage: null,
            placeholder: 'Your first name here',
            showErrorMessage: null,
            value: '',
            valid: null,
            min: 2,
            max: 25
        },
        lastName: {
            errorMessage: null,
            placeholder: 'Your last name here',
            showErrorMessage: null,
            value: '',
            valid: null,
            min: 3,
            max: 25
        },
        yearDrop: {
            value: 'Year',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        monthDrop: {
            value: 'Month',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        dayDrop: {
            value: 'Day',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        gender: {
            value: '',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        mobileOne: {
            value: '',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
            min: 2,
            max: 4
        },
        mobileTwo: {
            value: '',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
            min: 2,
            max: 4
        },
        mobileThree: {
            value: '',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
            min: 3,
            max: 4
        },
        countryDrop: {
            value: 'Select',
            countryFlag: null,
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        provinceDrop: {
            value: 'Select',
            isShow: false,
            valid: null,
            errorMessage: null,
            showErrorMessage: null,
        },
        city: {
            errorMessage: null,
            placeholder: 'Your city here',
            showErrorMessage: null,
            value: '',
            valid: null,
        },
        addressLineOne: {
            errorMessage: null,
            placeholder: 'Your address here',
            showErrorMessage: null,
            value: '',
            valid: null,
            min: 3,
            max: 50
        },
        addressLineTwo: {
            placeholder: 'line 2...',
            value: '',
        },
        zipCode: {
            errorMessage: null,
            placeholder: 'Your zip code here',
            showErrorMessage: null,
            value: '',
            valid: null,
            min: 3,
            max: 12
        },
        agreement: {
            errorMessage: null,
            showErrorMessage: null,
            isCheck: false
        },
        submitHandler: {
            errorMessage: null,
            showErrorMessage: null,
            valid: null,
        },
        tooltipOpen: false,
        loading: null,
        modal: false
    })

    const changeFalseTrue = (event, inputField, params) => {

        if (params === null) {
            const oldObjt = { ...formConfig }
            oldObjt[inputField] = !oldObjt[inputField];
            setFormConfig(oldObjt);
        } else {
            const oldObjt = { ...formConfig }
            oldObjt[inputField][params] = !oldObjt[inputField][params];
            setFormConfig(oldObjt);
        }
    }

    const inputValidation = (event, inputField) => {

        //console.log(inputField)

        resetConditions(inputField)

        let valueReceived = null;

        if(inputField === "email"){
            valueReceived = event.target.value.toLowerCase();
        }else if(inputField === "firstName" || inputField === "lastName" || inputField === "city" || inputField === "addressLineOne"){
            valueReceived = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        }else{
            valueReceived = event.target.value
        }

        //console.log(valueReceived)

        const oldObjt = { ...formConfig }
        oldObjt[inputField].value = valueReceived;
        setFormConfig(oldObjt);

        let min = formConfig[inputField].min;
        let max = formConfig[inputField].max;

        let inputTest = validation(valueReceived, inputField, min, max);
        //console.log(inputTest)

        if (inputTest === true) {
            //email is valid and the value will be updated
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
            oldObjt[inputField].errorMessage = inputTest;
            oldObjt[inputField].sent = false;
            setFormConfig(oldObjt);
        }

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

    // Reset all conditions once click on the input form
    const resetConditions = (inputField) => {
        const oldObjt = { ...formConfig }
        oldObjt[inputField].valid = false;
        oldObjt[inputField].errorMessage = null;
        oldObjt[inputField].showErrorMessage = null;
        oldObjt[inputField].sent = false;
        oldObjt.submitHandler.errorMessage = null;
        oldObjt.submitHandler.showErrorMessage = null;
        setFormConfig(oldObjt);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (formConfig.email.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.submitHandler.errorMessage = 'Something wrong with your email.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.password.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.submitHandler.errorMessage = 'Something wrong with your email.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.firstName.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.submitHandler.errorMessage = 'Something wrong with First Name.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.lastName.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.submitHandler.errorMessage = 'Something wrong with Last Name.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.yearDrop.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.yearDrop.errorMessage = 'Please select your year of birth';
            oldObjt.yearDrop.valid = false;
            oldObjt.yearDrop.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please check your year of birth information.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.monthDrop.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.monthDrop.errorMessage = 'Please select your month of birth';
            oldObjt.monthDrop.valid = false;
            oldObjt.monthDrop.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please check your month of birth information.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.dayDrop.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.dayDrop.errorMessage = 'Please select your day of birth';
            oldObjt.dayDrop.valid = false;
            oldObjt.dayDrop.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please check your day of birth information.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.gender.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.gender.errorMessage = 'Please select your gender or chek to not be informed';
            oldObjt.gender.valid = false;
            oldObjt.gender.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please check the gender area.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.mobileOne.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.mobileOne.errorMessage = 'Please insert a valid mobile number';
            oldObjt.mobileOne.valid = false;
            oldObjt.mobileOne.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Something wrong with your mobile number.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.mobileTwo.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.mobileTwo.errorMessage = 'Please insert a valid mobile number';
            oldObjt.mobileTwo.valid = false;
            oldObjt.mobileTwo.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Something wrong with your mobile number.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.mobileThree.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.mobileThree.errorMessage = 'Please insert a valid mobile number';
            oldObjt.mobileThree.valid = false;
            oldObjt.mobileThree.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Something wrong with your mobile number.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.countryDrop.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.countryDrop.errorMessage = 'Please select your country';
            oldObjt.countryDrop.valid = false;
            oldObjt.countryDrop.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please select your country using the drop down menu.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.provinceDrop.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.provinceDrop.errorMessage = 'Please select your State/Province';
            oldObjt.provinceDrop.valid = false;
            oldObjt.provinceDrop.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please select your State/Province using the drop down menu.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.city.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.city.errorMessage = 'Please select your City';
            oldObjt.city.valid = false;
            oldObjt.city.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please select your City.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.addressLineOne.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.addressLineOne.errorMessage = 'Please insert your address.';
            oldObjt.addressLineOne.valid = false;
            oldObjt.addressLineOne.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please insert your address.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.zipCode.valid !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.zipCode.errorMessage = 'Please insert your zip code.';
            oldObjt.zipCode.valid = false;
            oldObjt.zipCode.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please insert your zip code.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        } else if (formConfig.agreement.isCheck !== true) {
            const oldObjt = { ...formConfig }
            oldObjt.agreement.errorMessage = 'Please check the agreements and conditions.';
            oldObjt.agreement.valid = false;
            oldObjt.agreement.showErrorMessage = true;
            oldObjt.submitHandler.errorMessage = 'Please check the agreements and conditions.';
            oldObjt.submitHandler.valid = false;
            oldObjt.submitHandler.showErrorMessage = true;
            return setFormConfig(oldObjt);
        }

        let compForm = {};
        for (let keyForm in formConfig) {
            // if(formConfig[compForm] !== null && formConfig[compForm].valid !== undefined && formConfig[compForm].valid === undefined){  
            // }
            if (formConfig[keyForm] !== null && formConfig[keyForm].value !== undefined) {
                compForm[keyForm] = formConfig[keyForm].value
            }
        }
        //console.log(compForm)
        props.onRegisterUser(compForm)

    }

    if(props.registerResult){
       return <Redirect to="/accountCreated" />
    }

    return (
        <div className={`container centrelizerForm`}>
            <Modal isOpen={formConfig.modal} toggle={(event) => changeFalseTrue(event, "modal", null)}>
                <ModalHeader toggle={(event) => changeFalseTrue(event, "modal", null)}>
                    Terms and Conditions
                    </ModalHeader>
                <ModalBody>
                    Here is the place to insert all terms and conditions to be accepted for
                    all users be registered.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={(event) => changeFalseTrue(event, "modal", null)}>
                        Close
                        </Button>
                </ModalFooter>
            </Modal>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                <Row className={`row clearfix d-flex ${classes.formTitle}`}>Register User</Row>
                <hr />
                <h4 className={classes.subRegisterAreas}>Login Information</h4>
                <Form className={classes.formMargin} onSubmit={(event) => submitHandler(event)}>
                    <FormGroup>
                        <Label className={`labelStyle`}>Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <AlternateEmailIcon fontSize="small" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                onChange={(event) => inputValidation(event, "email")}
                                onBlur={() => showMessages("email")}
                                invalid={(formConfig.email.showErrorMessage !== null) ? true : false}
                                type="email"
                                name="email"
                                id="Email"
                                className={
                                    (formConfig.email.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.email.placeholder} />
                        </InputGroup>

                        {(formConfig.email.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.email.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Password</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <VpnKeyIcon fontSize="small" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Tooltip
                                placement="right"
                                isOpen={formConfig.tooltipOpen}
                                target="password"
                                toggle={(event) => changeFalseTrue(event, "tooltipOpen", null)}>
                                <h6>Your new password must have between 7 and 15 characters and contain at least:</h6>
                                    - One letter lowercase<br></br>
                                    - One letter uppercase<br></br>
                                    - One digit
                            </Tooltip>
                            <Input
                                invalid={(formConfig.password.showErrorMessage !== null) ? true : false}
                                onChange={(event) => inputValidation(event, "password")}
                                onBlur={() => showMessages("password")}
                                value={formConfig.password.value}
                                type={(formConfig.password.showInputField) ? "text" : "password"}
                                name="password"
                                id="password"
                                className={
                                    (formConfig.password.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.password.placeholder} />
                            <InputGroupAddon addonType="append" >
                                <InputGroupText
                                    className={
                                        (formConfig.password.showErrorMessage !== null) ?
                                            classes.inputGroupPrependInvalid :
                                            classes.inputGroupPrepend}>
                                    {(formConfig.password.showInputField) ?
                                        <VisibilityOffIcon className={classes.eyeIcon} fontSize="small" onClick={(event) => changeFalseTrue(event, "password", "showInputField")} /> :
                                        <VisibilityIcon className={classes.eyeIcon} fontSize="small" onClick={(event) => changeFalseTrue(event, "password", "showInputField")} />}
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>

                        {(formConfig.password.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.password.errorMessage}
                                </Alert></div> :
                            <div></div>}

                    </FormGroup>
                    <h4 className={classes.subRegisterAreas}>Personal Information</h4>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>First Name</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <PersonIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                onChange={(event) => inputValidation(event, "firstName")}
                                onBlur={() => showMessages("firstName")}
                                invalid={(formConfig.firstName.showErrorMessage !== null) ? true : false}
                                type="text"
                                name="firstName"
                                id="firstName"
                                className={
                                    (formConfig.firstName.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.firstName.placeholder} />
                        </InputGroup>

                        {(formConfig.firstName.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.firstName.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Last Name</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <PersonIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                onChange={(event) => inputValidation(event, "lastName")}
                                onBlur={() => showMessages("lastName")}
                                invalid={(formConfig.lastName.showErrorMessage !== null) ? true : false}
                                type="text"
                                name="lastName"
                                id="lastName"
                                className={
                                    (formConfig.lastName.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.lastName.placeholder} />
                        </InputGroup>

                        {(formConfig.lastName.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.lastName.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Birthday</Label>
                        <InputGroup>
                            <Row>
                                <Dropdown
                                    isOpen={formConfig.yearDrop.isShow}
                                    toggle={(event) => changeFalseTrue(event, "yearDrop", "isShow")}
                                    //className={classes.dropDownYear}
                                    className={classes.dropDownYear}>
                                    <DropdownToggle caret outline
                                        style={{ font: "dark" }}
                                        className={classes.dropDownYear}
                                        color={(formConfig.yearDrop.showErrorMessage !== null) ?
                                            "danger" :
                                            "primary"}>
                                        {formConfig.yearDrop.value}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {yearsBirth.map(years => (
                                            <DropdownItem
                                                onClick={() => {
                                                    const oldObj = { ...formConfig };
                                                    oldObj.yearDrop.value = years;
                                                    oldObj.yearDrop.valid = true;
                                                    oldObj.yearDrop.errorMessage = null;
                                                    oldObj.yearDrop.showErrorMessage = null;
                                                    oldObj.submitHandler.errorMessage = null;
                                                    oldObj.submitHandler.showErrorMessage = null;
                                                    setFormConfig(oldObj);
                                                }}
                                                name={years}
                                                id={years}>{years}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown
                                    isOpen={formConfig.monthDrop.isShow}
                                    toggle={(event) => changeFalseTrue(event, "monthDrop", "isShow")}
                                    className={classes.dropDownMonth}>
                                    <DropdownToggle caret outline
                                        style={{ font: "dark" }}
                                        className={classes.dropDownMonth}
                                        color={(formConfig.monthDrop.showErrorMessage !== null) ?
                                            "danger" :
                                            "primary"}>
                                        {formConfig.monthDrop.value}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {monthBirth.map(months => (
                                            <DropdownItem
                                                onClick={() => {
                                                    const oldObj = { ...formConfig };
                                                    oldObj.monthDrop.value = months;
                                                    oldObj.monthDrop.valid = true;
                                                    oldObj.monthDrop.errorMessage = null;
                                                    oldObj.monthDrop.showErrorMessage = null;
                                                    oldObj.submitHandler.errorMessage = null;
                                                    oldObj.submitHandler.showErrorMessage = null;
                                                    setFormConfig(oldObj);
                                                }}
                                                name={months}
                                                id={months}>{months}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                                <Dropdown
                                    isOpen={formConfig.dayDrop.isShow}
                                    toggle={(event) => changeFalseTrue(event, "dayDrop", "isShow")}
                                    className={classes.dropDownDay}>
                                    <DropdownToggle caret outline
                                        style={{ font: "dark" }}
                                        className={classes.dropDownDay}
                                        color={(formConfig.dayDrop.showErrorMessage !== null) ?
                                            "danger" :
                                            "primary"}>
                                        {formConfig.dayDrop.value}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {dayBirth.map(days => (
                                            <DropdownItem
                                                onClick={() => {
                                                    const oldObj = { ...formConfig };
                                                    oldObj.dayDrop.value = days;
                                                    oldObj.dayDrop.valid = true;
                                                    oldObj.dayDrop.errorMessage = null;
                                                    oldObj.dayDrop.showErrorMessage = null;
                                                    oldObj.submitHandler.errorMessage = null;
                                                    oldObj.submitHandler.showErrorMessage = null;
                                                    setFormConfig(oldObj);
                                                }}
                                                name={days}
                                                id={days}>{days}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            </Row>
                        </InputGroup>
                        {(formConfig.yearDrop.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.yearDrop.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                        {(formConfig.monthDrop.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.monthDrop.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                        {(formConfig.dayDrop.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.dayDrop.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Gender</Label>
                        <FormGroup check>
                            <Label check className={
                                (formConfig.gender.showErrorMessage !== null) ?
                                    classes.radioConfigInvalid :
                                    classes.radioConfig}>
                                <Input
                                    onClick={() => {
                                        const oldObj = { ...formConfig };
                                        oldObj.gender.value = 'female';
                                        oldObj.gender.valid = true;
                                        oldObj.gender.errorMessage = null;
                                        oldObj.gender.showErrorMessage = null;
                                        oldObj.submitHandler.errorMessage = null;
                                        oldObj.submitHandler.showErrorMessage = null;
                                        setFormConfig(oldObj);
                                    }}
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    className={classes.inputRadioConfig} />
                                {' '}&nbsp;Female
                                </Label>
                            <Label check className={
                                (formConfig.gender.showErrorMessage !== null) ?
                                    classes.radioConfigInvalid :
                                    classes.radioConfig}>
                                <Input
                                    onClick={() => {
                                        const oldObj = { ...formConfig };
                                        oldObj.gender.value = 'male';
                                        oldObj.gender.valid = true;
                                        oldObj.gender.errorMessage = null;
                                        oldObj.gender.showErrorMessage = null;
                                        oldObj.submitHandler.errorMessage = null;
                                        oldObj.submitHandler.showErrorMessage = null;
                                        setFormConfig(oldObj);
                                    }}
                                    type="radio"
                                    name="gender"
                                    id="male" />
                                {' '}&nbsp;Male
                                </Label>
                            <Label check className={
                                (formConfig.gender.showErrorMessage !== null) ?
                                    classes.radioConfigNotInfomedInvalid :
                                    classes.radioConfigNotInfomed}>
                                <Input
                                    type="radio"
                                    name="gender"
                                    id="notInformed"
                                    onClick={() => {
                                        const oldObj = { ...formConfig };
                                        oldObj.gender.value = 'notInformed';
                                        oldObj.gender.valid = true;
                                        oldObj.gender.errorMessage = null;
                                        oldObj.gender.showErrorMessage = null;
                                        oldObj.submitHandler.errorMessage = null;
                                        oldObj.submitHandler.showErrorMessage = null;
                                        setFormConfig(oldObj);
                                    }} />
                                {' '}&nbsp;Not Informed
                                </Label>
                            {(formConfig.gender.showErrorMessage === true) ?
                                <div className={classes.alertArea}>
                                    <Alert color="danger">{formConfig.gender.errorMessage}</Alert>
                                </div> :
                                <div></div>}
                        </FormGroup>
                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Mobile</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <PhoneIphoneIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Row className={classes.inputMobileRow}>
                                (<Input
                                    onChange={(event) => inputValidation(event, "mobileOne")}
                                    onBlur={() => showMessages("mobileOne")}
                                    type="text"
                                    name="phone1"
                                    id="phone1"
                                    className={
                                        (formConfig.mobileOne.showErrorMessage !== null) ?
                                            classes.inputMobile1Invalid :
                                            classes.inputMobile1}
                                    maxLength="3" />)
                                    <Input
                                    onChange={(event) => inputValidation(event, "mobileTwo")}
                                    onBlur={() => showMessages("mobileTwo")}
                                    type="text"
                                    name="phone2"
                                    id="phone2"
                                    className={
                                        (formConfig.mobileTwo.showErrorMessage !== null) ?
                                            classes.inputMobile2Invalid :
                                            classes.inputMobile2}
                                    maxLength="3" />
                                <Input
                                    onChange={(event) => inputValidation(event, "mobileThree")}
                                    onBlur={() => showMessages("mobileThree")}
                                    type="text"
                                    name="phone3"
                                    id="phone3"
                                    className={
                                        (formConfig.mobileThree.showErrorMessage !== null) ?
                                            classes.inputMobile3Invalid :
                                            classes.inputMobile3}
                                    maxLength="4" />
                            </Row>
                        </InputGroup>

                        {(formConfig.mobileOne.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.mobileOne.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                        {(formConfig.mobileTwo.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.mobileTwo.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                        {(formConfig.mobileThree.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.mobileThree.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                    </FormGroup>
                    <FormGroup>
                        <Label className={`labelStyle`}>Select your country</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{ height: 50 }} className={classes.inputGroup}>
                                    <PublicIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Dropdown
                                isOpen={formConfig.countryDrop.isShow}
                                toggle={(event) => changeFalseTrue(event, "countryDrop", "isShow")}
                                className={classes.dropDownCountry}>
                                <DropdownToggle caret outline color={(formConfig.countryDrop.showErrorMessage !== null) ?
                                    "danger" :
                                    "primary"} style={{ font: "dark" }} className={classes.dropDownCountryMinWidth}>
                                    {(formConfig.countryDrop.countryFlag === null) ?
                                        null :
                                        <Flag code={formConfig.countryDrop.countryFlag} height="16" style={{ 'margin-right': 8 }} />}
                                    {formConfig.countryDrop.value}

                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem
                                        onClick={() => {

                                            const oldObj = { ...formConfig };
                                            if (oldObj.countryDrop.value !== 'United States') {
                                                oldObj.countryDrop.countryFlag = 'US';
                                                oldObj.countryDrop.value = 'United States';
                                                oldObj.countryDrop.valid = true;
                                                oldObj.countryDrop.errorMessage = null;
                                                oldObj.countryDrop.showErrorMessage = null;
                                                oldObj.provinceDrop.value = 'Select';

                                                oldObj.submitHandler.errorMessage = null;
                                                oldObj.submitHandler.valid = null;
                                                oldObj.submitHandler.showErrorMessage = null;

                                                setFormConfig(oldObj);
                                            }
                                            //resetConditions("countryDrop")
                                        }
                                        }
                                        name="usCountry"
                                        id="usCountry">
                                        <Flag
                                            code={"US"}
                                            height="16"
                                            style={{ 'marginRight': 8 }} />United States</DropdownItem>
                                    <DropdownItem
                                        onClick={() => {
                                            const oldObj = { ...formConfig };
                                            if (oldObj.countryDrop.value !== 'Canada') {
                                                oldObj.countryDrop.countryFlag = 'CA';
                                                oldObj.countryDrop.value = 'Canada';
                                                oldObj.countryDrop.valid = true;
                                                oldObj.countryDrop.errorMessage = null;
                                                oldObj.countryDrop.showErrorMessage = null;
                                                oldObj.provinceDrop.value = 'Select';

                                                oldObj.submitHandler.errorMessage = null;
                                                oldObj.submitHandler.valid = null;
                                                oldObj.submitHandler.showErrorMessage = null;

                                                setFormConfig(oldObj);
                                            }
                                            //resetConditions("countryDrop")
                                        }}
                                        name="caCountry"
                                        id="caCountry">
                                        <Flag
                                            code={"CA"}
                                            height="16"
                                            style={{ 'marginRight': 8 }} />Canada</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </InputGroup>
                        {(formConfig.countryDrop.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.countryDrop.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>
                            {
                                (formConfig.countryDrop.countryFlag === 'CA') ?
                                    'Province' :
                                    (formConfig.countryDrop.countryFlag === 'US') ?
                                        'State' :
                                        'Province / State'
                            }
                        </Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><MapIcon /></InputGroupText>
                            </InputGroupAddon>
                            <Dropdown
                                isOpen={formConfig.provinceDrop.isShow}
                                toggle={(event) => changeFalseTrue(event, "provinceDrop", "isShow")}
                                className={classes.dropDownProvince}>
                                <DropdownToggle caret outline
                                    color={(formConfig.provinceDrop.showErrorMessage !== null) ?
                                        "danger" :
                                        "primary"}
                                    style={{ font: "dark" }}
                                    className={classes.dropDownProvinceMinWidth}>
                                    {formConfig.provinceDrop.value}
                                </DropdownToggle>
                                <DropdownMenu className={classes.dropDownProvinceMinWidth} direction="down"
                                    modifiers={{
                                        setMaxHeight: {
                                            enabled: true,
                                            order: 890,
                                            fn: (data) => {
                                                return {
                                                    ...data,
                                                    styles: {
                                                        ...data.styles,
                                                        overflow: 'auto',
                                                        maxHeight: '200px',
                                                    },
                                                };
                                            },
                                        },
                                    }}>
                                    {(formConfig.countryDrop.countryFlag === null) ?
                                        <DropdownItem disabled>Select your country first</DropdownItem> :
                                        (formConfig.countryDrop.countryFlag === 'CA') ?
                                            caProvinces.map(provinces => (
                                                <DropdownItem
                                                    onClick={() => {
                                                        const oldObj = { ...formConfig };
                                                        oldObj.provinceDrop.value = provinces;
                                                        oldObj.provinceDrop.valid = true;
                                                        oldObj.provinceDrop.errorMessage = null;
                                                        oldObj.provinceDrop.showErrorMessage = null;
                                                        oldObj.submitHandler.errorMessage = null;
                                                        oldObj.submitHandler.valid = null;
                                                        oldObj.submitHandler.showErrorMessage = null;

                                                        setFormConfig(oldObj);
                                                    }}
                                                    name="caProvinces"
                                                    id="caProvinces">{provinces}</DropdownItem>
                                            )) :
                                            usStates.map(provinces => (
                                                <DropdownItem
                                                    onClick={() => {
                                                        const oldObj = { ...formConfig };
                                                        oldObj.provinceDrop.value = provinces;
                                                        oldObj.provinceDrop.valid = true;
                                                        oldObj.provinceDrop.errorMessage = null;
                                                        oldObj.provinceDrop.showErrorMessage = null;
                                                        oldObj.submitHandler.errorMessage = null;
                                                        oldObj.submitHandler.valid = null;
                                                        oldObj.submitHandler.showErrorMessage = null;
                                                        setFormConfig(oldObj);
                                                    }}
                                                    name="usProvicens"
                                                    id="usProvicens">{provinces}</DropdownItem>
                                            ))
                                    }
                                </DropdownMenu>
                            </Dropdown>
                        </InputGroup>
                        {(formConfig.provinceDrop.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.provinceDrop.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                    </FormGroup>

                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>City</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><ExploreIcon /></InputGroupText>
                            </InputGroupAddon>
                            <Input
                                invalid={(formConfig.city.showErrorMessage !== null) ? true : false}
                                onChange={(event) => inputValidation(event, "city")}
                                onBlur={() => showMessages("city")}
                                type="text"
                                name="city"
                                id="city"
                                className={
                                    (formConfig.city.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.city.placeholder} />
                        </InputGroup>

                        {(formConfig.city.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.city.errorMessage}</Alert>
                            </div> :
                            <div></div>}

                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Address</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><RoomIcon /></InputGroupText>
                            </InputGroupAddon>
                            <Input
                                invalid={(formConfig.addressLineOne.showErrorMessage !== null) ? true : false}
                                onChange={(event) => inputValidation(event, "addressLineOne")}
                                onBlur={() => showMessages("addressLineOne")}
                                type="text"
                                name="addressLineOne"
                                id="addressLineOne"
                                className={
                                    (formConfig.addressLineOne.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.addressLineOne.placeholder} />
                        </InputGroup>

                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText
                                    className={classes.inputGroup}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                onChange={(event) => inputValidation(event, "addressLineTwo")}
                                type="text"
                                name="address2"
                                id="address2"
                                className={classes.inputConfig}
                                placeholder={formConfig.addressLineTwo.placeholder} />
                        </InputGroup>
                        {(formConfig.addressLineOne.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.addressLineOne.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                    </FormGroup>
                    <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Zip Code</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}>
                                    <EmailOutlinedIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                invalid={(formConfig.zipCode.showErrorMessage !== null) ? true : false}
                                onChange={(event) => inputValidation(event, "zipCode")}
                                onBlur={() => showMessages("zipCode")}
                                type="text"
                                name="zipCode"
                                id="zipCode"
                                className={
                                    (formConfig.zipCode.showErrorMessage !== null) ?
                                        classes.inputConfigInvalid :
                                        classes.inputConfig}
                                placeholder={formConfig.zipCode.placeholder}
                                maxLength="12" />
                        </InputGroup>
                        {(formConfig.zipCode.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.zipCode.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                    </FormGroup>
                    <FormGroup className={classes.checkBox}>
                        <Label className={`labelStyle`}>
                            <Input
                                type="checkbox"
                                onClick={() => {
                                    const oldObj = { ...formConfig };
                                    oldObj.agreement.errorMessage = null;
                                    oldObj.agreement.showErrorMessage = null;
                                    oldObj.agreement.isCheck = !oldObj.agreement.isCheck;
                                    oldObj.submitHandler.errorMessage = null;
                                    oldObj.submitHandler.valid = null;
                                    oldObj.submitHandler.showErrorMessage = null;
                                    setFormConfig(oldObj);
                                }
                                } />
                            {' '}I agree with all conditions and terms.

                                </Label>
                        <p><span onClick={(event) => changeFalseTrue(event, "modal", null)} className={classes.terms}><i>*Click here to read the document</i></span></p>
                    </FormGroup>

                    <div className={`row`}>
                        {(formConfig.submitHandler.showErrorMessage === true) ?
                            <div className={classes.alertArea}>
                                <Alert color="danger">{formConfig.submitHandler.errorMessage}</Alert>
                            </div> :
                            <div></div>}
                        <div className={classes.alertArea}>
                            {(props.loading) ? <Spinner /> : null}
                        </div>
                        <Button
                            className={classes.buttonConfig}
                            type="submit"
                            color="primary">Register <SendIcon />
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.userReducer.error,
        loading: state.userReducer.loading,
        registerResult: state.userReducer.registerResult
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (compForm) =>
            dispatch(actions.registerUser(compForm))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login, axios);
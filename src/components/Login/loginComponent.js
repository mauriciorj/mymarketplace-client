import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, Badge, Row, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NearMeIcon from '@material-ui/icons/NearMe';
import classes from './loginComponent.module.css';

const login = () => {

    return (
        <div className={`container centrelizerForm`}>
            <div className={`col-12 col-sm-8 col-md-6 breadcrumbDiv`}>
                <Breadcrumb>
                    <BreadcrumbItem className={classes.breadcrumMainItem}> <Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active><ExitToAppIcon /> Login</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                <Row className={`row clearfix d-flex ${classes.formTitle}`}>Login</Row>
                <Form className={classes.formMargin}>
                    <FormGroup>
                        <Label className="labelStyle">Email</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><AlternateEmailIcon fontSize="small" /></InputGroupText>
                            </InputGroupAddon>
                            <Input type="email" name="email" id="Email" className={classes.inputConfig}  placeholder="your email here..." />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className={`pt-2`}>
                        <Label className={`labelStyle`}>Password</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText className={classes.inputGroup}><VpnKeyIcon fontSize="small" /></InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" name="password" id="password" className={classes.inputConfig}  placeholder="your password here..." />
                        </InputGroup>
                    </FormGroup>
                    <div className="row">
                        <Button className={classes.buttonConfig} type="submit" color="primary">Log In <NearMeIcon fontSize="small" /></Button>
                    </div>
                </Form>
                <div className={`row ${classes.recoveryPassDiv}`}>
                    <p className={classes.recoveryPassText}>Forgot your password ? <Link className={`registerHereLink`} to="/recoverypassword">Click here!</Link></p>
                </div>
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
    )

}


export default login;
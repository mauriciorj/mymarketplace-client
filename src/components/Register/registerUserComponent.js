import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Breadcrumb, BreadcrumbItem, Label, FormGroup, Form, Input, Button, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import HomeIcon from '@material-ui/icons/Home';
import SendIcon from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PersonIcon from '@material-ui/icons/Person';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Flag from 'react-world-flags';
import PublicIcon from '@material-ui/icons/Public';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MapIcon from '@material-ui/icons/Map';
import RoomIcon from '@material-ui/icons/Room';
import ExploreIcon from '@material-ui/icons/Explore';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import classes from './registerUserComponent.module.css';


class Login extends Component {

    state = {
        dropDownCountry: false,
        dropDownCountryValue: 'Select',
        dropDownCountryFlag: null,
        dropDownProvinces: false,
        dropDownProvincesName: 'Select'
    }

    dropdownCountryHandler = () => {
        this.setState({ dropDownCountry: !this.state.dropDownCountry });
    }

    dropdownProvinceHandler = () => {
        this.setState({ dropDownProvinces: !this.state.dropDownProvinces });
    }

    dropDownProvinceChangeValueHandler = (e) => {
        this.setState({ dropDownProvincesName: e.currentTarget.textContent });
    }

    dropDownCountryChangeValueHandler = (e) => {
        this.setState({ dropDownCountryValue: e.currentTarget.textContent });

        console.log(this.state.dropDownCountryValue);

        if (e.currentTarget.textContent === 'United States') {
            this.setState({ dropDownCountryFlag: "US" })
        } else {
            this.setState({ dropDownCountryFlag: "CA" })
        }

        console.log(this.state.dropDownCountryFlag);

    }

    dropDownTwoChangeValueHandler = () => {

    }

    render() {

        const usProvinces = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
        ]

        const canadaProvinces = [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan',
        ];

        return (
            <div className={`container centrelizerForm`}>
                <div className={`col-12 col-sm-8 col-md-6 breadcrumbDiv`}>
                    <Breadcrumb className={classes.breadcrumb}>
                        <BreadcrumbItem className={classes.breadcrumbMainItem}><Link className={`linkBreadcrumbLogin`} to="/"><HomeIcon /> Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active><AccountBoxIcon /> Register</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className={`col-12 col-sm-8 col-md-6 centrelizerForm`}>
                    <Row className={`row clearfix d-flex ${classes.formTitle}`}>Register</Row>
                    <hr />
                    <h4 className={classes.subRegisterAreas}>Login Information</h4>

                    <Form className={classes.formMargin}>
                        <FormGroup>
                            <Label className={`labelStyle`}>Email</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><AlternateEmailIcon fontSize="small" /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" id="Email" className={classes.inputConfig} placeholder="your email here..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label className={`labelStyle`}>Password</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><VpnKeyIcon fontSize="small" /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" name="password" id="password" className={classes.inputConfig} placeholder="your password here..." />
                                <InputGroupAddon addonType="append" >
                                    <InputGroupText className={classes.inputGroupPrepend}><VisibilityIcon fontSize="small" /></InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>

                        <h4 className={classes.subRegisterAreas}>Personal Information</h4>
                        <FormGroup>
                            <Label className={`labelStyle`}>First Name</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><PersonIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="firstName" id="firstName" className={classes.inputConfig} placeholder="your first name here..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>Last Name</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><PersonIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="lastName" id="lastName" className={classes.inputConfig} placeholder="your last name here..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                        <Label className={`labelStyle`}>Gender</Label>
                            <FormGroup check>
                                <Label check className={classes.radioConfig}>
                                    <Input type="radio" name="female" className={classes.inputRadioConfig}/>{' '}
                                    &nbsp;Female
                                </Label>
                                <Label check className={classes.radioConfig}>
                                    <Input type="radio" name="male" />{' '}
                                    &nbsp;Male
                                </Label>
                                <Label check className={classes.radioConfig}>
                                    <Input type="radio" name="notInformed" />{' '}
                                    &nbsp;Not Informed
                                </Label>
                            </FormGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>Mobile</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><PhoneIphoneIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Row className={classes.inputMobileRow}>
                                    (<Input type="text" name="phone1" id="phone1" className={classes.inputMobile1} maxLength="3" />)<Input type="text" name="phone2" id="phone2" className={classes.inputMobile2} maxLength="3" /><Input type="text" name="phone3" id="phone3" className={classes.inputMobile3} maxLength="4" />
                                </Row>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Label className={`labelStyle`}>Select your country</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText style={{ height: 50 }} className={classes.inputGroup}><PublicIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Dropdown isOpen={this.state.dropDownCountry} toggle={this.dropdownCountryHandler} className={classes.dropDownCountry}>
                                    <DropdownToggle caret outline color="primary" style={{ font: "dark" }} className={classes.dropDownCountryMinWidth}>
                                        {(this.state.dropDownCountryFlag === null) ? null : <Flag code={this.state.dropDownCountryFlag} height="16" style={{ 'margin-right': 8 }} />}
                                        {this.state.dropDownCountryValue}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem onClick={this.dropDownCountryChangeValueHandler} name="usCountry" id="usCountry"><Flag code={"US"} height="16" style={{ 'marginRight': 8 }} />United States</DropdownItem>
                                        <DropdownItem onClick={this.dropDownCountryChangeValueHandler} name="caCountry" id="caCountry"><Flag code={"CA"} height="16" style={{ 'marginRight': 8 }} />Canada</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>
                                {
                                    (this.state.dropDownCountryFlag === 'CA') ?
                                        'Province' :
                                        (this.state.dropDownCountryFlag === 'US') ?
                                            'State' :
                                            'Province / State'
                                }
                            </Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><MapIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Dropdown isOpen={this.state.dropDownProvinces} toggle={this.dropdownProvinceHandler} className={classes.dropDownProvince}>
                                    <DropdownToggle caret outline color="primary" style={{ font: "dark" }} className={classes.dropDownProvinceMinWidth}>
                                        {this.state.dropDownProvincesName}
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
                                        {(this.state.dropDownCountryFlag === null) ?
                                            <DropdownItem disabled>Select your country first</DropdownItem> :
                                            (this.state.dropDownCountryFlag === 'CA') ?
                                                canadaProvinces.map(provinces => (
                                                    <DropdownItem onClick={this.dropDownProvinceChangeValueHandler} name="caProvinces" id="caProvinces">{provinces}</DropdownItem>
                                                )) :
                                                usProvinces.map(provinces => (
                                                    <DropdownItem onClick={this.dropDownProvinceChangeValueHandler} name="usProvicens" id="usProvicens">{provinces}</DropdownItem>
                                                ))
                                        }
                                    </DropdownMenu>
                                </Dropdown>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>City</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><ExploreIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="city" id="city" className={classes.inputConfig} placeholder="your city..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>Address</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><RoomIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="address1" id="address1" className={classes.inputConfig} placeholder="line 1..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="address2" id="address2" className={classes.inputConfig} placeholder="line 2 ..." />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup className={classes.formGroupMargin}>
                            <Label className={`labelStyle`}>Zip Code</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend" >
                                    <InputGroupText className={classes.inputGroup}><EmailOutlinedIcon /></InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="zipCode" id="zipCode" className={classes.inputConfig} placeholder="your zip here..." />
                            </InputGroup>
                        </FormGroup>
                        <div className={`row`}>
                            <Button className={classes.buttonConfig} type="submit" color="primary">Register <SendIcon /></Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }

}

export default Login;
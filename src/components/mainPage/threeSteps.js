import React from 'react';
import classes from './threeSteps.module.css';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import threeSteps1 from '../../assets/img/mainPage/threeSteps/3steps-1.jpg';
import threeSteps2 from '../../assets/img/mainPage/threeSteps/3steps-2.png';
import threeSteps3 from '../../assets/img/mainPage/threeSteps/3steps-3.jpg';
import SearchIcon from '@material-ui/icons/Search';
import EventIcon from '@material-ui/icons/Event';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

function ThreeSteps() {

    return (
        <div className={`row ${classes.threeStepsMainDiv}`}>
            <div className={`row ${classes.mainTitle}`}>
                <h3>3 simple steps</h3>
            </div>
            <div className={`row ${classes.cards}`}>
                <Card className={`col-12 col-md-4 col-lg-4 order-1 ${classes.card}`}>
                    <CardImg top width="100%" src={threeSteps1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}><div className="row"><div className="col-9">Search for a professional </div><div className="col-3"> <SearchIcon fontSize="large" /></div></div></CardTitle>
                        <CardText class="blockquote-footer"><p>Thousand professionals are available to give the right support to you.</p>Choice the best professional according with your needs and preferences.</CardText>
                    </CardBody>
                </Card>

                <Card className={`col-12 col-md-4 col-lg-4  order-2 ${classes.card}`}>
                    <CardImg top width="100%" src={threeSteps2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}><div className="row"><div className="col-9">Choice the better day and time</div><div className="col-3"> <EventIcon fontSize="large" /></div></div></CardTitle>
                        <CardText class="blockquote-footer"><p>Does not matter where you are. You only need have an internet connection.</p><p>Don't miss an appointment due a travel or skip the time with really matters for you.</p><p>Pickup the best day and time for you easly.</p></CardText>
                    </CardBody>
                </Card>

                <Card className={`col-12 col-md-4 col-lg-4  order-3 ${classes.card}`}>
                    <CardImg top width="100%" src={threeSteps3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}><div className="row"><div className="col-9">Talk with the professional</div><div className="col-3"><DesktopWindowsIcon fontSize="large" /></div></div></CardTitle>
                        <CardText class="blockquote-footer"><p>Have the best professional support online.</p></CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default ThreeSteps;
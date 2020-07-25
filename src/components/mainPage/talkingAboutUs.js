import React from 'react';
import classes from './talkingAboutUs.module.css';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import threeSteps1 from '../../assets/img/mainPage/talkingAboutUs/p1.png';
import threeSteps2 from '../../assets/img/mainPage/talkingAboutUs/p2.png';
import threeSteps3 from '../../assets/img/mainPage/talkingAboutUs/p3.png';

function ThreeSteps() {

    return (
        <div className={classes.talkingAboutUsMainDiv}>
            <div className={`row ${classes.mainTitle}`}>
                <h3>What our users are talking about us</h3>
            </div>
            <div className={`row ${classes.cards}`}>
                <Card className={`col-4 text-center ${classes.card}`}>
                    <CardImg className={classes.imgSize} top src={threeSteps1} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}>Flirck, Paul</CardTitle>
                        <CardText class="blockquote-footer">"Pyschy completely changed my life. I found the best doctor and I can talk without leave my home."</CardText>
                    </CardBody>
                </Card>

                <Card className={`col-4 text-center ${classes.card}`}>
                    <CardImg className={`center-block ${classes.imgSize} `} top src={threeSteps2} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}>Green, Ann</CardTitle>
                        <CardText class="blockquote-footer text-center">"I never had appointment with a psychologist before and my experience was amazing. I really like to recommend Psychy to everyone."</CardText>
                    </CardBody>
                </Card>

                <Card className={`col-4 text-center ${classes.card}`}>
                    <CardImg className={classes.imgSize} top src={threeSteps3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className={classes.cardTitle}>Bart, John</CardTitle>
                        <CardText class="blockquote-footer">"As a entrepreneur I never thought a psychologist could help me to improve my professionals results. Pyschy changed my game."</CardText>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}

export default ThreeSteps;
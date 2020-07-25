import React, { useState } from 'react';
import classes from './helpCenter.module.css';
import { Button, Collapse, Card, CardBody } from 'reactstrap';

function HelpCenter() {

    const [item1, setItem1] = useState(false);
    const [item2, setItem2] = useState(false);

    const toggle1 = () => setItem1(!item1);
    const toggle2 = () => setItem2(!item2);

    return (
        <div>
            <h2 className={`text-left ${classes.title}`}>Help Center</h2>
            <div className={`text-left ${classes.text}`}>
                <div className="row">
                    <Button onClick={toggle1} className={classes.helpItem}>How does it work?</Button>
                    <Collapse isOpen={item1}>
                        <Card className={classes.cardText}>
                            <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                        </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div className="row">
                    <Button onClick={toggle2} className={classes.helpItem}>How does it work?</Button>
                    <Collapse isOpen={item2}>
                        <Card className={classes.cardText}>
                            <CardBody>
                                Anim pariatur cliche reprehenderit,
                                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                anim keffiyeh helvetica, craft beer labore wes anderson cred
                                nesciunt sapiente ea proident.
                        </CardBody>
                        </Card>
                    </Collapse>
                </div>
            </div>
        </div >
    )

}

export default HelpCenter;
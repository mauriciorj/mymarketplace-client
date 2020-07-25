import React from 'react';
import classes from './pricing.module.css'

function AboutUsForm() {

    return (
        <div>
            <h2 className={`text-left ${classes.title}`}>Pricing</h2>
            <div className={`text-left ${classes.text}`}>
                <p>We have a fix price per appointment: CAD $30,00.</p>
                <p>Each appointment has 1 hours duration.</p>
            </div>
        </div>
    )

}

export default AboutUsForm;
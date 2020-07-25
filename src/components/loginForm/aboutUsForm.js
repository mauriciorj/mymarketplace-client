import React from 'react';
import classes from './aboutUsForm.module.css'

function AboutUsForm() {

    return (
        <div>
            <h2 className={`text-left ${classes.title}`}>About Us</h2>
            <div className={`text-left ${classes.text}`}>
                <p>Psychy was creted to help people around the world in many different psychologic areas.</p>
            </div>
        </div>
    )

}

export default AboutUsForm;
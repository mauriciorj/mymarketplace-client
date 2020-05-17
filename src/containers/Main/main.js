import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {

    render(){
        return(
            <div>
                <h1>Main Component</h1>
                <h3><Link to="/login">Login</Link></h3>
                <h3><Link to="/registeruser">Register</Link></h3>
            </div>
        )
    }

}

export default Main;
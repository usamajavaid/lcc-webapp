import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import './header.css';
class header extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Wraper1">
                <div className="wrap">
                <h1><img src={Logo} style={{marginTop:"-350px",marginLeft:"-60px"}}/></h1>
                <p id="header-heading">Cardiology Info</p>
                </div>
            </div>
            
            </React.Fragment>
        )
    }
}
export default header;

















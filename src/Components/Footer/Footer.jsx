import React, { Component} from 'react';
import CallBack from '../../Images/call-back-icon.png';
import ComCall from '../../Images/call-icon.png';
import Enquryicon from '../../Images/enquiry-icon.png';
import FB from '../../Images/fb.png';
import Twitter from '../../Images/twitter.png';
import Youtube from '../../Images/youtube.png';
import Location from '../../Images/location.png';
import Logo from '../../Images/logo.png';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="container-fluid">
                <div className="row" style={{height:"320px",textAlign:"center",marginTop:"100px",marginLeft:"30px"}}>
                    <div className="col-md-4">
                        <div id="foter-icon"><img src={CallBack}/></div>
                        <p id="foter-head">Request a call back</p>
                        <p id="foter-txt"> Fill in the form and we'll call you right back to discuss your requirements</p>
                    </div>
                    <div className="col-md-4">
                        <div id="foter-icon"><img src={ComCall}/></div>
                        <p id="foter-head">Give us a call</p>
                        <p id="foter-txt"> Please don't hesitate to call us to find out more or make an appointment</p>
                        <p id="cel-num"> 0207 436 0669</p>
                    </div>
                    <div className="col-md-4">
                        <div id="foter-icon"><img src={Enquryicon}/></div>
                        <p id="foter-head">Make an enquiry</p>
                        <p id="foter-txt"> Got a question for us? Send it over and we'll be in touch</p>
                    </div>
                </div>
                <div className="row" style={{height:"150px"}}>
                    <div className="col-md-12">
                    <button type="button" class="btn-foter fll" id="get-in">Get In Touch</button>
                    </div>
                </div>
                <div className="row" style={{backgroundColor:"#0e191d",height:"370px"}}>
                    <div className="col-md-3">
                        <form className="searchform" method="get" name="search_form">
                            <input type="search" id="s" name="s" placeholder="Search..."/>
                        </form>
                        </div>
                    <div className="col-md-4">
                        <p id="foter-tex" style={{marginLeft:"130px"}}>FOLLOW US</p>
                        <div id="foterlinks" style={{marginLeft:"130px"}}>
                        <a href="https://facebook.com" ><img src={FB}/></a>
                        <a href="https://facebook.com" ><img src={Twitter}/></a>
                        <a href="https://facebook.com" ><img src={Youtube}/></a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <p id="foter-tex">
                         GET IN TOUCH
                        </p>
                        <p id="foter-info">
                        <img src={ComCall} style={{width:"35px",height:"30px"}}/>0207 436 0669
                        </p>
                        <p id="foter-info">
                        <img src={Location}style={{width:"50px",height:"50px"}}/>66 Harley Street, London W1G 7HD, United Kingdom
                        </p>
                    </div>
                </div>
                <div></div>
                <div className="row" id="copright-row" style={{backgroundColor:"#0e191d",height:"70px"}}>
                    <div className="col-md-4">
                        <h1><img src={Logo} id="foter-logo"/></h1>
                        </div>
                        <div className="col-md-8">
                        <p id="foter-copyright">
                        © Copyright Harley Street Cardiologists 2020 | Web Design Agency - TWK  |  Disclaimer  |   Cookies   |  Accessibility
                        </p>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Footer;
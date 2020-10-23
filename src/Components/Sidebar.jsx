import React, { Component } from 'react';
import './sidebar.css';
import Menu from'../Images/menu.svg';
import Logo from '../Images/logo.png';
import Info from '../Images/info-icon.png';
import User from '../Images/user-icon.png';
import Report from '../Images/report-icon.png';
import Research from '../Images/research-icon.png';
import Play from '../Images/play-icon.png';
import Message from '../Images/message-icon.png';
import Review from '../Images/review-icon.png';
import Address from '../Images/address-icon.png';

// import history from '../Routing/Routing';
class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                
                <div id="sidebar1">                   
                    <div class="overlay"></div>
                      <nav class="navbar navbar-inverse fixed-top ">
                        <ul class="nav sidebar-nav">
                          <div class="sidebar-header">
                          <div class="sidebar-brand">
                            <a  href="/" ><img src={Menu} id="menuIcon"/><img src={Logo} id="side-Logo"/></a>
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          <br></br> 
                          <br></br>
                          <br></br>
                            <li><img src={Info} id="sidebar-icons"/><a href ="/Components/MenuComponents/Info" id="sidebar-links">CARDIOLOGY INFO</a></li>
                            <li><img src={User} id="sidebar-icons"/><a href ="/Components/MenuComponents/Specalist"id="sidebar-links">SPECIALISTS</a></li>
                            <li><img src={Report} id="sidebar-icons"/><a href ="/Components/MenuComponents/Consultants">CONSULTANTS</a></li>
                            <li><img src={Research} id="sidebar-icons"/><a href ="/Components/MenuComponents/Research">RESEARCH</a></li>
                            <li><img src={Play} id="sidebar-icons"/><a href="/Components/MenuComponents/LiveCases">LIVE CASES</a></li>
                            <li><img src={Message} id="sidebar-icons"/><a href="/Components/MenuComponents/Blog">BLOG</a></li>
                            <li><img src={Review} id="sidebar-icons"/><a href="/Components/MenuComponents/Review">REVIEW</a></li>
                            <li><img src={Address} id="sidebar-icons"/><a href="/Components/MenuComponents/Contact">CONTACT</a></li>
               
                          </ul>
           </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Sidebar;
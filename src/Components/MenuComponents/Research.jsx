import React, { Component } from 'react';
import '../Header/header.css';
import Logo from '../../Images/logo.png';
import C20 from '../Research/C20';
import C19 from '../Research/C19';
import C18 from '../Research/C18';
import C17 from '../Research/C17';
import C16 from '../Research/C16';
import C15 from '../Research/C15';
import C14 from '../Research/C14';
import C13 from '../Research/C13';
import C12 from '../Research/C12';
import C11 from '../Research/C11';
import DoctorsPic from '../../Images/multi-specialists.png';
import Footer from '../Footer/Footer';
class Research extends Component {
    render() {
        return (
           <React.Fragment>
               <div id="Wraper3">
                <div className="wrap">
                <h1><img src={Logo} style={{marginTop:"-350px",marginLeft:"-60px"}}/></h1>
                <p id="header-heading">Research</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p id="inf-heading">
                            Our private cardiologists have expertise in all branches 
                            of cardiovascular medicine and are 
                            committed to offering you a personalised service during your 
                            assessment and treatment.
                        </p>
                        <ul 
                            class="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                                <li class="nav-item">
                                    <a 
                                        class="nav-link active" id="pills-2020-tab" data-toggle="pill" 
                                           href="#pills-2020" role="tab" aria-controls="pills-2020" 
                                        aria-selected="true"  id="research-year-settings">
                                            2020
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2019-tab" data-toggle="pill" 
                                        href="#pills-2019" role="tab" aria-controls="pills-2019" 
                                        aria-selected="false" id="research-year-settings">
                                            2019
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2018-tab" data-toggle="pill" 
                                        href="#pills-2018" role="tab" aria-controls="pills-2018" 
                                        aria-selected="false" id="research-year-settings">
                                            2018
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2017-tab" data-toggle="pill" 
                                        href="#pills-2017" role="tab" aria-controls="pills-2017" 
                                        aria-selected="false" id="research-year-settings">
                                            2017
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2016-tab" data-toggle="pill" 
                                        href="#pills-2016" role="tab" aria-controls="pills-2016" 
                                        aria-selected="false" id="research-year-settings">
                                            2016
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2015-tab" data-toggle="pill" 
                                        href="#pills-2015" role="tab" aria-controls="pills-2015" 
                                        aria-selected="false" id="research-year-settings">
                                            2015
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2014-tab" data-toggle="pill" 
                                        href="#pills-2014" role="tab" aria-controls="pills-2014" 
                                        aria-selected="false" id="research-year-settings">
                                            2014
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2013-tab" data-toggle="pill" 
                                        href="#pills-2013" role="tab" aria-controls="pills-2013" 
                                        aria-selected="false" id="research-year-settings">
                                            2013
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2012-tab" data-toggle="pill" 
                                        href="#pills-2012" role="tab" aria-controls="pills-2012" 
                                        aria-selected="false" id="research-year-settings">
                                            2012
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a 
                                        class="nav-link" id="pills-2011-tab" data-toggle="pill" 
                                        href="#pills-2011" role="tab" aria-controls="pills-2011" 
                                        aria-selected="false" id="research-year-settings">
                                            2011
                                    </a>
                                </li>
                        </ul>
                    </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-9">
                            <div class="tab-content" id="pills-tabContent">
                                <div 
                                    class="tab-pane fade show active" id="pills-2020" role="tabpanel" 
                                    aria-labelledby="pills-2020-tab">
                                        <C20/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2019" role="tabpanel" 
                                    aria-labelledby="pills-2019-tab">
                                        <C19/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2018" role="tabpanel" 
                                    aria-labelledby="pills-2018-tab">
                                        <C18/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2017" role="tabpanel" 
                                    aria-labelledby="pills-2017-tab">
                                        <C17/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2016" role="tabpanel" 
                                    aria-labelledby="pills-2016-tab">
                                        <C16/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2015" role="tabpanel" 
                                    aria-labelledby="pills-2015-tab">
                                        <C15/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2014" role="tabpanel" 
                                    aria-labelledby="pills-2014-tab">
                                        <C14/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2013" role="tabpanel" 
                                    aria-labelledby="pills-2013-tab">
                                        <C13/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2012" role="tabpanel" 
                                    aria-labelledby="pills-2012-tab">
                                        <C12/>
                                </div>
                                <div 
                                    class="tab-pane fade" id="pills-2011" role="tabpanel" 
                                    aria-labelledby="pills-2011-tab">
                                        <C11/>
                                </div>
                            </div>
                        </div>
                    <div className="col-3">
                        <div id="card-wrap">
                            <p style={{color:"#152429",fontSize:"1.2rem"}}>
                                Meet our specialists
                            </p>
                            <p style={{color:"#c32427",fontSize:"1.1rem"}}>
                               Read more
                            </p>
                            <img src={DoctorsPic}/>
                        </div>
                    </div>
                </div>
                </div>
                <Footer/>
                
           </React.Fragment>
        )
    }
}
export default Research;
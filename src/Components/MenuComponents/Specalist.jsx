import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import Footer from '../Footer/Footer';
import '../Header/header.css';
import './style.css';
import D1 from '../../Images/headerImages/d1.png';
import D2 from '../../Images/headerImages/d2.png';
import D3 from '../../Images/headerImages/d3.png';
class Specalist extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Wraper2">
                <div className="wrap">
                <h1><img src={Logo} style={{marginTop:"-350px",marginLeft:"-60px"}}/></h1>
                <p id="header-heading">Specialists</p>
                </div>
                </div>
                <br></br>
                <br></br>
                <div className="container">
                <div className="row">
                    <div className="col-10">
                        <p id="inf-heading">
                            Our private cardiologists have expertise in all branches of cardiovascular medicine and are 
                            committed to offering you a personalised service during your assessment and treatment.
                        </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-4">
                    <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <p style={{fontSize:"1.4rem",fontWeight:"400"}}>
                                           Dr Iqbal Malik
                                            </p>
                                            <p style={{color:"#7f9096",fontSize:"0.9rem",fontWeight:"600"}}>
                                          MBBCH MA FRCP PhD
                                            </p>
                                            <p style={{fontSize:"1.2rem",fontWeight:"400"}}>
                                           <b>Speciality:</b>Cardiology and Gernal
                                            </p>

                                            <img src={D2} style={{float:"right"}}/>
                                        </div>
                                        <div class="flip-card-back">
                                        <p style={{marginTop:"20px"}}>
                                            The time  line for PFO closure in the UK. 
                                            Dr Malik gives an update: 2017: 
                                            The strongest class of evidence 
                                            (3 Randomised Trials) has been...</p>
                                            <button type="button" class="specialist-card-btn feel" id="specialist-card-btn">
                                                Read more
                                            
                                            </button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="col-4">
                    <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <p style={{fontSize:"1.4rem",fontWeight:"400"}}>
                                            Professor Jamil Mayet
                                            </p>
                                            <p style={{color:"#7f9096",fontSize:"0.9rem",fontWeight:"600"}}>
                                          MBBCH MA FRCP PhD
                                            </p>
                                            <p style={{fontSize:"1.2rem",fontWeight:"400"}}>
                                           <b>Speciality:</b>Cardiology and Gernal
                                            </p>

                                            <img src={D1} style={{float:"right"}}/>
                                        </div>
                                        <div class="flip-card-back">
                                        <p style={{marginTop:"20px"}}>
                                            The time  line for PFO closure in the UK. 
                                            Dr Malik gives an update: 2017: 
                                            The strongest class of evidence 
                                            (3 Randomised Trials) has been...</p>
                                            <button type="button" class="specialist-card-btn feel" id="specialist-card-btn">
                                                Read more
                                            
                                            </button>
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <div className="col-4">
                    <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <p style={{fontSize:"1.4rem",fontWeight:"400"}}>
                                            Professor Nicholas Peters
                                            </p>
                                            <p style={{color:"#7f9096",fontSize:"0.9rem",fontWeight:"600"}}>
                                          MBBCH MA FRCP PhD
                                            </p>
                                            <p style={{fontSize:"1.2rem",fontWeight:"400"}}>
                                           <b>Speciality:</b>Cardiology and Gernal
                                            </p>

                                            <img src={D3} style={{float:"right"}}/>
                                        </div>
                                        <div class="flip-card-back">
                                        <p style={{marginTop:"20px"}}>
                                            The time  line for PFO closure in the UK. 
                                            Dr Malik gives an update: 2017: 
                                            The strongest class of evidence 
                                            (3 Randomised Trials) has been...</p>
                                            <button type="button" class="specialist-card-btn feel" id="specialist-card-btn">
                                                Read more
                                            </button>
                                        </div>
                                    </div>
                                </div>

                    </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Specalist;
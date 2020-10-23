import React, { Component } from 'react';
import './style.css';
import Slider from 'react-slick';
import '../Card/card.css';
import wrap1 from '../../Images/appointment-phone.jpg';
import wrap2 from '../../Images/slide2.jpg';
import wrap3 from '../../Images/consultant3.jpg';
import wrap4 from '../../Images/info_page_background.jpg';
import wrap5 from '../../Images/consultant4.jpg';
import Logo from '../../Images/logo.png';
import DoctorsPic from '../../Images/multi-specialists.png';
import Card from '../Card/card';
import Footer from '../Footer/Footer';
 class Consultants extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={Logo} style={{marginTop:"50px"}}/>
                <p id="consultation-main-heading">Consultations</p>
                <br></br>
                <div id="consultation-main-wraper">
                    <Slider
                        speed ={500}
                        slidesToShow={3}
                        slidesToScroll={1}
                        infinite={false}
                        autoplay={false}
                    >
                       
                            
                            <div  id="Page2 "> 
                                <div className="consultant-wraper">
                                    <img src={wrap1} id="consultant-wraper-img"/>
                                </div>
                                <p id="consultation-sub-headings">Make an Appointment</p>

                            </div>
                            <div  id="Page2 "> 
                                <div className="consultant-wraper">
                                    <img src={wrap2} id="consultant-wraper-img"/>
                                </div>
                                <p id="consultation-sub-headings">Seeing the Counsultant</p>

                            </div>
                            <div  id="Page2 "> 
                                <div className="consultant-wraper">
                                    <img src={wrap3} id="consultant-wraper-img"/>
                                </div>
                                <p id="consultation-sub-headings">Diagnostic Testing</p>

                            </div>
                            <div  id="Page2 "> 
                                <div className="consultant-wraper">
                                    <img src={wrap4} id="consultant-wraper-img"/>
                                </div>
                                <p id="consultation-sub-headings">Special Tests</p>

                            </div>
                            <div  id="Page2 "> 
                                <div className="consultant-wraper">
                                    <img src={wrap5} id="consultant-wraper-img"/>
                                </div>
                                <p id="consultation-sub-headings">Personalized reports and Follow-up</p>
                            </div>
                    </Slider>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <p id="contact-highlits">
                                Insured Patients
                            </p>
                            <p id="contact-discription">
                            If you have private medical insurance, you should contact your insurance 
                            company prior to your appointment in order to obtain a pre-authorisation code. 
                            Please note that, although we will invoice the insurance company directly on 
                            your behalf, the ultimate responsibility for payment lies with you and you will 
                            therefore be responsible for any shortfall should your insurance company fail to cover 
                            the full amount.
                            </p>
                            <p id="contact-discription">
                            Please note that prior to all subsequent investigations and consultations you 
                            will need to contact your insurance company for confirmation of your entitlement 
                            to benefit. If you do not have private medical insurance you will be responsible 
                            for all costs incurred as a self-funding patient. Our price list is available on request 
                            and is on display in our waiting area.
                            </p>
                            <p id="contact-highlits">Self-Funding Patients</p>
                            <p id="contact-discription">
                                We request that self funding patients settle all accounts on the day of consultation.
                                We have credit card facilities. Patients who obtain letters of guarantee are requested 
                                to leave a copy with the PA. Quotations of estimated costs can be given on request.
                            </p>
                            <p id="contact-highlits">Medical-Legal Cases</p>
                            <p id="contact-discription">We do not undertake medical legal work.</p>
                            <p id="contact-highlits">Repeat prescriptions</p>
                            <p id="contact-discription">
                                We are happy to issue repeat prescriptions for our patients’ 
                                usual cardiac medication. However, dangerous errors can occur when requests are made by 
                                telephone and fax, so all requests must be made in writing.
                            </p>
                        </div>
                        <div className="col-4">
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
                <Card/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Consultants;
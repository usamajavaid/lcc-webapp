import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import Slider from 'react-slick';
import Usama from '../../Images/usama.jpeg';
import './style.css';
import DoctorsPic from '../../Images/multi-specialists.png';
import Footer from '../Footer/Footer';
import Card from '../Card/card';
 class Review extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Wraper6">
                    <div className="wrap">
                    <h1><img src={Logo} style={{marginTop:"-350px",marginLeft:"-60px"}}/></h1>
                    <p id="header-heading">Clinic Review</p>
                    </div>
                </div>
                <div className="container-fluid" style={{width:"100%"}}>
                    <div className="row">
                        <div className="col-8">
                        <Slider
                    arrows={false} 
                    speed ={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={4000}
                >
                <div id="Page"> 
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="usama" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star-half" ></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>      
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="usama" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}}></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}}></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="usama" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star" style={{color:" rgb(153, 152, 152)"}} ></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="usama" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star-half"></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                <div id="Page">
                <div className="container">
                {/* <div className="row">
                    <div className="col-12 w-100 "> */}
                        <div className="slider-wrapper">
                            <div className="thumb">
                                <img src={Usama} alt="" id="usama" />
                            </div>
                            <div class="single_testmonial text-center">              
                                <div class="testmonial_author"><br></br><br></br><br></br>
                                    <h4  
                                        style={{fontFamily:"normal",color:"#BB6140",marginTop:"40px"}}>
                                             Personal Name , Designation
                                    </h4>
                                    <div class="stars"style={{color:" #db5d15"}}  >
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>&nbsp;&nbsp;
                                        <i class="fa fa-star"></i>
                                    </div>
                                </div>
                                <br></br><br></br>
                                <blockquote>
                                    <p style={{fontFamily:"normal"}}>
                                        <b> &nbsp;&nbsp;&nbsp;
                                            These are our customer list, they all are satisfied 
                                            by our Service and thay also want to continue with us.
                                            And they also gives
                                            us high reating as can see below the Line
                                        </b>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    {/* </div>
                    </div> */}
                    </div>
                </div>
                </Slider>
                        </div>
                        <div className="col-4">
                            <div id="card-wrap" style={{marginTop:"150px"}}>
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
                <br></br>
                <br></br>
                <br></br>
                <Card/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Review;
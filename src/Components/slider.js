import React, { Component } from 'react'
import Slider from 'react-slick';
import './slider.css';
import Meting1 from '../Images/slide1.jpg';
import Meting2 from '../Images/slide2.jpg';
import Meting3 from '../Images/slide3.jpg';
import Down from '../Images/down.png';
import Logo from '../Images/logo.png';
 class slider extends Component {
    render() {
        return (
            <div id="Wraper">
                <Slider
                    arrows={false} 
                    speed ={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                >
                <div id="Page"> 
                    <img class="d-block w-100" src={Meting1} alt="First slide"/>
                    <p id="Heading">A World class private cardiology Clanic based in Harley Street</p>  
                </div>
                <div id="Page"> 
                    <img class="d-block w-100" src={Meting2} alt="Second slide"/> 
                    <p id="Heading">Private cardiologists with experties in all aspects of cardiovascular medicine</p>  
                </div>
                <div id="Page"> 
                    <img class="d-block w-100" src={Meting3} alt="Third slide" id="slider-img"/> 
                    <p id="Heading">A personalised service throught your assessment and treatment process</p> 
                </div>
                </Slider>
                    <h1><img src={Logo} id="main-logo"/></h1>
                <button type="button" class="btn-slider fil" id="learn-about">Learn more about lcc <img src={Down} style={{marginLeft:"10px", width:"20px",height:"20px"}}/></button>
            </div>
        )
    }
}
export default slider;
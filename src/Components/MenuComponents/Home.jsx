import React, { Component } from 'react';
import Slider from '../slider';
import VideoCard from '../videocard';
import CenterSlider from '../centerSlider';
import Card from '../Card/card';
import Footer from '../Footer/Footer';
class Home extends Component {
    render() {
        return (
            <React.Fragment>
                 <div style={{overflowX:"hidden"}}>
                <Slider/>
                <VideoCard/>
                <CenterSlider/>
                <Card/> 
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home;
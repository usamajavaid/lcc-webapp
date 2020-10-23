import React, { Component } from 'react';
import Logo from '../../Images/logo.png';
import '../Header/header.css';
import video from '../../Images/video.mp4';
import VideoPlayer from 'react-video-js-player';
import Poster from '../../Images/headerImage4.jpg';
import Footer from '../Footer/Footer';


        const  videoSrc = video;
        const  poster = Poster;
class LiveCases extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="Wraper4">
                <div className="wrap">
                <h1><img src={Logo} style={{marginTop:"-350px",marginLeft:"-60px"}}/></h1>
                <p id="header-heading">Live Cases</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <p id="inf-heading">
                            As part of educational commitments our consultants are regularly involved 
                            in live interventional cases. These are most often recorded as part of specialist 
                            international conferences where an interactive element between the conference 
                            delegates and operator is involved. For this reason the cases are often unique 
                            and interesting.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    
                </div>
                    <div className="col-6">
                    <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    
                </div>
                    <div className="col-6">
                    <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    
                </div>
                    <div className="col-6">
                    <p id="contact-highlits" style={{marginLeft:"100px",fontSize:"1.7rem"}}>
                            A case of Coronary angioplasty and stenting</p>
                            <VideoPlayer
                            src={videoSrc}
                            poster={poster}
                            width= "500"
                            height="250"
                            playbackRates={[0.5,1,3.85,16]}
                            />
                    </div>
                </div>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default LiveCases;
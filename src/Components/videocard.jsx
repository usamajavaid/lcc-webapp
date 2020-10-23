import React, { Component } from 'react';
import './videocard.css';
import video from '../Images/video.mp4';
import VideoPlayer from 'react-video-js-player';
import Poster from '../Images/poster1.png';
        const  videoSrc = video;
        const  poster = Poster;
class videocard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                <p id="vid-txt" >Private Cardiologist Consultants</p> 
                <VideoPlayer
                    src={videoSrc}
                    poster={poster}
                    width= "1100"
                    height="419"
                    playbackRates={[0.5,1,3.85,16]}
                    
                />
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-4 col-md-4 col-xl-4">
                            <h1 id="main-txt">
                            Private<br></br>cardiologist
                            </h1>
                            <p id="para">
                            We are a private cardiology clinic offering expert cardiovascular assessment for a diverse range of symptoms.
                            </p>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                            <h1 id="main-txt">
                            World class<br></br>services
                            </h1>
                            <p id="para">
                            Our private cardiologists have a wealth of expertise also in all branches of cardiovascular medicine.
                            </p>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                            <h1 id="main-txt">
                            Professional specialists
                            </h1>
                            <p id="para">
                            We are committed to offering you a personalised and good service during your assessment and treatment.
                            </p>
                        </div>
                        <div className="row">
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <button type="button" class="btn fill" id="learn-btn">The Consultation Process</button>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <button type="button" class="btn fill" id="learn-btn" style={{marginLeft:"120px"}}>How we can Help</button>
                        </div>
                        <div className="col-xs-4 col-md-4 col-xl-4">
                        <button type="button" class="btn fill" id="learn-btn"   style={{marginLeft:"150px"}}>Our team of experts</button>
                        </div>
                        </div>
                    </div>
                </div>
                <br>
                </br>
                </div>
            </React.Fragment>   
        )
    }
}

export default videocard;


import React, { Component } from 'react';
import Slider from 'react-slick';
import './centerSlider.css';
 class CenterSlider extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="Wraper1">
                <div className="wrap">
                <h3 id="pt-txt">
                WHAT OUR PATIENTS SAY
                </h3>
                <Slider
                    arrows={false} 
                    speed ={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={true}
                    autoplay={true}
                    autoplaySpeed={3000}
                >
                <div className="container" id="Page1"> 
                Prof Peters - Thanks to your ablations for my AF, your team and HD technology, 
                I qualified for above in Perth Australia in September venue of the worlds cycling championships. 
                Last Sunday in UCI UK qualifier I completed the 84 miles at an average of 19.5 mph with legs to spare. 
                Not bad at 71.
                </div>
                <div className="container" id="Page1"> 
                Dr Iqbal Malik, I would like to thank you personally for the way in which you, 
                and your well drilled team, treated me last Friday. The clinical side of the 
                procedure was excellent but, having researched you, I would have expected no less. 
                However, the manner in which it was delivered was outstanding and I cannot 
                commend you highly enough. It has been a great pleasure making your acquaintance.
                </div>
                <div className="container" id="Page1"> 
                "May I thank both of you for the timely, professional and comprehensive tests 
                you have undertaken. I feel greatly more confident in dealing with my situation 
                as a result. Once again my thanks. 66 Harley Street is an impressive and effective operation."
                </div>
                <div className="container" id="Page1">
                "What a wonderful operation. I am so grateful to Dr Malik for helping me 
                through this difficult time with a brilliant result."
                </div>
                <div className="container" id="Page1">
                "My thanks to you and to Prof Mayet for your excellent work on my behalf this last week, and 
                for getting the results to me so quickly. We were really impressed with your whole service!"
                </div>
                </Slider>
                </div>
            </div>
            </React.Fragment>
           
        )
    }
}
export default CenterSlider;
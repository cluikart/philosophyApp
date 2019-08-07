import React from "react";
import ReactDom from "react-dom";
import createReactClass from "create-react-class";
import Car from "nuka-carousel";
import pose from "react-pose";


import ari from "../Images/aristotle.jpg";
import hb from "../Images/Hobbes.jpg";
import kk from "../Images/kierkegaard.jpg";
import lk from "../Images/Locke.jpg";
import nz from "../Images/nietzsche.jpg";
//import ari from "../Images/.jpg";



var imgUrls = ["../Images/aristotle.jpg", "../Images/Hobbes.jpg", "../Images/kierkegaard.jpg", "../Images/Locke.jpg", "../Images/nietzsche.jpg"];

const OpacityCard = pose.div({
  visible: {opacity: 1},
  hidden: {opacity: 0}
});

const show = {
  display: 'inline-block'
};
const hide= {
  display: 'none'
};


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.setPopup = this.setPopup.bind(this);
        this.state = {
            slideIndex: 0,
            popup: false
        };
    }

    setPopup() {
      this.setState({popup: true});
      console.log("popup is set");
    }

    render() {
        
        return(
          <div>
            <OpacityCard style={this.state.popup ? show : hide} className="carousel-popup-opacityCard" pose={this.state.popup ? 'visible' : 'hidden'}>
                  <div className="carousel-popup"></div>
                </OpacityCard> 
            <div className="section carousel">
                
                 
            
                <Car 
                    slidesToShow={1}
                    cellAlign= "left"
                    width="30vw"
                    height="400px"
                    // framePadding="1vw"
                    wrapAround={true}
                    autoplay={true}
                    pauseOnHover={true}
                    swiping={true}
                    
                    slideIndex={this.state.slideIndex}
                    afterSlide={slideIndex => this.setState({ slideIndex })}
                    
                    renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} className="nextSlideBtn">
                          <div className="fa fa-arrow-left" />
                        </button>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <button onClick={nextSlide} className="nextSlideBtn">
                          <div className="fa fa-arrow-right"/>
                        </button>
                      )}
                    >

                    <div onClick={this.setPopup}>
                    <img src={ari} alt="description of image" className="slide"/>
                    </div>
                    <div onClick={this.setPopup}>
                    <img src={lk} alt="description of image" className="slide"/>
                    </div>
                    <div onClick={this.setPopup}>
                    <img src={nz} alt="description of image" className="slide"/>
                    </div>
                    <div onClick={this.setPopup}>
                    <img src={kk} alt="description of image" className="slide"/>
                    </div >
                    <div onClick={this.setPopup}>
                    <img src={hb} alt="description of image" className="slide"/>
                    </div>
                </Car>
                
                <Car 
                    slidesToShow={1}
                    cellAlign= "center"
                    width="70vw"
                    height="400px"
                    // easing="quadInOut"
                    //framePadding="vw"
                    wrapAround={true}
                    vertical={true}
                    autoplay={true}
                    pauseOnHover={true}
                    swiping={true}
                    initialSlideHeight={300}
                    // decorators={decorators}
                    slideIndex={this.state.slideIndex}
                    afterSlide={slideIndex => this.setState({ slideIndex })}

                    renderBottomCenterControls={({ previousSlide }) => (
                        <button onClick={previousSlide} className="nextSlideBtn">
                          <div className="fa fa-arrow-down" />
                          {/* Button */}
                        </button>
                      )}
                      renderTopCenterControls={({ nextSlide }) => (
                        <button onClick={nextSlide} className="nextSlideBtn">
                          <div className="fa fa-arrow-up"/>
                        </button>
                      )}
                      renderCenterLeftControls={({ previousSlide }) => (
                        null
                      )}
                      renderCenterRightControls={({ previousSlide }) => (
                        null
                      )}
                    >


                    <div className="slider-text-container">
                        <h1 className="slider-text" id="aristotle">Aristotle</h1>
                    </div>  
                    <div className="slider-text-container" id="locke">
                        <h1 className="slider-text" >Locke</h1>
                    </div>  
                    <div className="slider-text-container" id="nietzsche">
                        <h1 className="slider-text" >Nietzsche</h1>
                    </div> 
                    <div className="slider-text-container" id="kierkegaard">
                        <h1 className="slider-text" >kierkegaard</h1>
                    </div> 
                    <div className="slider-text-container" id="hobbes">
                        <h1 className="slider-text" >Hobbes</h1>
                    </div> 
                
                </Car>  
                

                {/* <Slider {...settings}>
                    <img src={imgUrls[0]}/>
                </Slider>    */}
            </div>  
            </div>  
        )
    }
}

export default Carousel;
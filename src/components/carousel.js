import React from "react";
import ReactDom from "react-dom";
import createReactClass from "create-react-class";
import Car from "nuka-carousel";

import Slider from "react-slick";

import ari from "../Images/aristotle.jpg";
import hb from "../Images/Hobbes.jpg";
import kk from "../Images/kierkegaard.jpg";
import lk from "../Images/Locke.jpg";
import nz from "../Images/nietzsche.jpg";
//import ari from "../Images/.jpg";


const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
  }

var imgUrls = ["../Images/aristotle.jpg", "../Images/Hobbes.jpg", "../Images/kierkegaard.jpg", "../Images/Locke.jpg", "../Images/nietzsche.jpg"];

var decorators = [{
    component: createReactClass({
      render() {
        return (
          <button
            onClick={this.props.previousSlide}>
            Previous Slide
          </button>
        )
      }
    }),
    position: 'BottomCenter',
    style: {
      padding: 20
    }
  },
  {
    component: createReactClass({
      render() {
        return (
          <button
            onClick={this.props.nextSlide}>
            Next Slide
          </button>
        )
      }
    }),
    position: 'TopCenter',
    style: {
      padding: 20
    }
  }
  ];


class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    render() {
        
        return(
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

                    <div>
                    <img src={ari} alt="description of image" className="slide"/>
                    </div>
                    <div>
                    <img src={lk} alt="description of image" className="slide"/>
                    </div>
                    <div>
                    <img src={nz} alt="description of image" className="slide"/>
                    </div>
                    <div>
                    <img src={kk} alt="description of image" className="slide"/>
                    </div>
                    <div>
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
                    initialSlideHeight="300"
                    decorators={decorators}
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
        )
    }
}

export default Carousel;
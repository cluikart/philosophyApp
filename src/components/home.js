import React from 'react';
import pose from "react-pose";

import Title from "./Title";
import Carousel from "./carousel";
import Books from "./books";
import People from "./people"
import Login from "./login";


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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.setPopup = this.setPopup.bind(this);
        this.unsetPopup = this.unsetPopup.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
        this.state = {
            popup: false,
        }
    }

    setPopup = (e) => {
        this.setState({popup: true });
        console.log("setting Popup");
        
      }
      unsetPopup = (e) => {
        this.setState({popup: false});
        
      }
      handleChildClick(e) {
          e.stopPropagation();
      }

    render(){
        return(

            <div className="home">
                <OpacityCard style={this.state.popup ? show : hide} 
                        className="Login-popup-opacityCard" 
                        pose={this.state.popup ? 'visible' : 'hidden'} 
                        onClick={this.unsetPopup}
                        >
                  <div className="Login-popup" onClick={this.handleChildClick}>
                    <div className="Login-popup-title-container">
                      <h2 className="Login-popup-title">Login</h2>
                      </div>
                      <div className="Login-popup-text-container">
                        <p className="Login-popup-text">Username or email</p>
                        <input className="Login-input"></input>
                        <p className="Login-popup-text">Password</p>
                        <input className="Login-input"></input>
                        <button className="Login-Btn">Sign In</button>
                      </div>
                  </div>
                </OpacityCard> 

                <Title callbackFromParent={this.setPopup}/>
                <Carousel callbackFromParent={this.setPopup}/>
                <div className="section">
                    <Books/>
                    <People/>
                    <Login/>
                </div>
             </div>   
    )
};
        
}

export default Home;

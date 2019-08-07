import React from "react";
import pose from "react-pose";

import book from "../Images/open-book.png";
import people from "../Images/people.png";
import account from "../Images/account.png"

// Icon made by Freepik from www.flaticon.com

const Card = pose.div({
    visible: {
        opacity: 1,
        x: 0,
    },
    hidden: {
        opacity: 0,
        x: -200,
    }
});

const OpacityCard = pose.div({
    visible: {opacity: 1},
    hidden: {opacity: 0}
});

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.setGo = this.setGo.bind(this);
        this.unsetGo = this.unsetGo.bind(this);
        this.state = {
            isGo: false,
        };
    }

    setGo() {
        this.setState({isGo: true});
    }

    unsetGo() {
        this.setState({isGo: false});
        
    }


    render() {
        return (
            <div className="title-wrapper">
                <Card className="card" id="card-1" pose={this.state.isGo ? 'visible' : 'hidden'}>
                    <img src={book} className="card-icon"/>
                </Card>    
                <Card className="card" id="card-2" pose={this.state.isGo ? 'visible' : 'hidden'}>
                    <img src={people} className="card-icon"/>
                </Card>  
                <Card className="card" id="card-3" pose={this.state.isGo ? 'visible' : 'hidden'}>
                    <img src={account} className="card-icon"/>
                </Card>  
                <OpacityCard pose={this.state.isGo ? 'hidden' : 'visible'}>
                <p className="title-text">Explore A World of Ideas</p>
                <button className="pageBtn" id="GOBtn" onClick={this.setGo}>GO</button>
                </OpacityCard>
                <div className="section title" onClick={this.unsetGo}>
                    <div className="title-image" ></div>
                </div> 
            </div>  
        )
    }
}

export default Title;
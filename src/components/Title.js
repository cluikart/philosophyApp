import React from "react";

class Title extends React.Component {
    render() {
        return (
            <div className="title-wrapper">
                <p className="title-text">Explore A World of Ideas</p>
                <button className="pageBtn" id="GOBtn">GO</button>
                <div className="section title">
                    <div className="title-image"></div>
                </div> 
            </div>  
        )
    }
}

export default Title;
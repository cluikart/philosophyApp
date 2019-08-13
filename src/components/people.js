import React from "react";
import people from "../Images/people.png";

class People extends React.Component {

    render() {
        return(
            <div className = "section people">
                <img src={people} className="section-icon"/>
            </div>
        );
    }
}

export default People;
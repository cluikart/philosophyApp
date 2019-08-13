import React from "react";
import book from "../Images/open-book.png";

class Books extends React.Component {

    render() {
        return(
            <div className = "section books">
                <img src={book} className="section-icon"/>
            </div>
        );
    }
}

export default Books;
import React from 'react';
import Title from "./Title"
import Carousel from "./carousel";

class Home extends React.Component {

    render(){
        return(
            <div className="home">
                <Title/>
                <Carousel/>
             </div>   
    )
};
        
}

export default Home;

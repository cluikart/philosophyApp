import React from 'react';
import pose from "react-pose";

import Title from "./Title";
import Carousel from "./carousel";
import Books from "./books";
import People from "./people"
import Login from "./login";


let personMap = new Map();

let descriptions = ["Aristotle (Greek: Ἀριστοτέλης Aristotélēs, pronounced [aristotélɛːs]; 384–322 BC)[A] was a Greek philosopher during the Classical period in Ancient Greece, the founder of the Lyceum and the Peripatetic school of philosophy and Aristotelian tradition. Along with his teacher Plato, he has been called the Father of Western Philosophy. His writings cover many subjects – including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theatre, music, rhetoric, psychology, linguistics, economics, politics and government. Aristotle provided a complex synthesis of the various philosophies existing prior to him, and it was above all from his teachings that the West inherited its intellectual lexicon, as well as problems and methods of inquiry. As a result, his philosophy has exerted a unique influence on almost every form of knowledge in the West and it continues to be a subject of contemporary philosophical discussion.",
"The English philosopher Thomas Hobbes (1588-1679) is best known for his political thought, and deservedly so. His vision of the world is strikingly original and still relevant to contemporary politics. His main concern is the problem of social and political order: how human beings can live together in peace and avoid the danger and fear of civil conflict. He poses stark alternatives: we should give our obedience to an unaccountable sovereign (a person or group empowered to decide every social and political issue). Otherwise what awaits us is a state of nature that closely resembles civil war – a situation of universal insecurity, where all have reason to fear violent death and where rewarding human cooperation is all but impossible.",

"Søren Aabye Kierkegaard (b. 1813, d. 1855) was a profound and prolific writer in the Danish “golden age” of intellectual and artistic activity. His work crosses the boundaries of philosophy, theology, psychology, literary criticism, devotional literature and fiction. Kierkegaard brought this potent mixture of discourses to bear as social critique and for the purpose of renewing Christian faith within Christendom. At the same time he made many original conceptual contributions to each of the disciplines he employed. He is known as the “father of existentialism”, but at least as important are his critiques of Hegel and of the German romantics, his contributions to the development of modernism, his stylistic experimentation, his vivid re-presentation of biblical figures to bring out their modern relevance, his invention of key concepts which have been explored and redeployed by thinkers ever since, his interventions in contemporary Danish church politics, and his fervent attempts to analyse and revitalise Christian faith.",

"John Locke, (born August 29, 1632, Wrington, Somerset, England—died October 28, 1704, High Laver, Essex), English philosopher whose works lie at the foundation of modern philosophical empiricism and political liberalism. He was an inspirer of both the European Enlightenment and the Constitution of the United States. His philosophical thinking was close to that of the founders of modern science, especially Robert Boyle, Sir Isaac Newton, and other members of the Royal Society. His political thought was grounded in the notion of a social contract between citizens and in the importance of toleration, especially in matters of religion. Much of what he advocated in the realm of politics was accepted in England after the Glorious Revolution of 1688–89 and in the United States after the country’s declaration of independence in 1776.",

"Friedrich Wilhelm Nietzsche (15 October 1844 – 25 August 1900) was a German philosopher, cultural critic, composer, poet, philologist, and Latin and Greek scholar whose work has exerted a profound influence on modern intellectual history. Nietzsche's body of work touched a wide range of topics, including art, philology, history, religion, tragedy, culture, and science. His writing spans philosophical polemics, poetry, cultural criticism, and fiction while displaying a fondness for aphorism and irony. His early inspiration was drawn from figures such as Arthur Schopenhauer, Richard Wagner, and Johann Wolfgang von Goethe. Prominent elements of his philosophy include his radical critique of truth in favor of perspectivism; his genealogical critique of religion and Christian morality and his related theory of master–slave morality; his aesthetic affirmation of existence in response to the 'death of God' and the profound crisis of nihilism;[14] his notion of the Apollonian and Dionysian; and his characterization of the human subject as the expression of competing wills, collectively understood as the will to power.[24] He also developed influential concepts such as the Übermensch and the doctrine of eternal return.[25][26] In his later work, he became increasingly preoccupied with the creative powers of the individual to overcome social, cultural and moral contexts in pursuit of new values and aesthetic health."];

var imgUrls = ["Aristotle", "Hobbes", "Kierkegaard", "Locke", "Nietzsche"];


for(let i = 0; i < imgUrls.length; i++){
  personMap.set(imgUrls[i],descriptions[i]);
};

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
        this.carouselSetPopup = this.carouselSetPopup.bind(this);
        this.carouselUnsetPopup = this.carouselUnsetPopup.bind(this);
        this.handleChildClick = this.handleChildClick.bind(this);
        this.state = {
            popup: false,
            Carpopup: false,
            currPers: "",
        }
    }

    setPopup = (e) => {
        this.setState({popup: true });
        console.log("setting Popup");
        
      }
      unsetPopup = (e) => {
        this.setState({popup: false});
        
      }
      carouselSetPopup = (person) => {
        this.setState({Carpopup: true, currPers: person });
        
        
      }

      carouselUnsetPopup = (e) => {
        this.setState({Carpopup: false });
        
        
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

                <OpacityCard style={this.state.Carpopup ? show : hide} 
                        className="carousel-popup-opacityCard" 
                        pose={this.state.Carpopup ? 'visible' : 'hidden'} 
                        onClick={this.carouselUnsetPopup}>
                  <div className="carousel-popup" onClick={this.handleChildClick}>
                    <div className="carousel-popup-title-container">
                      <h2 className="carousel-popup-title">{this.state.currPers}</h2>
                      </div>
                      <div className="carousel-popup-text-container">
                        <p className="carousel-popup-text">{personMap.get(this.state.currPers)}</p>
                      </div>
                  </div>
                </OpacityCard> 

                <Title callbackFromParent={this.setPopup}/>
                <Carousel setCall={this.carouselSetPopup}/>
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

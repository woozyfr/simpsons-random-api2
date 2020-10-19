import React from 'react';
import axios from 'axios';

class RandomCitations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      citation: "",
      photo: "",
      personnage: ""
    };
    this.getRandCitation = this.getRandCitation.bind(this);
  }

 
getRandCitation() {
  axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      this.setState({
        citation: res.data[0].quote,
        photo: res.data[0].image,
        personnage: res.data[0].character
      });
  });
} 
  componentDidMount() {
    this.getRandCitation();
  }

render(){
 return (
   <div>
     <button id="btnCit" onClick={this.getRandCitation}>Random Citation</button>
     <h1>{this.state.personnage}</h1>
     <div>{this.state.citation}</div>
     <img src={this.state.photo}/>
     
    </div>
  );
}
 
}


export default RandomCitations;
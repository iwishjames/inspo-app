import React, {Component} from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Posters from './components/Posters';
import './App.css';

const CHAVEE = "13589293-b0b688db565ac5817934945ed";

class App extends Component {
  state = {
    images: [],
    quote: "",
    author: "",
    font: "",
    color: ""
  }

getPosterData = async (e) => {
  e.preventDefault();
  console.log('che', CHAVEE);
  const image = e.target.elements.image.value;
  const quote = e.target.elements.quote.value;
  const author = e.target.elements.author.value;
  const font = e.target.elements.font.value;
  const color = e.target.elements.color.value;
  const api_call = await fetch(`https://pixabay.com/api/?key=${CHAVEE}&q=${image}&image_type=photo&orientation=vertical&safesearch=true`);

  const data = await api_call.json();
  this.setState(
    { images: data.hits,
      quote: quote,
      author: author,
      font: font,
      color: color
    }
  );
  console.log(this.state.images);
}


  render() {
    return(
      <div className="App">
        <Titles />
        <Form getPosterData = {this.getPosterData}/>
        <Posters
          images = {this.state.images}
          quote = {this.state.quote}
          author = {this.state.author}
          font = {this.state.font}
          color = {this.state.color}
        />
      </div>
    );
  }
}

export default App;

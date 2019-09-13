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
    imageQuery: "",
  }

getPosterData = async (e) => {
  e.preventDefault();
  const imageQuery = e.target.elements.imageQuery.value;
  const quote = e.target.elements.quote.value;
  const author = e.target.elements.author.value;
  const api_call = await fetch(`https://pixabay.com/api/?key=${CHAVEE}&q=${imageQuery}&image_type=photo&orientation=vertical&safesearch=true&per_page=30`);

  const data = await api_call.json();
  this.setState(
    { images: data.hits,
      quote: quote,
      author: author,
      imageQuery: imageQuery,
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
          imageQuery = {this.state.imageQuery}
        />
      </div>
    );
  }
}

export default App;

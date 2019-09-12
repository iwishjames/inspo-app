import React, {Component} from 'react';

class Titles extends Component {
  render() {
    return (
      <div style={{height: 110}}>
        <h1 className="inspo__title">INSPO<span style={{color: "#FC6E20"}}>.</span></h1>
        <p className="inspo__line">Create inspirational posters with high quality images from <a className="pixabay2" href="https://pixabay.com/" target="_blank"><span className="pixabay">Pixabay</span></a>!</p>
      </div>
    );
  }
}

export default Titles;

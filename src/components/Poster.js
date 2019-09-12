import React, {Component} from 'react';
import Titles from './Titles';
import { Link } from "react-router-dom";
import htmlToImage from 'html-to-image';

class Poster extends Component {
  state = {
    posterImage: this.props.location.state.imageURL,
    posterQuote: this.props.location.state.quote,
    posterAuthor: this.props.location.state.author,
    posterColor: "",
    posterFont: "",
    posterFontSize: "",
  }

  componentDidMount () {
    const posterImage = this.props.location.state.imageURL;
    const posterQuote = this.props.location.state.quote;
    const posterAuthor = this.props.location.state.author;
    this.setState({
      posterImage: posterImage,
      posterQuote: posterQuote,
      posterAuthor: posterAuthor,
    });
  }

  handleChangeQuote = (e) => {
    this.setState({
      posterQuote: e.target.value,
    });
  }

  handleChangeAuthor = (e) => {
    this.setState({
      posterAuthor: e.target.value,
    });
  }

  handleChangeColor = (e) => {
    this.setState({
      posterColor: e.target.value,
    });
  }

  handleChangeFont = (e) => {
    this.setState({
      posterFont: e.target.value,
    });
  }

  handleChangeFontSize = (e) => {
    this.setState({
      posterFontSize: e.target.value,
    });
  }


  handleClick = () => {
    htmlToImage.toJpeg(document.getElementById('capture'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'myinspo.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  render() {
    return(
      <div style={{maxWidth: "390px", margin: "0 auto"}}>
        <Titles />

        <div id="capture" className="ind_Poster_card card bg-dark text-white rounded-0">
          <img className="card-img" src={this.state.posterImage}/>
          <div className="card-img-overlay">
            <h5 style={{color: this.state.posterColor, fontFamily: this.state.posterFont, fontSize: `${this.state.posterFontSize}px`}} className="poster_quote card-title">{this.state.posterQuote}</h5>
            {this.state.posterAuthor && <p className="poster_author card-text font-weight-light font-italic align-middle">- {this.state.posterAuthor}</p>}
          </div>
        </div>

        <div>
          <input type="text" placeholder="Quote" value={this.state.posterQuote} onChange={this.handleChangeQuote} />
          <input type="text" placeholder="Author" value={this.state.posterAuthor} onChange={this.handleChangeAuthor} />
          <input type="color" onChange={this.handleChangeColor}/>
          <input type="number" min="20" max="100" placeholder="Font Size" onChange={this.handleChangeFontSize}/>

          <input type="checkbox" name="Bold" value="Bold" onChange={this.handleToggleBold}/>

          <select onChange={this.handleChangeFont}>
            <option value="Helvetica Neue">Helvetica Neue</option>
            <option value="Sans-Serif">Sans-serif</option>
            <option value="Monospace">Monospace</option>
            <option value="Cursive">Cursive</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Roboto">Roboto</option>
          </select>

          <button onClick={this.handleClick}>Download Poster</button>
          <Link to="/">
          <button >Go Back</button>
          </Link>
        </div>
      </div>
    );
  }
};
export default Poster;

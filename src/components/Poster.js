import React, {Component} from 'react';
import { Link } from "react-router-dom";
import htmlToImage from 'html-to-image';

class Poster extends Component {
  state = {
    posterImage: this.props.location.state.imageURL,
    posterQuote: this.props.location.state.quote,
    posterAuthor: this.props.location.state.author,
    posterColor: "",
    posterFont: "50px",
    posterFontSize: "",
  }

  // componentDidMount () {
  //   const posterImage = this.props.location.state.imageURL;
  //   const posterQuote = this.props.location.state.quote;
  //   const posterAuthor = this.props.location.state.author;
  //   this.setState({
  //     posterImage: posterImage,
  //     posterQuote: posterQuote,
  //     posterAuthor: posterAuthor,
  //   });
  // }

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
      <div style={{maxWidth: "1000px"}}>

        <div className="editor_Canvas">
          <div id="capture" className="ind_Poster_card card bg-dark text-white rounded-0">
            <img style={{filter: "blur(3px)"}} className="card-img" src={this.state.posterImage}/>
            <div className="card-img-overlay">
              <h5 style={{color: this.state.posterColor, fontFamily: this.state.posterFont, fontSize: `${this.state.posterFontSize}px`}} className="poster_quote card-title">{this.state.posterQuote}</h5>
              {this.state.posterAuthor && <p className="poster_author card-text font-weight-light font-italic align-middle">- {this.state.posterAuthor}</p>}
            </div>
          </div>
        </div>

        <div className="editor_Toolbox">
          <Link to="/">
          <button style={{marginTop : 8}} className="form__button_white" >Go Back</button>
          </Link>
          <div></div>
          <div class="dropdown-divider"></div>
            <div style={{marginLeft: 8, color: "silver"}}>Quote:</div>
            <input style={{marginTop : 3}} className="form__input_black" type="textarea" placeholder="Quote" value={this.state.posterQuote} onChange={this.handleChangeQuote} />
            <input className="form__input_number " type="number" placeholder="40" onChange={this.handleChangeFontSize}/>
            <input style={{marginTop : 8, marginLeft: 8, width: 40}} type="color" onChange={this.handleChangeColor}/>
            <select className="font_picker" onChange={this.handleChangeFont}>
              <option value="Helvetica Neue">Helvetica Neue</option>
              <option value="Sans-Serif">Sans-serif</option>
              <option value="Monospace">Monospace</option>
              <option value="Cursive">Cursive</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Roboto">Roboto</option>
            </select>
          <div class="dropdown-divider"></div>
            <div style={{marginLeft: 8, color: "silver"}}>Author:</div>
            <input style={{marginTop : 3}} className="form__input_black" type="text" placeholder="Author" value={this.state.posterAuthor} onChange={this.handleChangeAuthor} />
            <input className="form__input_number " type="number" placeholder="18" onChange={this.handleChangeFontSize}/>
            <input style={{marginTop : 8, marginLeft: 8, width: 40}} type="color" onChange={this.handleChangeColor}/>
            <select className="font_picker" onChange={this.handleChangeFont}>
              <option value="Helvetica Neue">Helvetica Neue</option>
              <option value="Sans-Serif">Sans-serif</option>
              <option value="Monospace">Monospace</option>
              <option value="Cursive">Cursive</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Roboto">Roboto</option>
            </select>
          <div class="dropdown-divider"></div>
            <div style={{marginLeft: 8, color: "silver"}}>Image Blur:</div>
            <input style={{marginLeft: 8}} type="range" min="0px" max="3px" onChange={this.handleBlur}/>
          <div class="dropdown-divider"></div>
            <button className="form__button" onClick={this.handleClick}>Download Poster</button>
        </div>
      </div>
    );
  }
};
export default Poster;

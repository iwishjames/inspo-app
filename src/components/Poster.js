import React, {Component} from 'react';

const CHAVEE = process.env.REACT_APP_CHAVEE;

class Poster extends Component {
  state = {
    posterImage: this.props.location.state.image,
    posterQuote: this.props.location.state.quote,
    posterAuthor: this.props.location.state.author,
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

  render() {
    return(
      <div style={{maxWidth: "390px", margin: "0 auto"}}>
        <div className="ind_Poster_card card bg-dark text-white rounded-0">
          <img className="card-img" src={this.state.posterImage}/>
          <div className="card-img-overlay">
            <h5 className="poster_quote card-title">{this.state.posterQuote}</h5>
            {this.state.posterAuthor && <p className="poster_author card-text font-weight-light font-italic align-middle">- {this.state.posterAuthor}</p>}
          </div>
        </div>

        <div>
          <input type="text" placeholder="Quote" value={this.state.posterQuote} onChange={this.handleChangeQuote} />
          <input type="text" placeholder="Author" value={this.state.posterAuthor} onChange={this.handleChangeAuthor} />
          <input type="color" />
        </div>
      </div>
    );
  }
};
export default Poster;

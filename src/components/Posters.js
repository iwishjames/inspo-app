import React from 'react';
import { Link } from "react-router-dom";

const Posters = props => (
  <div style={{maxWidth: "1000px", margin: "0 auto"}}>
  { props.images.map((image) => {
    return (
      <Link to={{
        pathname: `/poster/${image.id}`,
          state: {
            image: image.largeImageURL,
            quote: props.quote,
            author: props.author
          }
      }}>
      <div key={image.id} className="poster_card card bg-dark text-white rounded-0">
        <img className="poster_cardImage card-img" src={image.largeImageURL} alt={ image.tags}/>
        <div className="card-img-overlay">
          <h5 style={{color: props.color, fontFamily: props.font }} className="poster_quote card-title">{props.quote}</h5>
          {props.author && <p className="poster_author card-text font-weight-light font-italic align-middle">- {props.author}</p>}
        </div>
      </div>
      </Link>
    );
  }) }
  </div>
);

export default Posters;

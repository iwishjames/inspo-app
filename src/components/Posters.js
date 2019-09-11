import React from 'react';

const Posters = props => (
  <div style={{maxWidth: "1000px", margin: "0 auto"}}>
  { props.images.map((image) => {
    return (
      <div key={image.id} className="poster_card card bg-dark text-white rounded-0">
        <img className="card-img" src={image.largeImageURL} alt={ image.tags}/>
        <div className="card-img-overlay">
          <h5 style={{color: props.color, fontFamily: props.font }} className="poster_quote card-title">{props.quote}</h5>
          {props.author && <p className="poster_author card-text font-weight-light font-italic align-middle">- {props.author}</p>}
        </div>
      </div>
    );
  }) }
  {console.log(props.font)};
  </div>

);

export default Posters;

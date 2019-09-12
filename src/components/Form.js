import React from 'react';

const Form = props => (
  <div className="form__div">
    <form onSubmit={props.getPosterData}>
      <input className="form__input" type="text" name="quote" placeholder="your quote"/>
      <input className="form__input"type="text" name="author" placeholder="author"/>
      <input className="form__input"type="text" name="imageQuery" placeholder="bg image"/>
      <button className="form__button">Create Posters</button>
    </form>
  </div>
);

export default Form;

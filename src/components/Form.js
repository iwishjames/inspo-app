import React from 'react';

const Form = props => (
  <form onSubmit={props.getPosterData}>
    <input type="text" name="quote" placeholder="your quote"/>
    <input type="text" name="author" placeholder="author"/>
    <input type="text" name="imageQuery" placeholder="background image"/>
    <button>Create Posters</button>
  </form>
);

export default Form;

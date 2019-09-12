import React from 'react';

const PosterForm = props => (
  <form onSubmit={props.getIndPosterData}>
    <input type="text" name="quote" placeholder="your quote"/>
    <input type="text" name="author" placeholder="author"/>
    <select name="font">
      <option value="Helvetica Neue">Helvetica Neue</option>
      <option value="Sans-Serif">Sans-serif</option>
      <option value="Monospace">Monospace</option>
      <option value="Cursive">Cursive</option>
      <option value="Fantasy">Fantasy</option>
      <option value="Roboto">Roboto</option>
    </select>
    <input type="color" name="color" />
    <input type="text" name="image" placeholder="background image"/>
    <button>Create Posters</button>
  </form>
);

export default PosterForm;

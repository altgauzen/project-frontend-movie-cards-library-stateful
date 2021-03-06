import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputStoryline from './InputStoryline';
import InputRating from './InputRating';
import InputSelect from './InputSelect';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //  funcao handleChange foi pega de https://pt-br.reactjs.org/docs/forms.html#gatsby-focus-wrapper

  //  handleChange generico, com o [name] ( ao usar os colchetes conseguimos pegar uma variavel e utilizar o valor dentro da variavel pra acessar as propriedades de um objeto)

  handleChange({ target }) {
    const { name, value } = target;
    //  const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  //  rever logica abaixo, pois nao entendi ainda, acompanhei raciocinio do Lucio.

  handleSubmit(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        {/*  Cheguei a isto sozinho, apenas vi dica do onChange com o Luiz Demenegi  */}
        <InputTitle title={ title } onChange={ this.handleChange } />
        <InputSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <InputImage imagePath={ imagePath } onChange={ this.handleChange } />
        <InputStoryline storyline={ storyline } onChange={ this.handleChange } />
        <InputRating rating={ rating } onChange={ this.handleChange } />
        <InputSelect genre={ genre } onChange={ this.handleChange } />
        <button
          type="submit"
          data-testid="send-button"
          onClick={ this.handleSubmit }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

/*  AddMovie.propTypes = {
  onClick: PropTypes.arrayOf(
    PropTypes.func,
  ).isRequired,
};  */

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;

import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

//  fiz alguns trechos deste codigo acompanhando a mentoria
//  coletiva Cajueiro e Nikolai.

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ data } />
      </div>
    );
  }
}

export default App;

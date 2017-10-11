import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import pokeball from './pokeball.png';
import Pokémon from './Pokémon.svg.png';
import axios from 'axios';
import api from '../api'



class App extends Component {
  
    constructor() {
      super();
      this.state = {
        pokemon: {},
        type: {}

      };
      this.handleOnClick = this.handleOnClick.bind(this);
    }
    handleOnClick(id) {
      console.log(id)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
          this.setState({pokemon: res.data})
        })
        .catch(err => console.log(err));
    }

    componentWillMount = () =>{
      axios.get('http://localhost:3005/api/pokedex')
      .then(response =>{
        this.setState({pokemon: response.data})
      })
    }


    render() {
      console.log(this.state.type)
      return (
        <div className="App">
          <PokeList handleOnClick={this.handleOnClick} />
          <DetailView pokemon={this.state.pokemon} />
          <img src={pokeball} className="pokeball" alt="pokeball" />
          <img src={Pokémon} className="Pokémon" alt="Pokémon" />
        </div>
      );
    }
  }
  
  
  export default App;
  
import React, { Component } from 'react'; 
import './App.css';
import GitList from './components/GitList';
import GitCard from './components/GitCard';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      followers: []
    }
    console.log('constructor works!')
  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/eiancarter`)
      .then(response => {
        this.setState({
          cards: response.data
        })
      })
      .catch(error => {
        console.log('nope!', error);
      });

    axios
    .get(`https://api.github.com/users/eiancarter/followers`)
    .then(response => {
      console.log(response)
      this.setState({
        followers: response.data
      });
    })
    .catch( error => {
      console.log('try again!', error);
    })
  }

  componentWillUnmount() {
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('update is woking!', prevState.cards, this.state.cards);
    console.log('followers is working!', this.state.followers);
  }

  render() {
    return (
      <div className="App">
        <GitCard cards={this.state.cards} />
        <GitList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;

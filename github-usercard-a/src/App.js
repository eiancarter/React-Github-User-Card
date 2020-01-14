import React, { Component } from 'react'; 
import './App.css';
import GitList from './components/GitList';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
    console.log('constructor works!')
  }

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.setState({
          cards: response.data
        })
      }
      .catch(error => {
        console.log('nope!', error);
      });
  }
  render() {
    return (
      <div className="App">
        <GitList />
      </div>
    );
  }
}

export default App;

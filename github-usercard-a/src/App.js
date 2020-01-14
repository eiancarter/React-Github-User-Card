import React, { Component } from 'react'; 
import './App.css';
import GitList from './components/GitList';



class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
    console.log('constructor works!')
  }

  componentDidMount(){
    this.setState({
      cards: data
    });
    console.log('component mounts!')
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

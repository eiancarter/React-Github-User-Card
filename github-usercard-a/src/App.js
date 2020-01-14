import React, { Component } from 'react'; 
import './App.css';
import GitList from './components/GitList';



class App extends Component {
  render() {
    return (
      <div className="App">
        <GitList />
      </div>
    );
  }
}

export default App;

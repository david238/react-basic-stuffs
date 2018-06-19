import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {

  state = { 
    username: 'Logan'
  }

  eventStateHandler = (event) => { 
    this.setState({
      username: event.target.value
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      color: 'black',
      font: 'inherit',
      padding: '8px',
    };

    return (
      <div className="App">
        <header 
          style= {style}
          className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserOutput username="David"/>
        <UserOutput username={this.state.username}/>
        <UserInput 
        username={this.state.username}
        changed={this.eventStateHandler}/>
      </div>
    );
  }
}

export default App;

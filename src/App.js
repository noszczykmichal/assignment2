import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'

class App extends Component{

  state={
    length: null
  }

  lenghtChangedHandler = event =>{
    const newLength = event.target.value.length;

    this.setState(
      {length: newLength}
    );
  }

 
 
  render(){
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.lenghtChangedHandler(event)}></input>
        <p>{this.state.length}</p>
        < Validation length={this.state.length}/>
      </div>
    );
  }
}

export default App;

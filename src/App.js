import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component{

  state={
    length: null,
    userInput: ''
  }

  lenghtChangedHandler = event =>{
    const newLength = event.target.value.length;

    this.setState(
      {length: newLength,
      userInput: event.target.value}
    );
  }

 
 
  render(){
    const charList=this.state.userInput.split('').map((ch, index)=>{
      return <Char character={ch} key={index}/>
    });
    
    return (
      <div className="App">
        <input type="text" onChange={(event) => this.lenghtChangedHandler(event)}></input>
        <p>{this.state.length}</p>
        < Validation length={this.state.length}/>
        {charList}
      </div>
    );
  }
}

export default App;

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

  deleteCharHandler = index =>{
    const text=this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText=text.join('');
    this.setState(
      {userInput: updatedText,
      length: updatedText.length})
  }

 
 
  render(){
    const charList=this.state.userInput.split('').map((ch, index)=>{
      return <Char 
      character={ch} 
      key={index} 
      clicked={()=>this.deleteCharHandler(index)}/>
    });
    


    return (
      <div className="App">
        <input type="text" value={this.state.userInput} onChange={(event) => this.lenghtChangedHandler(event)}></input>
        <p>{this.state.length}</p>
        < Validation length={this.state.length}/>
        {charList}
      </div>
    );
  }
}

export default App;

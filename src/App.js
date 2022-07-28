import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component  {
  constructor(){
   super()
   
   this.state = {
    isClicked: true, 
    inputValue: "",
    listOfTodos:[]
   }
  }
}

  handleClick = () => {
    this.state.isClicked ? 
      this.setState({isClicked : false}) :
        this.setState({isClicked : true})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos,this.state.inputValue]})
    this.setState({inputValue:""})
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <button type="submit">Submit Here</button>
        </form>
         <ol>{this.state.listOfTodos.map((todo,index) =>{
          return <li key={index}>{todo}</li>
         })}</ol>
      </div>
    );
  }


export default App;
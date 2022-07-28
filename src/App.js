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

  indexClick = (index) => {
    console.log("index",index);
    this.delete(index);
  }

  delete = (index) => {
    console.log("this will be deleted", index)
    const newTodos = [...this.state.listOfTodos]
    newTodos.splice(index,1);
    this.setState({listOfTodos: newTodos})

}

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <button type="submit">Submit Here</button>
        
        </form>
         <ol>{this.state.listOfTodos.map((todo,index) =>{
          return <li onClick={() => this.indexClick(index)}v key={index}>{todo}  </li>
         })}</ol>
         
      </div>
    );
  }
}


export default App;
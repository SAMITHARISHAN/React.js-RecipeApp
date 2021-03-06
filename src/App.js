import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import Recipes from "./components/Recipes";


const API_KEY = "7f45b68c69282a6a48094ad878685a41";

class App extends Component {

  state = {
    recipes: []
  }


  getRecipe = async (e) =>{

    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=15`);

    const data = await api_call.json();
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
       <Recipes recipe={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import '../css/App.css';
import LandingPage from './LandingPage.js'
import RecipePage from './RecipePage.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: 'home'
    }
  }

  updateState = (newState) => {
    this.setState({
      currentContent: newState
    })
  }

  currentContent = (props) => {
    if(props === 'home') {
      return  <LandingPage 
                viewRecipes={this.updateState}
              />
    } else if (props === 'recipeList') {
      return <RecipePage />
    }
  }
  
  render() {
    return (
      <>
        {this.currentContent(this.state.currentContent)}
      </>
    )
  }
}

export default App;

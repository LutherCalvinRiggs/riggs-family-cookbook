import React, { Component } from 'react';
import '../css/App.css';
import MobileAppNavigation from './MobileAppNavigation.js'
import LandingPage from './LandingPage.js'
import RecipePage from './RecipePage.js'
// import ShoppingList from './ShoppingList.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedContent: 'landingPage',
    }
  }

  updateDisplay = (newState) => {
    this.setState({
      displayedContent: newState
    })
  }

  displayedContent = (displayedContent) => {
    if(displayedContent === 'landingPage') {
      return  <LandingPage />
    } else if (displayedContent === 'recipeList') {
      return  <RecipePage />
    } // else if (props === 'shoppingList') { <ShoppingList />}
  }
  
  render() {
    return (
      <>
        <MobileAppNavigation showContent={this.updateDisplay}/>
        {this.displayedContent(this.state.displayedContent)}
      </>
    )
  }
}

export default App;

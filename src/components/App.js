import React, { Component } from 'react';
import '../css/App.css';
import NavMenu from './NavMenu.js';
import LandingPage from './LandingPage.js';
import Recipes from './Recipes.js';
// import ConversionModal from './ConversionModal.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appContent: 'landingPage',
      orderBy: 'recipeTitle', 
      /* options: recipeTitle, servingSize, totalTime, mealType */
      orderDir: 'asc',
      keywordText: ''
    }
    this.keywordSearch = this.keywordSearch.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
  }

  clearSearch = () => {
    this.setState({
      keywordText: ''
    })
  }

  keywordSearch = (keyword) => {
    this.setState({
      keywordText: keyword
    })
  }

  changeOrder = (newOrder, newDir) => {
    this.setState({
      orderBy: newOrder,
      orderDir: newDir
    })
  }
  
  updateAppState = (newState) => {
    this.setState({
      appContent: newState
    })
  }

  showAppContent = (appContent) => {
    if(appContent === 'landingPage') {
      return  <LandingPage />
    } 

    if (appContent === 'recipes') {
      return  <Recipes 
                orderBy = {this.state.orderBy}
                orderDir = {this.state.orderDir}
                keywordText = {this.state.keywordText}
                changeOrder = {this.changeOrder}
                searchList = {this.keywordSearch}
                clearSearch = {this.clearSearch}
              />
    }
  };
  
  render() {
    return (
      <>
        <NavMenu updateInterface={this.updateAppState}/>
        {/* <ConversionModal showModal={this.updateModalState}/> */}

        {/* Displays the current app content state */}
        {this.showAppContent(this.state.appContent)}
      </>
    )
  }
}

export default App;

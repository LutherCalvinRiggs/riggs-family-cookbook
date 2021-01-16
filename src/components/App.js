import React, { Component } from 'react';
import '../css/App.css';
import MobileAppNavigation from './MobileAppNavigation.js'
import LandingPage from './LandingPage.js'
import RecipePage from './RecipePage.js'
import ConversionTable from './ConversionTable.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedContent: 'landingPage',
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
  
  updateDisplay = (newState) => {
    this.setState({
      displayedContent: newState
    })
  }

  displayedContent = (displayedContent) => {
    if(displayedContent === 'landingPage') {
      return  <LandingPage />
    } else if (displayedContent === 'recipeList') {
      return  <RecipePage 
                orderBy = {this.state.orderBy}
                orderDir = {this.state.orderDir}
                keywordText = {this.state.keywordText}
                changeOrder = {this.changeOrder}
                searchList = {this.keywordSearch}
                clearSearch = {this.clearSearch}
              />
    } else if (displayedContent === 'conversionTable') { 
      return <ConversionTable />
    }
  };
  
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

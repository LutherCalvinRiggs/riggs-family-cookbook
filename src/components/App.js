import React, { Component } from 'react';
import '../css/App.css';
import NavMenu from './NavMenu.js';
import LandingPage from './LandingPage.js';
import Recipes from './Recipes.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appContent: 'landingPage',
    }
    this.updateAppState = this.updateAppState.bind(this);
  }

  
  updateAppState(newState) {
    this.setState({
      appContent: newState
    })
  }

  showAppContent(appContent) {
    if(appContent === 'landingPage') {
      return  <LandingPage />
    } 

    if (appContent === 'recipes') {
      return  <Recipes />
    }
  }
  
  render() {
    return (
      <>
        {/* Displays the current app content state */}
        {this.showAppContent(this.state.appContent)}

        <NavMenu updateInterface={this.updateAppState}/>
        {/* <ConversionModal showModal={this.updateModalState}/> */}
      </>
    )
  }
}

export default App;

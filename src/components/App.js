import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../css/App.css';
import NavMenu from './NavMenu.js';
import LandingPage from './LandingPage.js';
import Recipes from './Recipes.js';
// import SearchComponent from './SearchComponent.js'
// import ConversionModal from './ConversionModal.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      appContent: 'landingPage',
      // orderBy: 'recipeTitle', 
        /* options: recipeTitle, servingSize, totalTime, mealType */
      // orderDir: 'asc',
      // keywordText: ''
    }
    // this.clearSearch = this.clearSearch.bind(this); 
    // this.keywordTextUpdate = this.keywordTextUpdate.bind(this); 
    // this.changeOrder = this.changeOrder.bind(this);
    this.updateAppState = this.updateAppState.bind(this);
    // this.showAppContent = this.showAppContent.bind(this);
  }

  // clearSearch() {
  //   this.setState({
  //     keywordText: ''
  //   })
  // }

  // keywordTextUpdate(searchInput) {
  //   let newKeyword = searchInput.toLowerCase()
  //   this.setState({
  //     keywordText: newKeyword
  //   })
  // }

  // changeOrder(newOrder, newDir) {
  //   this.setState({
  //     orderBy: newOrder,
  //     orderDir: newDir
  //   })
  // }
  
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
      return  <Recipes 
                // orderBy = {this.state.orderBy}
                // orderDir = {this.state.orderDir}
                // keywordText = {this.state.keywordText}
                // changeOrder = {this.changeOrder}
                // searchList = {this.keywordTextUpdate}
                // clearSearch = {this.clearSearch}
              />
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
// App.propTypes = {
//   orderBy: PropTypes.string.isRequired,
//   orderDir: PropTypes.string.isRequired,
//   keywordText: PropTypes.string.isRequired,
//   changeOrder: PropTypes.func.isRequired,
//   searchList: PropTypes.string.isRequired,
//   clearSearch: PropTypes.func.isRequired,
// }

export default App;

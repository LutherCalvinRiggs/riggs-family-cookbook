import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fullRecipeListArray } from './fullRecipeListArray.js'
import SearchComponent from './SearchComponent.js'
import '../css/Recipes.css';

class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeListArray: fullRecipeListArray,
      orderBy: 'recipeTitle', 
      /* orderBy options: recipeTitle, servingSize, totalTime, mealType */
      orderDir: 'asc',
      keywordText: ''
    }
    this.updateKeyword = this.updateKeyword.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  updateKeyword(keyword) {
    let scrubbedKeyword = keyword.toLowerCase()
    this.setState({
      keywordText: scrubbedKeyword
    })
  }

  changeOrder(newOrder, newDir) {
    this.setState({
      orderBy: newOrder,
      orderDir: newDir
    })
  }

  clearSearch() {
    this.setState({
      keywordText: ''
    })
  }

  

  render() {

    let order;
    let allRecipes = this.state.recipeListArray;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    let filteredRecipes = allRecipes.filter((recipeToFilter) => {
      return (
        recipeToFilter.keywords.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.recipeTitle.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.servingSize.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.totalTime.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.mealType.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.protein.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.cuisine.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.season.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.dishType.toLowerCase().includes(this.state.keywordText) ||
        // recipeToFilter.favorite.toLowerCase().includes(this.state.keywordText) ||
        // recipeToFilter.comfortFood.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.cookbookTitle.toLowerCase().includes(this.state.keywordText) ||
        recipeToFilter.cookbookAuthor.toLowerCase().includes(this.state.keywordText)
      )
    });

    let sortedRecipes = filteredRecipes.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    })
    
    

    return (
      <div 
        id="recipe-page"
        className="background-white background-image-center-fixed-bottom flex-column align-center"
      >

        <SearchComponent 
          orderBy = {this.state.orderBy}
          orderDir = {this.state.orderDir}
          keywordText = {this.state.keywordText}
          searchForKeyword = {this.updateKeyword}
          changeOrder = {this.changeOrder}
          clearSearch = {this.clearSearch}
        />
        <RecipeList 
          recipesToDisplay = {sortedRecipes}
        />
      </div>
    )
  }
}

  function RecipeImage(props) {
    return(
      <img
        className="recipe-image"
        src={props.imageInfo.recipeImage}
        alt={props.imageInfo.recipeTitle}
      ></img>
    )
  }
  RecipeImage.propTypes = {
    imageInfo: PropTypes.object.isRequired
  }

  function RecipeList({ recipesToDisplay }) {
    return (
      <div id="recipe-list">
        
        {recipesToDisplay.map((recipe) => (
          <article key={recipe.recipeNumber} className="recipe">
            
            {/* {recipe.recipeImage ? <RecipeImage imageInfo={recipe.recipeImage}/> : ""} */}

            <div className="recipe-header text-center">
              <h2 className="recipe-title font-bold">
                {recipe.recipeTitle}
              </h2>
              <p className="serving-size">
                Serves {recipe.servingSize}
              </p>
              <p className="total-time">
                Total time: {recipe.totalTime}
              </p>
              <p className="recipe-backstory text-justify font-normal">
                {recipe.recipeBackstory}
              </p>
            </div>

            <div className="ingredient-list">
              <h3 className="ingredient-header text-center font-bold">
                Ingredient List
              </h3>
              
              {recipe.recipeIngredientList.map((ingredient) => (
                <div key={ingredient.ingredientNumber} className="ingredient flex-row justify-center text-uppercase">

                  <div className="ingredient-quantity-container">
                    <p className="ingredient-amount text-right">
                      {ingredient.amount}
                    </p>
                  </div>

                  <div className="ingredient-item-container text-left">
                    <p className="ingredient-item">
                      {ingredient.ingredient}
                      {(ingredient.preparation ? `, ${ingredient.preparation}` : '')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="recipe-directions text-justify">
              <h3 className="directions-header text-center font-bold">
                Directions
              </h3>

              {recipe.recipeDirections.map((step) => (
                <p key={step.stepNumber} className="direction">
                  {step.direction}
                </p>
              ))}
            </div>
            
          </article>
        ))}

      </div>
    )
  }
  RecipeList.propTypes = {
    recipesToDisplay: PropTypes.array.isRequired
  }

export default Recipes
import React, { Component } from 'react';
import { fullRecipeListArray } from './fullRecipeListArray.js'
import SearchComponent from './SearchComponent.js'
import '../css/RecipePage.css';

class RecipePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullList: fullRecipeListArray,
      orderBy: 'mealType', 
      /* options: mealType, totalTime, servingSize, alphabetical */
      orderDir: 'asc',
      keywordText: ''
    }
    this.keywordSearch = this.keywordSearch.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
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

  render() {

    let order;
    let filteredList = this.state.fullList;

    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredList = filteredList.sort((a,b) => {
      if (a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
      ) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter((eachItem) => {
      return (
        eachItem['keywords']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['recipeTitle']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['servingSize']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['totalTime']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['mealType']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        // eachItem['recipeIngredientList']
        // .toLowerCase()
        // .includes(this.state.keywordText.toLowerCase()) ||
        // eachItem['recipeDirections']
        // .toLowerCase()
        // .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['cookbookTitle']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase()) ||
        eachItem['cookbookAuthor']
        .toLowerCase()
        .includes(this.state.keywordText.toLowerCase())
      )
    })

    return (
      <div 
        id="recipe-page"
        className="background-white background-image-center-fixed-bottom"
      >
        <SearchComponent 
          orderBy = {this.state.orderBy}
          orderDir = {this.state.orderDir}
          changeOrder = {this.changeOrder}
          searchList = {this.keywordSearch}
        />
        <RecipeList 
          recipeList = {filteredList}
        />
      </div>
    )
  }
}

  const RecipeImage = (props) => {
    return(
      <img
        className="recipe-image"
        src={props.imageInfo.recipeImage}
        alt={props.imageInfo.recipeTitle}
      ></img>
    )
  }

  const RecipeList = (props) => {
    console.log(props.recipeList)
    return (
      <div id="recipe-list">
        {props.recipeList.map((item) => (
          <article 
            key={item.recipeNumber} 
            className="recipe"
          >
            {item.recipeImage ? <RecipeImage imageInfo={item}/> : ""}
            <div className="recipe-header text-center">
              <h2
                className="recipe-title font-bold"
              >
                {item.recipeTitle}
              </h2>
              <p
                className="serving-size"
              >
                Serves {item.servingSize}
              </p>
              <p
                className="total-time"
              >
                Total time: {item.totalTime}
              </p>
              <p 
                className="recipe-backstory text-justify font-normal"
              >
                {item.recipeBackstory}
              </p>
            </div>
            <div
              className="ingredient-list"
            >
              {item.recipeIngredientList.map((item) => (
                
                
                <div
                  key={item.ingredientNumber}
                  className="ingredient flex-row text-center"
                >

                  <div 
                    className="ingredient-quantity-container"
                  >
                    <p
                      className="ingredient-amount text-right"
                    >
                      {item.amount}
                    </p>
                  </div>

                  <div
                    className="ingredient-item-container"
                  >

                    <p
                      className="ingredient-item"
                    >
                      {item.ingredient}, {item.preparation}
                    </p>
                    {/* <p
                      className="ingredient-preperation"
                    >
                      
                    </p> */}

                  </div>
                </div>


              ))}
            </div>
            <div
              className="recipe-directions"
            >
              {item.recipeDirections.map((item) => (
                <p
                  key={item.stepNumber}
                  className="directionn"
                >
                  {item.direction}
                </p>
              ))}
            </div>
            
          </article>
        ))}
      </div>
    )
  }

export default RecipePage
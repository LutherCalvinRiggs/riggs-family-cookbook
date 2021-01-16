import React from 'react';
import '../css/MobileAppNavigation.css';

const MobileAppNavigation = (props) => {
  return (
    <div 
      id="nav-bar"
      className="full-width flex-row justify-even fixed-pos bottom-edge background-white"
    >
      {/* <UserAccount 
        showContent={props.showContent}
      /> */}
      <RecipeIcon 
        showContent={props.showContent}
      />
      <ConversionIcon 
        showContent={props.showContent}
      />
      {/* <ShoppingListIcon 
        showContent={props.showContent}
      /> */}
    </div>
  )
}

  const UserAccount = (props) => {
    return (
      <img 
        id="user-account-icon"
        className="nav-icon"
        src="./images/chef-hat-icon-48.png"
        alt="User Acct"
        onClick={() => props.showContent('userAccount')}
      />
    )
  }

  const RecipeIcon = (props) => {
    return (
      <img 
        id="recipe-list-icon"
        className="nav-icon"
        src="./images/recipe-book-icon-48.png"
        alt="Recipe List"
        onClick={() => props.showContent('recipeList')}
      />
    )
  }

  const ConversionIcon = (props) => {
    return (
      <img 
        id="recipe-list-icon"
        className="nav-icon"
        src="./images/measuring-cup-icon-48.png"
        alt="Conversion Tab"
        onClick={() => props.showContent('conversionTable')}
      />
    )
  }
  
  const ShoppingListIcon = (props) => {
    return (
      <img 
        id="shopping-list-icon"
        className="nav-icon"
        src="./images/shopping-cart-icon-48.png"
        alt="Shopping List"
        onClick={() => props.showContent('shoppingList')}
      />
    )
  }

export default MobileAppNavigation
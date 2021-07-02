import React from 'react';
import PropTypes from 'prop-types';
import '../css/NavMenu.css';

function NavButton({ buttonID, imageSrc, altText, showContent }) {
  return <img 
          id={buttonID+"-button"}
          className="nav-icon"
          src={imageSrc}
          alt={altText}
          onClick={() => showContent(buttonID)} />
}
NavButton.propTypes = {
  buttonID: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  showContent: PropTypes.function.isRequired
}

function NavMenu() {
  return (
    <div 
      id="nav-bar"
      className="full-width flex-row justify-even fixed-pos bottom-edge background-white"
    >
      <NavButton 
        buttonID="user-account"
        imageSrc="./images/chef-hat-icon-48.png"
        altText="User Profile"
      />
      <NavButton 
        buttonID="recipes"
        imageSrc="./images/recipe-book-icon-48.png"
        altText="Recipe List"
      />
      <NavButton 
        buttonID="conversion-table"
        imageSrc="./images/measuring-cup-icon-48.png"
        altText="Conversion Table"
      />
      <NavButton 
        buttonID="shopping-cart"
        imageSrc="./images/shopping-cart-icon-48.png"
        altText="Shopping Cart"
      />
      {/* <RecipeButton 
        showContent={updateInterface}
      />
      <ConversionButtonn 
        showContent={updateInterface}
      />
      <ShoppingListButton 
        showContent={updateInterface}
      /> */}
    </div>
  )
}


//   const UserAccountButton = ({ showContent }) => {
//     return (
//       // <i className="far fa-user"></i>
//       <img 
//         id="user-account-icon"
//         className="nav-icon"
//         src="./images/chef-hat-icon-48.png"
//         alt="User Acct"
//         onClick={() => showContent('UserAccountButton')}
//       />
//     )
//   }

//   const RecipeButton = ({ showContent }) => {
//     return (
//       // <i class="fas fa-book-open"></i>
//       <img 
//         id="recipe-list-icon"
//         className="nav-icon"
//         src="./images/recipe-book-icon-48.png"
//         alt="Recipe List"
//         onClick={() => showContent('recipeList')}
//       />
//     )
//   }

//   const ConversionButtonn = ({ showContent }) => {
//     return (
//       <img 
//         id="conversion-table-icon"
//         className="nav-icon"
//         src="./images/measuring-cup-icon-48.png"
//         alt="Conversion Table"
//         onClick={() => showContent('conversionTable')}
//       />
//     )
//   }
  
//   const ShoppingListButton = ({ showContent }) => {
//     return (
//       // <i class="fas fa-shopping-basket"></i>
//       <img 
//         id="shopping-list-icon"
//         className="nav-icon"
//         src="./images/shopping-cart-icon-48.png"
//         alt="Shopping List"
//         onClick={() => showContent('shoppingList')}
//       />
//     )
//   }

export default NavMenu
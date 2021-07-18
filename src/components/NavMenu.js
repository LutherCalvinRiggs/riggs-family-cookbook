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
  showContent: PropTypes.func.isRequired
}

function NavMenu({ updateInterface }) {
  return (
    <div 
      id="nav-bar"
      className="full-width flex-row justify-even fixed-pos bottom-edge background-white"
    >
      <NavButton 
        buttonID="user-account"
        imageSrc="./images/chef-hat-icon-48.png"
        altText="User Profile"
        showContent={updateInterface}
      />
      <NavButton 
        buttonID="recipes"
        imageSrc="./images/recipe-book-icon-48.png"
        altText="Recipe List"
        showContent={updateInterface}
      />
      <NavButton 
        buttonID="conversion-table"
        imageSrc="./images/measuring-cup-icon-48.png"
        altText="Conversion Table"
        showContent={updateInterface}
      />
      <NavButton 
        buttonID="shopping-cart"
        imageSrc="./images/shopping-cart-icon-48.png"
        altText="Shopping Cart"
        showContent={updateInterface}
      />
    </div>
  )
}
NavMenu.propTypes = {
  updateInterface: PropTypes.func.isRequired
}

export default NavMenu
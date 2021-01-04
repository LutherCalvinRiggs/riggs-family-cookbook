import React from 'react';
import '../css/LandingPage.css';

const LandingPage = (props) => {
  return (
    <div 
      id="landing-page"
      className="flex-column background-navy text-white background-image-center-fixed-bottom"
    >
      <div className="page-content">
        <LandingPageHeader />
        <Greeting />
      </div>
    </div>
  )
}

const LandingPageHeader = (props) => {
  return (
    <h1 
      id="landing-page-header"
      className="text-center text-uppercase"
    >
      <span 
        id="landing-header-top"
        className="block-display"
      >
        The
      </span>
      <span 
        id="riggs"
        className="text-capitalize">
          Riggs
      </span>
      <span 
        id="landing-header-middle"
        className="block-display"
      >
        Family
      </span>
      <span 
        id="landing-header-bottom"
        className="block-display"
      >
        Cookbook
      </span>
    </h1>
  )
}

const Greeting = () => {
  return (
    <div 
      id="greeting"
      className="white-text"
    >
      <p id="welcome" className="greeting-message text-center">
        Welcome!
      </p>
      <p className="greeting-message">
        What follows is a collection of recipes that our family has enjoyed through the years and that we would like to share with all of you. They range from quick and easy to complex and elegant, but you don't need to be a master chef to recreate any of these flavorful dishes. 
      </p>
      <p className="greeting-message">
        With that said, dawn your apron, pour a glass of wine and let's get cooking!
      </p>
    </div>
  )
}



export default LandingPage
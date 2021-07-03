import React from 'react';
import '../css/LandingPage.css';

const LandingPage = () => {
  return (
    <div 
      id="landing-page"
      className="flex-column background-navy text-white background-image-center-fixed-bottom"
    >
      <div className="landing-page">
        <LandingLogo />
        <Greeting />
      </div>
    </div>
  )
}

const LandingLogo = () => {
  return (
    <img src="landing-logo.png" 
         alt="Riggs Family Recipes" 
         className="landing-logo"
    />
  )
}

const Greeting = () => {
  return (
    <div id="greeting">
      <p className="welcome">
        Welcome!
      </p>
      <p>
        What follows is a collection of recipes that our family has enjoyed through the years and that we would like to share with all of you. They range from quick and simple to complex and elegant, but you don&apos;t need to be a master chef to recreate any of these delisious meals! 
      </p>
      <p>
        Click the open book icon in the navigation bar below to begin viewing the recipes. Scroll down to see the ingredient list and cooking instruction. More recipes can be viewed by swiping left and right in the viewing window. 
      </p>
      <p>
        Should you need to convert a measurement, weight, temperature, or anything else, simply click the measuring cup icon in the navigation bar to access the built in conversion table menu.  
      </p>
      <p>
        Thank you for visiting our family&apos;s recipe book and we&apos;re confident that you and your loved ones will enjoy the culinary journey that awaits!
      </p>
      <p className="sign-off">
        Bon apetit!
      </p>
    </div>
  )
}

export default LandingPage
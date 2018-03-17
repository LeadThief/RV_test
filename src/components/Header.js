import React from 'react';

const Header = (props) => {
    return (
      <div>
        <nav className="navbar navbar-default topNav">
          <div className="container-fluid container">
            <div id="navbarTop" className="navbar-collapse collapse navbar-right">
              <ul className="nav navbar-nav">
                <li><a href="LinkToCome">Dealers and Distributors</a></li>
                <li><a className="commSer" href="LinkToCome">Commercial Services</a></li>
                <li><a href="LinkToCome"><img className="shareIcon" src="./images/action-commercial-icon.png" alt="Action Icon"/></a></li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-default BotNav">
          <div className="container-fluid container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <img src="./images/menu-icon-mobile.png" alt="Mobile Menu Icon"/>
              </button>
              <a className="navbar-brand tagline" href="/"><img src={props.tagline} alt="Pool Pros"/></a>
              <div className="findAProMobile hiddenLarge"><a href="LinkToCome"><img className="locationIcon" src="./images/location-icon.png" alt="Location Icon"/>Find a Pool Pro</a></div>
            </div>
            <div id="navbar" className="navbar-collapse collapse navbar-right">
              <ul className="nav navbar-nav">
                <li className="hiddenLarge"><h2>Menu</h2></li>
                <li><a href="LinkToCome">Pools & Spas<img className="mobileArrow hiddenLarge" src="./images/next-arrow.png" alt="Next arrow"/></a></li>
                <li><a href="LinkToCome">Supplies<img className="mobileArrow hiddenLarge" src="./images/next-arrow.png" alt="Next arrow"/></a></li>
                <li><a href="LinkToCome">Resources<img className="mobileArrow hiddenLarge" src="./images/next-arrow.png" alt="Next arrow"/></a></li>
                <li><a href="LinkToCome">Services<img className="mobileArrow hiddenLarge" src="./images/next-arrow.png" alt="Next arrow"/></a></li>
                <li className="findAPro hiddenSmall"><a href="LinkToCome"><img className="locationIcon" src="./images/location-icon.png" alt="Location Icon"/>Find a Pool Pro</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Header;

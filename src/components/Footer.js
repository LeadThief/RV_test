import React from 'react';

const Footer = (props) => {
    return (
      <div className="poolFooter">
        <div className="topFooter">
          <a href="/"><img className="logoFooterImg" src={props.tagline} alt=""/></a>
          <ul className="socialLinks">
            <li className="connect">Connect with us</li>
            <li><a href="LinkToCome" target="_blank"><img src="./images/twitter-icon_la.png" alt="Twitter"/></a></li>
            <li><a href="LinkToCome" target="_blank"><img src="./images/facebook-icon_la.png" alt="Facebook"/></a></li>
            <li><a href="LinkToCome" target="_blank"><img src="./images/youtube-icon_la.png" alt="Youtube"/></a></li>
          </ul>
        </div>
        <div className="MobilebotFooter">
          <ul className="MobilefootLinks">
            <li><a href="LinkToCome">Dealers and Distributors</a></li>
            <li>|</li>
            <li><a href="LinkToCome">Commercial Services</a></li>
            <li><a href="LinkToCome"><img className="shareIcon" src="./images/action-commercial-icon.png" alt="Action Icon"/></a></li>
          </ul>
        </div>
        <div className="botFooter">
          <ul className="footLinks">
            <li>&copy; 2017 Pool Pros</li>
            <li>|</li>
            <li><a href="LinkToCome">Privacy Policy</a></li>
            <li>|</li>
            <li><a href="LinkToCome">Tearms and Conditions</a></li>
          </ul>
      </div>  
     </div>
    )
}

export default Footer;
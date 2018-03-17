import React from 'react';
import Header from './Header';
import Bubble from './Bubble';
import NotFoundCon from './notFoundCon';
import Footer from './Footer';



class NotFound extends React.Component {

  render() {
    return (
      <div id="NfPage">
        <div className="menu">
          <Header tagline="./images/pool-pros-logo_la.png"/>
          <Bubble />
          <NotFoundCon />
          <Footer tagline="./images/pool-pros-logo-footer_la.png" />
        </div>
      </div>
    )
  }
}

export default NotFound;
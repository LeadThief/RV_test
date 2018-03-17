import React from 'react';
import Header from './Header';
import Bubble from './Bubble';
import Dealers from './Dealers'
import Footer from './Footer';



class App extends React.Component {

  render() {
    return (
      <div id="appPage" className="SeaKeys">
        <div className="menu">
          <Header tagline="./images/pool-pros-logo_la.png"/>
          <Bubble />
          <Dealers />
          <Footer tagline="./images/pool-pros-logo-footer_la.png" />
        </div>
      </div>
    )
  }
}

export default App;

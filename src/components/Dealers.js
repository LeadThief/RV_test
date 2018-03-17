import React from 'react';
import DealersData from '../dealers.json';
import Popup from './Popup';

class Dealers extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      dealers: DealersData
    };
  }

  render() {
    const gallery = [];
    gallery.push(this.state.dealers);

    let workHours = (el) => ( el ) ? el : "CLOSED"; 
    return (
      <div className="container dealers">
       <div className="filterDiv col-md-12">
        <div className="col-md-3 col-xs-5">
          <p className="results">7 dealers in 28226</p>
        </div>
        <div className="col-md-9 col-xs-7 filterResults">
          <span className="hiddenSmall">Filter Results</span>
          <form>
            <ul id="filterControls">
              <li><input type="checkbox" name="Service" value="service"/><label htmlFor="Service">Service</label></li>
              <li><input type="checkbox" name="Installation" value="installation"/> <label htmlFor="Installation">Installation</label></li>
              <li><input type="checkbox" name="Residential" value="residential"/> <label htmlFor="Residential">Residential</label></li>
              <li><input type="checkbox" name="Commercial" value="commercial"/> <label htmlFor="Commercial">Commercial</label></li>
              <li><a href="LinkToCome"><img className="toolTip" src="./images/tool-tip-icon-filtering.png" alt="Tool tip"/></a></li>
            </ul>
            <div className="dropdown">
              <button className="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Filter Result
              <span className="caret"></span></button>
              <ul id="filterControls1" className="dropdown-menu" role="menu" aria-labelledby="menu1">
                <li><input type="checkbox" name="Service" value="service"/><label htmlFor="Service">Service</label></li>
                <li><input type="checkbox" name="Installation" value="installation"/> <label htmlFor="Installation">Installation</label></li>
                <li><input type="checkbox" name="Residential" value="residential"/> <label htmlFor="Residential">Residential</label></li>
                <li><input type="checkbox" name="Commercial" value="commercial"/> <label htmlFor="Commercial">Commercial</label></li>
                <li><a className="toolTipA" href="LinkToCome"><img className="toolTip" src="./images/tool-tip-icon-filtering.png" alt="Tool tip"/></a></li>
              </ul>
            </div>  
          </form> 
        </div> 
       </div>
        <div className="filterResultsContainer col-md-12">
          {
            gallery[0].dealers.map((item,i) =>
              <div key={i} className={`col-md-4 ${gallery[0].dealers[i].data.certifications.map((item,i) =>`Service-${item}`)}`}> 
                <h2>{gallery[0].dealers[i].data.name}</h2>
                  <div className="col-md-12 tapToCall">
                  <a className="phoneLink" href={`tel:${gallery[0].dealers[i].data.phone1}`}><h3>
                      <img className="phoneIcon" src="./images/phone-icon-desktop.png" alt="Phone Icon"/>
                      <img className="MobilephoneIcon" src="./images/phone-icon-mobile.png" alt="Phone Icon"/>
                      <span>Tap to call</span>
                      {gallery[0].dealers[i].data.phone1}
                    </h3></a>
                  </div>
                <p className="cantTalk"><i>Can't talk now? Click below to send an email.</i></p>
                <div className="contactAPro">
                  <a href={`#pop${gallery[0].dealers[i].data.companyID}`}><img className="emailIcon" src="./images/email_icon_vector.png" alt="Location Icon"/>Contact this Pro</a>
                </div>
                <div className="hours">
                  <h4>Business Hours</h4>
                  <p>Weekdays {gallery[0].dealers[i].data.weekHours.mon}</p>
                  <p>Saturdays {workHours( gallery[0].dealers[i].data.weekHours.sat )}</p>
                  <p>Sundays - {workHours( gallery[0].dealers[i].data.weekHours.sun )}</p>
                </div>
                <div className="services col-md-12">
                  <div className="col-md-12">{gallery[0].dealers[i].data.certifications.map((item,i) =><div key={i} className={`col-md-6 col-xs-6 serve-${item}`}>{item}</div>)}</div>
                </div>
                <Popup name={gallery[0].dealers[i].data.name} id={gallery[0].dealers[i].data.companyID} city={gallery[0].dealers[i].data.city} />
              </div>
            )
          }
        </div> 
      </div>
    )
  }
}

export default Dealers;
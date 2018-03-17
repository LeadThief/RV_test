import React from 'react';
import FormErrors from './formErrors';


var Popup = React.createClass( {

  getInitialState: function () {
    return {
      selectedOption: 'option1',
      name: '',
      phone: '',
      email: '',
      nameValid: false,
      nameError: false,
      phoneValid: false,
      phoneError: false,
      emailValid: false,
      emailError: false,
      circle1: "circle-form.png",
      circle2: "circle-form.png",
      circle3: "circle-form.png",
      formValid: false 
    };
  },

  handleOptionChange: function (e) {
    this.setState({
      selectedOption: e.target.value
    });
  },

  handleNameChange: function (e) {
    this.setState({name: e.target.value});
    e.target.value.length >= 1 
      ? this.setState({nameValid: true,circle1: 'checkmark-circle.png', nameError: false}) 
      : this.setState({nameValid: false,circle1: 'circle-form.png', nameError: true});
  },

  handlePhoneChange: function (e) {
    this.setState({phone: e.target.value});
    e.target.value.length >= 1 && e.target.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)
      ? this.setState({phoneValid: true,circle2: 'checkmark-circle.png', phoneError: false}) 
      : this.setState({phoneValid: false,circle2: 'circle-form.png', phoneError: true});
  },

  handleEmailChange: function (e) {
    this.setState({email: e.target.value});
    e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      ? this.setState({emailValid: true,circle3: 'checkmark-circle.png', emailError: false}) 
      : this.setState({emailValid: false,circle3: 'circle-form.png', emailError: true});
  },

  validateForm: function (e) {
    e.preventDefault();
    if(this.state.nameValid && this.state.phoneValid && this.state.emailValid){
      alert("Email Sent!")
    } else {
      alert("Email Not Sent!")
    }
  },

 
  render() {
    
    return (
      
      <div id={`pop${this.props.id}`} className="overlay">
        <div className="popup">
          <a className="close" href="#">&times;</a>
          <div className="content">
            <div className="head">
              <h3>Email</h3>
              <h2>{this.props.name}</h2>
            </div>
            <div className="col-md-12 poolForm">
            <p>Fill out the form below and {this.props.name} of {this.props.city} will get in touch.</p>
              <form className="form-horizontal col-md-12">
                <div className="form-group col-md-12">
                  <label htmlFor="inputFirstLast1" className="control-label col-md-10 col-xs-10">First and last name</label>
                  <div className="formCircle col-md-2 col-xs-2"><img src={`./images/${this.state.circle1}`} alt="circle validator"/></div>
                  <input type="text" className="form-control" id="inputFirstLast" value={this.state.name} onChange={this.handleNameChange}/>
                  <FormErrors className={this.state.nameError} title="name"/>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputPhone2" className="control-label col-md-10 col-xs-10">Phone</label>
                  <div className="formCircle col-md-2 col-xs-2"><img src={`./images/${this.state.circle2}`} alt="circle validator"/></div>
                  <input type="Phone" className="form-control" id="inputPhone2" value={this.state.phone} onChange={this.handlePhoneChange}/>
                  <FormErrors className={this.state.phoneError} title="phone number" />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputEmail3" className="control-label col-md-10 col-xs-10">Email</label>
                  <div className="formCircle col-md-2 col-xs-2"><img src={`./images/${this.state.circle3}`} alt="circle validator"/></div>
                  <input type="email" className="form-control" id="inputEmail3" value={this.state.email} onChange={this.handleEmailChange}/>
                  <FormErrors className={this.state.emailError} title="email" />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="comment" className="control-label col-md-10 col-xs-10">Comment:</label>
                  <div className="formCircle col-md-2 col-xs-2"><i>Optional</i></div>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <div className="form-group col-md-12">
                  <div className="col-sm-12 PoolQuestion">
                    <p className="col-md-10">Do you currently own a pool or spa?</p>
                    <p className="formCircle col-md-2 hiddenSmall"><i>Optional</i></p>
                    <label className={`poolInput ${this.state.selectedOption === 'yes'}`}>
                      <input type="radio" value="yes" checked={this.state.selectedOption === 'yes'} onChange={this.handleOptionChange} />
                      Yes
                    </label>
                    <label className={`poolInput ${this.state.selectedOption === 'no'}`}>
                      <input type="radio" value="no" checked={this.state.selectedOption === 'no'} onChange={this.handleOptionChange}/>
                      No
                    </label>
                  </div>
                </div>
                <div className="form-group col-md-12">
                  <div className="btnDiv">
                    <button type="submit" className="btn subBtn hiddenSmall" onClick={this.validateForm}>Send My Email <img src="./images/next-arrow.png" alt="Next arrow"/></button>
                    <button type="submit" className="btn subBtn mobileSend hiddenLarge" onClick={this.validateForm}>Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="lorem col-md-12">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Popup;
import React from 'react';

class formErrors extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      error: false
    };
  }

  render() { 
    return (
      <div className={`formErrors ${this.props.className}`}>
        <p>Please enter a valid {this.props.title}</p>
     </div>
    )
  }
}

export default formErrors;
import React, { Component } from "react";
import PropTypes from "prop-types";



class Contact extends Component {
  // set current state
  state = { showing: false, text: "View", disabled : false};
  // initalize "changeText" function
  changeText = (text) => {
  
    this.setState({ text }); 
  }
  render() {
    const { name, email, phone, website} = this.props;
    const { showing } = this.state;
    const { text } = this.state;
    

    return (
      <div className="card card-body mb-3" style={{height: "80px"}}>
        <div class="row">
          <div class="col-md-4">
            <h4>{name}</h4>
          </div>
          <div class="col-md-3">
            <p>Phone: {phone}</p>
          </div>
          <div class="col-md-1">
            {/* click button to show info and disable button */}
            <button class="btn btn-primary btn-sm" onClick={() => {this.setState({ showing: true, disabled : true});this.changeText("Info")} }>{text}</button>
          </div>
          <div class="col-md-4" id="info">
            {/* click text to hide info and reenable button */}
            { showing 
                    ? <div onClick={() => {this.setState({showing: false});this.changeText("View")} }>Email: {email} <br></br> Website: {website}</div>
                    : null
                }
          </div>

        </div>
      </div>
    );
  }
}


Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Contact;
